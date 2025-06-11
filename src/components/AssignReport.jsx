import React, { useState } from 'react';
import { FaUserShield, FaIdBadge, FaStickyNote, FaCheckCircle, FaTimes } from 'react-icons/fa';

const AssignReport = ({ onClose }) => {
  const [form, setForm] = useState({
    reportId: '',
    officer: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle assignment logic here
    onClose && onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter:'blur(6px)', background:'linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)', backgroundBlendMode:'overlay'}}>
      <div className="bg-white rounded-2xl shadow-2xl p-0 w-full max-w-md relative border border-blue-100">
        <div className="flex items-center gap-3 px-8 py-5 rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white border-b border-blue-200">
          <FaUserShield className="text-2xl" />
          <h2 className="text-xl font-bold tracking-wide">Assign Report</h2>
          <button onClick={onClose} className="ml-auto text-white text-2xl hover:text-blue-200 focus:outline-none"><FaTimes /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 px-8 py-7">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"><FaIdBadge className="text-blue-500" />Report ID</label>
            <div className="relative">
              <input name="reportId" value={form.reportId} onChange={handleChange} className="w-full border border-blue-200 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-gray-800 bg-blue-50" placeholder="Enter Report ID" required />
              <FaIdBadge className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"><FaUserShield className="text-green-500" />Officer Name</label>
            <div className="relative">
              <input name="officer" value={form.officer} onChange={handleChange} className="w-full border border-green-200 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition text-gray-800 bg-green-50" placeholder="Enter Officer Name" required />
              <FaUserShield className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2"><FaStickyNote className="text-indigo-500" />Assignment Notes</label>
            <div className="relative">
              <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full border border-indigo-200 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition text-gray-800 bg-indigo-50 min-h-[60px]" placeholder="Add any notes..." />
              <FaStickyNote className="absolute left-3 top-4 text-indigo-400" />
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold text-lg shadow hover:from-blue-700 hover:to-green-600 transition"><FaCheckCircle className="text-xl" />Assign</button>
        </form>
      </div>
    </div>
  );
};

export default AssignReport; 