import React from "react";
import mainStyles from "../../../styles/Home.module.sass";

import TenBotImg from "/public/work/twitchBotBackground.jpg";
import ColorPickerImg from "/public/work/ColorTab.png";
import GithubSearchImg from "/public/work/GithubSearchedProfile.png";

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
                {
                    img: ColorPickerImg.src,
                    title: "React Color Picker",
                    description:
                        "React widget to select, save, and delete colors",
                    link: "https://codesandbox.io/s/color-picker-ursz0",
                },
                {
                    img: GithubSearchImg.src,
                    title: "Github User Card",
                    description:
                        "With a fully responsive design - learn some basic stats about yours or anyone else's Github profile",
                    link: "https://codesandbox.io/s/github-user-card-4bhdr?file=/src",
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
                {
                    img: TenBotImg.src,
                    title: "The Journey of TENbot: A Twitch chatbot in Node.js (Part 1)",
                    description:
                        "The design process of a Twitch chatbot made in Node.js that includes Xbox Live profile stat integration.",
                    link: "https://medium.com/@alexdel/the-journey-of-tenbot-a-twitch-chatbot-in-node-js-part-1-660ca0206f20",
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
