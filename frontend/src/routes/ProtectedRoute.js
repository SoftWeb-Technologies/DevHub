import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { currentUser, loading } = useSelector((state) => state.user);

  return (
    <>
      {!loading && (
        <>{currentUser ? <Outlet {...rest} /> : <Navigate to={"/auth"} />}</>
      )}
    </>
  );
};

export default ProtectedRoute;
