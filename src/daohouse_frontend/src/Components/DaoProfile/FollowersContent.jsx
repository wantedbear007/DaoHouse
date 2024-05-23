import React from "react";
import SearchProposals from "../Proposals/SearchProposals";
import userImage from "../../../assets/commentUser.jpg";
import { MdAddBox } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";

const followersList = [
  {
    userKey: 1,
    userImage: userImage,
    userName: "Username.user",
    userEmail: "gmail@gmail.com",
  },
  {
    userKey: 2,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 3,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 4,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 5,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 6,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 7,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 9,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 10,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 11,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 12,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
  {
    userKey: 13,
    userImage: userImage,
    userName: "Another User",
    userEmail: "another@gmail.com",
  },
];

const FollowersContent = () => {
  const className = "Followers";

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[24px] md:text-[18px] text-[16px] font-bold">
          Followers
        </h1>
      </div>
      <div className="bg-[#F4F2EC] pt-3 pb-8 mt-4 mb-8 rounded-[10px]">
        <div className="flex justify-between items-center px-6 mb-3">
          <span className="text-[20px] text-[#05212C] font-semibold">
            {followersList.length} Followers
          </span>
          <span className="flex">
            <div className="flex-grow flex justify-center px-6 mx-2">
              <SearchProposals
                width="100%"
                bgColor="transparent"
                placeholder="Search by name"
                className="border-2 border-[#AAC8D6] w-full max-w-lg"
              />
            </div>
            <button className="bg-white text-[16px] text-[#05212C] gap-1 px-7 shadow-xl py-4 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
              <IoFilterSharp />
              Filter
            </button>
          </span>
        </div>
        <div className="w-full border-t  border-[#0000004D] my-4"></div>
        <div
          className={className + "__body__group__members "}
          style={{ maxHeight: "300px", overflowY: "scroll" }}
        >
          <div
            className="flex flex-row justify-start gap-4 flex-wrap bg-white mx-5 rounded-[10px] scrollable-container p-8"
            style={{
              height: "100%",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#0e3746 transparent",
            }}
          >
            {followersList.map((follower, index) => (
              <div
                key={index}
                className="flex flex-row justify-between px-4 py-2 border border-[#97C3D3] gap-8 rounded-lg"
              >
                <div className="flex gap-2">
                  <div className="flex flex-row justify-between items-center ">
                    <section className="relative w-10 h-10">
                      <img
                        src={follower.userImage}
                        alt="Image"
                        className="rounded-[50%] w-full h-full"
                      />
                    </section>
                  </div>
                  <div className="middle flex flex-row gap-x-4 item-center justify-between">
                    <section className="details flex flex-col items-start">
                      <p className="font-semibold text-lg">
                        {follower.userName}
                      </p>
                      <p className="text-sm">{follower.userEmail}</p>
                    </section>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MdAddBox className="mx-2 text-[#97C3D3] text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowersContent;
