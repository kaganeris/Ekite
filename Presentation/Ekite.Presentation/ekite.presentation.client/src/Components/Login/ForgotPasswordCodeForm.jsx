import React, { useContext, useState } from "react";
import ForgotPasswordCodeHeader from "./ForgotPasswordCodeHeader";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../context/EmployeeContext";

const ForgotPasswordCodeForm = ({ appUserId }) => {
  const [code, setCode] = useState(0);
  const { sendCode } = useContext(EmployeeContext);
  
  console.log("🚀 ~ ForgotPasswordCodeForm ~ appUserId:", appUserId)

  const handleCode = async (e) => {
    e.preventDefault();

    if (code !== null) {
      let data = {
        appUserId: appUserId,
        code: code,
      };
      console.log("handlecodeCalıstı",code)
      let success = await sendCode(data);
      if (success) {
        console.log("Kod Gönderimi Başarılı");
      }
    }
  };

  return (
    <>
      <ForgotPasswordCodeHeader />
      <form role="form" onSubmit={handleCode}>
        <div className="form-group mb-3">
          <div className="input-group input-group-merge input-group-alternative">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ni ni-email-83"></i>
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Kodu Giriniz"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <Link
            className="mt-2 h5 text-primary"
            onClick={(e) => {
              setForgotPassword(false);
              setCode("");
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

export default ForgotPasswordCodeForm;
