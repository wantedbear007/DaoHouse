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
    <div className="bg-[#dadee4] py-16">

      <div className='flex justify-center items-center flex-col'>
        <h2 className="text-[16px] font-medium mb-2 ">Our Features</h2>

        <h3 className="text-3xl font-semibold mb-8 text-center">Engaging Management Suite</h3>
      </div>
      <div className="flex justify-center">
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
