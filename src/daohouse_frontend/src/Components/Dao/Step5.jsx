import React, { useEffect, useState } from "react";
import "./Step5.scss";
import { RiGroupLine } from "react-icons/ri";
import { LuAlertCircle } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container/Container";
import ViewModal from "./ViewModal";

const Step5 = ({ setData, setActiveStep, data }) => {
  console.log("step5", data);
  const [loadingNext, setLoadingNext] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = data.step3.members;
  console.log(user);

  const [quorum, setQuorum] = useState(() => {
    const savedData = localStorage.getItem("step5Quorum");
    return savedData
      ? JSON.parse(savedData)
      : [
          { name: "Council", index: 0, vote: 50 },
          { name: "Group 1", index: 1, vote: 50 },
          { name: "Group 2", index: 2, vote: 50 },
        ];
  });
  const className = "DAO_Step5";

  const handleVoteChange = (index, newValue) => {
    setQuorum((prevQuorum) =>
      prevQuorum.map((item, i) =>
        i === index ? { ...item, vote: newValue } : item
      )
    );
  };

  function handleSaveAndNext() {
    setData((prevData) => ({
      ...prevData,
      step5: quorum,
    }));
    setActiveStep(5);
  }

  useEffect(() => {
    // Save quorum data to local storage whenever it changes
    localStorage.setItem("step5Quorum", JSON.stringify(quorum));
  }, [quorum]);

  function handleViewClickModal() {
    setIsModalOpen(true);
  }

  function handleOnClose() {
    setIsModalOpen(false);
  }

  return (
    <React.Fragment>
      <Container>
        <div
          className={
            className +
            "__form w-full bg-[#F5F5F5] big_phone:p-10 mobile:p-6 p-3 big_phone:mx-4 mx-0 rounded-lg flex flex-col gap-4"
          }
        >
          {/** On the Desktop till 800px */}
          <section className="heading big_phone:flex hidden items-center bg-[#F5F5F5] w-full">
            <p className="flex items-center gap-2 w-1/3 font-semibold ">
              <RiGroupLine /> Groups
            </p>

            <p className="flex items-center gap-2 w-1/3 font-semibold">
              <IoPersonOutline /> Members
            </p>

            <p className="flex items-center gap-2 w-1/3 font-semibold">
              <MdOutlineVerifiedUser /> Voting Policy <LuAlertCircle />
            </p>
          </section>

          {/** On the Desktop till 800px */}
          <section className="bg-white rounded-2xl w-full p-4 gap-4 big_phone:flex hidden flex-col">
            {quorum.map(({ name, index, vote }) => (
              <div
                key={index}
                className="border border-slate-200 p-3 flex items-center w-full rounded-lg"
              >
                <p className="w-1/3">{name}</p>

                <p className="w-1/3 flex flex-row gap-4">
                  <span>{index}</span>
                  <button
                    onClick={handleViewClickModal}
                    className="text-cyan-800 bg-slate-200 px-5 py-1 rounded-md"
                  >
                    View
                  </button>
                </p>

                <div className="w-1/3 gap-2 flex items-center">
                  <RangeInput
                    index={index}
                    handleVoteChange={handleVoteChange}
                  />
                  <span className="text-nowrap">{vote} %</span>
                </div>
              </div>
            ))}
          </section>

          {/** On the Mobile after 800px */}
          <section className="bg-[#F5F5F5] rounded-lg w-full p-4 gap-4 big_phone:hidden flex flex-col">
            {quorum.map(({ name, index, vote }) => (
              <div
                key={index}
                className="border border-slate-200 p-4 rounded-lg flex flex-col gap-3"
              >
                {/** Heading section with groups and voting policy */}
                <section className="flex justify-between items-center border-b pb-2">
                  <p className="flex items-center gap-2 font-semibold">
                    <RiGroupLine /> {name}
                  </p>
                  <p className="flex items-center gap-2 font-semibold">
                    <MdOutlineVerifiedUser /> Voting Policy
                  </p>
                </section>

                {/** Council, Members, and View button with gradient slider */}
                <section className="flex justify-between items-center pt-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">Council</p>
                    <p className="text-sm">
                      {user[index]?.length || 0} members
                    </p>
                    <button
                      onClick={handleViewClickModal}
                      className="text-cyan-800 bg-slate-200 px-5 py-1 rounded-md"
                    >
                      View
                    </button>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm">{vote} %</span>
                    <RangeInput
                      index={index}
                      handleVoteChange={handleVoteChange}
                    />
                  </div>
                </section>

                <hr className="border-t border-gray-300 mt-2" />
              </div>
            ))}
          </section>

          <div
            className={
              className +
              "__submitButton w-full flex flex-row items-center mobile:justify-end justify-between"
            }
          >
            <button
              onClick={() => setActiveStep(3)}
              className="flex mobile:m-4 my-4 flex-row items-center gap-2 border border-[#0E3746] hover:bg-[#0E3746] text-[#0E3746] hover:text-white mobile:text-base text-sm transition px-4 py-2 rounded-[2rem]"
            >
              <FaArrowLeftLong /> Back
            </button>

            {loadingNext ? (
              <CircularProgress className="m-4 my-4" />
            ) : (
              <button
                type="submit"
                onClick={handleSaveAndNext}
                className="flex mobile:m-4 my-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white mobile:text-base text-sm"
              >
                Save & Next <FaArrowRightLong />
              </button>
            )}
          </div>
        </div>
      </Container>
      <ViewModal open={isModalOpen} onClose={handleOnClose} users={user} />
    </React.Fragment>
  );
};

export default Step5;

const RangeInput = ({ index, handleVoteChange }) => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    handleVoteChange(index, newValue);
  };

  useEffect(() => {
    setValue(value); // Update rangeValue when prop value changes
  }, [value]);

  const gradient = `linear-gradient(to right, #0e3746 ${value}%, #fff ${value}%)`;

  return (
    <input
      type="range"
      min={0}
      max={100}
      className="mobile:w-10/12 mobile:h-[8px] h-[5px] custom-range border-2 border-[#061c24]"
      step={1}
      value={value}
      onChange={handleChange}
      style={{
        background: gradient,
      }}
    />
  );
};
