import React from 'react';

const Card = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="w-80 mx-4 mb-8">
      <div className="overflow-hidden rounded-lg bg-white"> 
        <img src={imageSrc} alt="Card Image" className="w-full h-52 object-cover rounded-lg p-2" /> 
      </div>
      <div className="bg-white rounded-b-lg p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
