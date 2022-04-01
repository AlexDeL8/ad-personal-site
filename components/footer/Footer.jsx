import React from "react";
import footerStyles from "../../styles/Footer.module.sass";

import LinkedInIcon from "/public/footer/linkedin-icon-white.png";
import GithubIcon from "/public/footer/github-icon-white.png";
import SandboxIcon from "/public/footer/codesandbox-icon-white.png";
import CodepenIcon from "/public/footer/codepen-icon-white.png";
import EmailIcon from "/public/footer/email-icon-white.png";

import FooterLinks from "./footer_links/FooterLinks.jsx";

const Footer = () => {
    return (
        <>
            <footer className={footerStyles.footer} id="footer">
                <nav className={footerStyles.footerNav}>
                    <FooterLinks
                        footerLinksArr={[
                            {
                                footerLink:
                                    "https://www.linkedin.com/in/alex-de-luca/",
                                footerLinkTarget: "_blank",
                                footerLinkImg: LinkedInIcon.src,
                            },
                            {
                                footerLink: "https://github.com/AlexDeL8",
                                footerLinkTarget: "_blank",
                                footerLinkImg: GithubIcon.src,
                            },
                            {
                                footerLink: "https://codesandbox.io/u/alexdel",
                                footerLinkTarget: "_blank",
                                footerLinkImg: SandboxIcon.src,
                            },
                            {
                                footerLink: "https://codepen.io/AlexDeL",
                                footerLinkTarget: "_blank",
                                footerLinkImg: CodepenIcon.src,
                            },
                            {
                                footerLink: "mailto:alexnaj88@gmail.com",
                                footerLinkTarget: "",
                                footerLinkImg: EmailIcon.src,
                            },
                        ]}
                    />
                    <p>Copyright &copy; 2022 Alex De Luca</p>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
