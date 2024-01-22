import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasswordCodeHeader from "./ForgotPasswordCodeHeader";
import ForgotPasswordEmailHeader from "./ForgotPasswordEmailHeader";
import ForgotPasswordCodeForm from "./ForgotPasswordCodeForm";

const ForgotPasswordEmailForm = ({ setForgotPassword }) => {
  const { sendMail } = useContext(EmployeeContext);
  const [email, setEmail] = useState("");
  const [appUserId, setAppUserId] = useState("");
  const [isCodeTrue, setIsCodeTrue] = useState(false);

  const handleMail = async (e) => {
    e.preventDefault();

    if (email) {
      let appUserId = await sendMail(email);
      if (appUserId) {
        setAppUserId(appUserId);
        setIsCodeTrue(true);
      }
    }
  };

  return isCodeTrue ? (
    <ForgotPasswordCodeForm appUserId={appUserId} />
  ) : (
    <>
      <ForgotPasswordEmailHeader />
      <form role="form" onSubmit={handleMail}>
        <div className="form-group mb-3">
          <div className="input-group input-group-merge input-group-alternative">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ni ni-email-83"></i>
              </span>
            </div>
            <input
              className="form-control"
              placeholder="E-posta"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <Link
            className="mt-2 h5 text-primary"
            onClick={(e) => {
              setForgotPassword(false);
              setEmail("");
            }}
          >
            Giriş Ekranına Dön
          </Link>
          <input type="submit" className="btn btn-primary" value="Gönder" />
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordEmailForm;
