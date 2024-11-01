import React from 'react';
import { useProjectStore } from '../store/projectStore';
import { Chart, Activity, Users, AlertCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const projects = useProjectStore((state) => state.projects);

  const stats = [
    { name: 'Total Projects', value: projects.length, icon: Chart },
    { name: 'Active Issues', value: '23', icon: Activity },
    { name: 'Team Members', value: '12', icon: Users },
    { name: 'Open Bugs', value: '4', icon: AlertCircle },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {item.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text<boltAction type="file" filePath="src/pages/Dashboard.tsx">import React from 'react';
import { useProjectStore } from '../store/projectStore';
import { Chart, Activity, Users, AlertCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const projects = useProjectStore((state) => state.projects);

  const stats = [
    { name: 'Total Projects', value: projects.length, icon: Chart },
    { name: 'Active Issues', value: '23', icon: Activity },
    { name: 'Team Members', value: '12', icon: Users },
    { name: 'Open Bugs', value: '4', icon: AlertCircle },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {item.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Activity
            </h3>
            <div className="mt-5">
              <ul className="divide-y divide-gray-200">
                <li className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">New issue created</h3>
                        <p className="text-sm text-gray-500">2h ago</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        John Doe created issue "Fix navigation bug" in Web Application project
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">Issue resolved</h3>
                        <p className="text-sm text-gray-500">5h ago</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        Anna Smith resolved issue "Update documentation" in Mobile App project
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Project Overview
            </h3>
            <div className="mt-5">
              <ul className="divide-y divide-gray-200">
                {projects.map((project) => (
                  <li key={project.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {project.description}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};