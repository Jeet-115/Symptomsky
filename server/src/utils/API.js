import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; 
// const BASE_URL = 'https://puaiso-server.azurewebsites.net'; 

const api = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const getToken = () => localStorage.getItem('token');

export const get = (endpoint, config = {}) => {
//   const token = getToken();
  return api.get(endpoint, {
    ...config,
    headers: {
      ...config.headers,
    //   Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

export const post = (endpoint, data, config = {}) => {
//   const token = getToken();
  return api.post(endpoint, data, {
    ...config,
    headers: {
      ...config.headers
    //   Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

export const put = (endpoint, data, config = {}) => {
  const token = getToken();
  return api.put(endpoint, data, {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

export const del = (endpoint, config = {}) => {
  const token = getToken();
  return api.delete(endpoint, {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

export default api;
