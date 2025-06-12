import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

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
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const reportService = {
  // Submit public report
  submitPublicReport: async (reportData) => {
    try {
      const response = await api.post('/reports/public', reportData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error submitting public report' };
    }
  },

  // Submit field report
  submitFieldReport: async (reportData) => {
    try {
      const response = await api.post('/reports/field', reportData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error submitting field report' };
    }
  },

  // Get all reports
  getAllReports: async (filters = {}) => {
    try {
      const response = await api.get('/reports', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error fetching reports' };
    }
  },

  // Get report by ID
  getReportById: async (reportId) => {
    try {
      const response = await api.get(`/reports/${reportId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error fetching report details' };
    }
  },

  // Update report status
  updateReportStatus: async (reportId, status) => {
    try {
      const response = await api.patch(`/reports/${reportId}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error updating report status' };
    }
  },

  // Assign report to officer
  assignReport: async (reportId, officerId, notes) => {
    try {
      const response = await api.post(`/reports/${reportId}/assign`, {
        officerId,
        notes
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error assigning report' };
    }
  },

  // Upload report media
  uploadMedia: async (reportId, file) => {
    try {
      const formData = new FormData();
      formData.append('media', file);
      
      const response = await api.post(`/reports/${reportId}/media`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Error uploading media' };
    }
  }
};

export default reportService; 