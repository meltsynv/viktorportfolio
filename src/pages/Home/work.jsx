import React from "react";

//images
import MelsaroShop from "../../assets/images/melsaro-shop.jpg";
import MelsaroEditor from "../../assets/images/editor.jpg";
import CrwmClothingShop from "../../assets/images/crwn-clothing.jpg";
import Festival from "../../assets/images/Festival.jpg";
import EldoradoStaekhaus from "../../assets/images/EldoradoSteahaus.jpg";
import SchablonenEditor from "../../assets/images/SchablonenEditor.jpg";

//Fontawesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
  return (
    <div className={"work"}>
      <div className={"work-header"}>
        <div className={"vertical-line"} />
        <div className={"title"}>
          <h1>Projekte</h1>
        </div>
        <div className={"vertical-line"} />
      </div>
      <div className={"work-header"}>
        <div className={"vertical-line"} />
      </div>
      <div className={"work-body"}>
        <div
          className={"card"}
          style={{ backgroundImage: `url(${EldoradoStaekhaus})` }}
        >
          <a
            className={"card-link"}
            rel="noopener noreferrer"
            href={"http://steakhaus-wattenscheid.de"}
            target={"_blank"}
          >
            steakhaus <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <div className={"dev"}>
            <span>CSS, Scss, React</span>
          </div>
        </div>
        <div
          className={"card"}
          style={{ backgroundImage: `url(${CrwmClothingShop})` }}
        >
          <a
            className={"card-link"}
            rel="noopener noreferrer"
            href={"https://crwn-demo.netlify.com"}
            target={"_blank"}
          >
            demo shop besuchen <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <div className={"dev"}>
            <span>Scss, React, NodeJs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
