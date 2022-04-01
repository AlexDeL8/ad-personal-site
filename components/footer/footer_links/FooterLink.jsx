import React from "react";
import footerStyles from "../../../styles/Footer.module.sass";

const FooterLink = (props) => {
    return (
        <li className={footerStyles.footerLink}>
            <a href={props.footerLink} target={props.footerLinkTarget}>
                <img
                    className={footerStyles.footerLinkImg}
                    src={props.footerLinkImg}
                ></img>
            </a>
        </li>
    );
};

export default FooterLink;
