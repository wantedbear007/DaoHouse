import React from 'react';
import bmw from "../../../assets/bmw.png"
import starbucks from "../../../assets/starbucks.png"
import panda from "../../../assets/panda.png"
import image5 from "../../../assets/image5.png"
import pandg from "../../../assets/pandg.png"
import Widget from './Widget';


const SupportingPartners = () => {
  return (
    <div className="bg-gray-200 py-[10rem]">
      <div className='justify-center mt-[-200px] items-center flex'>
        <Widget />
      </div>
      <div className="container mx-auto text-center pt-4 mb-8 mt-8">
        <h2 className="text-[32px] md:text-[40px] font-medium mb-8">Supporting Partners</h2>
      </div>
      <div className="container md:gap-5 mx-auto flex md:flex-wrap justify-center">
        {renderPartnerImages()}
      </div>
    </div>
  );
};

const renderPartnerImages = () => {
  const partnerImages = [
    bmw,
    starbucks,
    panda,
    image5,
    pandg,
    bmw
  ];

  return partnerImages.map((image, index) => (
    <div key={index} className=" p-2 md:p-4">
      <img src={image} alt={`Partner ${index + 1}`} className="w-full h-auto rounded-full " />
    </div>
  ));
};

export default SupportingPartners;
