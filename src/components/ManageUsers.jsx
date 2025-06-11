import React, { useState } from 'react';
import { FaUsers, FaUserPlus, FaUserEdit, FaTrash, FaTimes, FaUserShield, FaCheckCircle } from 'react-icons/fa';

const initialUsers = [
  { id: 1, name: 'Inspector Kumar', role: 'Admin', status: 'Active' },
  { id: 2, name: 'SI Sharma', role: 'Investigator', status: 'Active' },
  { id: 3, name: 'Constable Singh', role: 'Field Officer', status: 'Inactive' },
];

const ManageUsers = ({ onClose }) => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backdropFilter:'blur(6px)', background:'linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)', backgroundBlendMode:'overlay'}}>
      <div className="bg-white rounded-2xl shadow-2xl p-0 w-full max-w-2xl relative border border-indigo-100">
        <div className="flex items-center gap-3 px-8 py-5 rounded-t-2xl bg-gradient-to-r from-indigo-600 to-blue-400 text-white border-b border-indigo-200">
          <FaUsers className="text-2xl" />
          <h2 className="text-xl font-bold tracking-wide">Manage Users</h2>
          <button onClick={onClose} className="ml-auto text-white text-2xl hover:text-blue-200 focus:outline-none"><FaTimes /></button>
        </div>
        <div className="px-8 py-7">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#1E3A8A]">User List</h3>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"><FaUserPlus />Add User</button>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-blue-50 text-blue-700">
                  <th className="py-2 px-4 text-left font-semibold">Name</th>
                  <th className="py-2 px-4 text-left font-semibold">Role</th>
                  <th className="py-2 px-4 text-left font-semibold">Status</th>
                  <th className="py-2 px-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-blue-50 transition">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <FaUserShield className="text-indigo-400" />
                      {user.name}
                    </td>
                    <td className="py-2 px-4">{user.role}</td>
                    <td className="py-2 px-4">
                      {user.status === 'Active' ? (
                        <span className="inline-flex items-center gap-1 text-green-600 font-semibold"><FaCheckCircle />Active</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-gray-400 font-semibold">Inactive</span>
                      )}
                    </td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="p-2 rounded hover:bg-blue-100 text-blue-600" title="Edit"><FaUserEdit /></button>
                      <button className="p-2 rounded hover:bg-red-100 text-red-600" title="Delete"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers; 