import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    count === 0 && navigate("/auth", { replace: true });

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div>
      <h1>Redirecting within {count} sec</h1>
    </div>
  );
};

export default LoadingToRedirect;
