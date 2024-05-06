import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { ImBin2 } from "react-icons/im";

const Step3 = () => {
  const className = "DAO__Step3";

  const GandM = [{ name: "All" }];
  return (
    <div
      className={
        className +
        "__form bg-[#F4F2EC] p-10 mx-4 rounded-lg flex flex-col gap-4"
      }
    >
      <div className="flex flex-row items-start justify-between">
        <section className="w-11/12">
          <h2 className="font-semibold">Add Groups & Members</h2>
          <p>
            You can add members and assign them various roles as per your
            decisions and also Add members to your DAO for providing them
            specific roles in future
          </p>
        </section>

        <button className="bg-white w-10 h-10 text-lg flex items-center justify-center rounded-[50%]">
          <FaPlus />
        </button>
      </div>

      <div className="bg-[#E9EAEA] rounded-lg">
        <section className="w-full py-4 px-8 flex flex-row items-center justify-between border-b-2 border-[#b4b4b4]">
          <h2 className="font-semibold">Council</h2>
          <button className="flex flex-row items-center gap-1 text-[#229ED9] bg-white p-2 rounded-md">
            <FaSquarePlus className="text-[#229ED9] text-2xl" /> Add Members
          </button>
        </section>

        <section className="py-4 px-8">
          <p>nzbdchsvvksckshcbkjscb kc</p>
        </section>
      </div>

      <div className={className + "__container w-full"}>
        {GandM.map((item) => (
          <div className="w-full py-3 px-8 rounded-lg flex bg-white items-center justify-between">
            <p className="font-semibold">{item.name}</p>
            <button>
              <ImBin2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
