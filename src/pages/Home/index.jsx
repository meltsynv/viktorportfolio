import React from "react";

import Header from "./header";
import Aboutme from "./aboutme";
import Work from "./work";
import ArtWork from "./artwork";

const Home = () => {
    return (
        <>
            <Header/>
            <Aboutme/>
            <Work/>
            <ArtWork/>
        </>
    );
}

export default Home;
