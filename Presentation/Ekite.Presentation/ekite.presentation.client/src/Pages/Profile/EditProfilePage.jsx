import React, { useContext, useEffect, useState } from "react";

import EditProfileComponent from "../../Components/Profile/EditProfileComponent";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import { PageContext } from "../../context/PageContext";

function EditProfilePage() {
  const { updatePersonelData,updateDirectorData } = useContext(ProfileContext);
  const { id, setId, userRole } =
    useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const { handlePrevPage } = useContext(PageContext)

  useEffect(() => {
    if (id !== 0) {
      (async () => {
          try {
              handlePrevPage(location.pathname)
          if(userRole === "Employee"){
            let data = await updatePersonelData(id);
            setProfileData(data);
          }
          else if(userRole === "Admin"){
            let data = await updateDirectorData(id)
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
    {profileData && <div className="main-content" id="panel">
              <div className="col-xl-12 order-xl-2  ">
          
              <EditProfileComponent profileData={profileData}  id ={id}/>
            
        </div>
      </div>}

    </>
  );
}

export default EditProfilePage;
