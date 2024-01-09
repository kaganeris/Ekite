import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        < nav
            className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white
        "
        >            <div
            className="scrollbar-inner offcanvas"
            tabIndex="-1"
            id="sidebar"
            aria-labelledby="sidebar-label"
        >
                <div className="sidenav-header align-items-center">
                    <a href="/" className="d-flex justify-content-center  align-items-center p-3">
                        <img src="https://ekitedepo.blob.core.windows.net/yeni/ekiteLogo.png" className="img-fluid" style={{ width: "40%" }} />
                    </a>
                </div>
                <div className="navbar-inner">
                    <div
                        className="collapse navbar-collapse"
                        id="sidenav-collapse-main"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>
                                    <i className="fa-solid fa-house text-primary" ></i>
                                    <span className="nav-link-text">Anasayfa</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/profilesum"}>
                                    <i className="ni ni-single-02 text-yellow"></i>
                                    <span className="nav-link-text">Profil Detayı</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/EditProfile"}>

                                    <i className="fas fa-gears text-purple"></i>
                                    <span className="nav-link-text">Profili Güncelle</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown" >
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-calendar text-red" ></i>
                                    <span className="nav-link-text">İzin İşlemleri</span>
                                </a>
                                <div className="dropdown-menu bg-white " aria-labelledby="navbarDropdown" >
                                    <div className="container  ">
                                        <div className="row ">
                                            <div className="col  ">
                                                <Link className="dropdown-item " to={"/addLeave"}>
                                                    <div className="dropdown-content ">
                                                        <i className="fa fa-pencil text-red mr-2" ></i>
                                                        <span>İzin Girişi</span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-item" to={"/leaves"}>
                                                    <div className="dropdown-content ">
                                                        <i className="fa fa-list mr-2 text-red" ></i>
                                                        <span>İzin Listele</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-dollar-sign " style={{ color:"#0aa305"} } ></i>
                                    <span className="nav-link-text">Avans İşlemleri</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <Link className="dropdown-item" to={"/avansgirisi"}>
                                                    <div className="dropdown-content" >
                                                        <i className="fa fa-plus-circle mr-2" style={{ color: "#0aa305" }}></i>
                                                        <span>Avans Girişi</span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-item" to={"/avanslisteleme"}>
                                                    <div className="dropdown-content" >
                                                        <i className="fa fa-list mr-2" style={{ color: "#0aa305" }} ></i>
                                                        <span>Avans Listele</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-money-bill-wave" style={{ color: "#64d38b" }}></i>
                                    <span className="nav-link-text">Harcama İşlemleri</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <Link className="dropdown-item" to={"/harcamagirisi"}>
                                                    <div className="dropdown-content" style={{ marginLeft: "8px" }}>
                                                        <i className="fa fa-plus-circle mr-2" style={{ color: "#64d38b" }}></i>
                                                        <span>Harcama Girişi</span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link className="dropdown-item" to={"/harcamalisteleme"}>
                                                    <div className="dropdown-content" style={{ marginLeft: "8px" }}>
                                                        <i className="fa fa-list mr-2" style={{ color: "#64d38b" }}></i>
                                                        <span>Harcama Listele</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <hr className="my-3" />
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Sidebar;
