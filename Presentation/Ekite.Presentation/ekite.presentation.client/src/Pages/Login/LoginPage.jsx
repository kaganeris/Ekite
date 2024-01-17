import React, { useContext } from "react";
import LoginHeader from "../../Components/LoginHeader";
import LoginForm from "../../Components/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { PageContext } from "../../context/PageContext";

const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const {prevPage} = useContext(PageContext)

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={prevPage} />
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
