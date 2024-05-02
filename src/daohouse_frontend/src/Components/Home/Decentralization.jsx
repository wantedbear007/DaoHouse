import React from "react";
import "./Decentralization.scss";
import decentralize from "../../../assets/gif/cropped.gif";

const Decentralization = () => {
  const className = "Decentralization";

  return (
<<<<<<< Updated upstream
    <div className="bg-black   py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img src={decentralization} alt="Decentralization Image" className="w-full mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0 pl-6 w-50">
            <h2 className="text-[32px] font-medium mb-4 text-white">Bringing Decentralization to Life: Empowering Communities through Seamless DAO Management</h2>
            <p className="text-lg font-medium text-white">Our platform provides the tools and infrastructure needed to establish and manage your own decentralized autonomous organizations.</p>
            <button className="px-8 my-5 py-3 bg-white text-black font-normal rounded-[27.5px] shadow-md hover:bg-gray-200 hover:text-blue-900">Join DAO</button>
=======
    <div className={className + " w-full bg-image-background pb-28"}>
      <div className="w-full flex flex-col items-center justify-center">
        <div className={className + "__movingTexts w-full py-6 flex flex-row overflow-auto"}>
          <h1 className="text-white text-9xl font-semibold">DECENTRALIZATION. </h1>
          <h1 className="text-white text-9xl font-semibold">DECENTRALIZATION. </h1>
          <h1 className="text-white text-9xl font-semibold">DECENTRALIZATION. </h1>
        </div>
>>>>>>> Stashed changes

        <div className="w-full px-20 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <h2 className="text-[32px] font-medium mb-4 text-white">
              Bringing Decentralization to Life: Empowering Communities through
              Seamless DAO Management
            </h2>
            <p className="text-lg  font-medium text-white">
              Our platform provides the tools and infrastructure needed to
              establish and manage your own decentralized autonomous
              organizations.
            </p>
            <button className="px-8 my-4 py-3 bg-white text-black font-normal rounded-[27.5px] shadow-md hover:bg-gray-200 hover:text-blue-900">
              Join DAO
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center rounded-full">
            <img
              src={decentralize}
              alt="Right Image"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decentralization;
