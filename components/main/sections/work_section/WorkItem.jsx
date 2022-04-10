import React from "react";
import mainStyles from "../../../../styles/Home.module.sass";
import GithubIcon from "/public/connect/github-icon-white.png";
import MediumIcon from "/public/connect/medium-icon-white.png";

const WorkItem = (props) => {
    const itemLinkIcon =
        props.itemType === "Projects" ? GithubIcon.src : MediumIcon.src;

    return (
        <li className={mainStyles.workItem}>
            <img className={mainStyles.workItemImg} src={props.itemImg} />
            <div className={mainStyles.workItemInfo}>
                <p className={mainStyles.workItemTitle}>{props.itemTitle}</p>
                <p className={mainStyles.workItemDescription}>
                    {props.itemDesc}
                </p>
                <a href={props.itemLink} target="_blank">
                    <img
                        className={mainStyles.workItemIcon}
                        src={itemLinkIcon}
                    />
                </a>
            </div>
        </li>
    );
};

export default WorkItem;
