import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaCheckCircle, FaTimes } from 'react-icons/fa';

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would trigger the password reset logic
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter:'blur(6px)', background:'linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)', backgroundBlendMode:'overlay'}}>
      <div className="bg-white rounded-2xl shadow-2xl p-0 w-full max-w-md relative border border-blue-100">
        <div className="flex items-center gap-3 px-8 py-5 rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white border-b border-blue-200">
          <FaLock className="text-2xl" />
          <h2 className="text-xl font-bold tracking-wide">Forgot Password</h2>
          <button onClick={onClose} className="ml-auto text-white text-2xl hover:text-blue-200 focus:outline-none"><FaTimes /></button>
        </div>
        <div className="px-8 py-7">
          {submitted ? (
            <div className="flex flex-col items-center text-center">
              <FaCheckCircle className="text-4xl text-green-500 mb-2" />
              <h3 className="text-lg font-semibold text-green-700 mb-2">Check your email</h3>
              <p className="text-gray-600">If an account exists for <span className="font-semibold">{email}</span>, you will receive a password reset link shortly.</p>
              <button onClick={onClose} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"><FaEnvelope className="text-blue-500" />Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-blue-200 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-gray-800 bg-blue-50"
                    placeholder="Enter your email address"
                    required
                  />
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold text-lg shadow hover:from-blue-700 hover:to-green-600 transition"><FaLock className="text-xl" />Send Reset Link</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 