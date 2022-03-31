import React from "react";
import headerStyles from "../../../styles/Header.module.sass";

import HeaderLink from "./header_link.jsx";

const HeaderLinks = (props) => {
    return (
        <>
            <ul className={headerStyles.headerLinks}>
                {props.headerLinksArr.map((headerLinkObj) => (
                    <HeaderLink
                        linkHref={headerLinkObj.linkHref}
                        linkText={headerLinkObj.linkText}
                    />
                ))}
            </ul>
        </>
    );
};

export default HeaderLinks;
