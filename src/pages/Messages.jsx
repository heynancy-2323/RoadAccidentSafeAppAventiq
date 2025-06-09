import React from 'react';
import { FaRegUserCircle, FaPaperclip, FaPlusCircle } from 'react-icons/fa';

const Messages = () => {
  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="flex gap-4 mb-6 text-sm">
        <button className="bg-gray-700 px-3 py-1 rounded-full text-white">All Conversations</button>
        <button className="bg-gray-700 px-3 py-1 rounded-full text-white">Unread</button>
        <button className="bg-gray-700 px-3 py-1 rounded-full text-white">Field Officers</button>
        <button className="bg-gray-700 px-3 py-1 rounded-full text-white">Reviewers</button>
        <button className="bg-gray-700 px-3 py-1 rounded-full text-white">Administrators</button>
      </div>

      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        {/* Left Pane - Conversations List */}
        <div className="col-span-1 bg-gray-800 rounded-lg shadow-md p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-3">All Conversations</h2>
          <div className="space-y-3 overflow-y-auto flex-1">
            {/* Conversation 1 */}
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AK</div>
              <div>
                <p className="font-semibold">Amit Kumar <span className="text-xs text-gray-400">2m</span></p>
                <p className="text-xs text-gray-400">Need clarification on GPS coordinates...</p>
              </div>
              <span className="ml-auto text-xs bg-green-500 px-2 py-0.5 rounded-full">Field Officer</span>
            </div>

            {/* Conversation 2 */}
            <div className="flex items-center gap-3 p-2 rounded-md bg-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">PS</div>
              <div>
                <p className="font-semibold">Priya Sharma <span className="text-xs text-gray-400">1h</span></p>
                <p className="text-xs text-gray-400">Report validation completed for case #FDB-001</p>
              </div>
              <span className="ml-auto text-xs bg-purple-500 px-2 py-0.5 rounded-full">Reviewer</span>
            </div>

            {/* Conversation 3 */}
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">RG</div>
              <div>
                <p className="font-semibold">Rajesh Gupta <span className="text-xs text-gray-400">3h</span></p>
                <p className="text-xs text-gray-400">Case assignment update required</p>
              </div>
              <span className="ml-auto text-xs bg-orange-500 px-2 py-0.5 rounded-full">Case Manager</span>
            </div>

            {/* Conversation 4 */}
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">SK</div>
              <div>
                <p className="font-semibold">Suresh Kumar <span className="text-xs text-gray-400">1d</span></p>
                <p className="text-xs text-gray-400">System configuration changes approved</p>
              </div>
              <span className="ml-auto text-xs bg-blue-500 px-2 py-0.5 rounded-full">Administrator</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">New Message</button>
        </div>

        {/* Middle Pane - Chat Window */}
        <div className="col-span-2 bg-gray-800 rounded-lg shadow-md p-4 flex flex-col">
          <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AK</div>
            <div>
              <p className="font-semibold">Amit Kumar</p>
              <p className="text-xs text-gray-400">Field Officer - Sector 15 <span className="text-green-500">● Online</span></p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {/* Incoming Message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AK</div>
              <div className="bg-gray-700 p-3 rounded-lg max-w-xl">
                <p className="text-sm">Hi, I need clarification on the GPS coordinates for report #FDB-2025-001. The location seems to be off by a few meters.</p>
                <p className="text-xs text-gray-400 text-right mt-1">2 minutes ago</p>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex items-end justify-end gap-3">
              <div className="bg-blue-600 p-3 rounded-lg max-w-xl">
                <p className="text-sm">Please double-check the GPS reading and ensure you're standing at the exact accident location. The coordinates should match the address provided.</p>
                <p className="text-xs text-gray-200 text-right mt-1">1 minute ago</p>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">You</div>
            </div>

            {/* Incoming Message with Attachment */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AK</div>
              <div className="bg-gray-700 p-3 rounded-lg max-w-xl">
                <p className="text-sm">I've rechecked the coordinates. Here's a photo of the exact location with GPS overlay.</p>
                <a href="#" className="text-blue-400 underline text-sm mt-1 block">accident_location_gps.jpg</a>
                <p className="text-xs text-gray-400 text-right mt-1">Just now</p>
              </div>
            </div>

            {/* System Message */}
            <div className="text-center text-xs text-gray-500">Report #FDB-2025-001 has been updated with new GPS coordinates</div>
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-700 pt-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 border border-gray-600 px-4 py-2 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="text-gray-400 hover:text-white text-xl"><FaPaperclip /></button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Send</button>
          </div>
        </div>

        {/* Right Pane - Sections */}
        <div className="col-span-1 bg-gray-800 rounded-lg shadow-md p-4 flex flex-col">
          <div className="space-y-6 overflow-y-auto flex-1">
            <div>
              <h2 className="text-xl font-semibold mb-3">Real-time Chat</h2>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Live message delivery</li>
                <li>Read receipts</li>
                <li>Online status</li>
                <li>Message history</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">File Sharing</h2>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Photo attachments</li>
                <li>Document sharing</li>
                <li>Video files</li>
                <li>Secure encryption</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Case Context</h2>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Case references</li>
                <li>Report linking</li>
                <li>Context preservation</li>
                <li>Audit trails</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Smart Notifications</h2>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Priority routing</li>
                <li>Role-based alerts</li>
                <li>SMS integration</li>
                <li>Email notifications</li>
              </ul>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mt-4">New Message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;