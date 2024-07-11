import React from 'react';
import Card from './Card';
import feature1 from "../../../../assets/feature1.png"
import feature2 from "../../../../assets/feature2.png"
import feature3 from "../../../../assets/feature3.png"

const Feature = () => {
  const cardData = [
    {
      title: "DAO Management",
      subtitle: "Our platform makes it easy to create and run DAOs. We provide clear ways for people to suggest ideas, vote on them, and make decisions together.",
      imageSrc: feature1
    },
    {
      title: "Content Management",
      subtitle: "Our platform handles everything you post and share, like on social media. It stores and shows your content, comments, and likes.",
      imageSrc: feature2
    },
    {
      title: "Token Management",
      subtitle: "Our platform manages special tokens to reward users for getting involved and active. These tokens are like digital rewards you earn for participating.",
      imageSrc: feature3
    }
  ];
  return (
    <div className="bg-[#dadee4] mobile:py-16 py-6">
      <div className="flex big_phone:justify-center justify-start py-5 mobile:px-12 px-8">
        <div className="flex flex-col">
          <h2 className="text-about-heading font-mulish text-[#0E3746] font-normal text-[16ox] md:text-[16ox] lg:text-[16ox] leading-tight">Our Features</h2>
          <p className="text-about-subheading font-mulish text-[#0E3746] font-[500] small_phone:text-3xl text-2xl leading-tight  mb-3">Engaging Management Suite</p>
        </div>
      </div>


      <div className="flex flex-col big_phone:flex-row justify-center items-center gap-4 px-4
       ">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            imageSrc={data.imageSrc}

          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
