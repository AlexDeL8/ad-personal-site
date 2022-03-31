import React from "react";
import footerStyles from "../../../styles/Footer.module.sass";

import FooterLink from "./FooterLink.jsx";

const FooterLinks = (props) => {
    return (
        <>
            <ul className={footerStyles.footerLinks}>
                {props.footerLinksArr.map((footerLinkObj, index) => {
                    <FooterLink
                        footerLink={footerLinkObj.footerLink}
                        footerLinkTarget={footerLinkObj.footerLinkTarget}
                        footerLinkImg={footerLinkObj.footerLinkImg}
                        key={index}
                    />;
                })}
            </ul>
        </>
    );
};

export default FooterLinks;
