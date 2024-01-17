import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar({ isSidebarOpen, setSidebarOpen }) {
    const { fetchData,getDirectorById } = useContext(ProfileContext)
    const { id, setId, setIsAuthenticated, logout,userRole } =
        useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const {darkMode} = useContext(ThemeContext)
   

    const toggleSidebar = () => {
        if (isSidebarOpen) {
            setSidebarOpen(false);
        }
        else {
            setSidebarOpen(true);
        }
    };

  const handleLogout = () => {
    Swal.fire({
      title: "Çıkış işlemi başarılı",
      text: "İyi günler dileriz...",
      imageUrl: "https://ekitedepo.blob.core.windows.net/yeni/ekiteLogo.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "logo",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
        logout();
        location.reload();
    }, 2000);
  };

  useEffect(() => {
    if (id !== 0) {
      (async () => {
        try {
          if (userRole == "Employee") {
            let data = await fetchData(id);
            setProfileData(data);
          } else if (userRole == "Admin") {
            let data = await getDirectorById(id);
            setProfileData(data);
          }
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("id");
      if (storedEmployeeId) {
        setId(parseInt(storedEmployeeId));
        setIsAuthenticated(true);
      }
    }
  }, [id]);


    return (
            < div
                className="main-content"
                style={{
                    marginLeft: isSidebarOpen ? "250px" : "0",
                    
                }}
            >
                <nav className={darkMode ? "navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom" : "navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom bg-dark"}>
                    <div className="container-fluid">
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav align-items right">
                                {!isSidebarOpen && (
                                    <li className="nav-item  ">

                                        <a href="/" className="d-flex justify-content-center  align-items-center" >
                                            <img src="https://ekitedepo.blob.core.windows.net/yeni/ekiteLogo.png" className="" style={{ width: "40px", height:"auto" }} />
                                        </a>                                
                                    </li>                                  
                                )}
                            </ul>

                            <ul className="navbar-nav align-items-center ml-md-auto">
                                <li className="nav-item d-xl">
                                    <div
                                        className="pr-3 sidenav-toggler sidenav-toggler-dark"
                                    >
                                        <div
                                            className="sidenav-toggler-inner "
                                            href="#sidebar"
                                            data-bs-toggle="offcanvas"

                                            role="button"
                                            aria-controls="sidebar"
                                            onClick={toggleSidebar}
                                        >
                                            {!isSidebarOpen ? <>  <i className="ni ni-align-center" style={{ color: "#ffffff" }}></i>
                                               
                                                 </> : <><i className="ni ni-align-left-2" style={{ color: "#ffffff" }} ></i></>}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center ml-auto ml-md-0">

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link pr-0"
                                        href="#"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <div className="media align-items-center">
                                            <div className="media-body ml-2 d-none d-lg-block mr-2">
                                                <span className="mb-0 text-sm font-weight-bold">
                                                    {profileData?.fullName}
                                                </span>
                                            </div>
                                            <span className="avatar avatar-sm rounded-circle">
                                                <img
                                                    alt="Image placeholder"
                                                    src={profileData?.imagePath}
                                                />
                                            </span>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-divider"></div>
                                    <a onClick={handleLogout} className="dropdown-item" type="button">
                                            <i className="ni ni-user-run"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >   
    );
}
export default Navbar;
