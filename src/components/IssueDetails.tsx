import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Issue } from '../types';
import { format } from 'date-fns';
import { Comments } from './Comments';
import { TimeTracker } from './TimeTracker';

interface IssueDetailsProps {
  issue: Issue;
  onClose: () => void;
  onUpdate: (updatedIssue: Partial<Issue>) => void;
}

export const IssueDetails: React.FC<IssueDetailsProps> = ({ issue, onClose, onUpdate }) => {
  const handleAddComment = (content: string) => {
    const newComment = {
      id: (issue.comments.length + 1),
      content,
      author: 'Current User',
      created: new Date(),
    };
    onUpdate({
      comments: [...issue.comments, newComment],
    });
  };

  const handleAddTimeEntry = (entry: Omit<TimeEntry, 'id'>) => {
    const newEntry = {
      id: (issue.timeEntries.length + 1),
      ...entry,
    };
    onUpdate({
      timeEntries: [...issue.timeEntries, newEntry],
      spentHours: (issue.spentHours || 0) + entry.hours,
    });
  };

  const handlePercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onUpdate({ percentDone: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{issue.title}</h2>
            <p className="text-sm text-gray-500">#{issue.id}</p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="whitespace-pre-wrap">{issue.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Progress</h3>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={issue.percentDone}
                    onChange={handlePercentChange}
                    className="w-full"
                  />
                  <span className="text-sm font-medium">{issue.percentDone}%</span>
                </div>
              </div>

              <TimeTracker
                timeEntries={issue.timeEntries}
                onAddTime={handleAddTimeEntry}
              />

              <Comments
                comments={issue.comments}
                onAddComment={handleAddComment}
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Status</h4>
                  <span className="px-2 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    {issue.status.replace('_', ' ')}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Priority</h4>
                  <span className="px-2 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {issue.priority}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Category</h4>
                  <span className="px-2 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {issue.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Assignee</h4>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-gray-400" />
                    <span>{issue.assignee}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Due Date</h4>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    <span>{issue.dueDate ? format(issue.dueDate, 'MMM d, yyyy') : 'Not set'}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Time Tracking</h4>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    <span>
                      {issue.spentHours || 0} / {issue.estimatedHours || 0} hours
                    </span>
                  </div>
                </div>

                {issue.customFields.length > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Custom Fields</h4>
                    {issue.customFields.map((field) => (
                      <div key={field.id} className="mb-2">
                        <h5 className="text-sm font-medium text-gray-500">{field.name}</h5>
                        <p className="text-sm">{field.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Watchers</h4>
                <div className="space-y-2">
                  {issue.watchers.map((watcher, index) => (
                    <div key={index} className="flex items-center">
                      <Users size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm">{watcher}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};