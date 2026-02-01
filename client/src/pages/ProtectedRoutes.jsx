import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isLoggedIn, authLoading } = useAuthContext();
  if (authLoading) return;
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
