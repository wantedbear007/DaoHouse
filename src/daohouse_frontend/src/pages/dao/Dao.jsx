import React, { useState } from 'react';
import DaoCard from '../../Components/Dao/DaoCard';
import daobg from "../../../assets/daobg.png"
import CenteredBackgroundImageWithButtons from '../../Components/Dao/CenteredBackgroundImageWithButtons';
import CreateDaoWidget from '../../Components/Dao/CreateDaoWidget';
import NoDataComponent from '../../Components/Dao/NoDataComponent';

const Dao = () => {
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
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-zinc-200 p-8">
      <div className="max-w-7xl mx-auto">
        <CenteredBackgroundImageWithButtons backgroundImageSrc={daobg} altText="Background Image">
          <h1 className="text-3xl font-normal text-white border-b-2  border-white">DAOS</h1>
          <div className='flex justify-center items-center'>

            <button className={`text-white bg-transparent px-4 py-2 rounded ${showAll ? 'shadow-lg font-semibold' : ''}`} onClick={() => setShowAll(true)}>All</button>
            <button className={`text-white bg-transparent px-4 py-2 rounded ${!showAll ? 'shadow-lg font-semibold' : ''}`} onClick={() => setShowAll(false)}>Joined</button>
          </div>
        </CenteredBackgroundImageWithButtons>
        <CreateDaoWidget text={showAll ? "All" : "Joined"} />
        {showAll ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {daoData.map((dao, index) => (
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
          <NoDataComponent />
        )}
        </div>
    </div>
  );
};

export default Dao;
