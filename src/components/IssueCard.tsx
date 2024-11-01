import React from 'react';
import { format } from 'date-fns';
import { AlertCircle, Clock, User } from 'lucide-react';
import { Issue, Priority } from '../types';

const priorityColors: Record<Priority, string> = {
  low: 'bg-gray-100 text-gray-800',
  normal: 'bg-blue-100 text-blue-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800',
};

const statusColors: Record<string, string> = {
  new: 'bg-purple-100 text-purple-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  resolved: 'bg-green-100 text-green-800',
  closed: 'bg-gray-100 text-gray-800',
};

interface IssueCardProps {
  issue: Issue;
  onClick: (issue: Issue) => void;
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue, onClick }) => {
  return (
    <div
      onClick={() => onClick(issue)}
      className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{issue.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[issue.priority]}`}>
          {issue.priority}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{issue.description}</p>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[issue.status]}`}>
            {issue.status.replace('_', ' ')}
          </span>
          
          <div className="flex items-center text-gray-500">
            <User size={14} className="mr-1" />
            <span>{issue.assignee}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>{format(issue.updated, 'MMM d')}</span>
        </div>
      </div>
    </div>
  );
}