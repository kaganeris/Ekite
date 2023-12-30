import React from "react";

function ProfileCard() {

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
                                src="src/assets/img/theme/team-4.jpg"
                                className="rounded-circle"
                                alt="#"
                            />
                        </a>

                    </div>
                </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                    <a href="/" className="btn btn-sm btn-info  mr-4 ">
                        Connect
                    </a>
                    <a href="/" className="btn btn-sm btn-default float-right">
                        Message
                    </a>
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="row">
                    <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center">
                            <div>
                                <span className="heading">22</span>
                                <span className="description">Friends</span>
                            </div>
                            <div>
                                <span className="heading">10</span>
                                <span className="description">Photos</span>
                            </div>
                            <div>
                                <span className="heading">89</span>
                                <span className="description">Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h5 className="h3">
                        Jessica Jones
                        <span className="font-weight-light">, 27</span>
                    </h5>
                    <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2"></i>Solution
                        Manager - Creative Tim Officer
                    </div>
                    <div>
                        <i className="ni education_hat mr-2"></i>University of
                        Computer Science
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;