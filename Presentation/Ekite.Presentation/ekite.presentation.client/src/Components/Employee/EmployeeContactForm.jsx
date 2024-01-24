import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EmployeeContactForm = ({
  activeFormNumber,
  setActiveFormNumber,
  personalContact,
  setPersonalContact,
}) => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    console.log("🚀 ~ personalInfo:", personalContact);
  }, [personalContact]);

  return (
    <div className={darkMode ? "card" : "card bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              İletişim Bilgileri
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form encType="multipart/form-data">
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="phone"
                  >
                    Telefon Numarası
                  </label>
                  <PhoneInput
                    country={"us"}
                    value={personalContact.phoneNumber}
                    id="phone"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={(e) =>
                      setPersonalContact((prevInfo) => ({
                        ...prevInfo,
                        phoneNumber: e,
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
                    htmlFor="city"
                  >
                    İl
                  </label>
                  <input
                    type="text"
                    value={personalContact.city}
                    id="city"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={(e) =>
                      setPersonalContact((prevInfo) => ({
                        ...prevInfo,
                        city: e.target.value,
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
                    htmlFor="district"
                  >
                    İlçe
                  </label>
                  <input
                    type="text"
                    value={personalContact.district}
                    id="district"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={(e) =>
                      setPersonalContact((prevInfo) => ({
                        ...prevInfo,
                        district: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="adressDetail"
                  >
                    Adres Detayı
                  </label>
                  <input
                    type="text"
                    value={personalContact.adressDetail}
                    id="adressDetail"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    onChange={(e) =>
                      setPersonalContact((prevInfo) => ({
                        ...prevInfo,
                        adressDetail: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-auto ">
                  <input
                    type="submit"
                    value="Geri"
                    className="btn btn-m btn-primary"
                    onClick={() => {
                      setActiveFormNumber(activeFormNumber - 1);
                    }}
                  />
                </div>
                <div className="col-auto ">
                  <input
                    type="submit"
                    value="İleri"
                    className="btn btn-m btn-primary"
                    onClick={() => {
                      setActiveFormNumber(activeFormNumber + 1);
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

export default EmployeeContactForm;
