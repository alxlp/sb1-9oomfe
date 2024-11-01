import { create } from 'zustand';
import { Project } from '../types';

interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  selectProject: (id: number) => void;
  createProject: (data: Partial<Project>) => Promise<void>;
  updateProject: (id: number, data: Partial<Project>) => Promise<void>;
  deleteProject: (id: number) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  selectedProject: null,
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true });
    try {
      // In a real app, this would make an API call
      const mockProjects: Project[] = [
        {
          id: 1,
          name: 'Web Application',
          identifier: 'web-app',
          description: 'Main web application project',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
          lead: {
            id: 1,
            email: 'john@example.com',
            name: 'John Doe',
            role: 'manager',
            createdAt: new Date(),
          },
          members: [],
          isPublic: true,
          modules: {
            issueTracking: true,
            timeTracking: true,
            wiki: true,
            repository: true,
          },
        },
      ];

      set({ projects: mockProjects, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch projects', loading: false });
    }
  },

  selectProject: (id: number) => {
    const project = get().projects.find((p) => p.id === id);
    set({ selectedProject: project || null });
  },

  createProject: async (data: Partial<Project>) => {
    set({ loading: true });
    try {
      // In a real app, this would make an API call
      const newProject: Project = {
        id: get().projects.length + 1,
        name: data.name!,
        identifier: data.identifier!,
        description: data.description!,
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
        lead: data.lead!,
        members: data.members || [],
        isPublic: data.isPublic || false,
        modules: data.modules || {
          issueTracking: true,
          timeTracking: true,
          wiki: false,
          repository: false,
        },
      };

      set((state) => ({
        projects: [...state.projects, newProject],
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to create project', loading: false });
    }
  },

  updateProject: async (id: number, data: Partial<Project>) => {
    set({ loading: true });
    try {
      // In a real app, this would make an API call
      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id
            ? { ...project, ...data, updatedAt: new Date() }
            : project
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to update project', loading: false });
    }
  },

  deleteProject: async (id: number) => {
    set({ loading: true });
    try {
      // In a real app, this would make an API call
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Failed to delete project', loading: false });
    }
  },
}));