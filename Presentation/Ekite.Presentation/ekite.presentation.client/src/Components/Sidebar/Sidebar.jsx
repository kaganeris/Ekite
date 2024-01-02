import React from "react";

const Sidebar = () => {
    return (
        <nav
            className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
            id="sidenav-main"
        >
            <div className="scrollbar-inner">
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="/">
                        <img
                            src="src/assets/img/brand/blue.png"
                            className="navbar-brand-img"
                            alt="..."
                        />
                    </a>
                </div>
                <div className="navbar-inner">
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                           
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-tv-2 text-primary"></i>*/}
                            {/*        <span className="nav-link-text">Dashboard</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-planet text-orange"></i>*/}
                            {/*        <span className="nav-link-text">Icons</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-pin-3 text-primary"></i>*/}
                            {/*        <span className="nav-link-text">Google</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <a className="nav-link" href="/Profile">
                                    <i className="ni ni-single-02 text-yellow"></i>
                                    <span className="nav-link-text">Profile</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/EditProfile">
                                    <i className="ni ni-single-02 text-yellow"></i>
                                    <span className="nav-link-text">Edit Profile</span>
                                </a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-bullet-list-67 text-default"></i>*/}
                            {/*        <span className="nav-link-text">Tables</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-key-25 text-info"></i>*/}
                            {/*        <span className="nav-link-text">Login</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-circle-08 text-pink"></i>*/}
                            {/*        <span className="nav-link-text">Register</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="/">*/}
                            {/*        <i className="ni ni-send text-dark"></i>*/}
                            {/*        <span className="nav-link-text">Upgrade</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                        <hr className="my-3" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
