import React from "react";

const LoginHeader = () => {
    return (
        <div className="header py-7 py-lg-8 pt-lg-9" style={{ backgroundImage: "url('https://ekitedepo.blob.core.windows.net/yeni/LOGO.FOTO.png')",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundColor: "#5e72e4",height:"500px" }}>
            <div className="container">
                <div className="header-body text-center mb-7">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 px-5">

                        </div>
                    </div>
                </div>
            </div>
            <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                    x="0"
                    y="0"
                    viewBox="0 0 2560 100"
                    preserveAspectRatio="none"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        className="fill-default"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </div>
    );
};

export default LoginHeader;
