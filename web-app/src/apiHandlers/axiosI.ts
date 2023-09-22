import axios from 'axios';

export function axiosI() {
  const intance = axios.create();

  intance.interceptors.request.use(
    // eslint-disable-next-line arrow-body-style
    config => {
      return config;
    },
    error => Promise.reject(error)
  );

  return intance;
}

export default axiosI;
