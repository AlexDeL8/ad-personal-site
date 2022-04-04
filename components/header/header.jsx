import { React } from "react";
import headerStyles from "../../styles/Header.module.sass";

import HeaderLinks from "./header_links/HeaderLinks.jsx";

const Header = () => {
    return (
        <header className={headerStyles.header} id="header">
            <nav className={headerStyles.headerNav}>
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
    );
};

export default Header;
