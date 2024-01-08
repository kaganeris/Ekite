import React, { useContext, useEffect, useState } from "react";

import EditProfileComponent from "../../Components/EditProfile/EditProfileComponent";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";

function EditProfilePage() {
  const { updatePersonelData } = useContext(ProfileContext);
  const { employeeId, setEmployeeId, setIsAuthenticated, isAuthenticated } =
    useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (employeeId !== 0) {
      (async () => {
        try {
          let data = await updatePersonelData(employeeId);
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
    {profileData && <div className="main-content" id="panel">
              <div className="col-xl-12 order-xl-2  ">
          
              <EditProfileComponent profileData={profileData}  employeeId ={employeeId}/>
            
        </div>
      </div>}

    </>
  );
}

export default EditProfilePage;
