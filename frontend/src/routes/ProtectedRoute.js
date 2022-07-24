import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    let authenticated = localStorage.getItem("isAuthenticated");
    if (!authenticated) {
      navigate("/auth");
    }
  }, [navigate, isAuthenticated]);

  return <Component />;
};

export default ProtectedRoute;
