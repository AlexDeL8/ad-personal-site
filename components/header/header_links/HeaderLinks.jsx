import { React, useEffect } from "react";
import headerStyles from "../../../styles/Header.module.sass";
import SiteLogo from "/public/ad-logo-frame.svg";

import HeaderLink from "./HeaderLink.jsx";

const HeaderLinks = (props) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let activeSectionId = setActiveNavLink();
            let activeNavId =
                activeSectionId === "Home_mainSection__GshWc"
                    ? (activeNavId = headerStyles.adLogoImg)
                    : (activeNavId = activeSectionId.replace("Section", ""));

            let activeNavElement = document.getElementById(activeNavId);
            activeNavElement.classList.add(`${headerStyles.active}`);
            clearInactiveNavLinks(activeNavId);
        });
    }, []);

    function setActiveNavLink() {
        let logo = document.getElementById(`${headerStyles.adLogoImg}`);
        let sections = document.getElementsByTagName("section");
        let currentSection = "";

        for (let section of sections) {
            if (
                window.scrollY >=
                section.offsetTop - section.clientHeight / 4
            ) {
                currentSection = section.getAttribute("id");
            }
        }

        if (currentSection === "") {
            currentSection = logo.getAttribute("id");
        }
        return currentSection;
    }

    function clearInactiveNavLinks(activeId) {
        let logo = document.getElementById(`${headerStyles.adLogoImg}`);
        let headerNavLinks = document.getElementsByClassName(
            `${headerStyles.headerLink}`
        );

        if (activeId !== headerStyles.adLogoImg) {
            logo.classList.remove(`${headerStyles.active}`);
        }

        for (let navLink of headerNavLinks) {
            if (navLink.getAttribute("id") !== activeId) {
                navLink.classList.remove(`${headerStyles.active}`);
            }
        }
    }

    return (
        <ul className={headerStyles.headerLinks}>
            <li
                className={headerStyles.headerLink}
                id={headerStyles.adLogoItem}
            >
                <a href="#" className={headerStyles.adLogoLink}>
                    <svg
                        className={headerStyles.active}
                        id={headerStyles.adLogoImg}
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id={headerStyles.adLogoFrame}>
                            <circle
                                id={headerStyles.logoBackground}
                                cx="60"
                                cy="60"
                                r="60"
                                fill="white"
                            />
                            <path
                                id={headerStyles.logoText}
                                d="M26.5755 44.844L28.2975 47.028V48.456C27.7655 48.456 27.2475 48.498 26.7435 48.582C26.0715 48.666 25.5675 48.82 25.2315 49.044C24.6155 49.492 24.3075 50.22 24.3075 51.228V57.654C24.2795 60.09 22.7675 61.518 19.7715 61.938V62.19C22.7955 62.61 24.3075 64.01 24.3075 66.39V66.474V72.858C24.3075 73.922 24.6155 74.65 25.2315 75.042C25.5395 75.294 26.0715 75.462 26.8275 75.546C27.3035 75.63 27.7935 75.672 28.2975 75.672V77.1L26.5755 79.284C26.4915 79.284 26.3515 79.27 26.1555 79.242C25.7915 79.214 25.5115 79.186 25.3155 79.158C23.7195 78.99 22.4595 78.626 21.5355 78.066C20.4155 77.282 19.8555 75.91 19.8555 73.95V67.65C19.8555 65.354 18.2035 64.206 14.8995 64.206V59.964C18.2035 59.964 19.8555 58.872 19.8555 56.688C19.8555 56.604 19.8555 56.548 19.8555 56.52V50.178C19.8555 48.218 20.4155 46.846 21.5355 46.062C22.4595 45.502 23.7195 45.138 25.3155 44.97C25.5115 44.942 25.8195 44.914 26.2395 44.886C26.3795 44.858 26.4915 44.844 26.5755 44.844ZM50.8867 68.952H39.6307L37.6147 75H31.3147L41.9827 44.928H48.8287L59.2447 75H52.8607L50.8867 68.952ZM49.2067 63.786L45.3007 52.026L41.3527 63.786H49.2067ZM63.15 75V44.928H74.91C79.306 44.928 82.47 46.09 84.402 48.414C86.838 51.326 88.056 55.176 88.056 59.964C88.056 64.78 86.838 68.63 84.402 71.514C82.442 73.838 79.278 75 74.91 75H63.15ZM69.324 69.834H74.91C79.558 69.834 81.882 66.544 81.882 59.964C81.882 53.384 79.558 50.094 74.91 50.094H69.324V69.834ZM91.7513 47.028L93.4733 44.844C93.5573 44.844 93.6973 44.858 93.8933 44.886C94.2573 44.914 94.5373 44.942 94.7333 44.97C96.3853 45.138 97.6453 45.502 98.5133 46.062C99.6613 46.874 100.235 48.246 100.235 50.178V56.52C100.235 56.604 100.235 56.702 100.235 56.814C100.235 58.914 101.873 59.964 105.149 59.964V64.206C101.873 64.206 100.235 65.354 100.235 67.65V73.95C100.235 75.882 99.6613 77.254 98.5133 78.066C97.6173 78.654 96.3293 79.032 94.6493 79.2L94.3973 79.242C94.0333 79.27 93.7393 79.284 93.5153 79.284L91.7513 77.1V75.672C92.3113 75.672 92.8293 75.63 93.3053 75.546C94.0053 75.462 94.5233 75.294 94.8593 75.042C95.4473 74.622 95.7413 73.894 95.7413 72.858V66.474V66.39C95.7413 64.01 97.2533 62.61 100.277 62.19V61.938C97.3373 61.518 95.8253 60.09 95.7413 57.654V51.228C95.7413 50.22 95.4473 49.492 94.8593 49.044C94.5233 48.792 93.9633 48.624 93.1793 48.54C92.5633 48.484 92.0873 48.456 91.7513 48.456V47.028Z"
                                fill="#146B2B"
                            />
                            <g id="top-arrows">
                                <path
                                    id={headerStyles.topArrow1}
                                    d="M62.8284 26.1716C61.2663 24.6095 58.7337 24.6095 57.1716 26.1716L31.7157 51.6274C30.1536 53.1895 30.1536 55.7222 31.7157 57.2843C33.2778 58.8464 35.8105 58.8464 37.3726 57.2843L60 34.6569L82.6274 57.2843C84.1895 58.8464 86.7222 58.8464 88.2843 57.2843C89.8464 55.7222 89.8464 53.1895 88.2843 51.6274L62.8284 26.1716ZM64 30V29H56V30H64Z"
                                    fill="#146B2B"
                                />
                                <path
                                    id={headerStyles.topArrow2}
                                    d="M62.8284 65.1716C61.2663 63.6095 58.7337 63.6095 57.1716 65.1716L31.7157 90.6274C30.1536 92.1895 30.1536 94.7222 31.7157 96.2843C33.2778 97.8464 35.8105 97.8464 37.3726 96.2843L60 73.6569L82.6274 96.2843C84.1895 97.8464 86.7222 97.8464 88.2843 96.2843C89.8464 94.7222 89.8464 92.1895 88.2843 90.6274L62.8284 65.1716ZM64 69V68H56V69H64Z"
                                    fill="#146B2B"
                                />
                            </g>
                        </g>
                    </svg>
                </a>
            </li>
            {props.headerLinksArr.map((headerLinkObj, index) => (
                <HeaderLink
                    linkHref={headerLinkObj.linkHref}
                    linkText={headerLinkObj.linkText}
                    key={index}
                />
            ))}
        </ul>
    );
};

export default HeaderLinks;
