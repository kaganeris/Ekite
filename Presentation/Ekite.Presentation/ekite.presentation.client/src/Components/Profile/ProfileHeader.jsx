import React from "react";

function ProfileHeader() {
    return (
        <>
        <span className="mask bg-gradient-default opacity-8"></span>
        <div className="container-fluid d-flex align-items-center">
            <div className="row">
                <div className="col-lg-7 col-md-10">
                    <h1 className="display-2 text-white">Hello Jesse</h1>
                    <p className="text-white mt-0 mb-5">
                        This is your profile page. You can see the progress youve
                        made with your work and manage your projects or assigned tasks
                    </p>
                    <a href="/" className="btn btn-primary">
                        Edit profile
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProfileHeader;