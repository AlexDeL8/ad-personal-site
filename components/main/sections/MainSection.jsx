import React from "react";
import Image from "next/image";
import mainStyles from "../../../styles/Home.module.sass";
import MainBackgroundImage from "/public/main/wood-desk-bw.jpg";
import ProfilePicture from "/public/main/ad-profile.jpg";

import ConnectLinks from "../../connect/ConnectLinks.jsx";

const MainSection = () => {
    return (
        <section className={mainStyles.section} id={mainStyles.mainSection}>
            <div className={mainStyles.mainBackgroundImgDiv}>
                <Image
                    className={mainStyles.mainBackgroundImg}
                    src={MainBackgroundImage.src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                />
            </div>
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
            <ConnectLinks
                listFlexDirection={{ flexDirection: "row" }}
                listId="mainConnect"
            />
        </section>
    );
};

export default MainSection;
