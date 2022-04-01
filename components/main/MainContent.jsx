import React from "react";
import mainStyles from "../../styles/Home.module.sass";

import MainSection from "./sections/MainSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ResumeSection from "./sections/ResumeSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";

const MainContent = () => {
    return (
        <main className={mainStyles.main}>
            <MainSection />
            <AboutSection title="About" />
            <ResumeSection title="Resume" />
            <WorkSection title="Work" />
        </main>
    );
};

export default MainContent;
