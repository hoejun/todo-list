import Send from './config';

const baseURL = 'https://api.openweathermap.org';
const key = '7deeaa38795347fa532be63321a7ebd6';

const API = {
  getWeather() {
    const lat = '37.497917'; //서울 위도
    const lon = '127.027639'; //서울 경도
    const exclude = 'current'; //현재
    const units = 'metric'; //섭씨

    return Send({
      baseURL: baseURL,
      url: `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}&appid=${key}`,
      method: 'get',
    });
  },
};

export default API;
