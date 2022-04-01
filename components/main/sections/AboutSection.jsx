import React from "react";
import mainStyles from "../../../styles/Home.module.sass";

const AboutSection = (props) => {
    return (
        <section className={mainStyles.aboutSection} id="aboutSection">
            <h2 className={mainStyles.sectionTitle}>About</h2>
            <div className={mainStyles.aboutContentContainer}>
                <p className={mainStyles.aboutContent}>
                    I'm a self-driven software engineer, experienced in
                    developing both front-end and back-end sides of
                    applications. After having 5+ years of experience in the
                    industry, I strive to be a stellar member of any development
                    team by using strong communication and collaboration skills
                    along with technical skills.
                </p>
                <p className={mainStyles.aboutContent}>
                    I view software development as a journey that allows you to
                    touch multiple areas of the industry while refining your
                    core fundamentals as an engineer. My time in college I
                    focused on web design and quickly moved into my first
                    professional role utilizing said skills. After a
                    knowledgeable time in fin-tech (my latest role), I decided
                    to return to my original passion with my foot on the gas to
                    acquire more prevalent industry skills.
                </p>
                <p className={mainStyles.aboutContent}>
                    Recently, I've been working on multiple projects -
                    <em>
                        {" "}
                        from <strong>responsive design</strong>, to a{" "}
                        <strong>sample e-commerce site</strong>, a{" "}
                        <strong>chatbot</strong>, and more!{" "}
                    </em>
                    - while being mentored in the React space
                </p>
                <hr />
                <p className={mainStyles.aboutQuote}>
                    <em>
                        “Imperfectionists are perfectionists in a unique way.
                        Instead of expecting perfect results, the
                        imperfectionist expects perfect progress and
                        consistency.”
                    </em>{" "}
                    ― Stephen Guise
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
