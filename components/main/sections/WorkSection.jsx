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
                    description:
                        "Twitch IRC bot for Xbox Live profile achievement stats live in chat",
                    link: "https://github.com/AlexDeL8/tenbot",
                },
            ],
        },
        {
            title: "Articles",
            items: [
                {
                    img: FactoryPatternArticleImg.src,
                    title: "Efficient Object Creation with The Factory Design Pattern (in JavaScript)",
                    description:
                        "Medium blog post on the Factory Design Pattern (example code included)",
                    link: "https://medium.com/codex/efficient-object-creation-with-the-factory-design-pattern-in-javascript-e99e86b89d9f",
                },
                {
                    img: SingletonPatternArticleImg.src,
                    title: "One-and-Done with The Singleton Pattern (in JavaScript)",
                    description:
                        "Medium blog post on the Singleton Pattern (example code included)",
                    link: "https://medium.com/@alexdel/one-and-done-with-the-singleton-pattern-in-javascript-d3075ee4631e",
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
