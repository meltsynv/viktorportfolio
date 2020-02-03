import React from "react";

//images
import MelsaroShop from '../../assets/images/melsaro-shop.jpg'
import MelsaroEditor from '../../assets/images/editor.jpg'
import CrwmClothingShop from  '../../assets/images/crwn-clothing.jpg';
import Festival from '../../assets/images/Festival.jpg';
import EldoradoStaekhaus from '../../assets/images/EldoradoSteahaus.jpg';
import SchablonenEditor from  '../../assets/images/SchablonenEditor.jpg';

//Fontawesome-icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


const Work = () => {
    return (
        <div className={"work"}>
            <div className={"work-header"}>
                <div className={"vertical-line"}/>
                <div className={"title"}>
                    <h1>Projekte</h1>
                </div>
                <div className={"vertical-line"}/>
            </div>
            <div className={"work-body"}>
                <div className={"card"} style={{backgroundImage: `url(${MelsaroShop})`}}>
                    <a className={"card-link"} href={"#"}>shop besuchen <FontAwesomeIcon icon={faArrowRight}/></a>
                    <div className={"dev"}>
                        <span>Oxid, HTML, Css</span>
                    </div>
                </div>
                <div className={"card"} style={{backgroundImage: `url(${MelsaroEditor})`}}>
                    <a className={"card-link"} href={"#"}>editor probieren <FontAwesomeIcon icon={faArrowRight}/></a>
                    <div className={"dev"}>
                        <span>WordPress, HTML, Css</span>
                    </div>
                </div>
                <div className={"card"} style={{backgroundImage: `url(${SchablonenEditor})`}}>
                    <a className={"card-link"} href={"#"}>schablonen generator <FontAwesomeIcon icon={faArrowRight}/></a>
                    <div className={"dev"}>
                        <span>Material-Ui, JavaScript, React</span>
                    </div>
                </div>
            </div>
            <div className={"work-header"}>
                <div className={"vertical-line"}/>
            </div>
            <div className={"work-body"}>
                <div className={"card"} style={{backgroundImage: `url(${Festival})`}}>
                    <a className={"card-link"} href={"#"}> festival <FontAwesomeIcon icon={faArrowRight}/></a>
                    <div className={"dev"}>
                        <span>Scss, React, Bootstrap</span>
                    </div>
                </div>
                <div className={"card"} style={{backgroundImage: `url(${EldoradoStaekhaus})`}}>
                    <a className={"card-link"} href={"#"}>steakhaus <FontAwesomeIcon icon={faArrowRight}/></a>
                    <div className={"dev"}>
                        <span>CSS, Scss, React</span>
                    </div>
                </div>
                <div className={"card"} style={{backgroundImage: `url(${CrwmClothingShop})`}}>
                    <a className={"card-link"} href={"#"}>demo shop besuchen <FontAwesomeIcon icon={faArrowRight}/></a>
                    <div className={"dev"}>
                        <span>Scss, React, NodeJs</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;