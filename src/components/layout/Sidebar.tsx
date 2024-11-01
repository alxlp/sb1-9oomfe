import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FolderKanban,
  Clock,
  Settings,
  Users,
  FileText,
  GitBranch,
  Book,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Time Tracking', href: '/time', icon: Clock },
  { name: 'Wiki', href: '/wiki', icon: Book },
  { name: 'Repository', href: '/repository', icon: GitBranch },
  { name: 'Documents', href: '/documents', icon: FileText },
];

const adminNavigation = [
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.role === 'admin';

  const NavLink: React.FC<{
    item: { name: string; href: string; icon: React.FC<any> };
  }> = ({ item }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        to={item.href}
        className={clsx(
          'flex items-center px-4 py-2 text-sm font-medium rounded-md',
          isActive
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        )}
      >
        <Icon className="mr-3 h-5 w-5" aria-hidden="true" />
        {item.name}
      </Link>
    );
  };

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-white text-xl font-bold">Issue Tracker</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}

            {isAdmin && (
              <>
                <div className="pt-6">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Administration
                  </p>
                </div>
                {adminNavigation.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};