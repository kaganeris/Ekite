import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const ProfileDetails = ({ profileData }) => {
  const { loading } = useContext(ProfileContext);
  const { darkMode } = useContext(ThemeContext);

  if (loading) {
    return <div>Yükleniyor</div>;
  }

  return (
    <div
      className={darkMode ? "card" : "card bg-dark"}
      style={{ marginBottom: "0px" }}
    >
      <div className="card-body">
        <form>
          <h6
            className={
              darkMode
                ? "heading-small text-muted mb-3"
                : "heading-small text-muted mb-3 text-white"
            }
          >
            Çalisan Bilgileri
          </h6>

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

              <div className="col-lg-6">
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

              <div className="col-lg-6">
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

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                  >
                    Departman
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
            </div>
          </div>

          <h6
            className={
              darkMode
                ? "heading-small text-muted mb-4"
                : "heading-small text-muted mb-4 text-white"
            }
          >
            İletişim Bilgileri
          </h6>
          <div className="pl-lg-3">
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
                    Telefon Numarası
                  </label>
                  <label
                    id="input-city"
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

              <div className="col-lg-6">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-email"
                  >
                    E-mail
                  </label>
                  <label
                    id="input-email"
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
              <div className="col-lg-12">
                <div className="form-group">
                  <label
                    className={
                      darkMode
                        ? "form-control-label"
                        : "form-control-label text-white"
                    }
                    htmlFor="input-address"
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
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
