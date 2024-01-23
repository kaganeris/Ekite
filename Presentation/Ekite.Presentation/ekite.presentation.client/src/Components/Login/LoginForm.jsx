import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../context/EmployeeContext";
import ForgotPasswordEmailHeader from "./ForgotPasswordEmailHeader";
import ForgotPasswordEmailForm from "./ForgotPasswordEmailForm";
import CreateEmployeeHeader from "../Employee/CreateEmployeeHeader";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = () => {
    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Parola küçük harf içermelidir.");
      return false;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Parola büyük harf içermelidir.");
      return false;
    }

    if (!/(?=.*\d)/.test(password)) {
      setPasswordError("Parola rakam içermelidir.");
      return false;
    }

    if (!/(?=.*[!@#$%^&*.,])/.test(password)) {
      setPasswordError("Parola özel karakter içermelidir.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email.endsWith("@bilgeadam.com")) {
      setEmailError("E-Mail adresi @bilgeadam.com ile bitmelidir.");
      return false;
    }

    return true;
  };

  const handlelogin = async (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);

    setPasswordError("");
    setEmailError("");

    const isPasswordValid = validatePassword();
    const isEmailValid = validateEmail();

    if (isPasswordValid && isEmailValid) {
      try {
        await login(email, password);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Giriş başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Giriş Başarısız!",
          text: "Lütfen bilgilerinizi kontrol ederek tekrar deneyiniz.",
        });
      }
    }
  };
  return (
    <div className="container mt--9 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card  border-0 mb-0">
            <div className="card-body px-lg-5 py-lg-2 ">
              {forgotPassword ? (
                <ForgotPasswordEmailForm
                  setForgotPassword={setForgotPassword}
                />
              ) : (
                <>

                  <div className="card-header bg-transparent">
                    <div className=" text-center mt-3 mb-3 ">
                      <h2>Giriş yapın</h2>
                      <img
                        src="https://ekitedepo.blob.core.windows.net/yeni/ekiteLogo.png"
                        className="img-fluid"
                        style={{ width: "30%" }}
                      />
                      <br />
                      <br />
                      <p>İşinizi sevin, ekip ruhuyla çalışın!</p>
                    </div>
                  </div>

                  <form role="form" onSubmit={handlelogin}>
                    <div className="form-group mb-3 mt-3">
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
                      {emailError && (
                        <span className="text-danger">{emailError}</span>
                      )}
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
                          placeholder="Şifre"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="input-group-text  bg-transparent ">
                          <i
                            className={`${
                              showPassword
                                ? "fa-regular fa-eye-slash"
                                : "fa-regular fa-eye"
                            }`}
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </span>
                      </div>
                      {passwordError && (
                        <span className="text-danger">{passwordError}</span>
                      )}
                    </div>
                    <div className="row justify-content-between">
                      <Link
                        className="mt-2 h5 text-primary"
                        onClick={(e) => {
                          setForgotPassword(true);
                          setPasswordError("");
                          setEmailError("");
                        }}
                      >
                        Şifremi Unuttum
                      </Link>
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Giriş Yap"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
