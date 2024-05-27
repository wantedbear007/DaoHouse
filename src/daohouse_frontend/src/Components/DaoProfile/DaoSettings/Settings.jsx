import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Quorum from "./Quorum";
import { useNavigate, useParams } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const [activeLink, setActiveLink] = useState("basic-info");

  const handleClick = (linkName) => {
    setActiveLink(linkName);
    navigate(`/dao/profile/settings/${linkName}`);
  };

  let SubComponent;
  switch (tab) {
    case "basic-info":
      SubComponent = BasicInfo;
      break;
    // case "settle-down-period":
    //   SubComponent = SettleDownPeriod;
    //   break;
    // case "add-members-groups":
    //   SubComponent = AddMembersGroups;
    //   break;
    // case "permissions":
    //   SubComponent = Permissions;
    //   break;
    case "quorum":
      SubComponent = Quorum;
      break;
    // case "dao-assist":
    //   SubComponent = DaoAssist;
    //   break;
    default:
      SubComponent = BasicInfo;
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[24px] md:text-[18px] text-[16px] font-bold">
          DAO Settings
        </h1>
      </div>
      <div className="bg-[#F4F2EC] rounded-[10px] mt-4 md:mb-16 mb-8">
        <div className="flex items-center md:p-5 p-4">
          <div
            className="__navs w-full flex flex-row justify-between mt-8 md:w-[90%] lg:w-[80%] xl:w-[80%] gap-6 lg:text-[16px] text-[14px] pb-2"
            style={{
              height: "100%",
              overflowX: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#0e3746 transparent",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("basic-info");
              }}
              className={`flex gap-2 cursor-pointer text-nowrap ${
                activeLink === "basic-info"
                  ? " text-[#0E3746]"
                  : "text-[#0E37464D]"
              }`}
            >
              <span className="flex items-center justify-center border border-[#0E3746] w-6 h-6 rounded-[50%]">
                1
              </span>
              <span>Basic Info</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("settle-down-period");
              }}
              className={`flex gap-2 cursor-pointer text-nowrap ${
                activeLink === "settle-down-period"
                  ? " text-[#0E3746]"
                  : "text-[#0E37464D]"
              }`}
            >
              <span className="flex items-center justify-center border border-[#0E3746] w-6 h-6 rounded-[50%]">
                2
              </span>
              <span>Settle Down Period</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("add-members-groups");
              }}
              className={`flex gap-2 cursor-pointer text-nowrap ${
                activeLink === "add-members-groups"
                  ? " text-[#0E3746]"
                  : "text-[#0E37464D]"
              }`}
            >
              <span className="flex items-center justify-center border border-[#0E3746] w-6 h-6 rounded-[50%]">
                3
              </span>
              <span>Add Members & Groups</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("permissons");
              }}
              className={`flex gap-2 cursor-pointer text-nowrap ${
                activeLink === "permissons"
                  ? " text-[#0E3746]"
                  : "text-[#0E37464D]"
              }`}
            >
              <span className="flex items-center justify-center border border-[#0E3746] w-6 h-6 rounded-[50%]">
                4
              </span>
              <span>Permissons</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("quorum");
              }}
              className={`flex gap-2 cursor-pointer text-nowrap ${
                activeLink === "quorum" ? " text-[#0E3746]" : "text-[#0E37464D]"
              }`}
            >
              <span className="flex items-center justify-center border border-[#0E3746] w-6 h-6 rounded-[50%]">
                5
              </span>
              <span>Quorum</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick("dao-assist");
              }}
              className={`flex gap-2 cursor-pointer text-nowrap ${
                activeLink === "dao-assist"
                  ? " text-[#0E3746]"
                  : "text-[#0E37464D]"
              }`}
            >
              <span className="flex items-center justify-center border border-[#0E3746] w-6 h-6 rounded-[50%]">
                6
              </span>
              <span>DAO Assist</span>
            </button>
          </div>
        </div>
        <div className="w-full border-t  border-[#0000004D]"></div>
        <div className="px-4 py-4">{SubComponent && <SubComponent />}</div>
      </div>
    </div>
  );
};

export default Settings;
