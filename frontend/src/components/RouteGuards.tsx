import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks/redux-hooks";

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.app.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.app.isAuthenticated);

  return isAuthenticated ? <Navigate to="/" /> : children;
};
