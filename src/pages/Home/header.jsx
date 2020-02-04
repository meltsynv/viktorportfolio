import React from "react";
import HeaderBG from "../../assets/images/header-bg.jpg";

//Fontawesome-icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faXing} from "@fortawesome/free-brands-svg-icons";

//Components
import CallToActionBtn from "../../components/callToActionBtn/callToActionBtn";

const Header = () => {
    return (
        <div className={"header"} style={{backgroundImage: `url(${HeaderBG}`}}>
            <div className={"intro-wrapper"}>
                <h1>UI UX</h1>
                <h2>mit extras</h2>
                <div className={"social-links"}>
                    <a href={"https://www.instagram.com/viktor_meltsyn_design/"} target={"_blank"}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href={"https://www.xing.com/profile/Viktor_Meltsyn"} target={"_blank"}><FontAwesomeIcon icon={faXing}/></a>
                </div>
                <CallToActionBtn/>
            </div>
        </div>
    );
}

export default Header;