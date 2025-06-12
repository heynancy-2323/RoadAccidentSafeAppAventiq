import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url); // Debug log
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error); // Debug log
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status); // Debug log
    return response;
  },
  (error) => {
    console.error('Response error:', {
      status: error.response?.status,
      message: error.response?.data?.message,
      url: error.config?.url
    }); // Debug log

    if (error.response?.status === 401) {
      // Clear auth data and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

const authService = {
  // Login user
  login: async (username, password) => {
    try {
      console.log('Attempting login for user:', username); // Debug log
      const response = await api.post('/auth/login', { username, password });
      console.log('Login successful:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('Login error:', {
        message: error.response?.data?.message,
        status: error.response?.status,
        data: error.response?.data
      }); // Debug log
      
      // Handle specific error cases
      if (error.response?.status === 401) {
        throw { message: 'Invalid username or password' };
      } else if (error.response?.status === 400) {
        throw { message: error.response.data.message || 'Invalid input' };
      } else if (!error.response) {
        throw { message: 'Unable to connect to server. Please check your internet connection.' };
      }
      
      throw error.response?.data || { message: 'An error occurred during login' };
    }
  },

  // Get current user data
  getCurrentUserData: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  // Register new user (admin only)
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred during registration' };
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return !!token;
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  },

  // Store auth data
  storeAuthData: (token, user, remember = false) => {
    if (remember) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));
    }
    localStorage.setItem('isAuthenticated', 'true');
  },

  // Signup user
  signup: async (userData) => {
    try {
      console.log('Attempting signup for user:', userData.username);
      const response = await api.post('/auth/signup', userData);
      console.log('Signup response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      if (error.response?.status === 409) {
        throw new Error('Username or email already exists');
      } else if (!error.response) {
        throw new Error('Unable to connect to server. Please check your internet connection.');
      }
      throw new Error(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  },

  // Get auth data
  getAuthData: () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    return {
      token,
      user: user ? JSON.parse(user) : null,
    };
  },
};

export default authService; 