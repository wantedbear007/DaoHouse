import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

const CreateDaoWidget = ({ text }) => {
  return (
    <div className="bg-zinc-200 my-4 py-2">
      <div className="flex justify-between items-center  mx-auto">
        <div className="flex items-center space-x-4">
          <span className="text-[40px] font-normal">{text}</span>
          <div>
            <div className="w-32 border-t-2 border-black"></div>
            <div className="w-14 mt-2 border-t-2 border-black"></div>
          </div>
        </div>
        <button className="bg-white px-4 shadow-xl font-semibold py-2 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
          <HiOutlinePlus />

          <span className="text-[#05212C] font-normal text-[16px]">
            Create DAO
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreateDaoWidget;
