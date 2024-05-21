import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import BigCircleComponent from "../../Components/Ellipse-Animation/BigCircle/BigCircleComponent";
import SmallCircleComponent from "../../Components/Ellipse-Animation/SmallCircle/SmallCircleComponent";
import MediumCircleComponent from "../../Components/Ellipse-Animation/MediumCircle/MediumCircleComponent";
import BigCircleAnimation from "../../Components/Ellipse-Animation/BigCircle/BigCircleAnimation.json";
import SmallCircleAnimation from "../../Components/Ellipse-Animation/SmallCircle/SmallCircleAnimation.json";
import BigCircle from "../../../assets/BigCircle.png";
import MediumCircle from "../../../assets/MediumCircle.png";
import SmallestCircle from "../../../assets/SmallestCircle.png";
import MyProfileRectangle from "../../../assets/MyProfileRectangle.png";
import ProposalsContent from "../../Components/DaoProfile/ProposalsContent";
import FeedsContent from "../../Components/DaoProfile/FeedsContent";

const DaoProfile = () => {
  const className = "DaoProfile";
  const [activeLink, setActiveLink] = useState("proposals");
  const navigate = useNavigate();

  const handleClick = (linkName) => {
    setActiveLink(linkName);
    navigate(`/dao/profile/${linkName}`);
  };

  // Animation options for the big circle
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BigCircleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "lottie-bigCircle",
    },
  };

  // Animation options for the small circle
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: SmallCircleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "lottie-smallCircle",
    },
  };
  // Animation options for the medium circle
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: SmallCircleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "lottie-mediumCircle",
    },
  };

  return (
    <div className={className + " bg-zinc-200 w-full relative"}>
      <div
        className={
          className +
          "__topComponent w-full h-[25vh] p-20 flex flex-col items-start justify-center relative hero-container"
        }
        style={{
          backgroundImage: `url("${MyProfileRectangle}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-20 top-0 left-0 w-full h-full overflow-x-hidden">
          {/* Big circle image */}
          <BigCircleComponent imgSrc={BigCircle} />

          {/* Big circle animation */}
          <div className="absolute z-20  big_phone:right-[68px] big_phone:top-1/2 top-[59%] -translate-y-1/2 right-[-50px]">
            <Lottie
              options={defaultOptions}
              style={{ height: "112px", width: "112px" }}
              className="absolute z-50 "
            />
          </div>
          {/* Smallest circle image */}
          <SmallCircleComponent imgSrc={SmallestCircle} />

          {/* Small circle animation */}
          <div className="absolute big_phone:right-[24.75rem] right-[7.1rem] big_phone:top-[30%] top-[33%] -translate-y-[93%]">
            <Lottie
              options={defaultOptions2}
              height={50}
              width={50}
              className="absolute z-20"
            />
          </div>

          {/* Medium circle image */}
          <MediumCircleComponent imgSrc={MediumCircle} />

          {/* Medium circle animation */}
          <div className="absolute big_phone:right-[39.71rem] right-[11.6rem] big_phone:top-[95%] top-[97.6%] -translate-y-[93%]">
            <Lottie
              options={defaultOptions3}
              height={61}
              width={61}
              className="absolute z-20"
            />
          </div>
        </div>
      </div>
      <div
        className={
          className +
          "__mainComponent bg-[#c8ced3] big_phone:py-8 big_phone:pb-20 py-6 big_phone:px-8 tablet:flex-row gap-2 flex-col w-full"
        }
      >
        <div className="flex tablet:justify-between justify-around w-full gap-2 z-50 relative">
          <div className="flex items-center relative">
            <div>
              <div
                className="mobile:w-[207px] mobile:h-[120px] w-[150px] h-[70px] bg-[#C2C2C2] rounded"
                style={{
                  boxShadow:
                    "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
                }}
              ></div>
            </div>
            <div className="ml-10">
              <h2 className="tablet:text-[40px] text-[18px] tablet:font-normal font-medium text-left text-[#05212C]">
                Username.user
              </h2>
              <p className="text-[12px] tablet:text-[16px] font-normal text-left text-[#646464]">
                gmail@gmail.xyz
              </p>
              <div className="tablet:flex hidden justify-between mt-2">
                <span className="tablet:mr-5 tablet:text-[32px] font-normal text-[#05212C] user-acc-info">
                  6 <span className=" tablet:text-[16px] mx-1">Posts</span>
                </span>
                <span className="tablet:mx-5 tablet:text-[32px] font-normal text-[#05212C] user-acc-info">
                  3<span className=" tablet:text-[16px] mx-1">Followers</span>
                </span>
                <span className="tablet:mx-5 tablet:text-[32px] font-normal text-[#05212C] user-acc-info">
                  3<span className=" tablet:text-[16px] mx-1">Following</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 tablet:mt-4 tablet:mr-4">
            <button
              onClick={() => navigate("/follow")}
              className="bg-[#0E3746] text-[16px] text-white shadow-xl tablet:py-4 tablet:px-3 rounded-[27px] tablet:w-[131px] tablet:h-[40px] w-[2.5rem] h-[2.5rem] tablet:flex items-center justify-center rounded-2xl"
              style={{
                boxShadow:
                  "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
              }}
            >
              Follow
            </button>

            <button
              onClick={() => navigate("/join-dao")}
              className="bg-white text-[16px] text-[#05212C] shadow-xl tablet:py-4 tablet:px-3 rounded-[27px] tablet:w-[131px] tablet:h-[40px] w-[2.5rem] h-[2.5rem] tablet:flex items-center justify-center rounded-2xl"
              style={{
                boxShadow:
                  "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
              }}
            >
              Join DAO
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-8 w-[60%]">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("proposals");
            }}
            className={`cursor-pointer ${
              activeLink === "proposals"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Proposals
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("feeds");
            }}
            className={`cursor-pointer ${
              activeLink === "feeds"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Feeds
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("funds");
            }}
            className={`cursor-pointer ${
              activeLink === "funds"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Funds
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("member_policy");
            }}
            className={`cursor-pointer ${
              activeLink === "member_policy"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Member & Policy
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("followers");
            }}
            className={`cursor-pointer ${
              activeLink === "followers"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Followers
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("bounties");
            }}
            className={`cursor-pointer ${
              activeLink === "bounties"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Bounties
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("settings");
            }}
            className={`cursor-pointer ${
              activeLink === "settings"
                ? "underline text-[#0E3746]"
                : "text-[#0E37464D]"
            }`}
          >
            Settings
          </a>
        </div>
        {activeLink === "proposals" && <ProposalsContent />}
        {activeLink === "feeds" && <FeedsContent />}
      </div>
    </div>
  );
};

export default DaoProfile;
