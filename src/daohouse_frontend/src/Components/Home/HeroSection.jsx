import React from 'react';
import herosectionleftbottomimg from "../../../assets/herosection.png"
import herosectiongradient from "../../../assets/herosectiongradient.png"
import circle from "../../../assets/circle.png"

const HeroSection = () => {
    return (
        <div className="relative flex justify-center items-center h-[90vh]">
            {/* Left Side */}
            <div className="w-1/2 px-10 z-10">
                <div className="text-[#0E3746] font-mulish font-semibold text-7xl leading-tight mb-4">Building Better Future, Together</div>
                <div className="text-black font-inter text-sm mb-8">Efficiently Manage Resources and Proposals with Our DAO Tools</div>
                <div className="flex space-x-4">
                    <button className="px-8 py-3 bg-[#0E3746] text-white font-semibold rounded-[27.5px] shadow-md hover:bg-blue-800 hover:text-white">Create DAO</button>
                    <button className="px-8 py-3 bg-white text-black font-normal rounded-[27.5px] shadow-md hover:bg-gray-200 hover:text-blue-900">Join DAO</button>
                </div>
            </div>

            <img src={herosectiongradient} alt="hero section gradient" className="absolute bottom-0 left-0 mb-4 ml-4 animate-gradient" />
            <img src={herosectionleftbottomimg} alt="Bottom Left Image" className="absolute bottom-0 left-0 mb-4 ml-4" />

            {/* Right Side */}
            {/* Right Side */}
            <div className="w-1/2 flex items-center justify-center">
                <div className="relative">
                    <img src={circle} alt="Placeholder" className="w-full h-full object-cover animate-spin-slow" />
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
