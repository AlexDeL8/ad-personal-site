import { useState, useRef, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Alex De Luca</title>
                <meta
                    name="Alex De Luca's personal website"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/personal-site-logo-tp.ico" />
            </Head>

            <header>
                <nav className="HeaderNav">
                    <ul className="HeaderLinks">
                        <li className="HeaderLink">
                            <a>Home</a>
                        </li>
                        <li className="HeaderLink">
                            <a>About</a>
                        </li>
                        <li className="HeaderLink">
                            <a>Resume</a>
                        </li>
                        <li className="HeaderLink">
                            <a>Work</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className={styles.main}>
                <img
                    className={styles.profilePic}
                    alt="Alex De Luca profile picture"
                    src="/main/ad-profile.jpg"
                ></img>

                <p className={styles.description}>
                    Alex De Luca <br></br>
                    <code className={styles.code}>
                        Software Engineer - &#123;Frontend Focused&#125;
                    </code>
                </p>
            </main>

            <footer className={styles.footer}>
                <nav className={styles.footerNav}>
                    <ul className={styles.footerLinks}>
                        <li className={styles.footerLink}>
                            <a
                                href="https://www.linkedin.com/in/alex-de-luca/"
                                target="_blank"
                            >
                                <img
                                    // ref={image}
                                    className={styles.footerLinkImg}
                                    src="/linkedin-icon.png"
                                ></img>
                            </a>
                        </li>
                        <li className={styles.footerLink}>
                            <a
                                href="https://github.com/AlexDeL8"
                                target="_blank"
                            >
                                <img
                                    className={styles.footerLinkImg}
                                    src="/github-icon.png"
                                ></img>
                            </a>
                        </li>
                        <li className={styles.footerLink}>
                            <a
                                href="https://codesandbox.io/u/alexdel"
                                target="_blank"
                            >
                                <img
                                    className={styles.footerLinkImg}
                                    src="/codesandbox-icon.png"
                                ></img>
                            </a>
                        </li>
                        <li className={styles.footerLink}>
                            <a
                                href="https://codepen.io/AlexDeL"
                                target="_blank"
                            >
                                <img
                                    className={styles.footerLinkImg}
                                    src="/codepen-icon.png"
                                ></img>
                            </a>
                        </li>
                        <li className={styles.footerLink}>
                            <a href="mailto:alexnaj88@gmail.com">
                                <img
                                    className={styles.footerLinkImg}
                                    src="/email-icon.png"
                                ></img>
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
