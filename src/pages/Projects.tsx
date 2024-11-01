import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FolderKanban, Users, Calendar } from 'lucide-react';
import { useProjectStore } from '../store/projectStore';
import { format } from 'date-fns';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const { projects, fetchProjects } = useProjectStore();
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <button
          onClick={() => setShowNewProjectModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FolderKanban className="h-8 w-8 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {project.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-lg font-semibold text-gray-900">
                        {project.identifier}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-500 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {project.members.length} members
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(project.updatedAt, 'MMM d, yyyy')}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex space-x-4">
                  {Object.entries(project.modules)
                    .filter(([, enabled]) => enabled)
                    .map(([module]) => (
                      <span
                        key={module}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {module.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    ))}
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};