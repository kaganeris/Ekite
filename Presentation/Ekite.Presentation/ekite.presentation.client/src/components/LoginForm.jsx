import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const { login, isAuthenticated } = useContext(AuthContext)

    const navigate = useNavigate()

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

        //if (password.length < 10) {
        //    setPasswordError("Parola en az 10 karakter olmalıdır.");
        //    return false;
        //}

        return true;
    };

    const validateEmail = () => {
        if (!email.endsWith("@gmail.com")) {
            setEmailError("E-Mail adresi @bilgeadam.com ile bitmelidir.");
            return false;
        }

        return true;
    };


    const handlelogin = async (event) => {
        event.preventDefault()

        console.log(email);
        console.log(password);

        setPasswordError("");
        setEmailError("");

        const isPasswordValid = validatePassword();
        const isEmailValid = validateEmail();

        if (isPasswordValid && isEmailValid) {
            try {
                await login(email, password)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Giriş başarılı",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {

                    navigate("/home")
                 }, 1500)

            } catch (error) {
                Swal.fire(
                    {
                        icon: "error",
                        title: "Giriş Başarısız!",
                        text: "Lütfen bilgilerinizi kontrol ederek tekrar deneyiniz.",
                    }
                );
            }
        }
    }




    return (
        <div className="container mt--9 pb-5">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="card bg-secondary border-0 mb-0">
                        <div className="card-header bg-transparent pb-5">
                            <div className=" text-center mt-2 mb-3">
                                <small>Giriş yapın</small>
                            </div>
                        </div>
                        <div className="card-body px-lg-5 py-lg-5">
                            <form role="form" onSubmit={handlelogin}>
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
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                       

                                    </div>
                                    {emailError && <span className="text-danger">{emailError}</span>}
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
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                       

                                        <span className="input-group-text  bg-transparent ">
                                            <i
                                                className={`${showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}`}
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{ cursor: "pointer" }}
                                            ></i>
                                        </span>

                                    </div>
                                    {passwordError && <span className="text-danger">{passwordError}</span>}
                                </div>
                                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckLogin"
                  >
                    <span className="text-muted">Beni Hatırla</span>
                  </label>
                </div> */}
                                <div className="text-center">
                                    <input type="submit" className="btn btn-primary my-4" value="Giriş Yap" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;





