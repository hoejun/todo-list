import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import WeekItem from './WeekItem';

const Weather = ({ dailyWeather, loading }) => {
  return (
    <>
      <h2>이번주 날씨</h2>
      {loading ? (
        <h1>날씨 불러오는 중.......</h1>
      ) : (
        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <ScrollContainer>
            <div style={{ display: 'flex' }}>
              {dailyWeather.map((e) => (
                <WeekItem key={e.id} date={e.date} icon={e.icon} temperature={e.temperature} />
              ))}
            </div>
          </ScrollContainer>
        </div>
      )}
    </>
  );
};

export default Weather;
