import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Step2 = ({ setData, setActiveStep }) => {
  const [inputData, setInputData] = useState({ setUpPeriod: 0 });
  const className = "DAO__Step2";

  function handleSaveAndNext() {
    setData((prev) => ({
      ...prev,
      step2: { ...inputData },
    }));

    setActiveStep(2)
  }

  function changePeriod(value) {
    setInputData({
      setUpPeriod: value,
    });
  }

  return (
    <React.Fragment>
      <div
        className={
          className +
          "__form bg-[#F4F2EC] p-10 mx-4 rounded-lg flex flex-col gap-4"
        }
      >
        <label htmlFor="purpose" className="font-semibold">
          Setup Peroid (in days)
        </label>
        <input
          type="number"
          name="purpose"
          value={inputData.setUpPeriod}
          onChange={(e) => changePeriod(e.target.value)}
          placeholder="Setup the period between when a proposal is approved and is executed."
          className="rounded-lg p-3"
        />
      </div>

      <div
        className={
          className +
          "__submitButton w-full flex flex-row items-center justify-end"
        }
      >
        <button
          onClick={() => setActiveStep(0)}
          className="flex m-4 flex-row items-center gap-2 border border-[#0E3746] hover:bg-[#0E3746] text-[#0E3746] hover:text-white transition px-4 py-2 rounded-[2rem]"
        >
          <FaArrowLeftLong /> Back
        </button>
        <button
          type="submit"
          onClick={handleSaveAndNext}
          className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
        >
          Save & Next <FaArrowRightLong />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step2;
