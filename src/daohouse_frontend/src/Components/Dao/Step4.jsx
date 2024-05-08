import React, { useState } from "react";
import "./Step4.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Step4 = ({ setActiveStep }) => {
  const className = "DAO__Step4";
  const [activeStage, setActiveStage] = useState(0);

  return (
    <React.Fragment>
      <div
        className={
          className +
          "__form w-full bg-[#F4F2EC] p-10 mx-4 rounded-lg flex flex-col gap-4"
        }
      >
        <ul className={className + "__steps flex flex-row gap-8"}>
          <li
            className={`list-disc text-lg font-semibold ${
              activeStage == 0 ? "" : "opacity-50"
            }`}
          >
            Proposal Creation
          </li>
          <li
            className={`list-disc text-lg font-semibold ${
              activeStage == 1 ? "" : "opacity-50"
            }`}
          >
            Voting Permission
          </li>
        </ul>

        <p className="font-semibold">Select Rights</p>
        <p className="text-slate-700">
          Decide what permissions you want to give to DAO groups for creating
          things. You can adjust this later in settings.
        </p>

        <div className={className + "__table w-full overflow-x-auto"}>
          <table className="w-full">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Actions</th>
                <th>Council</th>
                <th>All</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-nowrap">Change DAO Config</td>
                <td className="text-center">
                  <input type="checkbox" name="council" />
                </td>
                <td className="text-center">
                  <input type="checkbox" name="group" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={
          className +
          "__submitButton w-full flex flex-row items-center justify-end"
        }
      >
        <button
          onClick={() => setActiveStep(2)}
          className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
        >
          <FaArrowLeftLong /> Back
        </button>
        <button
          type="submit"
          onClick={() => setActiveStep(4)}
          className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
        >
          Save & Next <FaArrowRightLong />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Step4;
