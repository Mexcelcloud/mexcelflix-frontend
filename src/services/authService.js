import API from './axiosConfig';

export const login = (email, password) =>
  API.post('/api/auth/login', { email, password });

export const register = (username, email, password) =>
  API.post('/api/auth/register', { username, email, password });

export const logout = () => localStorage.removeItem('token');