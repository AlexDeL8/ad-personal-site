import React from "react";
import mainStyles from "../../../styles/Home.module.sass";
import ReactLogo from "/public/main/react-icon.png";

import WorkList from "./work_section/WorkList.jsx";

const WorkSection = (props) => {
    const workLists = [
        {
            title: "Projects",
            items: [
                {
                    img: ReactLogo.src,
                    title: "Project 1",
                    description: "This is project 1",
                },
                {
                    img: ReactLogo.src,
                    title: "Project 2",
                    description: "This is project 2",
                },
            ],
        },
        {
            title: "Articles",
            items: [
                {
                    img: ReactLogo.src,
                    title: "Article 1",
                    description: "This is article 1",
                },
                {
                    img: ReactLogo.src,
                    title: "Article 2",
                    description: "This is article 2",
                },
            ],
        },
    ];

    return (
        <section className={mainStyles.workSection} id="workSection">
            <h2 className={mainStyles.sectionTitle}>{props.title}</h2>
            {workLists.map((workListObj, index) => (
                <WorkList
                    workListTitle={workListObj.title}
                    workItems={workListObj.items}
                    key={index}
                />
            ))}
        </section>
    );
};

export default WorkSection;
