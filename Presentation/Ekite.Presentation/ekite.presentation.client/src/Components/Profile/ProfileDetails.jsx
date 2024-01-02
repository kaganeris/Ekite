import React, { useContext } from "react";


const ProfileDetails=()=> {


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
                                        asda
                                    </label>
                                    <label
                                        id="input-username"
                                        className="form-control"

                                    >Buraya username gelecek</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        Email Adresi
                                    </label>
                                    <label

                                        id="input-email"
                                        className="form-control"

                                    >Buraya Email Gelecek</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-first-name"
                                    >
                                        Isim
                                    </label>
                                    <label

                                        id="input-first-name"
                                        className="form-control "

                                    >Buraya isim gelecek</label>
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
                                       
                                    >Buraya soyisim gelecek</label>
                                </div>
                            </div>
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
                                        
                                    >Buraya adres bilgisi gelecek</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
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
                                       
                                    >Buraya sehir bilgisi gelecek</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-country"
                                    >
                                        Ulke
                                    </label>
                                    <label
                                      
                                        id="input-country"
                                        className="form-control"
                                       
                                  >Buraya ulke bilgisi gelecek</label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-country"
                                    >
                                        Posta Kodu
                                    </label>
                                    <label
                                        
                                        id="input-postal-code"
                                        className="form-control"
                                       
                                    >Buraya posta kodu gelecek</label>
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