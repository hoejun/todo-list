import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api/request';
import { useRecoilState } from 'recoil';
import { listState } from '../../store/atom';
import Weather from '../Weather';
import TodoListItem from '../TodoListItem';
import { useQuery } from 'react-query';
interface Data {
  id: any;
  date: string;
  icon: any;
  temperature: any;
}
const UnixToTimeStamp = (timeStamp: string) => {
  const date = new Date(Number(timeStamp) * 1000);
  const WeekDay = ['일', '월', '화', '수', '목', '금', '토'];
  const day = `${date.getMonth() + 1}/${date.getDate()}(${WeekDay[date.getDay()]})`;

  return day;
};

const dateComparison = (todoDate: string) => {
  const todo = new Date(todoDate);
  const date = new Date();
  const changeDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`;
  const now = new Date(changeDate);

  return todo > now;
};

const fetchWeather = async () => {
  const wather: any = await API.getWeather();

  return wather;
};

const HomeContent = ({ history }: { history: any }) => {
  const [content, setContent] = useRecoilState<any>(listState);
  const [dailyWeather, setDailyWeather] = useState<Data[]>([]);
  //isLoading은 데이터가 없을경우만 true
  const { isLoading, error, data }: any = useQuery(['weatherKey'], fetchWeather);
  // if (isLoading) return <div> 로딩중... </div>;
  // if (error) return <div> 에러: {error.message} </div>;

  const getData = async () => {
    let array: Data[] = [];

    data?.daily.forEach((e: any) => {
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
  const handleClick = (e: any) => {
    setContent(
      content.map((item: any) => (item.id === e.id ? { ...item, ['checked']: !e.checked } : item))
    );
  };
  const handleDelete = (id: any) => {
    setContent(content.filter((item: any) => item.id !== id));
  };
  const handleEdit = (e: any) => {
    history.push({
      pathname: '/edit',
      state: e,
      detail: 'update',
    });
  };

  useEffect(() => {
    if (data) getData();
  }, [data]);
  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(content));
  }, [content]);

  // if (isLoading) return <div>loading</div>;
  if (error) return <div> 에러: {error.message} </div>;

  return (
    <div>
      <div className='weather_content'>
        <h2>이번주 날씨</h2>
        {isLoading && <h2>날씨 불러오는 중.......</h2>}
        <Weather dailyWeather={dailyWeather} />
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
            {content.map((e: any, index: number) => (
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
