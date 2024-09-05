import React from 'react';
import Card from './Card';
import features from "../../../../assets/features.png";
import feature2 from "../../../../assets/feature2.png";
import feature3 from "../../../../assets/feature3.png";
import Container from '../../Container/Container';

const Feature = () => {
  const cardData = [
    {
      title: "DAO Management",
      subtitle: "Our platform makes it easy to create and run DAOs. We provide clear ways for people to suggest ideas, vote on them, and make decisions together.",
      imageSrc: features
    },
    {
      title: "Content Management",
      subtitle: "Our platform handles everything you post and share, like on social media. It stores and shows your content, comments, and likes.",
      imageSrc: features
    },
    {
      title: "Token Management",
      subtitle: "Our platform manages special tokens to reward users for getting involved and active. These tokens are like digital rewards you earn for participating.",
      imageSrc: features
    }
  ];

  return (
    <div className='bg-[#dadee4] mobile:py-16 py-6'>
      <Container className='w-full'>
        <div className="flex justify-center py-5 mobile:px-4 px-8"> {/* Centered content */}
          <div className="text-center"> {/* Text centered */}
            <h2 className="text-about-heading font-mulish text-[#0E3746] font-bold text-[16px] md:text-[16px] lg:text-[16px] leading-tight">Our Features</h2>
            <p className="text-about-subheading font-mulish font-bold text-[#0E3746] font-[500] text-xl small_phone:text-2xl leading-tight mb-3 whitespace-nowrap pb-12 "> {/* Applied `whitespace-nowrap` */}
              Engaging Management Suite
            </p>
          </div>
        </div>

        {/* Increased gap between cards */}
        <div className="border border-balck flex flex-col big_phone:flex-row big_phone:justify-center justify-center items-center gap-2 md:gap-10 px-6 border-t-2 border-t-black">
          <div className="flex justify-center w-full big_phone:w-auto mb-10 big_phone:mb-0">
            <Card
              title={cardData[0].title}
              subtitle={cardData[0].subtitle}
              imageSrc={cardData[0].imageSrc}
            />
          </div>
          <div className="flex justify-center w-full big_phone:w-auto mb-10 big_phone:mb-0">
            <Card
              title={cardData[1].title}
              subtitle={cardData[1].subtitle}
              imageSrc={cardData[1].imageSrc}
            />
          </div>
          <div className="flex justify-center w-full big_phone:w-auto">
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
