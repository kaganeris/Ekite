import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {login,isAuthenticated} = useContext(AuthContext) 


    const handlelogin = async (event) => {
        event.preventDefault()
        console.log(email);
        console.log(password);
        try {
            await login(email,password)
        } catch (error) {
            alert("login failed")
        }
    }


  return (
    <div className="container mt--8 pb-5">
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
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
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
                  <input type="submit" className="btn btn-primary my-4" value="Giriş Yap"/> 
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
