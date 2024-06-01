import React from "react";
import bmw from "../../../assets/bmw.png";
import starbucks from "../../../assets/starbucks.png";
import panda from "../../../assets/panda.png";
import image5 from "../../../assets/image5.png";
import pandg from "../../../assets/pandg.png";
import Widget from "./Widget";

const SupportingPartners = () => {
  return (
    <div className="bg-gray-200 mobile:py-[10rem] py-20">
      <div className="justify-center mt-[-200px] items-center flex">
        <Widget />
      </div>
      <div className="container mx-auto text-center pt-4 mb-8 mt-8">
        <h2 className="text-2xl mobile:text-4xl font-medium mobile:mb-12 mb-4">
          Supporting Partners
        </h2>
      </div>
      <div className="container mobile:gap-5 gap-2 px-20 flex md:flex-wrap justify-center">
        {renderPartnerImages()}
      </div>
    </div>
  );
};

const renderPartnerImages = () => {
  const partnerImages = [bmw, starbucks, panda, image5, pandg];

  return partnerImages.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Partner ${index + 1}`}
      className="tablet:w-28 mobile:w-16 w-10 tablet:h-28 mobile:w-16 w-10 h-auto rounded-full "
    />
  ));
};

export default SupportingPartners;
