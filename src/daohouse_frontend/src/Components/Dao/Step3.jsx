import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Step3 = ({ setActiveStep }) => {
  const [count, setCount] = useState(1);
  const [showMemberNameInput, setShowMemberNameInput] = useState(false);
  const [showCouncilNameInput, setShowCouncilNameInput] = useState(false);
  const [addMemberIndex, setAddMemberIndex] = useState(null);

  const [list, setList] = useState([
    { name: "Council", users: ["nzbdchsvvksckshcbkjscb kc"] },
    { name: "All", index: 0, users: [] },
  ]);

  const className = "DAO__Step3";

  const handleGroupAdding = () => {
    const updateGroups = [
      ...list,
      { name: `Group ${count}`, index: count, users: [] },
    ];
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

  const handleMemberAdding = () => {
    setShowMemberNameInput(true);
  };

  const openMemberNames = (index) => {
    setAddMemberIndex(index);
  };

  const handleNameEnter = (name, event) => {
    if (event.key === "Enter") {
      const updatedList = list.map((item) => {
        if (item.index === addMemberIndex) {
          return { ...item, users: [...item.users, name] };
        }
        return item;
      });
      setList(updatedList);
      setShowMemberNameInput(false);
    }
  };

  const handleCouncilMemAdding = () => {
    setShowCouncilNameInput(true);
  };

  const handleCouncilMemberName = (name, event) => {
    if (event.key === "Enter") {
      const updatedList = [...list]; // Create a copy of the list
      const councilIndex = updatedList.findIndex(
        (item) => item.name === "Council"
      );

      if (councilIndex !== -1) {
        // If "Council" object exists in the list
        updatedList[councilIndex].users = [
          ...updatedList[councilIndex].users,
          name,
        ]; // Add username to the "Council" object
        setList(updatedList); // Update the state with the modified list
        setShowCouncilNameInput(false); // Hide the input field
      } else {
        // If "Council" object doesn't exist in the list
        Alert.alert("Error", "Council group not found in the list");
      }
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
          {
            <React.Fragment>
              <section className="w-full py-2 px-8 flex flex-row items-center justify-between border-b-2 border-[#b4b4b4]">
                <h2 className="font-semibold">Council</h2>
                <button
                  onClick={handleCouncilMemAdding}
                  className="flex flex-row items-center gap-1 text-[#229ED9] bg-white p-2 rounded-md"
                >
                  <FaSquarePlus className="text-[#229ED9] text-2xl" /> Add
                  Members
                </button>
              </section>

              <section className="py-4 px-8">
                {showCouncilNameInput ? (
                  <input
                    type="text"
                    name="memberName"
                    className="p-2 rounded-md"
                    placeholder="Enter UserName"
                    onKeyDown={(e) =>
                      handleCouncilMemberName(e.target.value, e)
                    }
                  />
                ) : (
                  list
                    .find((item) => item.name === "Council")
                    .users.map((name, userIndex) => (
                      <li key={userIndex} className="list-disc">
                        {name}
                      </li>
                    ))
                )}
              </section>
            </React.Fragment>
          }
        </div>

        <div className={className + "__container w-full"}>
          {list.slice(1).map((item, index) => (
            <div
              className={`flex flex-col my-2 ${
                addMemberIndex === item.index
                  ? "bg-[#E9EAEA] rounded-lg"
                  : "bg-white rounded-lg cursor-pointer"
              }`}
              onClick={() => openMemberNames(item.index)}
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
                  {showMemberNameInput ? (
                    <input
                      type="text"
                      name="memberName"
                      className="p-2 rounded-md"
                      placeholder="Enter UserName"
                      onKeyDown={(e) => handleNameEnter(e.target.value, e)}
                    />
                  ) : (
                    item.users.map((userName, userIndex) => (
                      <li key={userIndex} className="list-disc">
                        {userName}
                      </li>
                    ))
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
