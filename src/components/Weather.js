import ScrollContainer from 'react-indiana-drag-scroll';
import WeekItem from './WeekItem';

const Weather = ({ dailyWeather }) => {
  return (
    <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
      <ScrollContainer>
        <div style={{ display: 'flex' }}>
          {dailyWeather.map((e) => (
            <WeekItem key={e.id} date={e.date} icon={e.icon} temperature={e.temperature} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Weather;
