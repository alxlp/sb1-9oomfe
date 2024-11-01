import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: 1,
      email,
      name: 'John Doe',
      role: 'developer',
      createdAt: new Date(),
      lastActive: new Date(),
    };

    set({ user: mockUser, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  register: async (data: RegisterData) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: 1,
      email: data.email,
      name: data.name,
      role: 'developer',
      createdAt: new Date(),
      lastActive: new Date(),
    };

    set({ user: mockUser, isAuthenticated: true });
  },
}));