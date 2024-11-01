import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Comment } from '../types';
import { format } from 'date-fns';

interface CommentsProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
}

export const Comments: React.FC<CommentsProps> = ({ comments, onAddComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddComment(content);
      setContent('');
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center">
        <MessageSquare size={20} className="mr-2" />
        Comments ({comments.length})
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment..."
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          required
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Comment
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-gray-500">
                {format(comment.created, 'MMM d, yyyy HH:mm')}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};