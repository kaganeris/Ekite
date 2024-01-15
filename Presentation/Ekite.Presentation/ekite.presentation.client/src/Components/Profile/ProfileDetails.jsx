import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";


const ProfileDetails = ({ profileData }) => {
    const { loading } = useContext(ProfileContext);
    const {darkMode} = useContext(ThemeContext)

    if (loading) {
        return (<div>Yükleniyor</div>);
    }

    return (
        <div className={darkMode ? "card" : "card bg-dark"}>

            <div className="card-body">
                <form>
                    <h6 className="heading-small text-muted mb-3">Çalisan Bilgileri</h6>

                    <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-username"
                                    >
                                        İsim
                                    </label>
                                    <label id="input-username" className="form-control">
                                        {profileData.secondName === null ? profileData.firstName : profileData.firstName + " " + profileData.secondName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-secondName"
                                    >
                                        Soyisim
                                    </label>
                                    <label id="input-username" className="form-control">
                                        {profileData.secondLastName === null ? profileData.lastName : profileData.lastName + " " + profileData.secondLastName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Meslek
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.jobName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Departman
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.departmentName}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2" />

                    <h6 className="heading-small text-muted mb-4">İletişim Bilgileri</h6>
                    <div className="pl-lg-3">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-city">
                                        Telefon Numarası
                                    </label>
                                    <label id="input-city" className="form-control">
                                        {profileData.phoneNumber}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        E-mail
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.email}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-12"> 
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="input-address">
                                    Adres
                                </label>
                                <label className="form-control" placeholder="Home Address">
                                    {profileData.address}
                                </label>
                                </div>
                            </div>
                        </div>              
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileDetails;
