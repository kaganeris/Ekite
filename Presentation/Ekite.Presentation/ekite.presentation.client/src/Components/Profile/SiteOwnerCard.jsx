import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SiteOwnerCard = ({ profileData }) => {
  const birthDate = new Date(profileData.birthDate);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      {profileData && (
        <>
          <img
            src="https://ekitedepo.blob.core.windows.net/yeni/img-1-1000x600.jpg"
            alt="#"
            className="card-img-top"
          />
          <div className="row justify-content-center">
            <div className="col-lg-3 order-lg-2">
              <div className="card-profile-image">
                <a href="/">
                  <img
                    src={profileData.imagePath}
                    className="rounded-circle"
                    alt="#"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              darkMode
                ? "card-header  text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                : "card-header bg-dark text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            }
          ></div>
          <div className="card-body pt-0">
            <div
              className={
                darkMode ? "text-center mt-5" : "text-center mt-5 text-white "
              }
            >
              <h5 className={darkMode ? "h3" : "h3 text-white"}>
                {profileData.fullName}
                <span className="font-weight-light">, {age}</span>
              </h5>
              <div
                className={
                  darkMode
                    ? "h5 font-weight-300 "
                    : "h5 font-weight-300 text-white"
                }
              >
                <i className="ni location_pin mr-2"></i>
                {profileData.address}
              </div>
              <div className={darkMode ? "h5 mt-4" : "h5 mt-4 text-white"}>
                <i className="ni business_briefcase-24 mr-2"></i>
                {profileData.jobName}
              </div>
              <div>
                <i className="ni education_hat mr-2"></i>
                {profileData.companyName}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SiteOwnerCard;
