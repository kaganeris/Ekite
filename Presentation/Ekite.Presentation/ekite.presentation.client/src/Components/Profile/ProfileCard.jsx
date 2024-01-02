import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
function ProfileCard() {


    const { profileData, loading } = useContext(ProfileContext);

    if (loading) {
        console.log("yükleniyor")
        return (<div>Yükleniyor</div>)
    }
    if (!profileData) {
        console.log("contextte veri bulunamadý.")
        return (<div>Bulunamadý</div>)
    }
    const birthDate = new Date(profileData.birthDate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();


    return (
        <>
            <img
                src="/src/assets/img/theme/img-1-1000x600.jpg"
                alt="#"
                className="card-img-top"
            />
            <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                        <a href="/">
                            <img
                                src={profileData.imagePath}
                                className="rounded-circle"
                                alt="#"
                            />
                        </a>

                    </div>
                </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

            </div>
            <div className="card-body pt-0">

                <div className="text-center mt-5">
                    <h5 className="h3">
                        {profileData.fullName}
                        <span className="font-weight-light">, {age}</span>
                    </h5>
                    <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>{profileData.address}
                    </div>
                    <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2"></i>{profileData.jobName}
                    </div>
                    <div>
                        <i className="ni education_hat mr-2"></i>{profileData.companyName}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;