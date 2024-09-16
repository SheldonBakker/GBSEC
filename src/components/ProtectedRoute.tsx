import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // Otherwise, render the child component (protected page)
  return children;
};

export default ProtectedRoute;
