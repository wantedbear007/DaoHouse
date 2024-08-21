import React from 'react';
import Card from './Card';
import feature1 from "../../../../assets/feature1.png";
import feature2 from "../../../../assets/feature2.png";
import feature3 from "../../../../assets/feature3.png";
import Container from '../../Container/Container';

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
    <div className='bg-[#dadee4] mobile:py-16 py-6'>
      <Container className='w-full'>
        <div className="flex big_phone:justify-center justify-start py-5 mobile:px-12 px-8">
          <div className="flex flex-col">
            <h2 className="text-about-heading font-mulish text-[#0E3746] font-normal text-[16px] md:text-[16px] lg:text-[16px] leading-tight">Our Features</h2>
            <p className="text-about-subheading font-mulish text-[#0E3746] font-[500] small_phone:text-3xl text-2xl leading-tight mb-3">Engaging Management Suite</p>
          </div>
        </div>
        <div className="flex w-full flex-col big_phone:flex-row justify-between items-center gap-10 px-4">
          <div className="flex justify-start flex-1">
            <Card
              title={cardData[0].title}
              subtitle={cardData[0].subtitle}
              imageSrc={cardData[0].imageSrc}
            />
          </div>
          <div className="flex justify-center flex-1">
            <Card
              title={cardData[1].title}
              subtitle={cardData[1].subtitle}
              imageSrc={cardData[1].imageSrc}
            />
          </div>
          <div className="flex justify-end flex-1">
            <Card
              title={cardData[2].title}
              subtitle={cardData[2].subtitle}
              imageSrc={cardData[2].imageSrc}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
