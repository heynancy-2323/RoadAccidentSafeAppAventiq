// API Configuration
const API_BASE_URL = 'http://localhost:5000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};

// Helper function to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    ...apiConfig.headers,
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

// Helper function to make authenticated requests
export const authenticatedFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      ...getAuthHeaders()
    }
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'Request failed');
  }
  
  return response.json();
}; 