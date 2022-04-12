import { React } from "react";
import Head from "next/head";
import Image from "next/image"
import mainStyles from "../styles/Home.module.sass";
import SiteLogoTp from "/public/personal-site-logo-tp.ico";

import Header from "../components/header/Header.jsx";
import MainContent from "../components/main/MainContent.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function Home() {
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

            <div className="backgroundImageContainer">
                <Image
                    src="/public/main/wood-desk-bw.jpg"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
