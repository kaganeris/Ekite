import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import LoginHeader from "../../Components/Login/LoginHeader";
import LoginForm from "../../Components/Login/LoginForm";

const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/home"} />
      ) : (
        <div className="bg-default" style={{ minHeight: "100vh" }}>
          <LoginHeader />
          <LoginForm />
        </div>
      )}
    </>
  );
};

export default LoginPage;
