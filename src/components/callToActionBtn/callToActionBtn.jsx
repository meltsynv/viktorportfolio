import React from "react";
import './callToActionBtn.style.css'

const CallToActionBtn = ({title, link, cssName}) => {
    return (
        <div className="call-to-action-btn">
            <a className={cssName} href={link}><span>{title}</span></a>
        </div>
    );
}

export default CallToActionBtn;