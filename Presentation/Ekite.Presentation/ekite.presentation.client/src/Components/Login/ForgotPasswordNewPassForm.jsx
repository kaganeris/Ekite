import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import ForgotPasswordNewPassHeader from "./ForgotPasswordNewPassHeader";
import { Link } from "react-router-dom";

const ForgotPasswordNewPassForm = ({appUserId ,setForgotPassword}) => {
  const { sendPassword } = useContext(EmployeeContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const [passwordError,setPasswordError] = useState(null);
  const handlePassword = async (e) => {
    e.preventDefault();

    if (password !== null && confirmPassword !== null) {
      let data = {
        appUserID: appUserId,
        password: password,
        confirmPassword: confirmPassword,
      };
      console.log("🚀 ~ handlePassword ~ data:", data);

      let success = await sendPassword(data);
      
      if (success.status === 200) {
        setForgotPassword(false);
      }else{
        
        setPasswordError(success.data)
        if(success.data !== null){
          console.log("🚀 ~ handlePassword ~ success:", passwordError)

        }
        
      }


    }
  };

  return (
    <>
      <ForgotPasswordNewPassHeader />
      <form role="form" onSubmit={handlePassword}>
        <div className="form-group mb-3 mt-3">
          <div className="input-group input-group-merge input-group-alternative">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ni ni-lock-circle-open"></i>
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Şifre"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="input-group-text  bg-transparent ">
              <i
                className={`${
                  showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
                }`}
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              ></i>
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group input-group-merge input-group-alternative">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ni ni-lock-circle-open"></i>
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Şifre Tekrarı"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="input-group-text  bg-transparent ">
              <i
                className={`${
                  showConfirmPassword
                    ? "fa-regular fa-eye-slash"
                    : "fa-regular fa-eye"
                }`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ cursor: "pointer" }}
              ></i>
            </span>
          </div>
          {passwordError && (
            <ul className="mt-1" style={{listStyleType:"none", padding:"0px"}}>
             {passwordError.map((error) =><li className="mt-2 text-danger">{error}</li>
             )}
            </ul >
          )}
        </div>
        <div className="row justify-content-between">
          <Link
            className="mt-2 h5 text-primary"
            onClick={(e) => {
              setForgotPassword(false);
            }}
          >
            Giriş Ekranına Dön
          </Link>
          <input
            type="submit"
            className="btn btn-primary"
            value="Şifreyi Yenile"
          />
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordNewPassForm;
