import React from "react";
import connectStyles from "../../styles/Connect.module.sass";

const ConnectLink = (props) => {
    return (
        <li className={connectStyles.connectLink}>
            <a href={props.connectLink} target={props.connectLinkTarget}>
                <img
                    className={connectStyles.connectLinkImg}
                    src={props.connectLinkImg}
                ></img>
            </a>
        </li>
    );
};

export default ConnectLink;
