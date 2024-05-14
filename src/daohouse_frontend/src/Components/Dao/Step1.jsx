import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Step1 = ({ setData, setActiveStep }) => {
  const [inputData, setInputData] = useState({
    DAOIdentifier: "",
    Purpose: "",
    DAOType: "",
    exisitingToken: false,
    tokenName: "",
    tokenSymbol: "",
    initialTokenSupply: 0,
  });

  const className = "DAO__Step1";

  function handleSaveAndNext() {

    if (
      inputData.DAOIdentifier == "" ||
      inputData.tokenName == "" ||
      inputData.tokenSymbol == ""
    ) {
      alert("Empty fields are not allowed");
      return;
    }

    setData((prevData) => ({
      ...prevData,
      step1: { ...inputData },
    }));

    setActiveStep(1);
  }

  function handleChange(e) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });

    // console.log(inputData);
  }

  function handlenewTokenFlag(flag) {
    setInputData((prevData) => ({
      ...prevData,
      exisitingToken: flag,
    }));
  }

  return (
    <React.Fragment>
      <div
        className={
          className +
          "__form bg-[#F4F2EC] p-10 mx-4 rounded-lg flex flex-col gap-4"
        }
      >
        {/** DAO Identifier */}
        <label htmlFor="name" className="font-semibold">
          DAO Identifier*
        </label>
        <input
          type="text"
          name="DAOIdentifier"
          required
          value={inputData.DAOIdentifier}
          placeholder="Enter DAO Name"
          className="rounded-lg p-3"
          onChange={handleChange}
        />

        {/** Purpose of DAO */}
        <label htmlFor="purpose" className="font-semibold">
          Purpose of DAO
        </label>
        <textarea
          type="text"
          name="Purpose"
          value={inputData.Purpose}
          placeholder="Specify the primary purpose or objectives the DAO aims to achieve, such as governance, funding, community building,"
          className="rounded-lg p-3"
          onChange={handleChange}
        />

        {/** DAO Type */}
        <label htmlFor="type" className="font-semibold">
          DAO Type
        </label>
        <input
          onChange={handleChange}
          type="text"
          value={inputData.DAOType}
          name="DAOType"
          className="rounded-lg p-3"
        />

        {/** DAO Token */}
        <div className="flex flex-row gap-4 items-center">
          <p htmlFor="type" className="font-semibold">
            DAO Token*
          </p>

          <button
            className={
              `${inputData.exisitingToken
                ? "bg-[#0E3746] text-white"
                : "border border-[#0E3746]"
              }` + " p-2 rounded-lg transition"
            }
            onClick={() => handlenewTokenFlag(true)}
          >
            New Token
          </button>
          <button
            className={
              `${!inputData.exisitingToken
                ? "bg-[#0E3746] text-white"
                : "border border-[#0E3746]"
              }` + " p-2 border border-[#0E3746] rounded-lg transition"
            }
            onClick={() => handlenewTokenFlag(false)}
          >
            Existing Token
          </button>
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/2 gap-4">
            <label htmlFor="tokenName">Token Name</label>
            <input
              required
              type="text"
              name="tokenName"
              value={inputData.tokenName}
              onChange={handleChange}
              className="rounded-lg p-3"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-4">
            <label htmlFor="tokenSymbol">Token Symbol</label>
            <input
              required
              type="text"
              name="tokenSymbol"
              value={inputData.tokenSymbol}
              onChange={handleChange}
              className="rounded-lg p-3"
            />
          </div>
        </div>

        {/** Initial Token Supply */}
        <label htmlFor="initialTokenSupply" className="font-semibold">
          Initial Token Supply
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={inputData.initialTokenSupply}
          name="initialTokenSupply"
          placeholder="Enter number of tokens to be minted"
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

export default Step1;
