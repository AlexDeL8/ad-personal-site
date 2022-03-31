import React from "react";
import headerStyles from "../styles/Header.module.sass";

const HeaderLink = (props) => {
    return (
        <>
            <li className={headerStyles.headerLink}>
                <a href={props.linkHref}>{props.linkText}</a>
            </li>
        </>
    );
};

export default HeaderLink;
