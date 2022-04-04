import React from "react";
import headerStyles from "../../../styles/Header.module.sass";

const HeaderLink = (props) => {
    const idForTag = props.linkText.toLowerCase();
    return (
        <li className={headerStyles.headerLink} id={idForTag}>
            <a href={props.linkHref}>{props.linkText}</a>
        </li>
    );
};

export default HeaderLink;
