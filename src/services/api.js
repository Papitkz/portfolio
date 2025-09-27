import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.169.130.43130.43:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for API calls
api.interceptors.request.use(
  config => {
    // You can add auth tokens here if needed
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;