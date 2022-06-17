import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let authenticated = localStorage.getItem("isAuthenticated");
    if (!authenticated) {
      navigate("/auth");
    }
  }, [navigate]);

  return <Component />;
};

export default ProtectedRoute;
