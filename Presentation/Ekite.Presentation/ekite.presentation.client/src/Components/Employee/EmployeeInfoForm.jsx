import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { EmployeeContext } from "../../context/EmployeeContext";

const EmployeeInfoForm = ({
  setActiveFormNumber,
  personalInfo,
  setPersonalInfo,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const { createEmployee } = useContext(EmployeeContext);
  const [isFileValid, setFileValid] = useState(true);

  //FOTOGRAF MI KONTROL EDİYOR
  const validateFile = (file) => {
    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    return allowedFileTypes.includes(file.type);
  };

  //FOTOGRAFI ATIYOR
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (validateFile(file)) {
        setFileValid(true);
        setPersonalInfo((prevInfo) => ({
          ...prevInfo,
          uploadPath: file,
        }));
      } else {
        setFileValid(false);
      }
    }
  };

  //TARİHİ DOGRU FORMATA ÇEVİRİYOR
  const handleBirthDate = (e) => {
    const selectedDate = new Date(e.target.value);
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      birthDate: selectedDate.toISOString().split("T")[0],
    }));
  };

  //TC YE SADECE SAYI GİRMESİNİ SAĞLIYOR
  const handleTcChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^\d]/g, "");
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      tCNO: sanitizedValue,
    }));
  };

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
            {/* CONDITION */}
            {personalInfo && (
              <>
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
                        value={personalInfo.firstName}
                        id="input-first-name"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={(e) =>
                          setPersonalInfo((prevInfo) => ({
                            ...prevInfo,
                            firstName: e.target.value,
                          }))
                        }
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
                        value={personalInfo.lastName}
                        id="lastName"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={(e) =>
                          setPersonalInfo((prevInfo) => ({
                            ...prevInfo,
                            lastName: e.target.value,
                          }))
                        }
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
                        value={personalInfo.secondName}
                        id="secondName"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={(e) =>
                          setPersonalInfo((prevInfo) => ({
                            ...prevInfo,
                            secondName: e.target.value,
                          }))
                        }
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
                        value={personalInfo.secondLastName}
                        id="secondLastname"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={(e) =>
                          setPersonalInfo((prevInfo) => ({
                            ...prevInfo,
                            secondLastName: e.target.value,
                          }))
                        }
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
                        value={personalInfo.tCNO}
                        id="TC"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={handleTcChange}
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
                        value={personalInfo.birthDate}
                        id="birthdate"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={handleBirthDate}
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
                        value={personalInfo.birthPlace}
                        id="birthPlace"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={(e) =>
                          setPersonalInfo((prevInfo) => ({
                            ...prevInfo,
                            birthPlace: e.target.value,
                          }))
                        }
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
                        id="photo"
                        className={
                          darkMode
                            ? "form-control"
                            : "form-control bg-secondary text-dark"
                        }
                        onChange={handleFileChange}
                      />

                      {!isFileValid && (
                        <label className="text-danger">
                          Geçerli bir dosya türü seçin (jpg, jpeg, png).
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="row"></div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-auto ">
                  <input
                    value="İleri"
                    className="btn btn-m btn-primary"
                    onClick={() => {
                      setActiveFormNumber(1);
                    }}
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
