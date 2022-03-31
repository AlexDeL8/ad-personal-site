import Head from "next/head";
import { useEffect } from "react";

import Header from "../components/header/Header.jsx";

import SiteLogoTp from "/public/personal-site-logo-tp.ico";

import ProfilePicture from "/public/main/ad-profile.jpg";
import AdResumePreview from "/public/main/ad-resume-preview.png";
import ReactLogo from "/public/main/react-icon.png";

import LinkedInIcon from "/public/footer/linkedin-icon-white.png";
import GithubIcon from "/public/footer/github-icon-white.png";
import SandboxIcon from "/public/footer/codesandbox-icon-white.png";
import CodepenIcon from "/public/footer/codepen-icon-white.png";
import EmailIcon from "/public/footer/email-icon-white.png";

import mainStyles from "../styles/Home.module.sass";
import footerStyles from "../styles/Footer.module.sass";

export default function Home() {
    useEffect(() => {
        const parallaxScrolling1 = document.getElementById("container");
        const parallaxScrolling2 = document.getElementById("resumeSection");

        window.addEventListener("scroll", () => {
            let offset = window.scrollY;

            parallaxScrolling1.style.backgroundPositionY = `${offset * 0.1}px`;
            parallaxScrolling2.style.backgroundPositionY = `${offset * 0.1}px`;
        });
    }, []);

    return (
        <div className={mainStyles.container} id="container">
            <Head>
                <title>Alex De Luca</title>
                <meta
                    name="description"
                    content="Alex De Luca's personal portfolio site"
                />
                <meta
                    name="keywords"
                    content="NextJS, ReactJS, HTML, CSS, JavaScript"
                />
                <meta name="author" content="Alex De Luca" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href={SiteLogoTp.src} />
            </Head>
            <Header />

            <main className={mainStyles.main}>
                <section
                    className={mainStyles.section}
                    id={mainStyles.mainSection}
                >
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
                <section className={mainStyles.aboutSection} id="aboutSection">
                    <h2 className={mainStyles.sectionTitle}>About</h2>
                    <div className={mainStyles.aboutContentContainer}>
                        <p className={mainStyles.aboutContent}>
                            I'm a self-driven software engineer, experienced in
                            developing both front-end and back-end sides of
                            applications. After having 5+ years of experience in
                            the industry, I strive to be a stellar member of any
                            development team by using strong communication and
                            collaboration skills along with technical skills.
                        </p>
                        <p className={mainStyles.aboutContent}>
                            I view software development as a journey that allows
                            you to touch multiple areas of the industry while
                            refining your core fundamentals as an engineer. My
                            time in college I focused on web design and quickly
                            moved into my first professional role utilizing said
                            skills. After a knowledgeable time in fin-tech (my
                            latest role), I decided to return to my original
                            passion with my foot on the gas to acquire more
                            prevalent industry skills.
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
                                “Imperfectionists are perfectionists in a unique
                                way. Instead of expecting perfect results, the
                                imperfectionist expects perfect progress and
                                consistency.”
                            </em>{" "}
                            ― Stephen Guise
                        </p>
                    </div>
                </section>
                <section
                    className={mainStyles.resumeSection}
                    id="resumeSection"
                >
                    <h2
                        className={mainStyles.sectionTitle}
                        id={mainStyles.resumeSectionTitle}
                    >
                        Resume
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
                                <p className={mainStyles.workItemTitle}>
                                    Title
                                </p>
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
                                <p className={mainStyles.workItemTitle}>
                                    Title
                                </p>
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
                                <p className={mainStyles.workItemTitle}>
                                    Title
                                </p>
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
                                <p className={mainStyles.workItemTitle}>
                                    Title
                                </p>
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
            </main>

            <footer className={footerStyles.footer} id="footer">
                <nav className={footerStyles.footerNav}>
                    <ul className={footerStyles.footerLinks}>
                        <li className={footerStyles.footerLink}>
                            <a
                                href="https://www.linkedin.com/in/alex-de-luca/"
                                target="_blank"
                            >
                                <img
                                    className={footerStyles.footerLinkImg}
                                    src={LinkedInIcon.src}
                                ></img>
                            </a>
                        </li>
                        <li className={footerStyles.footerLink}>
                            <a
                                href="https://github.com/AlexDeL8"
                                target="_blank"
                            >
                                <img
                                    className={footerStyles.footerLinkImg}
                                    src={GithubIcon.src}
                                ></img>
                            </a>
                        </li>
                        <li className={footerStyles.footerLink}>
                            <a
                                href="https://codesandbox.io/u/alexdel"
                                target="_blank"
                            >
                                <img
                                    className={footerStyles.footerLinkImg}
                                    src={SandboxIcon.src}
                                ></img>
                            </a>
                        </li>
                        <li className={footerStyles.footerLink}>
                            <a
                                href="https://codepen.io/AlexDeL"
                                target="_blank"
                            >
                                <img
                                    className={footerStyles.footerLinkImg}
                                    src={CodepenIcon.src}
                                ></img>
                            </a>
                        </li>
                        <li className={footerStyles.footerLink}>
                            <a href="mailto:alexnaj88@gmail.com">
                                <img
                                    className={footerStyles.footerLinkImg}
                                    src={EmailIcon.src}
                                ></img>
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
