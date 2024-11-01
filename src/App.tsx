import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { TimeTracking } from './pages/TimeTracking';
import { AdminUsers } from './pages/admin/Users';
import { AdminSettings } from './pages/admin/Settings';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  return user?.role === 'admin' ? <>{children}</> : <Navigate to="/" />;
};

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="md:pl-64">
        <Header />
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <AppLayout>
                <Projects />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PrivateRoute>
              <AppLayout>
                <ProjectDetails />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/time"
          element={
            <PrivateRoute>
              <AppLayout>
                <TimeTracking />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AppLayout>
                <AdminUsers />
              </AppLayout>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <AdminRoute>
              <AppLayout>
                <AdminSettings />
              </AppLayout>
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;