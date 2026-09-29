import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");

  if (isAdmin === "true") {
    return children;
  }

  return <Navigate to="/admin/login" replace />;
}

export default ProtectedRoute;