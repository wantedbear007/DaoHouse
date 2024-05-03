import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

import daobg from "../../../assets/daobg.png";
import DaoCard from "../../Components/Dao/DaoCard";
import NoDataComponent from "../../Components/Dao/NoDataComponent";

const Dao = () => {
  const [showAll, setShowAll] = useState(true);
  const [joinedDAO, setJoinedDAO] = useState(false);
  const className = "DAO";

  const daoData = [
    { name: "DAO 1", funds: "100m USD", members: 30, groups: 5, proposals: 20 },
    { name: "DAO 2", funds: "200m USD", members: 50, groups: 8, proposals: 25 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
    { name: "DAO 3", funds: "150m USD", members: 35, groups: 6, proposals: 18 },
  ];

  const joinedDAOs = [
    { name: "DAO 3", funds: "155m USD", members: 40, groups: 4, proposals: 10 },
    { name: "DAO 3", funds: "160m USD", members: 35, groups: 6, proposals: 18 },
  ];

  return (
    <div className="bg-zinc-200">
      <div
        className={
          className +
          "__filter w-100 h-[25vh] p-20 flex flex-col items-start justify-center"
        }
        style={{
          backgroundImage: `url("${daobg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl p-3 text-white">DAOs</h1>

        <div
          className={
            className + "__buttons flex flex-row border-t-2 border-white"
          }
        >
          <button
            className={`px-6 py-2 text-lg text-white ${
              !showAll ? "" : "shadow-lg font-semibold"
            }`}
            onClick={() => setShowAll(true)}
          >
            All
          </button>
          <button
            className={`px-6 py-2 text-lg text-white ${
              showAll ? "" : "shadow-lg font-semibold"
            }`}
            onClick={() => setShowAll(false)}
          >
            Joined
          </button>
        </div>
      </div>

      <div
        className={
          className +
          "__label bg-[#c8ced3] py-8 px-10 flex flex-row w-full justify-between items-center"
        }
      >
        <p className="text-4xl px-8 flex flex-row items-center gap-4">
          {showAll ? "All" : "Joined"}
          <div className="flex flex-col items-start">
            <div className="w-32 border-t-2 border-black"></div>
            <div className="w-14 mt-2 border-t-2 border-black"></div>
          </div>
        </p>

        <button className="bg-white gap-2 px-4 shadow-xl py-2 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
          <HiPlus />
          Create DAO
        </button>
      </div>

      {showAll ? (
        <div
          className={
            className +
            "__cards px-10 pb-10 bg-[#c8ced3] grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {daoData &&
            daoData.map((dao, index) => (
              <DaoCard
                key={index}
                name={dao.name}
                funds={dao.funds}
                members={dao.members}
                groups={dao.groups}
                proposals={dao.proposals}
              />
            ))}
        </div>
      ) : joinedDAO ? (
        <div
          className={
            className +
            "__cards px-10 pb-10 bg-[#c8ced3] grid grid-cols-1 md:grid-cols-2 gap-6"
          }
        >
          {joinedDAOs &&
            joinedDAOs.map((dao, index) => (
              <DaoCard
                key={index}
                name={dao.name}
                funds={dao.funds}
                members={dao.members}
                groups={dao.groups}
                proposals={dao.proposals}
              />
            ))}
        </div>
      ) : (
        <NoDataComponent setJoinedDAO={setJoinedDAO} />
      )}
    </div>
  );
};

export default Dao;
