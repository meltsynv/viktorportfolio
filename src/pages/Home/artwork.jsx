import React from "react";

//Insta-images
import Insta_01 from '../../assets/images/insta/insta_01.jpg'
import Insta_02 from '../../assets/images/insta/insta_02.jpg'
import Insta_03 from '../../assets/images/insta/insta_03.jpg'
import Insta_04 from '../../assets/images/insta/insta_04.jpg'
import Insta_05 from '../../assets/images/insta/insta_05.jpg'
import Insta_06 from '../../assets/images/insta/insta_06.jpg'
import Insta_07 from '../../assets/images/insta/insta_07.jpg'
import Insta_08 from '../../assets/images/insta/insta_08.jpg'
import Insta_09 from '../../assets/images/insta/insta_09.jpg'
import Insta_10 from '../../assets/images/insta/insta_10.jpg'

const ArtWork = () => {
    return(
        <div className={"artwork"}>
            <div className={"artwork-header"}>
                <div className={"vertical-line"}/>
                <div className={"title"}>
                    <h1>Art</h1>
                </div>
                <div className={"vertical-line"}/>
            </div>
            <div className={"artwork-body"}>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_01})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_02})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_03})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_04})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_05})`}}/>
            </div>
            <div className={"artwork-header"}>
                <div className={"vertical-line"}/>
            </div>
            <div className={"artwork-body"}>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_06})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_07})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_08})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_09})`}}/>
                <div className={"art-card"} style={{backgroundImage: `url(${Insta_10})`}}/>
            </div>
        </div>
    )
}

export default ArtWork;