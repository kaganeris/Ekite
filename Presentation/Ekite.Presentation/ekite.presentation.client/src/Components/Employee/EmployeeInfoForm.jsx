import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const EmployeeInfoForm = ({setActiveFormNumber}) => {
  const { darkMode } = useContext(ThemeContext);
  console.log("🚀 ~ EmployeeInfoForm ~ darkMode:", darkMode);

  return (
    <div className={darkMode ? "card" : "card bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              Kişisel Bilgiler
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form encType="multipart/form-data">
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-first-name"
                  >
                    Ad
                  </label>
                  <input
                    type="text"
                    // value={""}
                    id="input-first-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="lastName"
                  >
                    Soyad
                  </label>
                  <input
                    type="text"
                    // value={""}
                    id="lastName"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="secondName"
                  >
                    İkinci Ad
                  </label>
                  <input
                    type="text"
                    // value={""}
                    id="secondName"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="secondLastname"
                  >
                    İkinci Soyad
                  </label>
                  <input
                    type="text"
                    // value={""}
                    id="secondLastname"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="TC"
                  >
                    T.C. NO
                  </label>
                  <input
                    type="text"
                    // value={""}
                    id="TC"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="birthdate"
                  >
                    Dogum Tarihi
                  </label>
                  <input
                    type="date"
                    // value={""}
                    id="birthdate"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="birthPlace"
                  >
                    Dogum Yeri
                  </label>
                  <input
                    type="text"
                    // value={""}
                    id="birthPlace"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>


              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="photo"
                  >
                    Fotoğraf
                  </label>
                  <input
                    type="file"
                    // value={""}
                    id="photo"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row"></div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
              <div className="col-auto ">
                  <input
                    type="submit"
                    value="İleri"
                    className="btn btn-m btn-primary"
                    onClick={()=>{setActiveFormNumber(1)}}
                  />
                </div>
                
              </div>        
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeInfoForm;
