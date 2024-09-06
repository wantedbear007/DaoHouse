import React, { useState } from 'react';
import feature1 from "../../../../assets/feature.png";
import Container from '../../Container/Container';

const Feature = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const cardData = [
    {
      title: "DAO Management",
      subtitle: "Our platform makes it easy to create and run DAOs. We provide clear ways for people to suggest ideas, vote on them, and make decisions together.",
      imageSrc: feature1
    },
    {
      title: "Content Management",
      subtitle: "Our platform handles everything you post and share, like on social media. It stores and shows your content, comments, and likes.",
      imageSrc: feature1
    },
    {
      title: "Token Management",
      subtitle: "Our platform manages special tokens to reward users for getting involved and active. These tokens are like digital rewards you earn for participating.",
      imageSrc: feature1
    }
  ];

  // Calculate the position of the thicker line
  const getLinePosition = () => {
    if (hoveredCardIndex === null) return '50%';
    
    // Calculate the position of the line based on the hovered card
    const cardWidthPercentage = 100 / cardData.length;
    return `calc(${hoveredCardIndex * cardWidthPercentage + cardWidthPercentage / 2}% - 25px)`;
  };

  return (
    <div className='bg-[#ffffff] mobile:py-16 py-6'>
      <Container className='w-full'>
        <div className="flex justify-center py-5 mobile:px-4 px-8">
          {/* Centered content */}
          <div className="text-center">
            <h2 className="text-about-heading font-mulish text-[#0E3746] font-bold text-[20px] md:text-[16px] lg:text-[16px] leading-tight">
              Our Features
            </h2>

            <p className="text-about-subheading font-mulish text-[#0E3746] lg:text-2xl font-bold font-[500] text-2xl small_phone:text-2xl leading-tight mb-3 whitespace-nowrap">
              Engaging Management Suite
            </p>
          </div>
        </div>

        {/* Horizontal line with a thicker rectangular center */}
        <div className="relative w-full flex justify-center mb-10"> {/* Increased bottom margin */}
          <hr className="border-t-2 border-[#0E3746] w-[86%] relative mb-4" /> {/* Adjusted bottom margin here */}
          {/* Thicker moving part as a rounded rectangle */}
          <div
            className="absolute h-[10px] w-[50px] bg-[#0E3746] rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: getLinePosition(), // Adjust position dynamically
              top: '-4px', // Slightly above the thin line
            }}
          />
        </div>

        {/* Card grid with hover effect */}
        <div className="group flex flex-col big_phone:flex-row big_phone:justify-center justify-center items-center gap-6 px-4 mt-10 w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#0E3746] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-4 w-full mobile:w-[50%] big_phone:w-[420px] big_phone:h-[270px] md:w-[150px] md:h-[250px] mb-6"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {/* Icon and content */}
              <div className="flex flex-col items-start mb-4">
                <img src={card.imageSrc} alt={card.title} className="w-12 h-14 mb-4" />
                <h3 className="text-3xl font-semibold text-left">{card.title}</h3>
              </div>
              <p className="text-lg mb-4 text-left">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Feature;
