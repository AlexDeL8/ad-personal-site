import React from "react";
import footerStyles from "../../styles/Footer.module.sass";

import ConnectLinks from "../connect/connectLinks.jsx";

const Footer = () => {
    return (
        <footer className={footerStyles.footer} id="footer">
            <nav className={footerStyles.footerNav}>
                <ConnectLinks
                    listFlexDirection={{ flexDirection: "row" }}
                    listId="footerConnect"
                />
                <p>
                    <strong>Copyright &copy; 2022 - Alex De Luca</strong>
                </p>
            </nav>
        </footer>
    );
};

export default Footer;
