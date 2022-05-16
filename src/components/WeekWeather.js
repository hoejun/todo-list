import React from 'react';

import styled from 'styled-components';

const WeekWeather = ({ date, icon, temperature }) => {
  return (
    <StyledDiv>
      <h4>{date}</h4>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} style={{ marginTop: '-30px' }} />
      <div style={{ marginTop: '-30px' }}>{temperature}도</div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  border: 1px solid #000;
  width: 110px;
  height: 100%;
  text-align: center;
  font-weight: bold;
`;

export default WeekWeather;
