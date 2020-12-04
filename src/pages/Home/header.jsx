import React from "react";
import HeaderBG from "../../assets/images/header-bg.jpg";

//Fontawesome-icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faXing} from "@fortawesome/free-brands-svg-icons";

//Components
import CallToActionBtn from "../../components/callToActionBtn/callToActionBtn";
import DownloadBtn from "../../components/downloadBtn/downloadBtn";

const Header = () => {
    return (
        <div className={"header"} style={{backgroundImage: `url(${HeaderBG}`}}>
            <div className={"intro-wrapper"}>
                <h1>UI UX</h1>
                <h2>mit extras</h2>
                <div className={"social-links"}>
                    <a rel="noopener noreferrer" href={"https://www.instagram.com/viktor_meltsyn_design/"} target={"_blank"}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a rel="noopener noreferrer" href={"https://www.xing.com/profile/Viktor_Meltsyn"} target={"_blank"}><FontAwesomeIcon icon={faXing}/></a>
                    <a rel="noopener noreferrer" href={"https://github.com/meltsynv"} target={"_blank"}><FontAwesomeIcon icon={faGithub}/></a>
                </div>
                <CallToActionBtn
                    title = "erfahre mehr"
                    cssName = "custom-link"
                    link = "#aboutme"
                />
                <DownloadBtn
                    title = "Lebenslauf"
                    cssName= "custom-link"
                />
            </div>
        </div>
    );
}

export default Header;