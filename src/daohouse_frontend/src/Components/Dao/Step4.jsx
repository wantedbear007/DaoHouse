import React, { useState } from "react";
import "./Step4.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Step4 = ({ data, setData, setActiveStep }) => {
  const className = "DAO__Step4";
  const [activeStage, setActiveStage] = useState(0);

  return (
    <React.Fragment>
      <div
        className={
          className +
          "__form w-full bg-[#F4F2EC] p-10 rounded-lg flex flex-col gap-4"
        }
      >
        <ul className={className + "__steps flex flex-row gap-8 px-4"}>
          <li
            className={`list-disc text-lg font-semibold ${activeStage == 0 ? "" : "opacity-50"
              }`}
          >
            Proposal Creation
          </li>
          <li
            className={`list-disc text-lg font-semibold ${activeStage == 1 ? "" : "opacity-50"
              }`}
          >
            Voting Permission
          </li>
        </ul>

        <section>
          <p className="font-semibold">Select Rights</p>
          <p className="text-slate-700">
            Decide what permissions you want to give to DAO groups for creating
            things. You can adjust this later in settings.
          </p>
        </section>

        {activeStage === 0 && (
          <React.Fragment>
            <section className={className + "__table w-full overflow-x-auto"}>
              <div className="heading flex flex-row items-center justify-between p-4">
                <p className="font-semibold w-2/5">Actions</p>
                <p className="font-semibold">Council</p>
                <p className="font-semibold">All</p>
              </div>

              <div className="body bg-white p-3 rounded-2xl">
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Change DAO Config
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Change DAO Policy
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Bounty</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Bounty Done</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Transfer</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Polls</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Add Members</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Function Call
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Upgrade Self
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Upgrade Remote
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Set Vote Token
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
              </div>
            </section>

            <section className="flex w-full justify-end items-center">
              <button
                type="submit"
                onClick={() => setActiveStage(1)}
                className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
              >
                Next
              </button>
            </section>
          </React.Fragment>
        )}

        {activeStage === 1 && (
          <React.Fragment>
            <section className={className + "__table w-full overflow-x-auto"}>
              <div className="heading flex flex-row items-center justify-between p-4">
                <p className="font-semibold w-2/5">Actions</p>
                <p className="font-semibold">Council</p>
                <p className="font-semibold">All</p>
              </div>

              <div className="body bg-white p-3 rounded-2xl">
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Change DAO Config
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Change DAO Policy
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Bounty</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Bounty Done</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Transfer</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Polls</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">Add Members</li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Function Call
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Upgrade Self
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Upgrade Remote
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
                <hr />
                <div className="row flex flex-row items-center justify-between p-4">
                  <li className="w-2/5 font-semibold list-disc">
                    Set Vote Token
                  </li>
                  <input type="checkbox" name="council" checked={true} />
                  <input type="checkbox" name="all" />
                </div>
              </div>
            </section>

            <section className="flex w-full justify-end items-center">
              <button
                type="submit"
                onClick={() => setActiveStage(0)}
                className="flex m-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white"
              >
                Back
              </button>
            </section>
          </React.Fragment>
        )}
      </div>

      <div
        className={
          className +
          "__submitButton w-full flex flex-row items-center justify-end"
        }
      >
        <button
          onClick={() => setActiveStep(2)}
          className="flex m-4 flex-row items-center gap-2 border border-[#0E3746] hover:bg-[#0E3746] text-[#0E3746] hover:text-white transition px-4 py-2 rounded-[2rem]"
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
