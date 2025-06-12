import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import SignUpForm from '../components/SignUpForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    remember: false,
  });
  const [showForgot, setShowForgot] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    if (isLoading) return;
    
    setError('');
    setIsLoading(true);

    try {
      if (!formData.username || !formData.password) {
        setError('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      console.log('Attempting login with:', { username: formData.username });
      const response = await authService.login(formData.username, formData.password);
      console.log('Login response:', response);

      if (response.success) {
        authService.storeAuthData(response.token, response.user, formData.remember);
        console.log('Auth data stored, navigating to dashboard');
        navigate('/dashboard');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error details:', error);
      setError(error.message || 'An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const ForgotPassword = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
        <p className="text-gray-600 mb-4">Enter your email to receive a password reset link.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Logo & Heading - Outside the card */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Road Accident Data<br />Management System
        </h1>
        <p className="text-base text-center text-gray-600">Faridabad Police Department</p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 12px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '16px'
              }}
            >
              <option value="">Select your role</option>
              <option value="field-officer">Field Officer</option>
              <option value="reviewer">Reviewer</option>
              <option value="admin">Administrator</option>
              <option value="case-manager">Case Manager</option>
              <option value="auditor">Auditor</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={() => setShowForgot(true)}
            >
              Forgot password?
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium transition-colors ${
                isLoading 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-blue-700'
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign in'}
            </button>

            <button
              type="button"
              onClick={() => setShowSignUp(true)}
              className="w-full border border-blue-600 text-blue-600 py-3 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
            >
              Create New Account
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/public-report')}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <span className="text-gray-400 text-xs">+</span>
            </div>
            Submit Public Accident Report
          </button>
        </form>
      </div>

      {/* Footer text */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-1">
          Secure login with 2FA • Digital Personal Data Protection Act, 2023 compliant
        </p>
        <p className="text-sm text-gray-400">
          Version 2.0 • Faridabad Police Department
        </p>
      </div>

      {showForgot && <ForgotPassword onClose={() => setShowForgot(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
    </div>
  );
};

export default LoginPage;