import axios from "axios"

const api = axios.create({
    baseURL:"https://deep-net-api.onrender.com/api"
});
api.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export default api