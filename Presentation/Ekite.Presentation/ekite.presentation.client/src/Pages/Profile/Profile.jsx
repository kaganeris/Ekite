import React from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import ProfileCard from "../../Components/Profile/ProfileCard";
import ProfileHeader from "../../Components/Profile/ProfileHeader";

function Profile() {
    return (
        <>
            <div className="main-content" id="panel">
                <div
                    className="header pb-6 d-flex align-items-center"
                    style={{
                        minHeight: "500px",
                        backgroundImage: "url(src/assets/img/theme/profile-cover.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                >                  
                    <ProfileHeader/>
                </div>

                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col-xl-4 order-xl-2">
                            <div className="card card-profile">                            
                                <ProfileCard/>
                            </div>
                        </div>
                        <div className="col-xl-8 order-xl-1">                           
                            <ProfileDetails/>
                        </div>
                    </div>                   
                </div>
            </div>
        </>
    );
}

export default Profile;
