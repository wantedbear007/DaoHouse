import React, { useState } from "react";
import "./Members.scss";
import userImage from "../../../assets/commentUser.jpg";
import { IoFilterSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdAddBox } from "react-icons/md";

const Members = () => {
  const [openedGroupIndex, setOpenedGroupIndex] = useState();
  const className = "Member_and_policy";

  return (
    <div className={className + " mt-6"}>
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold">Members and Policy</h1>
        <button
          onClick={() => {
            Navigate("/create-proposal");
          }}
          className="flex justify-center items-center text-[16px] relative w-[220px] h-[50px] bg-white rounded-full hover:shadow-lg hover:bg-[#ECECEC] transition"
        >
          <span className="absolute text-[35px] font-thin left-5 bottom-[1px] ">
            +
          </span>
          <span className="ml-6">Create Proposals</span>
        </button>
      </div>

      <div className="bg-[#F4F2EC] rounded-[10px] mt-4">
        <header className="flex flex-row items-center justify-between p-4 border-b border-slate-400">
          <h1 className="font-semibold text-lg">Groups</h1>

          <div className="flex flex-row items-center gap-x-2">
            <div className="realtive flex flex-row items-center">
              <input
                type="search"
                name="groups"
                className="pl-10 w-[400px] rounded-[2rem] p-2 bg-[#F4F2EC] border border-[#AAC8D6]"
                placeholder="Search by Propposal ID"
              />
              <LuSearch className="ml-4 absolute text-slate-400" />
            </div>

            <button className="flex flex-row items-center gap-2 px-4 py-2 bg-white rounded-[2rem]">
              <IoFilterSharp />
              Filter
            </button>
          </div>
        </header>

        <div
          className={
            className +
            "__body p-4 bg-[#F4F2EC] rounded-lg gap-y-6 flex flex-col"
          }
        >
          {groups.map((item, index) => (
            <div
              className={
                className + "__body__group flex flex-col bg-white rounded-lg"
              }
              onClick={() => setOpenedGroupIndex(index)}
            >
              <header className="cursor-pointer flex flex-row items-center justify-between bg-[#AAC8D6] p-3 rounded-lg">
                <p className="font-semibold">{item.groupName}</p>

                <p className="font-semibold">
                  {item.membersList.length} Members
                </p>

                {openedGroupIndex === index ? (
                  <IoIosArrowDown className="font-bold" />
                ) : (
                  <IoIosArrowUp className="font-bold" />
                )}
              </header>

              {openedGroupIndex === index && (
                <div className={className + "__body__group__members p-8"}>
                  {item.membersList.map((member) => (
                    <div className="flex flex-col px-4 py-2 border border-[#97C3D3] rounded-lg">
                      <div className="top flex flex-row items-start justify-between ">
                        <section className="relative w-10 h-10">
                          <img
                            src={member.userImage}
                            alt="Image"
                            className="rounded-[50%] w-full h-full bottom-5 absolute"
                          />
                        </section>

                        <MdAddBox className="mx-2 text-[#97C3D3] text-2xl" />
                      </div>

                      <div className="middle flex flex-row gap-x-4 item-center justify-between">
                        <section className="details flex flex-col items-start">
                          <p className="font-semibold text-lg">
                            {member.userName}
                          </p>
                          <p className="text-sm">{member.userEmail}</p>
                        </section>

                        <section>
                          <button className="bg-[#FFEDED] text-sm text-red-500 rounded-2xl shadow-lg px-4 py-2">
                            Purpose to Remove
                          </button>
                        </section>
                      </div>

                      <div className="last flex flex-row align-start justify-evenly my-4">
                        <section className="flex flex-col items-center px-2">
                          <p className="text-sm">Total Votes</p>
                          <h1 className="font-semibold text-2xl">
                            {member.totalVotes}
                          </h1>
                        </section>

                        <div className="h-7 w-0.5 bg-slate-400"></div>

                        <section className="flex flex-col items-center">
                          <p className="text-sm">In Favour</p>
                          <h1 className="font-semibold text-2xl">
                            {member.inFavour}
                          </h1>
                        </section>

                        <div className="h-7 w-0.5 bg-slate-400"></div>

                        <section className="flex flex-col items-center">
                          <p className="text-sm">In Against</p>
                          <h1 className="font-semibold text-2xl">
                            {member.inAgainst}
                          </h1>
                        </section>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;

const groups = [
  {
    groupName: "Council",
    membersList: [
      {
        userKey: 1,
        userImage: userImage,
        userName: "Username.user",
        userEmail: "gmail@gmail.com",
        totalVotes: 25,
        inFavour: 19,
        inAgainst: 6,
      },
      {
        userKey: 2,
        userImage: userImage,
        userName: "Username.user",
        userEmail: "gmail@gmail.com",
        totalVotes: 25,
        inFavour: 19,
        inAgainst: 6,
      },
      {
        userKey: 3,
        userImage: userImage,
        userName: "Username.user",
        userEmail: "gmail@gmail.com",
        totalVotes: 25,
        inFavour: 19,
        inAgainst: 6,
      },
      {
        userKey: 4,
        userImage: userImage,
        userName: "Username.user",
        userEmail: "gmail@gmail.com",
        totalVotes: 25,
        inFavour: 19,
        inAgainst: 6,
      },
    ],
  },
  {
    groupName: "Group 1",
    membersList: [
      {
        userKey: 1,
        userImage: userImage,
        userName: "Username.user",
        userEmail: "gmail@gmail.com",
        totalVotes: 25,
        inFavour: 19,
        inAgainst: 6,
      },
      {
        userKey: 2,
        userImage: userImage,
        userName: "Username.user",
        userEmail: "gmail@gmail.com",
        totalVotes: 25,
        inFavour: 19,
        inAgainst: 6,
      },
    ],
  },
];
