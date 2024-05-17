// Importing necessary modules and assets
import React, { useState } from "react";
import "./MyProfile.css";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import EditPen from "../../../assets/edit_pen.png";
import MyProfileImage from "../../../assets/MyProfile-img.png";
import BigCircle from "../../../assets/BigCircle.png";
import MediumCircle from "../../../assets/MediumCircle.png";
import SmallestCircle from "../../../assets/SmallestCircle.png";
import MyProfileRectangle from "../../../assets/MyProfileRectangle.png";
import BigCircleAnimation from "./BigCircleAnimation.json";
import SmallCircleAnimation from "./SmallCircleAnimation.json";
import ProfileTitleDivider from "../../Components/MyProfile/ProfileTitleDivider";

// Main component function
const MyProfile = ({ childComponent }) => {
  const [activeTab, setActiveTab] = useState(null)
  const tabButtonsStyle = 'my-1 text-[12px] md:text-[16px] flex flex-row items-center gap-2 hover:text-white'
  const className = "MyProfile";
  const navigate = useNavigate()

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

  // Main return statement
  return (
    <div className={className + " bg-zinc-200 w-full relative"}>
      {/* Background image container */}
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
          <img
            src={BigCircle}
            alt="Big Circle"
            className="absolute  md:w-[96px] md:h-[96px] w-[65px] h-[65px] md:right-[76px] right-[-10px] top-1/2 -translate-y-1/2"
          />

          {/* Big circle animation */}
          <div className="absolute z-20  md:right-[68px] md:top-1/2 top-[59%] -translate-y-1/2 right-[-50px]">
            <Lottie
              options={defaultOptions}
              style={{ height: "112px", width: "112px" }}
              className="absolute z-50 "
            />
          </div>
          {/* Smallest circle image */}
          <img
            src={SmallestCircle}
            alt="Small Circle"
            className="absolute md:w-[43px] md:h-[43px] w-[26px] h-[26px] md:right-[25rem] right-[8.5rem] -translate-y-full md:top-[30%] top-[24%]"
          />

          {/* Small circle animation */}
          <div className="absolute md:right-[24.75rem] right-[7.1rem] md:top-[30%] top-[33%] -translate-y-[93%]">
            <Lottie
              options={defaultOptions2}
              height={50}
              width={50}
              className="absolute z-20"
            />
          </div>

          {/* Medium circle image */}
          <img
            src={MediumCircle}
            alt="Medium Circle"
            className="absolute w-[36px] h-36[px] md:w-[52px] md:h-[52px] md:right-[40rem] right-[13rem] -translate-y-full md:top-[95%] top-[89%]"
          />

          {/* Medium circle animation */}
          <div className="absolute md:right-[39.71rem] right-[11.6rem] md:top-[95%] top-[97.6%] -translate-y-[93%]">
            <Lottie
              options={defaultOptions3}
              height={61}
              width={61}
              className="absolute z-20"
            />
          </div>
        </div>

        <ProfileTitleDivider title="My Profile" />
      </div>

      {/* Main profile content */}
      <div
        className={
          className +
          "__mainComponent bg-[#c8ced3] md:py-8 md:px-8 flex md:flex-row gap-2 flex-col w-full user-container"
        }
      >
        {/* Left side content */}
        <div
          className={
            className +
            "__mainComponent__leftSide md:mx-2 mx-5 md:px-20 flex flex-col md:items-start justify-center md:w-[251px] md:h-[620px] rounded-[10px] bg-[#0E3746] text-white text-opacity-50 font-normal md:mt-[-92px] mt-[-30px] z-20"
          }
        >
          {/* Navigation links */}
          <div
            className="flex md:flex-col flex-row items-start md:justify-center justify-around  gap-y-6 md:mt-[8rem]
          mb-[2rem] mt-[0.5rem] text-base "
          >
            <Link to="/my-profile/my-post" onClick={() => setActiveTab(0)}>
              <p className={`${tabButtonsStyle} ${activeTab == 0 ? "text-white" : ""}`}>
                My Posts {activeTab == 0 ? <FaArrowRightLong /> : ""}
              </p>
            </Link>

            <p className={`${tabButtonsStyle}  ${activeTab == 1 ? "text-white" : ""}`}>
              Components {activeTab == 1 ? <FaArrowRightLong /> : ""}
            </p>

            <Link to="/my-profile/followers" onClick={() => setActiveTab(2)}>
              <p className={`${tabButtonsStyle} ${activeTab == 2 ? "text-white" : ""}`}>
                Followers {activeTab == 2 ? <FaArrowRightLong /> : ""}
              </p>
            </Link>

            <p className={`${tabButtonsStyle}  ${activeTab == 3 ? "text-white" : ""}`}>
              Following {activeTab == 3 ? <FaArrowRightLong /> : ""}
            </p>
          </div>
        </div>

        {/* Right side content */}
        <div className={className + "__rightSide w-full"}>
          {/* Profile picture and details */}
          <div className="flex md:justify-between justify-around w-full gap-2 z-50 relative">
            <div className="flex items-start md:ml-[-90px] relative">
              <div>
                <img
                  className="rounded-md md:w-full  w-[69px] mt-[-20px] z-50"
                  src={MyProfileImage}
                  alt="profile-pic"
                  style={{
                    boxShadow:
                      "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
                  }}
                />
              </div>
              <div className="ml-5">
                <h2 className="md:text-[32px] text-[18px] md:font-normal font-medium text-left text-[#05212C]">
                  Username.user
                </h2>
                <p className="text-[12px] md:text-[16px] font-normal text-left text-[#646464]">
                  gmail@gmail.xyz
                </p>
                <div className="flex justify-between mt-3">
                  <span className="md:mr-5 md:text-[32px] font-normal text-[#05212C] user-acc-info">
                    6 <span className=" md:text-[16px] mx-1">Posts</span>
                  </span>
                  <span className="md:mx-5 md:text-[32px] font-normal text-[#05212C] user-acc-info">
                    3 <span className=" md:text-[16px] mx-1">Followers</span>
                  </span>
                  <span className="md:mx-5 md:text-[32px] font-normal text-[#05212C] user-acc-info">
                    3 <span className=" md:text-[16px] mx-1">Following</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 md:mt-4 md:mr-4">
              <button
                onClick={() => navigate("/edit-profile")}
                className="bg-white text-[16px] text-[#05212C] gap-1  shadow-xl md:py-4 md:px-3 rounded-[27px] md:w-[181px] md:h-[40px] w-[2.5rem] h-[2.5rem] md:flex items-center space-x-4 rounded-2xl"
              >
                <img
                  src={EditPen}
                  alt="edit"
                  className="md:mr-2 h-4 w-4 edit-pen"
                />
                <span className="hidden sm:inline">Edit Profile</span>
              </button>
            </div>
          </div>
          <div className="flex justify-start mx-6 mt-3 md:hidden text-center">
            <div className="text-[24px] font-normal text-[#05212C] mx-4 ">
              6 <div className=" text-[14px]">Posts</div>
            </div>
            <div className=" text-[24px] font-normal text-[#05212C] mx-4 ">
              3 <div className=" text-[14px]">Followers</div>
            </div>
            <div className=" text-[24px] font-normal text-[#05212C] mx-4">
              3 <div className=" text-[14px]">Following</div>
            </div>
          </div>

          {/*Child Components */}
          {childComponent}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
