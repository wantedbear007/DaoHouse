import React from 'react';

const DaoCard = ({ name, funds, members, groups, proposals }) => {
  return (
    <div className="bg-[#F4F2EC] rounded-lg shadow-lg p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="w-[207px] h-[120px] bg-zinc-300 rounded"></div>
        <h2 className="text-2xl font-semibold flex-1 mb-auto ml-4">{name}</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center mb-4 bg-white p-4 rounded-lg">
        <div>
          <p className="font-bold">{funds}</p>
          <p className="text-sm text-zinc-600">DAO Funds</p>
        </div>
        <div>
          <p className="font-bold">{members}</p>
          <p className="text-sm text-zinc-600">Members</p>
        </div>
        <div>
          <p className="font-bold">{groups}</p>
          <p className="text-sm text-zinc-600">Groups</p>
        </div>
        <div>
          <p className="font-bold">{proposals}</p>
          <p className="text-sm text-zinc-600">Active Proposals</p>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <button className="flex-1 bg-transparent border-2 border-[#0E3746] text-[#0E3746] px-8 py-2 rounded-[3rem]">View Profile</button>
        <button className="flex-1 bg-[#0E3746] border-2 border-[#0E3746] text-white px-8 py-2 rounded-[3rem]">Join DAO</button>
      </div>
    </div>
  );
};

export default DaoCard;
