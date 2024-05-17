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
          "__label bg-[#c8ced3] small_phone:py-8 py-5 mobile:px-10 px-5 flex flex-row w-full justify-between items-center"
        }
      >
        <p className="small_phone:text-4xl text-3xl big_phone:px-8 flex flex-row items-center gap-4">
          {showAll ? "All" : "Joined"}
          <div className="flex flex-col items-start">
            <div className="mobile:w-32 w-12 border-t-2 border-black"></div>
            <div className="mobile:w-14 w-8 small_phone:mt-2 mt-1 border-t-2 border-black"></div>
          </div>
        </p>

        <Link to="/dao/create-dao">
          <button className="bg-white small_phone:gap-2 gap-1 mobile:px-5 p-2 small_phone:text-base text-sm shadow-xl rounded-full shadow-md flex items-center rounded-2xl hover:bg-[#ececec] hover:scale-105 transition">
            <HiPlus />
            Create DAO
          </button>
        </Link>
      </div>

      {showAll ? (
        <div
          className={
            className +
            "__cards tablet:px-10 px-4 pb-10 bg-[#c8ced3] grid grid-cols-1 big_phone:grid-cols-2 tablet:gap-6 gap-4"
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
            "__cards tablet:px-10 px-4 pb-10 bg-[#c8ced3] grid grid-cols-1 big_phone:grid-cols-2 tablet:gap-6 gap-4"
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
