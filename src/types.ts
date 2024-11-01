export type Priority = 'low' | 'normal' | 'high' | 'urgent';
export type Status = 'new' | 'in_progress' | 'resolved' | 'closed';
export type CategoryType = 'bug' | 'feature' | 'support' | 'documentation';
export type UserRole = 'admin' | 'manager' | 'developer' | 'reporter';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  lastActive?: Date;
}

export interface Project {
  id: number;
  name: string;
  identifier: string;
  description: string;
  status: 'active' | 'archived' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  lead: User;
  members: User[];
  isPublic: boolean;
  modules: {
    issueTracking: boolean;
    timeTracking: boolean;
    wiki: boolean;
    repository: boolean;
  };
}

export interface TimeEntry {
  id: number;
  hours: number;
  description: string;
  user: string;
  date: Date;
  activity?: string;
}

export interface Comment {
  id: number;
  content: string;
  author: string;
  created: Date;
  updated?: Date;
  attachments?: Attachment[];
}

export interface CustomField {
  id: number;
  name: string;
  value: string;
  type: 'text' | 'number' | 'date' | 'list' | 'user' | 'version';
  required: boolean;
  possibleValues?: string[];
}

export interface Version {
  id: number;
  name: string;
  description?: string;
  status: 'open' | 'locked' | 'closed';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Attachment {
  id: number;
  name: string;
  size: number;
  contentType: string;
  url: string;
  author: string;
  createdAt: Date;
}

export interface Issue {
  id: number;
  projectId: number;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  category: CategoryType;
  assignee: string;
  reporter: string;
  created: Date;
  updated: Date;
  dueDate?: Date;
  estimatedHours?: number;
  spentHours?: number;
  percentDone: number;
  comments: Comment[];
  timeEntries: TimeEntry[];
  customFields: CustomField[];
  watchers: string[];
  parent?: number;
  children: number[];
  attachments: Attachment[];
  version?: Version;
  tags: string[];
}