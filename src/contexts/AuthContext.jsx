import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state from stored data
    const storedUser = authService.getCurrentUser();
    return storedUser;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = authService.getToken();
    if (token) {
      // Set default authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // If we don't have user data, fetch it
      if (!user) {
        fetchUserData();
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await authService.getCurrentUserData();
      const userData = response.user;
      setUser(userData);
      
      // Update stored user data
      const { token } = authService.getAuthData();
      authService.storeAuthData(token, userData, true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // If token is invalid, clear it
      if (error.response?.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setError(null);
      const response = await authService.login(credentials.username, credentials.password);
      const { token, user } = response;
      
      // Store auth data
      authService.storeAuthData(token, user, credentials.remember);
      
      // Set default authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // Update user state
      setUser(user);
      
      return user;
    } catch (error) {
      setError(error.message || 'Login failed');
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const response = await authService.register(userData);
      const { token, user } = response;
      
      // Store auth data
      authService.storeAuthData(token, user, true);
      
      // Set default authorization header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // Update user state
      setUser(user);
      
      return user;
    } catch (error) {
      setError(error.message || 'Registration failed');
      throw error;
    }
  };

  const logout = () => {
    // Clear auth data
    authService.logout();
    
    // Remove authorization header
    delete axios.defaults.headers.common['Authorization'];
    
    // Clear user state
    setUser(null);
  };

  const updateProfile = async (userData) => {
    try {
      setError(null);
      const response = await axios.put('/api/auth/profile', userData);
      const updatedUser = response.data.user;
      
      // Update stored user data
      const { token } = authService.getAuthData();
      authService.storeAuthData(token, updatedUser, true);
      
      // Update user state
      setUser(updatedUser);
      
      return updatedUser;
    } catch (error) {
      setError(error.response?.data?.message || 'Profile update failed');
      throw error;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 