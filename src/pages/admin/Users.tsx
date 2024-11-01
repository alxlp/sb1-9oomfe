import React from 'react';
import { User, UserPlus, Edit2, Trash2 } from 'lucide-react';

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    lastActive: '2024-03-15T10:00:00Z',
  },
  {
    id: 2,
    name: 'Anna Smith',
    email: 'anna@example.com',
    role: 'developer',
    status: 'active',
    lastActive: '2024-03-14T15:30:00Z',
  },
];

export const AdminUsers: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <UserPlus className="h-5 w-5 mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {mockUsers.map((user) => (
            <li key={user.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <User className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="mt-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.role === 'admin'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {user.role}
                        </span>
                        <span
                          className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0">
                    <div className="flex space-x-4">
                      <button className="text-gray-400 hover:text-gray-500">
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button className="text-red-400 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};