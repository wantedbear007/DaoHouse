
import React from 'react';

const Card = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="w-80 mx-4 mb-8 overflow-hidden bg-white rounded-xl shadow-lg">
      <div className="overflow-hidden  rounded-xl bg-white h-52">
        <img src={imageSrc} alt="Card Image" className="w-full h-full object-cover  rounded-xl p-2" />
      </div>
      <div className="p-4 pt-2 rounded-b-lg bg-white">
        <h3 className="text-2xl font-normal  text-black mb-4 truncate">{title}</h3>
        <p className="text-black font-[16px] font-normal overflow-hidden overflow-ellipsis h-35 mb-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
