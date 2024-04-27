import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Empowering from "./Empowering";
import About from "./About";
import Feature from "./features/Feature";
import Decentralization from "./Decentralization";
import SupportingPartners from "./SupportingPartners";


const Dashboard = () => {

    return (
        <>
          <div>
            <HeroSection/>
            <Empowering/>
            <About />
            <Feature/>
            <Decentralization/>
            <SupportingPartners/>
          </div>
        </>
    );
};

export default Dashboard;
