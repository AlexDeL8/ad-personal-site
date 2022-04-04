import { React, useEffect } from "react";
import headerStyles from "../../../styles/Header.module.sass";
import SiteLogo from "/public/personal-site-logo.png";

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
                    <img
                        className={headerStyles.active}
                        id={headerStyles.adLogoImg}
                        alt="Alex De Luca logo"
                        src={SiteLogo.src}
                    ></img>
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
