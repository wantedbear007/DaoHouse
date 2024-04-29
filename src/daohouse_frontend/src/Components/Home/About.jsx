import React from 'react';
import about from "../../../assets/gif/about.gif"
import smallelipse from "../../../assets/smallElipse.png"
import smallelipsegif from "../../../assets/smallellipsegif.png"
import bigellipse from "../../../assets/bigEllipse.png"


const About = () => {
    return (
        <div className="bg-[#05212C] relative  flex justify-center items-center py-8">
            <img src={smallelipsegif} alt="Small Ellipse" className="absolute left-[35%] top-0 mt-6 z-50  animate-spin-slow " />



            <img src={smallelipse} alt="Small Ellipse" className="absolute left-[35%] top-0 mt-8"/>

            <div className="w-[100vw]">
                <div className='my-8'>
                    <img src={about} alt="Image" className="w-full h-auto rounded-r-full" />
                </div>
            </div>

            <div className="w-60% p-8 text-white">
                <div className='px-8'>
                    <h2 className="text-about-heading font-mulish font-medium text-2xl md:text-md lg:text-xl leading-tight my-4">About Platform</h2>
                    <p className="text-about-subheading font-mulish font-semibold text-xl md:text-2xl lg:text-3xl leading-tight my-4">Unlocking Collective Intelligence</p>
                </div>
                <p className="text-about-content flex flex-col font-mulish font-normal text-sm md:text-base lg:text-lg p-8 my-4">
                    <span>                    At our platform. decentralized autonomous organization meets cutting-edge technology to revolutionize the way communities govern themselves.
                    </span>
                    <br />
                    <span>
                        We believe in the power of collective intelligence and the potential for blockchain technology to democratize decision-making processes. Our platform provides a seamless and transparent framework for organizations of all sizes to manage resources, vote on proposals, and drive impactful change.
                    </span>
                </p>
                <div className='px-8'>
                    <button className="px-8 py-3 bg-white text-black font-normal rounded-[27.5px] shadow-md hover:bg-gray-200 hover:text-blue-900">Join DAO</button>

                </div>

            </div>
            <img src={bigellipse} alt="Big Ellipse" className="absolute bottom-0 right-0 mr-8 mb-8" />

        </div>
    );
};

export default About;
