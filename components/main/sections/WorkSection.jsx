import React from "react";
import mainStyles from "../../../styles/Home.module.sass";
// import ReactLogo from "/public/main/react-icon.png";
import TenBotImg from "/public/work/twitchBotBackground.jpg";
import FactoryPatternArticleImg from "/public/work/Factory.jpg";
import SingletonPatternArticleImg from "/public/work/Satellite.jpg";

import WorkList from "./work_section/WorkList.jsx";

const WorkSection = (props) => {
    const workLists = [
        {
            title: "Projects",
            items: [
                {
                    img: TenBotImg.src,
                    title: "TENBot",
                    description: "Twitch IRC bot for Xbox Live profile achievement stats live in chat",
                },
            ],
        },
        {
            title: "Articles",
            items: [
                {
                    img: FactoryPatternArticleImg.src,
                    title: "Efficient Object Creation with The Factory Design Pattern (in JavaScript)",
                    description: "Medium blog post on the Factory Design Pattern influenced by Learning JavaScript Design Patterns by Addy Osmani",
                },
                {
                    img: SingletonPatternArticleImg.src,
                    title: "One-and-Done with The Singleton Pattern (in JavaScript)",
                    description: "Medium blog post on the Singleton Pattern influenced by Learning JavaScript Design Patterns by Addy Osmani",
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
