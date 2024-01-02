import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import Profile from "../../Pages/Profile/Profile";



const ProfileDetails = () => {


    const { profileData, loading } = useContext(ProfileContext);

    if (loading) {
        console.log("y�kleniyor")
        return (<div>Y�kleniyor</div>)
    }
    if (!profileData) {
        console.log("contextte veri bulunamad�.")
        return (<div>Bulunamad�</div>)
    }


    console.log(profileData);

    return (

        <div className="card">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col-8">
                        <h3 className="mb-0">Profil Bilgileri </h3>
                    </div>

                </div>
            </div>
            <div className="card-body">
                <form>
                    <h6 className="heading-small text-muted mb-4">
                        Calisan Bilgileri
                    </h6>
                    <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-username"

                                    >
                                        Isim
                                    </label>
                                    <label
                                        id="input-username"
                                        className="form-control"

                                    >{profileData.firstName}</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-secondName"

                                    >
                                        Ikinci Isim
                                    </label>
                                    <label
                                        id="input-username"
                                        className="form-control"

                                    >{profileData.secondName}</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-last-name"
                                    >
                                        Soyisim
                                    </label>
                                    <label

                                        id="input-last-name"
                                        className="form-control"

                                    >{profileData.lastName}</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-last-name"
                                    >
                                        Ikinci Soyisim
                                    </label>
                                    <label

                                        id="input-last-name"
                                        className="form-control"

                                    >{profileData.secondLastName}</label>
                                </div>
                            </div>


                           

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        TCKN
                                    </label>
                                    <label

                                        id="input-email"
                                        className="form-control"

                                    >{profileData.tcno}</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        Adres
                                    </label>
                                    <label

                                        id="input-email"
                                        className="form-control"

                                    >{profileData.address}</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        Meslek
                                    </label>
                                    <label

                                        id="input-email"
                                        className="form-control"

                                    >{profileData.jobName}</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        Meslek
                                    </label>
                                    <label

                                        id="input-email"
                                        className="form-control"

                                    >{profileData.departmentName}</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">


                        </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">
                        Iletisim Bilgileri
                    </h6>
                    <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-address"
                                    >
                                        Adres
                                    </label>
                                    <label

                                        className="form-control"
                                        placeholder="Home Address"

                                    >{profileData.address}</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-city"
                                    >
                                        Sehir
                                    </label>
                                    <label

                                        id="input-city"
                                        className="form-control"

                                    >{profileData.phoneNumber}</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        Sehir
                                    </label>
                                    <label

                                        id="input-email"
                                        className="form-control"

                                    >{profileData.email}</label>
                                </div>
                            </div>
                           
                           
                        </div>
                    </div>
                    <hr className="my-4" />

                    <div className="main-content">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-auto ">
                                    <a href="/EditProfile" className="btn btn-m btn-primary">
                                        Profili Guncelle
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ProfileDetails;