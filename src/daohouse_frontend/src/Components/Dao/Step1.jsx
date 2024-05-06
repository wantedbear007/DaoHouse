import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Step1 = ({ tokenStatus, setTokenStatus, setActiveStep }) => {
  const className = "DAO__Step1";

  return (
    <React.Fragment>
      <form
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
          name="name"
          required
          placeholder="Enter DAO Name"
          className="rounded-lg p-3"
        />

        {/** Purpose of DAO */}
        <label htmlFor="purpose" className="font-semibold">
          Purpose of DAO
        </label>
        <textarea
          type="text"
          name="purpose"
          placeholder="Specify the primary purpose or objectives the DAO aims to achieve, such as governance, funding, community building,"
          className="rounded-lg p-3"
        />

        {/** DAO Type */}
        <label htmlFor="type" className="font-semibold">
          DAO Type
        </label>
        <input type="text" name="type" className="rounded-lg p-3" />

        {/** DAO Token */}
        <div className="flex flex-row gap-4 items-center">
          <p htmlFor="type" className="font-semibold">
            DAO Token*
          </p>

          <button
            className={
              `${tokenStatus
                ? "bg-[#0E3746] text-white"
                : "border border-[#0E3746]"
              }` + " p-2 rounded-lg transition"
            }
            onClick={() => setTokenStatus(true)}
          >
            New Token
          </button>
          <button
            className={
              `${!tokenStatus
                ? "bg-[#0E3746] text-white"
                : "border border-[#0E3746]"
              }` + " p-2 border border-[#0E3746] rounded-lg transition"
            }
            onClick={() => setTokenStatus(false)}
          >
            Existing Token
          </button>
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/2 gap-4">
            <label htmlFor="token-name">Token Name</label>
            <input
              required
              type="text"
              name="token-name"
              className="rounded-lg p-3"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-4">
            <label htmlFor="token-name">Token Name</label>
            <input
              required
              type="text"
              name="token-name"
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
          name="initialTokenSupply"
          placeholder="Enter number of tokens to be minted"
          className="rounded-lg p-3"
        />
      </form>

      <div
        className={
          className +
          "__submitButton w-full flex flex-row items-center justify-end"
        }
      >
        <button
          type="submit"
          onClick={() => setActiveStep(1)}
          className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
        >
          Save & Next <FaArrowRightLong />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step1;
