import React from "react";
import mainStyles from "../../../styles/Home.module.sass";
import AdResumePreview from "/public/main/ad-resume-preview.png";

const ResumeSection = (props) => {
    return (
        <section className={mainStyles.resumeSection} id="resumeSection">
            <h2
                className={mainStyles.sectionTitle}
                id={mainStyles.resumeSectionTitle}
            >
                {props.title}
            </h2>
            <a
                href="https://drive.google.com/file/d/1HlQKoaMWIpjxq0qWm2Tyz5AsbT0bNOnX/view?usp=sharing"
                target="_blank"
            >
                <img
                    className={mainStyles.resumePreview}
                    src={AdResumePreview.src}
                />
            </a>
            <p className={mainStyles.resumeNote}>
                (Click above to view and download)
            </p>
        </section>
    );
};

export default ResumeSection;
