import React, { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import ProfileHeader from "../../Components/Profile/ProfileHeader";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import { LeaveContext } from "../../context/LeaveContext";
import DirectorCard from "../../components/Profile/DirectorCard";
import EmployeeCard from "../../components/Profile/EmployeeCard";
import { ThemeContext } from "../../context/ThemeContext";
import { PageContext } from "../../context/PageContext";
import SiteOwnerCard from "../../Components/Profile/SiteOwnerCard";

function ProfilePage() {
  const { isAuthenticated } = useContext(AuthContext);
  const { fetchData, getDirectorById ,getSiteOwnerById } = useContext(ProfileContext);
  const {darkMode} = useContext(ThemeContext);
  const { pendingLeaveDatas } = useContext(LeaveContext);

  const { id, setId, setIsAuthenticated, userRole } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [pendingLeaveList, setPendingLeaveList] = useState(null);
  const {handlePrevPage} = useContext(PageContext)

  useEffect(() => {
    if (id !== 0) {
      (async () => {
        try {
          handlePrevPage(location.pathname)
          if (userRole === "Employee") {
            console.log("kullanıcı rolu employee çalıştı");
            let data = await fetchData(id);
            setProfileData(data);
          } else if (userRole === "Admin") {
            let pendingListData = await pendingLeaveDatas();
            let data = await getDirectorById(id);
            setProfileData(data);
            setPendingLeaveList(pendingListData);
            console.log("kullanıcı rolu admin çalıştı");
            console.log("auth",isAuthenticated);
          }
          else if(userRole =="SiteOwner") {
            let data = await getSiteOwnerById(id)
            setProfileData(data);  
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
        <div className={darkMode ? "main-content" : "main-content bg-dark"} id="panel">
          <div
            className="header pb-6 d-flex align-items-center "
            style={{
              minHeight: "350px",
              backgroundImage:
                "url(https://ekitedepo.blob.core.windows.net/yeni/profile-cover.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "50% 30%",
            }}
          >
            <ProfileHeader profileData={profileData}/>
          </div>
          <div className="container-fluid mt--6">
            <div className="row ">
              <div className={userRole === "Employee" || "SiteOwner" ? "col-xl-4 order-xl-1" : "col-xl-6 order-xl-1"}>
                  {userRole === "Employee"  ? (
                <div className={darkMode ? "card card-profile " : "card card-profile bg-dark" }>
                    <EmployeeCard profileData={profileData} />
                    </div>
                  ) : userRole === "Admin" ?  (
                    <DirectorCard
                      profileData={profileData}
                      pendingLeaveList={pendingLeaveList}
                      setPendingLeaveList={setPendingLeaveList}
                    />
                  ) :  <div className={darkMode ? "card card-profile " : "card card-profile bg-dark" }>
                  <SiteOwnerCard profileData={profileData} />
                  </div> }
              </div>
              <div className={userRole === "Employee" || "SiteOwner" ? "col-xl-8 order-xl-2" : "col-xl-6 order-xl-2"}>
                <ProfileDetails profileData={profileData} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span>Yükleniyor</span>
      )}
    </>
  );
}

export default ProfilePage;
