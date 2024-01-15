import React, { useContext } from "react";
import LoginHeader from "../../Components/LoginHeader";
import LoginForm from "../../Components/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

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
