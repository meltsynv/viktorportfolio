import React from "react";

//images
import MelsaroShop from "../../assets/images/melsaro-shop.jpg";
import MelsaroEditor from "../../assets/images/editor.jpg";
import CrwmClothingShop from "../../assets/images/crwn-clothing.jpg";
import Festival from "../../assets/images/Festival.jpg";
import EldoradoStaekhaus from "../../assets/images/EldoradoSteahaus.jpg";
import SchablonenEditor from "../../assets/images/SchablonenEditor.jpg";

//Fontawesome-icons
import {
  faShoppingCart,
  faUtensils,
  faCalendar,
  faTools
} from "@fortawesome/free-solid-svg-icons";

//components
import Card from "../../components/card/card";

class Work extends React.Component {
  state = {
    card: [
      {
        id: 1,
        backgroundImage: `${MelsaroShop}`,
        link: "http://melsaro.de",
        linkDescribtion: "shop besuchen",
        cardIcon: faShoppingCart,
        devDescribtion: "Oxid, HTML, Css"
      },
      {
        id: 2,
        backgroundImage: `${MelsaroEditor}`,
        link: "http://editor.melsaro.de",
        linkDescribtion: "editor probieren",
        cardIcon: faShoppingCart,
        devDescribtion: "WordPress, HTML, Css"
      },
      {
        id: 3,
        backgroundImage: `${SchablonenEditor}`,
        link: "https://melsaro-manager-1-0.netlify.com",
        linkDescribtion: "schablonen generator",
        cardIcon: faTools,
        devDescribtion: "Material-Ui, JavaScript, React"
      },
      {
        id: 4,
        backgroundImage: `${Festival}`,
        link: "https://music-festival.netlify.com",
        linkDescribtion: "festival",
        cardIcon: faCalendar,
        devDescribtion: "Scss, React, Bootstrap"
      },
      {
        id: 5,
        backgroundImage: `${EldoradoStaekhaus}`,
        link: "http://steakhaus-wattenscheid.de",
        linkDescribtion: "steakhaus",
        cardIcon: faUtensils,
        devDescribtion: "CSS, Scss, React"
      },
      {
        id: 6,
        backgroundImage: `${CrwmClothingShop}`,
        link: "https://crwn-demo.netlify.com",
        linkDescribtion: "demo shop besuchen",
        cardIcon: faShoppingCart,
        devDescribtion: "Scss, React, NodeJs"
      }
    ]
  };

  listCards = () => {
    for (let i = 0; i <= 3; i++) {
      this.state.card.map(
        ({ id, backgroundImage, link, linkDescribtion, devDescribtion }) => (
          <Card
            key={(i = id)}
            backgroundImage={backgroundImage}
            link={link}
            linkDescribtion={linkDescribtion}
            devDescribtion={devDescribtion}
          />
        )
      );
    }
  };

  render() {
    return (
      <div className={"work"}>
        <div className={"work-header"}>
          <div className={"vertical-line"} />
          <div className={"title"}>
            <h1>Projekte</h1>
          </div>
          <div className={"vertical-line"} />
        </div>
        <div className={"work-body"}>
          {this.state.card.slice(0, 3).map(({ id, ...otherprops }) => (
            <Card key={id} {...otherprops} />
          ))}
        </div>
        <div className={"work-header"}>
          <div className={"vertical-line"} />
        </div>
        <div className={"work-body"}>
          {this.state.card.slice(3, 6).map(({ id, ...otherprops }) => (
            <Card key={id} {...otherprops} />
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
