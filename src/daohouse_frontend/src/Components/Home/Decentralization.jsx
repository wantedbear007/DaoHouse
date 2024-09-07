import React from "react";
import "./Decentralization.scss";
import Container from "../Container/Container";
import { useNavigate } from "react-router-dom";
import smallcircle from "../../../assets/smallcircle.png";
import mediumcircle from "../../../assets/mediumcircle.png";
import bigcircle from "../../../assets/bigcircle.png";

const Decentralization = () => {
  const className = "Decentralization";
  const navigate = useNavigate();

  const handleJoinDaoClick = () => {
    navigate("/dao");
  };

  return (
    <div
      className={
        className + " w-full bg-[#E0E0E0] min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F5F5] to-[#01273A]"
      }
    >
    <Container classes={"flex flex-col translate-y-[-20px]  max-w-[99%]  items-center justify-center relative"}> 

        {/* Main Section */}
        <div className="relative w-full max-w-[95%] lg:mx-72 sm:max-w-[90%] md:max-w-[98%] h-auto sm:h-[60vh] px-4 sm:px-6 md:px-12 lg:px-40 tablet:px-32 mobile:px-4 flex flex-col items-center justify-center gap-8 bg-white rounded-xl shadow-lg p-8 sm:p-12">
          {/* Circles as Background */}
          <img
            src={smallcircle}
            alt="small circle"
            className="absolute w-[36%] " // Smaller size for mobile, scales up ;

          />
          <img
            src={mediumcircle}
            alt="medium circle"
            className="absolute w-[60%] md:h-[60vh] " // Medium size
          />
        

          {/* Text Section */}
          <div className="w-full text-center flex flex-col items-center gap-6 z-10">
          <h1 className="text-[20px] big_phone:text-[36px] font-mulish mobile:text-4xl sm:text-3xl md:text-5xl lg:text-4xl text-[#0F3746] font-bold">
          <span className="block">Bringing Decentralization to Life:</span>
          <span className="block">Empowering Communities through</span>
          <span className="block">Seamless DAO Management</span>
          </h1>

          <p className="text-base mobile:text-xl sm:text-lg  font-mulish md:text-2xl text-gray-700 mt-4">
          <span className="block"> Our platform provides the tools and infrastructure needed to establish</span>
          <span className="block"> and manage your own decentralized autonomous organizations.</span>
           
          </p>


            <button
              onClick={handleJoinDaoClick}
              className="px-8 mobile:px-10 sm:px-8 md:px-10 py-3 mobile:py-3 sm:py-2 md:py-4 text-sm mobile:text-base sm:text-sm md:text-lg bg-white text-black font-normal rounded-[27.5px] shadow-lg border border-gray-300 hover:bg-gray-200"
            >
              Join DAO
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-transparent  translate-y-[-20px] py-8 z-10">
          <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-4 md:px-8 py-4 text-center text-white">
            {/* Members */}
            <div className="stat-card bg-transparent border border-white rounded-lg py-2 flex justify-start pl-4 relative overflow-hidden">
              <div className="text-left">
                <h1 className="text-lg md:text-2xl  translate-x-[18px]   font-mulish translate-y-[15px]">Members</h1>
                <p className="stat-number text-5xl font-mulish md:text-7xl mt-2">150K+</p>
              </div>
            </div>
            {/* Proposals */}
            <div className="stat-card bg-transparent border border-white rounded-lg py-2 flex justify-start pl-4 relative overflow-hidden">
              <div className="text-left">
                <h1 className="text-lg md:text-2xl  translate-x-[18px] font-mulish translate-y-[15px]">Proposals</h1>
                <p className="stat-number text-5xl font-mulish md:text-7xl mt-2">100K+</p>
              </div>
            </div>
            {/* DAOs */}
            <div className="stat-card bg-transparent border border-white rounded-lg py-2 flex justify-start pl-4 relative overflow-hidden">
              <div className="text-left">
                <h1 className="text-lg md:text-2xl translate-x-[16px]  font-mulish translate-y-[15px]">DAOs</h1>
                <p className="stat-number text-5xl  font-mulish md:text-7xl mt-2">800+</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Decentralization;
