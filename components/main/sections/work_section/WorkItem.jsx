import React from "react";
import mainStyles from "../../../../styles/Home.module.sass";
import GithubIcon from "/public/connect/github-icon-white.png";

const WorkItem = (props) => {
    return (
        <li className={mainStyles.workItem}>
            <img className={mainStyles.workItemImg} src={props.itemImg} />
            <div className={mainStyles.workItemInfo}>
                <p className={mainStyles.workItemTitle}>{props.itemTitle}</p>
                <p className={mainStyles.workItemDescription}>
                    {props.itemDesc}
                </p>
                <a href="#">
                    <img
                        className={mainStyles.workItemGit}
                        src={GithubIcon.src}
                    />
                </a>
            </div>
        </li>
    );
};

export default WorkItem;
