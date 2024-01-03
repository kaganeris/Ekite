
import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const {fetchData} = useContext(ProfileContext)
    const { employeeId, setEmployeeId, setIsAuthenticated,logout } =
    useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);


    const handleLogout = () => {
        logout()
    }


  useEffect(() => {
    if (employeeId !== 0) {
      (async () => {
        try {
          let data = await fetchData(employeeId);
          setProfileData(data);
        
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        setEmployeeId(parseInt(storedEmployeeId));
        setIsAuthenticated(true);
      }
    }
  }, [employeeId]);


    return (
        <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav align-items-center ml-md-auto">
                        <li className="nav-item d-xl-none">
                            <div className="pr-3 sidenav-toggler sidenav-toggler-dark active" data-action="sidenav-pin" data-target="/sidenav-main">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul className="navbar-nav align-items-center ml-auto ml-md-0 " style={{ cursor: "pointer" }}>
                        <li className="nav-item">
                            <div className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="media align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img alt="Image placeholder" src={profileData?.imagePath} />
                                    </span>
                                    <div className="media-body ml-2 d-none d-lg-block">
                                        <a className="mb-0 text-sm font-weight-bold">{profileData?.fullName}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-divider" ></div>
                                <a onClick={handleLogout} className="dropdown-item">
                                    <i className="ni ni-button-power"></i>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
