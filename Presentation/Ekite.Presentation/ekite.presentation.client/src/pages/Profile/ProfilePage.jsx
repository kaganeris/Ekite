import React, { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import ProfileCard from "../../Components/Profile/ProfileCard";
import ProfileHeader from "../../Components/Profile/ProfileHeader";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";

function ProfilePage() {
    const { isAuthenticated } = useContext(AuthContext)
    const { fetchData } = useContext(ProfileContext)
    const { employeeId, setEmployeeId, setIsAuthenticated } =
        useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        if (employeeId !== 0) {
            (async () => {
                try {
                    let data = await fetchData(employeeId);
                    setProfileData(data);
                } catch (error) { }
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
        <>{profileData ? <div className="main-content" id="panel">

            <div
                className="header pb-6 d-flex align-items-center"
                style={{
                    minHeight: "400px",
                    backgroundImage: "url(https://ekitedepo.blob.core.windows.net/yeni/profile-cover.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 30%",
                }}
            >
                <ProfileHeader profileData={profileData} />
            </div>

            <div className="container-fluid mt--6 ">
                <div className="row " >

                    <div className="col-xl-4 order-xl-1" >
                        <div className="card card-profile  " >
                            <ProfileCard profileData={profileData} />
                        </div>
                    </div>

                    <div className="col-xl-8 order-xl-2">

                        <ProfileDetails profileData={profileData} />
                    </div>

                </div>
            </div>
        </div> : <span>Yükleniyor</span>}

        </>
    );
}

export default ProfilePage;
