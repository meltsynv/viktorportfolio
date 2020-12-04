import React from "react";
import './downloadBtn.Style.css'

//Fontawesome-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadBtn = ({ title, cssName }) => {
    return (
        <div className="call-to-action-btn">
            <a
                className={cssName}
                href={require("../../assets/Lebenslauf_viktor_meltsyn.pdf")}
                download="Lebenslauf Viktor Meltsyn">
                <span className="downloadbtn">
                    {title}
                    <FontAwesomeIcon icon={faDownload} />
                </span>
                
            </a>
        </div>
    );
}

export default DownloadBtn;