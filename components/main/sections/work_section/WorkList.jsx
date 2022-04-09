import React from "react";
import mainStyles from "../../../../styles/Home.module.sass";

import WorkItem from "./WorkItem.jsx";

const WorkList = (props) => {

    return (
        <>
            <p className={mainStyles.workListLabel}>{props.workListTitle}</p>
            <ul className={mainStyles.workList}>
                {props.workItems.map((item, index) => (
                    <WorkItem
                        itemImg={item.img}
                        itemTitle={item.title}
                        itemDesc={item.description}
                        key={index}
                    />
                ))}
            </ul>
        </>
    );
};

export default WorkList;
