import React from "react";
import headerStyles from "../../../styles/Header.module.sass";

import HeaderLink from "./HeaderLink.jsx";

const HeaderLinks = (props) => {
    return (
        <ul className={headerStyles.headerLinks}>
            {props.headerLinksArr.map((headerLinkObj, index) => (
                <HeaderLink
                    linkHref={headerLinkObj.linkHref}
                    linkText={headerLinkObj.linkText}
                    key={index}
                />
            ))}
        </ul>
    );
};

export default HeaderLinks;
