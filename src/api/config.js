import axios from 'axios';

const instance = axios.create({
  // timeout: 1000,
});

instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
