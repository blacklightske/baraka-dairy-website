// src/components/RouteGuards.jsx
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};
