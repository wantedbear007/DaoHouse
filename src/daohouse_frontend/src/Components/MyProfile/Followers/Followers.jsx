import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import follower from "../../../../assets/followerImage.png";

const Followers = () => {
  const className = "Followers";

  return (
    <div className={className + "w-full"}>
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4">
          Followers
        </h3>

        <div className="md:mt-4 mt-2 flex flex-row gap-4">
          <div className="w-3/5 max-h-[300px] p-4 bg-[#F4F2EC] rounded-lg flex flex-col gap-5 overflow-y-auto">
            {followersList.map(({ userName, key, image }) => (
              <div
                key={key}
                className="w-full flex flex-row items-center justify-between"
              >
                <div className="flex flex-row gap-4 items-center">
                  <section className="border border-cyan-200 rounded-[50%]">
                    <img
                      src={image}
                      alt="Follower"
                      className="min-w-12 h-full object-contain border border-4 border-white rounded-[50%]"
                    />
                  </section>

                  <section className="flex flex-col items-start">
                    <p className="text-lg">{userName}</p>
                    <p className="text-slate-500 text-sm">{userName}</p>
                  </section>
                </div>

                <button className="border border-cyan-500 px-4 py-1 text-sm rounded-2xl text-cyan-500">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="w-2/5 max-h-[300px] p-4 bg-[#F4F2EC] rounded-lg flex flex-col gap-5 overflow-y-auto">
            <h1 className="text-2xl font-bold border-b border-black py-2">
              More People
            </h1>

            {morePeopleList.map(({ userName, image, gmail, key }) => (
              <div
                key={key}
                className="w-full flex flex-row items-center justify-between"
              >
                <div className="flex flex-row items-center">
                  <div className="flex flex-row big_phone:gap-4 gap-2 items-center">
                    <img
                      src={image}
                      alt="Follower"
                      className="big_phone:w-10 w-8 h-full object-contain rounded-[50%]"
                    />

                    <section className="flex flex-col items-start">
                      <p className="text-1xl">{userName}</p>
                      <p className="text-slate-500 text-xs">{gmail}</p>
                    </section>
                  </div>
                </div>

                <RxArrowTopRight className="big_phone:text-2xl text-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;

const followersList = [
  {
    key: 1,
    userName: "Username.user",
    image: follower,
  },
  {
    key: 2,
    userName: "Username.user",
    image: follower,
  },
  {
    key: 3,
    userName: "Username.user",
    image: follower,
  },
  {
    key: 4,
    userName: "Username.user",
    image: follower,
  },
];

const morePeopleList = [
  {
    key: 1,
    image: follower,
    userName: "Kai Parker",
    gmail: "Gmail@gmail.com",
  },
  {
    key: 2,
    image: follower,
    userName: "Kai Parker",
    gmail: "Gmail@gmail.com",
  },
  {
    key: 3,
    image: follower,
    userName: "Kai Parker",
    gmail: "Gmail@gmail.com",
  },
  {
    key: 4,
    image: follower,
    userName: "Kai Parker",
    gmail: "Gmail@gmail.com",
  },
  {
    key: 5,
    image: follower,
    userName: "Kai Parker",
    gmail: "Gmail@gmail.com",
  },
];
