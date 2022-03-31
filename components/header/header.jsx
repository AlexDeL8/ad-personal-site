import React from "react";
import headerStyles from "../../styles/Header.module.sass";
import SiteLogo from "/public/personal-site-logo.png";

import HeaderLinks from "./header_links/header_links.jsx";

const Header = () => {
    return (
        <>
            <header className={headerStyles.header} id="header">
                <nav className={headerStyles.headerNav}>
                    <a href="#header">
                        <img
                            className={headerStyles.adLogo}
                            alt="Alex De Luca logo"
                            src={SiteLogo.src}
                        ></img>
                    </a>
                    <HeaderLinks
                        headerLinksArr={[
                            { linkHref: "#aboutSection", linkText: "About" },
                            { linkHref: "#resumeSection", linkText: "Resume" },
                            { linkHref: "#workSection", linkText: "Work" },
                            { linkHref: "#footer", linkText: "Connect" },
                        ]}
                    />
                </nav>
            </header>
        </>
    );
};

export default Header;
