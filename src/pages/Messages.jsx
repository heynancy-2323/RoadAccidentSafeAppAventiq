import React from 'react';
import { FaRegUserCircle, FaPaperclip, FaPlusCircle, FaComments, FaUsers, FaBell, FaFolderOpen, FaSearch, FaEllipsisV } from 'react-icons/fa';

const Messages = () => {
  return (
    <div className="p-6 text-black bg-[#F9FAFB] min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-gray-500">Secure communication platform for coordination between all system roles</p>
      </div>

      <div className="grid grid-cols-4 gap-6 h-[calc(100vh-16rem)]">
        {/* Left Sidebar - Conversations List */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 flex flex-col overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="p-4 border-b border-gray-100">
            <select className="w-full p-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Conversations</option>
              <option>Unread</option>
              <option>Field Officers</option>
              <option>Reviewers</option>
              <option>Administrators</option>
            </select>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {/* Active Conversation */}
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">AK</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">Amit Kumar</p>
                    <span className="text-xs text-gray-500">2m</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Need clarification on GPS co...</p>
                  <p className="text-xs text-blue-600 font-medium">Field Officer</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Conversations */}
            <div className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">PS</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">Priya Sharma</p>
                    <span className="text-xs text-gray-500">1h</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Report validation completed f...</p>
                  <p className="text-xs text-purple-600 font-medium">Reviewer</p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">RG</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">Rajesh Gupta</p>
                    <span className="text-xs text-gray-500">3h</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Case assignment update requ...</p>
                  <p className="text-xs text-green-600 font-medium">Case Manager</p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">SK</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">Suresh Kumar</p>
                    <span className="text-xs text-gray-500">1d</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">System configuration change...</p>
                  <p className="text-xs text-red-600 font-medium">Administrator</p>
                </div>
              </div>
            </div>
          </div>

          {/* New Message Button */}
          <div className="p-4 border-t border-gray-100">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 font-medium">
              <FaPlusCircle />
              New Message
            </button>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="col-span-3 bg-white rounded-lg shadow-md border border-gray-100 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AK</div>
              <div>
                <p className="font-semibold">Amit Kumar</p>
                <p className="text-sm text-gray-500">Field Officer - Sector 15</p>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">Online</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaEllipsisV />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Incoming Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AK</div>
              <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-lg max-w-lg">
                <p className="text-sm">Hi, I need clarification on the GPS coordinates for report #FDB-2025-001. The location seems to be off by a few meters.</p>
                <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex items-end justify-end gap-3">
              <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-lg max-w-lg text-white">
                <p className="text-sm">Please double-check the GPS reading and ensure you're standing at the exact accident location. The coordinates should match the address provided.</p>
                <p className="text-xs text-blue-200 mt-1 text-right">1 minute ago</p>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">You</div>
            </div>

            {/* Incoming Message with Attachment */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AK</div>
              <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-lg max-w-lg">
                <p className="text-sm">I've rechecked the coordinates. Here's a photo of the exact location with GPS overlay.</p>
                <div className="mt-2 p-2 bg-gray-200 rounded-lg flex items-center gap-2">
                  <FaPaperclip className="text-gray-500" />
                  <span className="text-sm text-blue-600">accident_location_gps.jpg</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
            </div>

            {/* System Message */}
            <div className="text-center">
              <p className="text-xs text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
                Report #FDB-2025-001 has been updated with new GPS coordinates
              </p>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-gray-600">
                <FaPaperclip className="text-lg" />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="text-gray-400 hover:text-gray-600">
                <FaBell className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;