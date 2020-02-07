import React from "react";

import Header from "./header";
import Aboutme from "./aboutme";
import Work from "./work";
import ArtWork from "./artwork";
import Contact from "./contact";
import Outro from "./outro";
import Footer from "../../components/footer/footer";

const Home = () => {
    return (
        <>
            <Header/>
            <Aboutme/>
            <Work/>
            <ArtWork/>
            <Contact/>
            <Outro/>
            <Footer/>
        </>
    );
}

export default Home;
