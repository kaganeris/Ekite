import React, { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import ProfileCard from "../../Components/Profile/ProfileCard";
import ProfileHeader from "../../Components/Profile/ProfileHeader";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";

function ProfilePage() {
    const { isAuthenticated } = useContext(AuthContext)
    const { fetchData } = useContext(ProfileContext)
    const { id, setId, setIsAuthenticated,userRole } =
        useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        if (id !== 0) {
            (async () => {
                try {
                    if(userRole === "Employee"){
                        console.log("kullanıcı rolu employee çalıştı");
                        let data = await fetchData(id);
                        setProfileData(data);
                    }
                    else if(userRole === "Admin"){
                        console.log("kullanıcı rolu admin çalıştı");
                    }
                } catch (error) { }
            })();
        } else {
            const storedEmployeeId = localStorage.getItem("id");
            if (storedEmployeeId) {
                setId(parseInt(storedEmployeeId));
            }
        }
    }, [id]);



    return (
        <>{profileData ? <div className="main-content" id="panel">

            <div
                className="header pb-6 d-flex align-items-center "
                style={{
                    minHeight: "350px",
                    backgroundImage: "url(https://ekitedepo.blob.core.windows.net/yeni/profile-cover.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 30%"
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
