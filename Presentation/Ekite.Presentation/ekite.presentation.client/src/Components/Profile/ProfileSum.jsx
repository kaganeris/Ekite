import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ProfileSum = ({ profileData }) => {
  const { darkMode } = useContext(ThemeContext);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);

    return formattedDate;
  };

  return (
    <div className={darkMode ? "card m-4" : "card m-4 bg-dark"}>
      <div className={darkMode ? "card-header" : "card-header bg-dark"}>
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className={darkMode ? "mb-0" : "mb-0 text-white"}>
              Çalışan Bilgileri{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <form>
          <h6
            className={
              darkMode
                ? "heading-small text-muted mb-4"
                : "heading-small text-muted mb-4 text-white"
            }
          >
            Kişisel Bilgiler
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    İsim
                  </label>
                  <label
                    id="input-username"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.secondName === null
                      ? profileData.firstName
                      : profileData.firstName + " " + profileData.secondName}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Soyisim
                  </label>
                  <label
                    id="input-username"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.secondLastName === null
                      ? profileData.lastName
                      : profileData.lastName + " " + profileData.secondLastName}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Doğum Tarihi
                  </label>
                  <label
                    id="input-last-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {formatDate(profileData.birthDate)}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    TCKN
                  </label>
                  <label
                    id="input-last-name"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.tcno}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Doğum Yeri
                  </label>
                  <label
                    id="input-email"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.birthPlace}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Meslek
                  </label>
                  <label
                    id="input-email"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.jobName}
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Departman Adı
                  </label>
                  <label
                    id="input-email"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.departmentName}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Şirket Adı
                  </label>
                  <label
                    id="input-email"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.companyName}
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    {profileData.leavingDate === null
                      ? "Giriş Tarihi"
                      : "Ayrılış Tarihi"}
                  </label>
                  <label
                    id="input-email"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.leavingDate === null
                      ? formatDate(profileData.hireDate)
                      : formatDate(profileData.leavingDate)}
                  </label>
                </div>
              </div>

              {/*<div className="col-lg-4">*/}
              {/*    <div className="form-group">*/}
              {/*        <label className="form-control-label" htmlFor="input-email">*/}
              {/*            Ayrılış Tarihi*/}
              {/*        </label>*/}
              {/*        <label id="input-email" className="form-control">*/}
              {/*            {profileData.leavingDate === null ? "-" : formatDate(profileData.leavingDate)}*/}
              {/*        </label>*/}
              {/*    </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <hr className="my-4" />

          <h6
            className={
              darkMode
                ? "heading-small text-muted mb-4"
                : "heading-small  text-white mb-4"
            }
          >
            İletişim Bilgileri
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    E-mail
                  </label>
                  <label
                    id="input-city"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.email}
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Telefon Numarası
                  </label>
                  <label
                    id="input-email"
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                  >
                    {profileData.phoneNumber}
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Adres
                  </label>
                  <label
                    className={
                      darkMode
                        ? "form-control"
                        : "form-control bg-secondary text-dark"
                    }
                    placeholder="Home Address"
                  >
                    {profileData.address}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
        </form>
      </div>
    </div>
  );
};

export default ProfileSum;
