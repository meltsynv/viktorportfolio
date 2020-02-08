import React from "react";

//assets
import PortfolioImg from '../../assets/images/01.jpg'
import PhotoshopLogo from  '../../assets/svg/photoshop.svg';
import IllustratorLogo from  '../../assets/svg/illustrator.svg';
import XdLogo from  '../../assets/svg/experience.svg';
import AxureLogo from  '../../assets/svg/axure.svg';
import SoftwareErgoLogo from  '../../assets/svg/softwareergo.svg';

//Fontawesome-icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBlenderPhone, faCode, faQuidditch} from "@fortawesome/free-solid-svg-icons";

const Aboutme = () => {
    return (
        <div id={"aboutme"} className={"aboutme"}>
            <div className={"aboutme-header"}>
                <div className={"vertical-line"}/>
                <div className={"portfolio-img"} style={{backgroundImage: `url(${PortfolioImg})`}}/>
                <div className={"vertical-line"}/>
            </div>
            <div className={"aboutme-body"}>
                <div className={"aboutme-section"}>
                    <div className={"top"}>
                        <h1>UI UX</h1>
                        <FontAwesomeIcon icon={faQuidditch}/>
                    </div>
                    <div className={"bottom"}>
                        <div className={"list"}><img src={PhotoshopLogo} className={"logos"} alt={"logos"}/><span>Photoshop</span></div>
                        <div className={"list"}><img src={IllustratorLogo} className={"logos"} alt={"logos"}/><span>Illustrator</span></div>
                        <div className={"list"}><img src={XdLogo} className={"logos"} alt={"logos"}/><span>Xd</span></div>
                        <div className={"list"}><img src={AxureLogo} className={"logos"} alt={"logos"}/><span>Axure</span></div>
                        <div className={"list"}><img src={SoftwareErgoLogo} className={"logos"} alt={"logos"}/><span>Software Ergonomie</span></div>
                    </div>
                </div>
                <div className={"aboutme-section"}>
                    <div className={"top"}>
                        <h1>FRONTEND</h1>
                        <FontAwesomeIcon icon={faCode}/>
                    </div>
                    <div className={"bottom"}>
                        <div className={"list"}><span>HTML</span></div>
                        <div className={"list"}><span>CSS, Sass, Scss, Less</span></div>
                        <div className={"list"}><span>JavaScript, ES6, jQuery</span></div>
                        <div className={"list"}><span>Bootstrap, Material-Ui</span></div>
                        <div className={"list"}><span>React, Symfony</span></div>
                    </div>
                </div>
                <div className={"aboutme-section"}>
                    <div className={"top"}>
                        <h1>SONSTIGES</h1>
                    </div>
                    <div className={"bottom"}>
                        <div className={"list"}><span>PHP, Java, C, C++</span></div>
                        <div className={"list"}><span>MySql, MongoDB</span></div>
                        <div className={"list"}><span>Git, Yarn, GitHub</span></div>
                    </div>
                </div>
                <div className={"aboutme-bottom"}/>
            </div>
        </div>
    );
}

export default Aboutme;