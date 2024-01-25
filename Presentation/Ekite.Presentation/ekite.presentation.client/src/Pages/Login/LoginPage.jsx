import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

import { PageContext } from "../../context/PageContext";

import LoginHeader from "../../Components/Login/LoginHeader";
import LoginForm from "../../Components/Login/LoginForm";
import FirstLoginNewPassword from "../../Components/Login/FirstLoginNewPassword";


const LoginPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const {prevPage} = useContext(PageContext)
  const {firstLogin} = useContext(AuthContext);


  return (
    <>
      {isAuthenticated ? (
        <Navigate to={prevPage} />
      ) : (
        <div className="bg-default" style={{ minHeight: "100vh" }}>
          {firstLogin ? <> <LoginHeader /> <FirstLoginNewPassword/> </>: <> <LoginHeader />
          <LoginForm /></>  }
        </div>
      )}
    </>
  );
};

export default LoginPage;
