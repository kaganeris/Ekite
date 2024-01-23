import React, { useContext, useEffect, useRef, useState } from "react";
import ForgotPasswordCodeHeader from "./ForgotPasswordCodeHeader";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../context/EmployeeContext";
import ForgotPasswordNewPassForm from "./ForgotPasswordNewPassForm";

const ForgotPasswordCodeForm = ({ appUserId, setIsEmailTrue,setForgotPassword }) => {
  const [code, setCode] = useState(0);
  const { sendCode } = useContext(EmployeeContext);
  const [secondTime, setSecondTime] = useState(59);
  const [minuteTime, setMinute] = useState(10);
  const [isCodeTrue, setIsCodeTrue] = useState(false);
  const [codeError,setCodeError] = useState(null);
  const timerRef = useRef(null);

  const handleCode = async (e) => {
    e.preventDefault();
    if (code !== null) {
      let data = {
        appUserId: appUserId,
        code: code,
      };
      try {
        let success = await sendCode(data);
        console.log("🚀 ~ handleCode ~ success:", success);
  
        if (success.status === 200) {
          clearTimeout(timerRef.current);
          console.log("🚀 ~ handleCode ~ success.status:", success.status);
          setIsCodeTrue(true);
          setCodeError(null);
        } else if (success.status === 404) {
          setCodeError("Kod geçersiz.");
          console.log(codeError);
        } else {
          setCodeError("Kod boş geçilemez.");
          console.log(codeError);
        }
      } catch (error) {
        //TODOOO BURAYI DÜZELT
        console.error("🚀 ~ handleCode ~ error:", error);
        setCodeError("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    }
  };

  useEffect(() => {
    if (minuteTime === 0 && secondTime === 0) {
      setIsEmailTrue(false);
    } else {
      timerRef.current = setTimeout(() => {
        if (secondTime === 0) {
          setSecondTime(59);
          setMinute((prevMinute) => prevMinute - 1);
        } else if (secondTime > 0) {
          setSecondTime((prevSecond) => prevSecond - 1);
        }
      }, 1000);
    }
  }, [secondTime, minuteTime]);

  return (
    <>
      {isCodeTrue ? (
        <ForgotPasswordNewPassForm appUserId={appUserId} setForgotPassword={setForgotPassword} />
      ) : (
        <>
          {" "}
          <ForgotPasswordCodeHeader />
          <form role="form" onSubmit={handleCode}>
            <div className="form-group mb-3 mt-3">
              <div className="d-flex justify-content-center">
                <h4>{`0${minuteTime}:${
                  secondTime > 9 ? secondTime : "0" + secondTime
                }`}</h4>
              </div>
              <div className="input-group input-group-merge input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>
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
              {!codeError !== null && (
            <label className="mt-1 text-danger">{codeError}</label>
          )}
            </div>

            <div className="row justify-content-between">
              <Link
                className="mt-2 h5 text-primary"
                onClick={(e) => {
                  setForgotPassword(false);
                  setCode(0);
                }}
              >
                Giriş Ekranına Dön
              </Link>
              <input type="submit" className="btn btn-primary" value="Gönder" />
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ForgotPasswordCodeForm;
