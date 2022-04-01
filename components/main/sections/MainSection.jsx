import React from "react";
import mainStyles from "../../../styles/Home.module.sass";
import ProfilePicture from "/public/main/ad-profile.jpg";

const MainSection = () => {
    return (
        <section className={mainStyles.section} id={mainStyles.mainSection}>
            <img
                className={mainStyles.profilePic}
                alt="Alex De Luca profile picture"
                src={ProfilePicture.src}
            ></img>

            <h1 className={mainStyles.description}>
                Alex De Luca
                <p>(he/him)</p>
                <code className={mainStyles.code}>
                    Software Engineer - &#123;Frontend Focused&#125;
                </code>
            </h1>
        </section>
    );
};

export default MainSection;
