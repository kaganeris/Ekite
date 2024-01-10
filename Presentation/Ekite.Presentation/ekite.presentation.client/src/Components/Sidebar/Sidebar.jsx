import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner">
        <div className="d-flex justify-content-center  align-items-center">
          <a href="/" className="d-flex justify-content-center  align-items-center p-3">
            <img src="https://ekitedepo.blob.core.windows.net/yeni/ekiteLogo.png" className="img-fluid" style={{width:"40%"}}/>
          </a>
        </div>
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/profilesum"}>
                  <i className="ni ni-single-02 text-yellow"></i>
                  <span className="nav-link-text">Profil Detayı</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/EditProfile"}>
                  {/*<i className="ni ni-single-02 text-yellow"></i>*/}
                  <i className="fas fa-gears"></i>
                  <span className="nav-link-text">Edit Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/spend"}>
                  {/*<i className="ni ni-single-02 text-yellow"></i>*/}
                  <i className="fas fa-gears"></i>
                  <span className="nav-link-text">Harcamalarım</span>
                </Link>
              </li>
            </ul>
            <hr className="my-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
