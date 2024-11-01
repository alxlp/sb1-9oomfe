import React, { useState } from 'react';
import { Clock, Plus } from 'lucide-react';
import { TimeEntry } from '../types';
import { format } from 'date-fns';

interface TimeTrackerProps {
  timeEntries: TimeEntry[];
  onAddTime: (entry: Omit<TimeEntry, 'id'>) => void;
}

export const TimeTracker: React.FC<TimeTrackerProps> = ({ timeEntries, onAddTime }) => {
  const [showForm, setShowForm] = useState(false);
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTime({
      hours: parseFloat(hours),
      description,
      user: 'Current User',
      date: new Date(),
    });
    setShowForm(false);
    setHours('');
    setDescription('');
  };

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Time Tracking</h3>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <Plus size={16} className="mr-1" />
          Log Time
        </button>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <Clock size={16} />
        <span>Total spent: {totalHours} hours</span>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-3 bg-gray-50 p-3 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hours
            </label>
            <input
              type="number"
              step="0.25"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-3 py-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        {timeEntries.map((entry) => (
          <div key={entry.id} className="text-sm bg-white p-3 rounded-lg border">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">{entry.hours} hours</span>
              <span className="text-gray-500">{format(entry.date, 'MMM d, yyyy')}</span>
            </div>
            <p className="text-gray-600">{entry.description}</p>
            <p className="text-gray-500 text-xs mt-1">Logged by {entry.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};