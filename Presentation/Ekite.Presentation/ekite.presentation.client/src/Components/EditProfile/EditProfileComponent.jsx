import React from "react";

function EditProfileComponent() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col-8">
                        <h3 className="mb-0">Profili Guncelle </h3>
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
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="input-username"
                                        className="form-control"
                                        placeholder="Username"
                                       
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-email"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="input-email"
                                        className="form-control"
                                        placeholder="jesse@example.com"
                                    />
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
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="input-first-name"
                                        className="form-control"
                                        placeholder="First name"
                                        
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-last-name"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="input-last-name"
                                        className="form-control"
                                        placeholder="Last name"
                                    
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">
                        Contact information
                    </h6>
                    <div className="pl-lg-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-address"
                                    >
                                        Address
                                    </label>
                                    <input
                                        id="input-address"
                                        className="form-control"
                                        placeholder="Home Address"
                                       
                                        type="text"
                                    />
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
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="input-city"
                                        className="form-control"
                                        placeholder="City"
                                        
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-country"
                                    >
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="input-country"
                                        className="form-control"
                                        placeholder="Country"
                                     
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-country"
                                    >
                                        Postal code
                                    </label>
                                    <input
                                        type="number"
                                        id="input-postal-code"
                                        className="form-control"
                                        placeholder="Postal code"
                                    />
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
                                        Kaydet
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default EditProfileComponent;