import Head from "next/head";
import { useEffect } from "react";

import mainStyles from "../styles/Home.module.sass";
import SiteLogoTp from "/public/personal-site-logo-tp.ico";

import Header from "../components/header/Header.jsx";
import MainContent from "../components/main/MainContent.jsx";
import Footer from "../components/footer/Footer.jsx";

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
            <MainContent />
            <Footer />
        </div>
    );
}
