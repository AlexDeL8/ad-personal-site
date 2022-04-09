import React from "react";
import connectStyles from "../../styles/Connect.module.sass";

import LinkedInIcon from "/public/connect/linkedin-icon-white.png";
import GithubIcon from "/public/connect/github-icon-white.png";
import SandboxIcon from "/public/connect/codesandbox-icon-white.png";
import CodepenIcon from "/public/connect/codepen-icon-white.png";
import EmailIcon from "/public/connect/email-icon-white.png";

import ConnectLink from "./connectLink.jsx";

const ConnectLinks = (props) => {
    const connectLinksArr = [
        {
            connectLink: "https://www.linkedin.com/in/alex-de-luca/",
            connectLinkTarget: "_blank",
            connectLinkImg: LinkedInIcon.src,
        },
        {
            connectLink: "https://github.com/AlexDeL8",
            connectLinkTarget: "_blank",
            connectLinkImg: GithubIcon.src,
        },
        {
            connectLink: "https://codesandbox.io/u/alexdel",
            connectLinkTarget: "_blank",
            connectLinkImg: SandboxIcon.src,
        },
        {
            connectLink: "https://codepen.io/AlexDeL",
            connectLinkTarget: "_blank",
            connectLinkImg: CodepenIcon.src,
        },
        {
            connectLink: "mailto:alexnaj88@gmail.com",
            connectLinkTarget: "",
            connectLinkImg: EmailIcon.src,
        },
    ];

    return (
        <ul
            className={connectStyles.connectLinks}
            style={props.listFlexDirection}
            id={props.listId}
        >
            {connectLinksArr.map((connectLinkObj, index) => (
                <ConnectLink
                    connectLink={connectLinkObj.connectLink}
                    connectLinkTarget={connectLinkObj.connectLinkTarget}
                    connectLinkImg={connectLinkObj.connectLinkImg}
                    key={index}
                />
            ))}
        </ul>
    );
};

export default ConnectLinks;
