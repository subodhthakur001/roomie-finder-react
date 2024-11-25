// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  searchUsers: async (location, query) => {
    const response = await api.get('/users/search', {
      params: { location, query },
    });
    return response.data;
  },

  createUser: async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  updateUser: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  getUserProfile: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
};

export default api;