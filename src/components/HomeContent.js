import React, { useEffect, useState } from 'react';
import API from '../api/request';
import WeekWeather from './WeekWeather';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { listState } from '../store/atom';

const UnixToTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const WeekDay = ['일', '월', '화', '수', '목', '금', '토'];
  const day = `${date.getMonth() + 1}/${date.getDate()}(${WeekDay[date.getDay()]})`;

  return day;
};

const HomeContent = ({ history }) => {
  const [dailyWeather, setDailyWeather] = useState([]);
  // const [content, setContent] = useState([]);
  // const content = useRecoilValue(listState);
  const [content, setContent] = useRecoilState(listState);
  const [checked, setChecked] = useState(null);

  const getData = async () => {
    const data = await API.getWeather();
    let array = [];

    data.data.daily.forEach((e) => {
      const items = {
        id: e.dt,
        date: UnixToTimeStamp(e.dt),
        icon: e.weather[0].icon,
        temperature: e.temp.day,
      };
      array.push(items);
    });
    setDailyWeather(array);
  };

  const handleClick = (e) => {
    setContent(
      content.map((item) => (item.id === e.id ? { ...item, ['checked']: !e.checked } : item))
    );

    // content.filter(item=>{
    //   if (item.id === e.id) {
    //     return !item.checked
    //   }
    // setContent({ ...content, [e.checked]: !e.checked });
    // setChecked('line-through');
  };

  const hadnleDelete = (id) => {
    setContent(content.filter((item) => item.id !== id));
  };

  const handleEdit = (e) => {
    // history.push('/edit');
    history.push({
      pathname: '/edit',
      state: e,
      detail: 'update',
    });
  };

  useEffect(() => {
    console.log(content);
    getData();
  }, []);

  return (
    <div>
      <div className='weather_content'>
        <h2>이번주 날씨</h2>
        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <ScrollContainer>
            <div style={{ display: 'flex' }}>
              {dailyWeather.map((e) => (
                <WeekWeather key={e.id} date={e.date} icon={e.icon} temperature={e.temperature} />
              ))}
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className='to_do_content' style={{ marginTop: '30px' }}>
        <h2>이번주 To-Do</h2>
        <div className='listBox'>
          <div className='addBox'>
            <Link to='/edit'>
              <button style={{ width: '100%', height: '100%' }}>추가 버튼</button>
            </Link>
          </div>
          {/* <!-- 목록 --> */}
          <div className='listBox_inner'>
            {/* {console.log(content)} */}
            {/* <div className='list'>
              <input type='checkbox' className='listCheck' />
              <label className='listLb' style={{ textDecoration: 'line-through' }}>
                sdfsdf
              </label>
              <button className='delBtn'>x</button>
            </div>
            <div className='list'>
              <label className='listLb'>
                <input type='checkbox' className='listCheck' />
                {content.name}
              </label>
              <button className='delBtn'>x</button>
            </div> */}

            {content.map((e, index) => (
              <div className='list' key={index}>
                <input type='checkbox' className='listCheck' onClick={() => handleClick(e)} />
                <label
                  className='listLb'
                  style={{ textDecoration: e.checked ? 'line-through' : null, color: 'red' }}
                  onClick={() => {
                    handleEdit(e);
                  }}
                >
                  {e.name}
                  <br />
                  {e.date}
                </label>
                <button className='delBtn' onClick={() => hadnleDelete(e.id)}>
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
