import axios from 'axios';

const api = axios.create({
  baseURL: 'api-url',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;