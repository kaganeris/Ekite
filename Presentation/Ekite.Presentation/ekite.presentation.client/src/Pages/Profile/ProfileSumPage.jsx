import React, { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import ProfileSum from "../../Components/Profile/ProfileSum";

const ProfileSumPage = () => {

    const {isAuthenticated} = useContext(AuthContext)
    const {fetchData} = useContext(ProfileContext)
    const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);

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
    <>
       {profileData ? (    
        <div className="main-content" id="panel">
          <div className="col-xl-12 order-xl-2">
         <ProfileSum profileData={profileData}/>
          </div>
        </div>
       ) : (
        <span>Yükleniyor</span>
      )} 
    </>
  );
};

export default ProfileSumPage;
