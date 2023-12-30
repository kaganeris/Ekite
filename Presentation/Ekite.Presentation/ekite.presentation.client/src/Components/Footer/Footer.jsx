import React from "react";

function Footer() {

    return (
        <footer className="footer pt-0">
            <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-2">

                </div>
                <div className="col-lg-6">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                        <li className="nav-item">
                            <a href="https://www.creative-tim.com" className="nav-link">
                                Creative Tim
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://www.creative-tim.com/presentation"
                                className="nav-link"
                            >
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="http://blog.creative-tim.com" className="nav-link">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                                className="nav-link"
                            >
                                MIT License
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;