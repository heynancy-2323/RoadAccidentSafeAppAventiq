import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineArrowRightOnRectangle, // Login
  HiOutlineDocumentText, // Public Report
  HiOutlineHome, // Dashboard
  HiOutlineClipboardDocument, // Field Report
  HiOutlineCheckCircle, // Case Validation
  HiOutlineBriefcase, // Case Management
  HiOutlineUsers, // User Management
  HiOutlineChartBar, // Analytics
  HiOutlineFolderOpen, // Audit
  HiOutlineEnvelope, // Messages
  HiOutlineCog6Tooth, // Configuration
  HiOutlineChevronDown, // User dropdown
  HiOutlineXMark, // Close icon
  HiOutlineBars3 // Menu icon
} from 'react-icons/hi2';

const navItems = [
  { label: 'Login', icon: <HiOutlineArrowRightOnRectangle />, path: '/' },
  { label: 'Public Report', icon: <HiOutlineDocumentText />, path: '/public-report' },
  { label: 'Dashboard', icon: <HiOutlineHome />, path: '/dashboard' },
  { label: 'Field Report', icon: <HiOutlineClipboardDocument />, path: '/field-report' },
  { label: 'Case Validation', icon: <HiOutlineCheckCircle />, path: '/case-validation' },
  { label: 'Case Management', icon: <HiOutlineBriefcase />, path: '/case-management' },
  { label: 'User Management', icon: <HiOutlineUsers />, path: '/user-management' },
  { label: 'Analytics', icon: <HiOutlineChartBar />, path: '/analytics' },
  { label: 'Audit', icon: <HiOutlineFolderOpen />, path: '/audit' },
  { label: 'Messages', icon: <HiOutlineEnvelope />, path: '/messages' },
  { label: 'Configuration', icon: <HiOutlineCog6Tooth />, path: '/config' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  const handleBackdropClick = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-md shadow-md border border-gray-200"
        >
          {isOpen ? (
            <HiOutlineXMark className="w-6 h-6 text-gray-600" />
          ) : (
            <HiOutlineBars3 className="w-6 h-6 text-gray-600" />
          )}
        </button>
      )}

      {/* Backdrop with blur effect for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 lg:hidden"
          onClick={handleBackdropClick}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${isMobile 
            ? `fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : 'relative'
          }
          w-64 bg-white border-r border-gray-200 flex flex-col justify-between min-h-screen
        `}
      >
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-4 px-6 py-6 border-b border-gray-100 mb-2">
            <div className="bg-blue-100 p-2.5 rounded-xl">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="8" fill="#2563EB"/>
                <circle cx="14" cy="14" r="7" fill="white"/>
                <circle cx="14" cy="14" r="3" fill="#2563EB"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-wide text-gray-900">RADMS</span>
            {/* Close button for mobile */}
            {isMobile && (
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto p-1 hover:bg-gray-100 rounded-md"
              >
                <HiOutlineXMark className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2 mt-4 px-4">
            {navItems.map(({ label, icon, path }) => (
              <NavLink
                to={path}
                key={label}
                onClick={() => isMobile && setIsOpen(false)} // Close sidebar on mobile when link is clicked
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition select-none outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-1 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`${isActive ? 'text-white' : 'text-gray-500'} text-lg flex-shrink-0`}>
                      {icon}
                    </span>
                    <span className={`${isActive ? 'text-white' : 'text-gray-600'} truncate`}>
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
        {/* User Section */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-3 bg-white">
          <img
            src="https://i.pravatar.cc/32?img=3"
            alt="Officer Singh"
            className="w-8 h-8 rounded-full border border-gray-200"
          />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-medium text-gray-900 leading-tight truncate">Officer Singh</span>
            <span className="text-xs text-gray-500 leading-tight truncate">admin@radms.gov.in</span>
          </div>
          <HiOutlineChevronDown className="text-gray-400 text-sm flex-shrink-0" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;