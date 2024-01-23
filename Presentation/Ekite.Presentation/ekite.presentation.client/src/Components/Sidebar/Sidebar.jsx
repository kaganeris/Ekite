import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Sidebar = () => {
  const { userRole } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={
        darkMode
          ? "sidenav navbar navbar-vertical p-1 fixed-left navbar-expand-xs navbar-light"
          : "sidenav navbar navbar-vertical p-1 fixed-left navbar-expand-xs navbar-light bg-dark"
      }
    >
      <div
        className="scrollbar-inner offcanvas"
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="sidebar-label"
      >
        <div className="sidenav-header align-items-center">
          <a
            href="/"
            className="d-flex justify-content-center  align-items-center p-3"
          >
            <img
              src="https://ekitedepo.blob.core.windows.net/yeni/ekiteLogo.png"
              className="img-fluid"
              style={{ width: "40%" }}
            />
          </a>
        </div>
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={darkMode ? "nav-link" : "nav-link text-white"}
                  to={"/"}
                >
                  <i className="fa-solid fa-house text-primary"></i>
                  <span className="nav-link-text">Anasayfa</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={darkMode ? "nav-link" : "nav-link text-white"}
                  to={"/profilesum"}
                >
                  <i className="ni ni-single-02 text-yellow"></i>
                  <span className="nav-link-text">Profil Detayı</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={darkMode ? "nav-link" : "nav-link text-white"}
                  to={"/EditProfile"}
                >
                  <i className="fas fa-gears text-purple"></i>
                  <span className="nav-link-text">Profili Güncelle</span>
                </Link>
              </li>

                {userRole==="SiteOwner" && ( <li className="nav-item dropdown ">
                    <a
                      className={
                        darkMode
                          ? "nav-link dropdown-toggle"
                          : "nav-link dropdown-toggle text-white"
                      }
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-calendar text-red"></i>
                      <span className="nav-link-text">Personel İşlemleri</span>
                    </a>
                    <div
                      className={
                        darkMode ? "dropdown-menu" : "dropdown-menu bg-dark"
                      }
                      aria-labelledby="navbarDropdown"
                      style={
                        darkMode ? {} : { boxShadow: "0px 0px 10px 0px white" }
                      }
                    >
                      <div className="container  ">
                        <div className="row " style={{ fontSize: "small" }}>


                          <div className="col  ">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/createEmployee"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-check text-green mr-2"></i>
                                <span>Personel Ekle</span>
                              </div>
                            </Link>
                          </div>


                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/pendingLeaveList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-hourglass-start text-yellow mr-2"></i>
                                <span> Personel Güncelle</span>
                              </div>
                            </Link>
                          </div>



                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/rejectLeaveList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-x text-red mr-2"></i>
                                <span> Personel Sil</span>
                              </div>
                            </Link>
                          </div>


                          
                        </div>
                      </div>
                    </div>
                  </li> )}


              {userRole === "Admin" && (
                <>
                  <li className="nav-item dropdown ">
                    <a
                      className={
                        darkMode
                          ? "nav-link dropdown-toggle"
                          : "nav-link dropdown-toggle text-white"
                      }
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-calendar text-red"></i>
                      <span className="nav-link-text">İzin İşlemleri</span>
                    </a>
                    <div
                      className={
                        darkMode ? "dropdown-menu" : "dropdown-menu bg-dark"
                      }
                      aria-labelledby="navbarDropdown"
                      style={
                        darkMode ? {} : { boxShadow: "0px 0px 10px 0px white" }
                      }
                    >
                      <div className="container  ">
                        <div className="row " style={{ fontSize: "small" }}>
                          <div className="col  ">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/approvedLeaveList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-check text-green mr-2"></i>
                                <span> Onaylanan İzin İstekleri</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/pendingLeaveList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-hourglass-start text-yellow mr-2"></i>
                                <span> Bekleyen İzin İstekleri</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/rejectLeaveList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-x text-red mr-2"></i>
                                <span> Reddedilen İzin İstekleri</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown ">
                    <a
                      className={
                        darkMode
                          ? "nav-link dropdown-toggle"
                          : "nav-link dropdown-toggle text-white"
                      }
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-calendar text-red"></i>
                      <span className="nav-link-text">Harcama İşlemleri</span>
                    </a>
                    <div
                      className={
                        darkMode ? "dropdown-menu" : "dropdown-menu bg-dark"
                      }
                      aria-labelledby="navbarDropdown"
                      style={
                        darkMode ? {} : { boxShadow: "0px 0px 10px 0px white" }
                      }
                    >
                      <div className="container  ">
                        <div className="row " style={{ fontSize: "small" }}>
                          <div className="col  ">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/approvedSpendList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-check text-green mr-2"></i>
                                <span> Onaylanan Harcama İstekleri</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/pendingSpendList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-hourglass-start text-yellow mr-2"></i>
                                <span> Bekleyen Harcama İstekleri</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/rejectSpendList"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa-solid fa-x text-red mr-2"></i>
                                <span> Reddedilen Harcama İstekleri</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}

              {userRole === "Employee" && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={
                        darkMode
                          ? "nav-link dropdown-toggle"
                          : "nav-link dropdown-toggle text-white"
                      }
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-calendar text-red"></i>
                      <span className="nav-link-text">İzin İşlemleri</span>
                    </a>
                    <div
                      className={
                        darkMode ? "dropdown-menu" : "dropdown-menu bg-dark"
                      }
                      aria-labelledby="navbarDropdown"
                      style={
                        darkMode ? {} : { boxShadow: "0px 0px 10px 0px white" }
                      }
                    >
                      <div className="container  ">
                        <div className="row ">
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/addLeave"}
                            >
                              <div className="dropdown-content">
                                <i className="fa fa-pencil text-red mr-2"></i>
                                <span>İzin Girişi</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/leaves"}
                            >
                              <div className="dropdown-content ">
                                <i className="fa fa-list mr-2 text-red"></i>
                                <span>İzin Listele</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className={
                        darkMode
                          ? "nav-link dropdown-toggle"
                          : "nav-link dropdown-toggle text-white"
                      }
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-dollar-sign "
                        style={{ color: "#0aa305" }}
                      ></i>
                      <span className="nav-link-text">Avans İşlemleri</span>
                    </a>
                    <div
                      className={
                        darkMode ? "dropdown-menu" : "dropdown-menu bg-dark"
                      }
                      aria-labelledby="navbarDropdown"
                      style={
                        darkMode ? {} : { boxShadow: "0px 0px 10px 0px white" }
                      }
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/createAdvance"}
                            >
                              <div className="dropdown-content">
                                <i
                                  className="fa fa-plus-circle mr-2"
                                  style={{ color: "#0aa305" }}
                                ></i>
                                <span>Avans Girişi</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/advanceList"}
                            >
                              <div className="dropdown-content">
                                <i
                                  className="fa fa-list mr-2"
                                  style={{ color: "#0aa305" }}
                                ></i>
                                <span>Avans Listele</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className={
                        darkMode
                          ? "nav-link dropdown-toggle"
                          : "nav-link dropdown-toggle text-white"
                      }
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-money-bill-wave"
                        style={{ color: "#64d38b" }}
                      ></i>
                      <span className="nav-link-text">Harcama İşlemleri</span>
                    </a>
                    <div
                      className={
                        darkMode ? "dropdown-menu" : "dropdown-menu bg-dark"
                      }
                      aria-labelledby="navbarDropdown"
                      style={
                        darkMode ? {} : { boxShadow: "0px 0px 10px 0px white" }
                      }
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/createspend"}
                            >
                              <div
                                className="dropdown-content"
                                style={{ marginLeft: "8px" }}
                              >
                                <i
                                  className="fa fa-plus-circle mr-2"
                                  style={{ color: "#64d38b" }}
                                ></i>
                                <span>Harcama Girişi</span>
                              </div>
                            </Link>
                          </div>
                          <div className="col">
                            <Link
                              className={
                                darkMode ? "dropdown-item" : "dropdownn-item"
                              }
                              to={"/spend"}
                            >
                              <div
                                className="dropdown-content"
                                style={{ marginLeft: "8px" }}
                              >
                                <i
                                  className="fa fa-list mr-2"
                                  style={{ color: "#64d38b" }}
                                ></i>
                                <span>Harcama Listele</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}


            </ul>
            <hr className={darkMode ? "my-3" : "my-3  bg-white"} />
          </div>
        </div>
        <div className="position-absolute bottom-2 right-2">
          {darkMode ? (
            <i
              onClick={toggleTheme}
              className="fa-solid fa-toggle-off fa-2xl"
            ></i>
          ) : (
            <i
              onClick={toggleTheme}
              className="fa-solid fa-toggle-on fa-2xl"
            ></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
