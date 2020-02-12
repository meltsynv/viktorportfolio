import React from "react";
//Fontawesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({
  id,
  backgroundImage,
  link,
  linkDescribtion,
  cardIcon,
  devDescribtion
}) {
  return (
    <div
      id={id}
      className={"card"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <a
        className={"card-link"}
        rel="noopener noreferrer"
        href={link}
        target={"_blank"}
      >
        {linkDescribtion} <FontAwesomeIcon icon={faArrowRight} />
      </a>
      <div className="card-icon"><FontAwesomeIcon icon={cardIcon}/></div>
      <div className={"dev"}>
        <span>{devDescribtion}</span>
      </div>
    </div>
  );
}

export default Card;
