import React from "react";
import MyProfileRectangle from "../../../assets/MyProfileRectangle.png";
import MyProfileImage from "../../../assets/MyProfile-img.png";
import EditPen from "../../../assets/edit_pen.png";
import { useNavigate } from "react-router-dom";
import Tags from "../../Components/MyProfile/Tags";
import PersonalLinksAndContactInfo from "../../Components/MyProfile/PersonalLinksAndContactInfo";
// import RotatingBalls from "../../Components/MyProfile/RotatingBalls";

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-200 w-full">
      <div
        className="w-full h-[25vh] p-20 flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url("${MyProfileRectangle}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <RotatingBalls /> */}
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-[40px] p-2 text-white ">My Profile</h1>
          <div className="flex flex-col items-start">
            <div className="w-32 border-t-2 border-white"></div>
            <div className="w-14 mt-2 border-t-2 border-white"></div>
          </div>
        </div>
      </div>

      <div className="bg-[#c8ced3] py-8 px-8 flex md:flex-row gap-2 flex-col w-full">
        <div className="mx-2 px-20 flex flex-col items-start justify-center w-[251px] h-[620px] rounded-[10px] bg-[#0E3746] text-white text-opacity-50 font-normal text-[16px] mt-[-92px]">
          <div className="flex flex-col items-start justify-center gap-y-6 mt-[8rem] text-base">
            <p className="my-1">
              <a href="">My Posts</a>
            </p>
            <p className="my-1">
              <a href="">Components</a>
            </p>
            <p className="my-1">
              <a href="">Followers</a>
            </p>
            <p className="my-1">
              <a href="">Following</a>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between w-full">
            <div className="flex items-start ml-[-90px]">
              <div>
                <img
                  className="rounded-md"
                  src={MyProfileImage}
                  alt="profile-pic"
                  style={{
                    boxShadow:
                      "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
                  }}
                />{" "}
              </div>

              <div className="ml-5">
                <h2 className="text-[32px] font-normal text-left text-[#05212C]">
                  Username.user
                </h2>
                <p className="text-[16px] font-normal text-left text-[#646464]">
                  gmail@gmail.xyz
                </p>
                <div className="flex justify-between mt-3">
                  <span className="mr-5 text-[32px] font-normal text-[#05212C]">
                    6 <span className="text-[16px] mx-1">Posts</span>
                  </span>
                  <span className="mx-5 text-[32px] font-normal text-[#05212C]">
                    3 <span className="text-[16px] mx-1">Followers</span>
                  </span>
                  <span className="mx-5 text-[32px] font-normal text-[#05212C]">
                    3 <span className="text-[16px] mx-1">Following</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => navigate("/edit-profile")}
                className="bg-white text-[16px] text-[#05212C] gap-1 px-7 shadow-xl py-4 px-4 rounded-[27px] w-[181px] h-[50px] flex items-center space-x-4 rounded-2xl"
              >
                <img src={EditPen} alt="edit" className="mr-2 h-5 w-5" /> Edit
                Profile
              </button>
            </div>
          </div>
          <div className="ml-10 mt-12">
            <h3 className="text-[#05212C] text-[24px] font-bold ml-6">
              About Me
            </h3>
            <div className="mt-4 bg-[#F4F2EC] p-4 rounded-lg">
              <p className="text-[20px] font-semibold text-[#05212C] ml-2 mb-3">
                Description
              </p>
              <div className="bg-[#FFFFFF] text-[16px] font-normal text-[#646464] p-3 my-2 rounded-lg">
                I'm a firm believer in the power of kindness and the beauty of
                diversity, constantly seeking out new perspectives and
                experiences to broaden my horizons. From hiking through rugged
                mountain trails to savoring exotic cuisines from around the
                globe, I thrive on the thrill of adventure and the joy of
                discovery.
              </div>
              <p className="text-[20px] font-semibold text-[#05212C] ml-2 mb-3 mt-6">
                Tags That Defines You
              </p>
              <Tags />
              <p className="text-[20px] font-semibold text-[#05212C] ml-2 mb-3 mt-6">
                Personal Links & Contact Info
              </p>
              <PersonalLinksAndContactInfo
                links={[
                  { icon: "phone-icon", name: "Phone", value: "0123456789" },
                  {
                    icon: "email-icon",
                    name: "Email",
                    value: "Emailid.id@email.com",
                  },
                  {
                    icon: "X-icon",
                    name: "X",
                    value: "http://www.statholdings.com",
                  },
                  {
                    icon: "telegram-icon",
                    name: "Telegram",
                    value: "http://www.groovestreet.com",
                  },
                  {
                    icon: "web-icon",
                    name: "Web",
                    value: "http://dummywebsite2.net",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
