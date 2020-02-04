import React from "react";

import Header from "./header";
import Aboutme from "./aboutme";
import Work from "./work";
import ArtWork from "./artwork";
import Outro from "./outro";
import Footer from "../../components/footer/footer";

const Home = () => {
    return (
        <>
            <Header/>
            <Aboutme/>
            <Work/>
            <ArtWork/>
            <Outro/>
            <Footer/>
        </>
    );
}

export default Home;
