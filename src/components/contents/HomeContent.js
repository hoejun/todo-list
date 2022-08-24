import React, { useEffect, useState } from 'react';
import API from '../../api/request';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { listState } from '../../store/atom';
import Weather from '../Weather';
import TodoListItem from '../TodoListItem';

const UnixToTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const WeekDay = ['일', '월', '화', '수', '목', '금', '토'];
  const day = `${date.getMonth() + 1}/${date.getDate()}(${WeekDay[date.getDay()]})`;

  return day;
};

const dateComparison = (todoDate) => {
  const todo = new Date(todoDate);
  const date = new Date();
  const changeDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`;
  const now = new Date(changeDate);

  return todo > now;
};

const HomeContent = ({ history }) => {
  const [content, setContent] = useRecoilState(listState);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  };
  const handleClick = (e) => {
    setContent(
      content.map((item) => (item.id === e.id ? { ...item, ['checked']: !e.checked } : item))
    );
  };
  const handleDelete = (id) => {
    setContent(content.filter((item) => item.id !== id));
  };
  const handleEdit = (e) => {
    history.push({
      pathname: '/edit',
      state: e,
      detail: 'update',
    });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(content));
  }, [content]);

  return (
    <div>
      <div className='weather_content'>
        <Weather dailyWeather={dailyWeather} loading={loading} />
      </div>
      <div className='to_do_content' style={{ marginTop: '30px' }}>
        <h2>이번주 To-Do</h2>
        <div className='listBox'>
          <div className='addBox'>
            <Link to='/edit'>
              <button style={{ width: '100%', height: '100%' }}>추가 버튼</button>
            </Link>
          </div>
          <div className='listBox_inner'>
            {content.map((e, index) => (
              <TodoListItem
                key={index}
                e={e}
                dateComparison={dateComparison}
                handleClick={handleClick}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
