import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Step3 = ({ setActiveStep }) => {
  const GandM = [{ name: "All", index: 0 }];
  const [list, setList] = useState(GandM);
  const [count, setCount] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [memberName, setMemberName] = useState(false);
  const [addMemberIndex, setAddMemberIndex] = useState(null);
  const className = "DAO__Step3";

  const handleGroupAdding = () => {
    const updateGroups = [...list, { name: "Group1", index: count }];
    setCount(count + 1);
    setList(updateGroups);
    console.log(list);
  };

  const deleteGroup = (index) => {
    const updatedGroups = list.filter((item) => {
      return item.index !== index;
    });

    setList(updatedGroups);
    console.log(updatedGroups);
  };

  const handleMemberAdding = (index) => {
    setAddMemberIndex(index);
    setShowInput(true);
  };

  const handleNameEnter = (name) => {
    setMemberName(name);
    if (event.key === "Enter") {
      setShowInput(false);
    }
  };

  return (
    <React.Fragment>
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

          <button
            onClick={handleGroupAdding}
            className="bg-white w-10 h-10 text-lg flex items-center justify-center rounded-[50%]"
          >
            <FaPlus />
          </button>
        </div>

        <div className="bg-[#E9EAEA] rounded-lg">
          <section className="w-full py-2 px-8 flex flex-row items-center justify-between border-b-2 border-[#b4b4b4]">
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
          {list.map((item, index) => (
            <div
              className={`flex flex-col my-2 ${
                addMemberIndex === item.index
                  ? "bg-[#E9EAEA] rounded-lg"
                  : "bg-white rounded-lg"
              }`}
            >
              <section
                key={index}
                className={`w-full py-2 px-8 flex ${
                  addMemberIndex === item.index
                    ? "border-b-2 border-[#b4b4b4]"
                    : "rounded-lg"
                } items-center justify-between`}
              >
                <p className="font-semibold">{item.name}</p>

                <div className={className + "__buttons flex flex-row gap-4"}>
                  <button
                    onClick={() => handleMemberAdding(item.index)}
                    className={`flex flex-row items-center gap-1 text-[#229ED9] ${
                      addMemberIndex === item.index
                        ? "bg-white"
                        : "bg-slate-200"
                    } p-2 rounded-md`}
                  >
                    <FaSquarePlus className="text-[#229ED9] text-2xl" /> Add
                    Members
                  </button>

                  <button onClick={() => deleteGroup(item.index)}>
                    <MdOutlineDeleteOutline className="text-red-500 text-2xl" />
                  </button>
                </div>
              </section>

              {addMemberIndex === item.index && (
                <section className="py-4 px-8">
                  {showInput ? (
                    <input
                      type="text"
                      name="memberName"
                      className="p-2 rounded-md"
                      placeholder="Enter UserName"
                      onKeyDown={(e) => handleNameEnter(e.target.value)}
                    />
                  ) : (
                    <p>{memberName}</p>
                  )}
                </section>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          className +
          "__submitButton w-full flex flex-row items-center justify-end"
        }
      >
        <button
          onClick={() => setActiveStep(1)}
          className="flex m-4 flex-row items-center gap-2 border border-[#0E3746] hover:bg-[#0E3746] text-[#0E3746] hover:text-white transition px-4 py-2 rounded-[2rem]"
        >
          <FaArrowLeftLong /> Back
        </button>
        <button
          type="submit"
          onClick={() => setActiveStep(3)}
          className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
        >
          Save & Next <FaArrowRightLong />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step3;
