import React from "react";
import HeroSection from "../../Components/Home/HeroSection";
import Empowering from "../../Components/Home/Empowering";
import About from "../../Components/Home/About";
import Feature from "../../Components/Home/features/Feature";
import Decentralization from "../../Components/Home/Decentralization";
import SupportingPartners from "../../Components/Home/SupportingPartners";



const Container = ({children}) => (
  <div className="max-w-screen-xl mx-auto">
    {children}
  </div>
) 
const Dashboard = () => {

  return (
    <React.Fragment>
     <Container>
     
    
      <HeroSection />
      <Empowering />
      <About />
      <Feature />
      <Decentralization />
      <SupportingPartners />
    
      </Container>
      </React.Fragment>
  );
};

export default Dashboard;
