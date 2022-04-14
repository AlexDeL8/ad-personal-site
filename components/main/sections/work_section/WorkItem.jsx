import React from "react";
import mainStyles from "../../../../styles/Home.module.sass";

const WorkItem = (props) => {
    return (
        <li className={mainStyles.workItem}>
            <a href={props.itemLink} target="_blank">
                <img className={mainStyles.workItemImg} src={props.itemImg} />
                <div className={mainStyles.workItemInfo}>
                    <p className={mainStyles.workItemTitle}>
                        {props.itemTitle}
                    </p>
                    <p className={mainStyles.workItemDescription}>
                        {props.itemDesc}
                    </p>
                </div>
            </a>
        </li>
    );
};

export default WorkItem;
