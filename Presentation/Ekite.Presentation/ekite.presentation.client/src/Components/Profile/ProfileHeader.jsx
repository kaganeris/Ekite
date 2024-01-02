import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";

function ProfileHeader() {


    const { profileData, loading } = useContext(ProfileContext);



    if (loading) {
        console.log("yükleniyor")
        return (<div>Yükleniyor</div>)
    }
    if (!profileData) {
        console.log("contextte veri bulunamadý.")
        return (<div>Bulunamadý</div>)
    }

    return (
        <>
            <span className="mask bg-gradient-default opacity-8"></span>
            <div className="container-fluid d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        <h1 className="display-2 text-white">Merhaba {profileData.fullName},</h1>
                        <p className="text-white mt-0 mb-5">
                            Yeni bir yýlýn baþlangýcýnda sizlere bolca mutluluk, baþarý ve saðlýk diliyoruz. Hep birlikte geçireceðimiz bu yýlda güzel anýlar biriktirmenizi ve hedeflerinize ulaþmanýzý temenni ediyoruz. Mutlu bir yýl geçirmeniz dileðiyle!
                        </p>
                        <a href="/EditProfile" className="btn btn-primary">
                            Edit profile
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileHeader;