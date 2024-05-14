import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

import DaoCard from "../../Components/Dao/DaoCard";
import NoDataComponent from "../../Components/Dao/NoDataComponent";
import TopComponent from "../../Components/Dao/TopComponent";

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
      <TopComponent showAll={showAll} setShowAll={setShowAll} showButtons={true} />

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

        <Link to="/dao/create-dao">
          <button className="bg-white gap-2 px-4 shadow-xl py-2 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl hover:bg-[#ececec] hover:scale-105 transition">
            <HiPlus />
            Create DAO
          </button>
        </Link>
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
