import React from "react";
import mainStyles from "../../../styles/Home.module.sass";
import ReactLogo from "/public/main/react-icon.png";
import GithubIcon from "/public/footer/github-icon-white.png";

const WorkSection = (props) => {
    return (
        <section className={mainStyles.workSection} id="workSection">
            <h2 className={mainStyles.sectionTitle}>Work</h2>
            <p className={mainStyles.workListLabel}>Projects</p>
            <ul className={mainStyles.workList}>
                <li className={mainStyles.workItem}>
                    <img
                        className={mainStyles.workItemImg}
                        src={ReactLogo.src}
                    />
                    <div className={mainStyles.workItemInfo}>
                        <p className={mainStyles.workItemTitle}>Title</p>
                        <p className={mainStyles.workItemDescription}>
                            This is the description of the item
                        </p>
                        <a href="#">
                            <img
                                className={mainStyles.workItemGit}
                                src={GithubIcon.src}
                            />
                        </a>
                    </div>
                </li>
                <li className={mainStyles.workItem}>
                    <img
                        className={mainStyles.workItemImg}
                        src={ReactLogo.src}
                    />
                    <div className={mainStyles.workItemInfo}>
                        <p className={mainStyles.workItemTitle}>Title</p>
                        <p className={mainStyles.workItemDescription}>
                            This is the description of the item
                        </p>
                        <a href="#">
                            <img
                                className={mainStyles.workItemGit}
                                src={GithubIcon.src}
                            />
                        </a>
                    </div>
                </li>
            </ul>
            <p className={mainStyles.workListLabel}>Articles</p>
            <ul className={mainStyles.workList}>
                <li className={mainStyles.workItem}>
                    <img
                        className={mainStyles.workItemImg}
                        src={ReactLogo.src}
                    />
                    <div className={mainStyles.workItemInfo}>
                        <p className={mainStyles.workItemTitle}>Title</p>
                        <p className={mainStyles.workItemDescription}>
                            This is the description of the item
                        </p>
                        <a href="#">
                            <img
                                className={mainStyles.workItemGit}
                                src={GithubIcon.src}
                            />
                        </a>
                    </div>
                </li>
                <li className={mainStyles.workItem}>
                    <img
                        className={mainStyles.workItemImg}
                        src={ReactLogo.src}
                    />
                    <div className={mainStyles.workItemInfo}>
                        <p className={mainStyles.workItemTitle}>Title</p>
                        <p className={mainStyles.workItemDescription}>
                            This is the description of the item
                        </p>
                        <a href="#">
                            <img
                                className={mainStyles.workItemGit}
                                src={GithubIcon.src}
                            />
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default WorkSection;
