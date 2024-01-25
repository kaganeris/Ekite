import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/PageContext";
import { AuthContext } from "../../context/AuthContext";
import { EmployeeContext } from "../../context/EmployeeContext";
import EmployeeProfileDetail from "../../Components/Employee/EmployeeProfileDetail";

const EmployeeProfileDetailPage = () => {
  const { employeeID,getAllDetailEmployee } = useContext(EmployeeContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (employeeID !== 0) {
      (async () => {
        try {
          let data = await getAllDetailEmployee(employeeID);
          console.log(data);
          setProfileData(data);
        } catch (error) {}
      })();
    } 
  }, []);

  return (
    <>
      {profileData ? (
        <div className="main-content" id="panel">
          <div className="col-xl-12 order-xl-2">
            < EmployeeProfileDetail profileData={profileData} />
          </div>
        </div>
      ) : (
        <span>Yükleniyor</span>
      )}
    </>
  );
};

export default EmployeeProfileDetailPage;
