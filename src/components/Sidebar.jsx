import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaSignInAlt, FaClipboardList, FaHome, FaFileAlt, FaCheckCircle, FaTasks,
  FaUsers, FaChartBar, FaFolderOpen, FaEnvelope, FaCog
} from 'react-icons/fa';

const navItems = [
  { label: 'Login', icon: <FaSignInAlt />, path: '/' },
  { label: 'Public Report', icon: <FaClipboardList />, path: '/public-report' },
  { label: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
  { label: 'Field Report', icon: <FaFileAlt />, path: '/field-report' },
  { label: 'Case Validation', icon: <FaCheckCircle />, path: '/case-validation' },
  { label: 'Case Management', icon: <FaTasks />, path: '/case-management' },
  { label: 'User Management', icon: <FaUsers />, path: '/user-management' },
  { label: 'Analytics', icon: <FaChartBar />, path: '/analytics' },
  { label: 'Audit', icon: <FaFolderOpen />, path: '/audit' },
  { label: 'Messages', icon: <FaEnvelope />, path: '/messages' },
  { label: 'Configuration', icon: <FaCog />, path: '/config' },
];

const Sidebar = () => (
  <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between min-h-screen">
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-indigo-600 p-2 rounded-full text-white font-bold">🛡️</div>
        <span className="text-lg font-semibold text-[#1E3A8A]">RADMS</span>
      </div>

      <nav className="flex flex-col gap-2 text-sm text-gray-800">
        {navItems.map(({ label, icon, path }) => (
          <NavLink
            to={path}
            key={label}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                isActive
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'hover:bg-gray-100'
              }`
            }
          >
            <span>{icon}</span> {label}
          </NavLink>
        ))}
      </nav>
    </div>

    <div className="mt-4 border-t pt-4 text-sm text-gray-700">
      <div className="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/30"
          alt="Officer Singh"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-medium">Officer Singh</div>
          <div className="text-xs text-gray-500">admin@radms.gov.in</div>
        </div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
