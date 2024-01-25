import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AddressContext } from "../../context/AddressContext";

const EmployeeContactForm = ({
  activeFormNumber,
  setActiveFormNumber,
  personalContact,
  setPersonalContact,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const [cities, setCities] = useState(null);
  const [districts, setDistricts] = useState(null);
  const { getCities, getDistricts } = useContext(AddressContext);

  useEffect(() => {
    (async () => {
      if (cities === null) {
        const data = await getCities();
        setCities(data);
      }
      const districtData = await getDistricts(personalContact.city);
      setDistricts(districtData);
    })();
  }, [personalContact.city]);

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
              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-city"
                  >
                    Şehir
                  </label>
                  {cities && (
                    <select
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
                      value={personalContact.city}
                    >
                      {cities.map((city) => {
                        return (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        );
                      })}
                    </select>
                  )}
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
                    htmlFor="input-country"
                  >
                    İlçe
                  </label>
                  {districts && (
                    <>
                      {personalContact.city && (
                        <select
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
                          value={personalContact.district}
                        >
                          {districts.map((district) => (
                            <option key={district.id} value={district.name}>
                              {district.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </>
                  )}
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
              <div className="col-lg-6">
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
                    country={"tr"}
                    inputStyle={darkMode ? {background:"#fff ",height:"max-content",width:"inherit"}: {background:"#cdcfd1 ",height:"max-content",width:"inherit",color:"black"}}
                    value={personalContact.phoneNumber}
                    id="phone"
                    className={
                      darkMode
                        ? ""
                        : "text-dark"
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
          </div>

          <div className="main-content">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-auto ">
                  <input
                  type="button"
                    value="Geri"
                    className="btn btn-m btn-primary"
                    onClick={() => {
                      setActiveFormNumber(activeFormNumber - 1);
                    }}
                  />
                </div>
                <div className="col-auto ">
                  <input
                  type="button"
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
