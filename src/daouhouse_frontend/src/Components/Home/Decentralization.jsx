import React from 'react';
import decentralization from "../../../assets/decentralization.png"


const Decentralization = () => {
  return (
    <div className="gradient-background  py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img src={decentralization} alt="Decentralization Image" className="w-full mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Bringing Decentralization to Life: Empowering Communities through Seamless DAO Management</h2>
            <p className="text-lg">Our platform provides the tools and infrastructure needed to establish and manage your own decentralized autonomous organizations.</p>
            <button className="px-8 my-4 py-3 bg-white text-black font-normal rounded-[27.5px] shadow-md hover:bg-gray-200 hover:text-blue-900">Join DAO</button>

          </div>
          
          <div className="w-full md:w-1/2">
            <img src="your_right_image_source_here" alt="Right Image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decentralization;
