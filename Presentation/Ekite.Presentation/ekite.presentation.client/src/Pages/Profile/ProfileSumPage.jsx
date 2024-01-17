import React, { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import ProfileSum from "../../Components/Profile/ProfileSum";
import { PageContext } from "../../context/PageContext";

const ProfileSumPage = () => {

    const {fetchData,getDirectorById} = useContext(ProfileContext)
    const { id, setId,userRole } =
    useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const {handlePrevPage} = useContext(PageContext)

  useEffect(() => {
    console.log("profilsum çalıştı kullanıcı rolü",userRole,id);
    if (id !== 0) {
      (async () => {
        try {
          handlePrevPage(location.pathname)
          if(userRole === "Employee"){
            let data = await fetchData(id);
            setProfileData(data);
          }
          else if(userRole === "Admin"){
            let data = await getDirectorById(id)
            console.log(data);
            setProfileData(data)
          }
        } catch (error) {}
      })();

    } else {
      const storedEmployeeId = localStorage.getItem("id");
      if (storedEmployeeId) {
        setId(parseInt(storedEmployeeId));
      }
    }
  }, [id]);

  return (
    <>
       {profileData ? (    
        <div className="main-content"  id="panel">
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
