import React from "react";
import Tags from "../../../Components/MyProfile/Tags";
import PersonalLinksAndContactInfo from "../PersonalLinksAndContactInfo";
import { useUserProfile } from "../../../context/UserProfileContext";

const AboutMe = () => {
  const className = "AboutMe";
  const { userProfile, fetchUserProfile } = useUserProfile();

  return (
    <div className={className + "w-full"}>
      {/* About me section */}
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] lg:text-[24px] md:text-[18px] text-[16px] md:font-bold font-semibold lg:ml-4 md:ml-2">
          About Me
        </h3>
        <div className="md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg">
          <p className="lg:text-[20px] md:text-[16px] text-[14px] font-semibold text-[#05212C] md:ml-2 md:mb-3">
            Description
          </p>
          <div className="bg-white lg:text-[16px] md:text-[14px] text-[12px] font-normal text-[#646464] p-3 my-2 rounded-lg">
            {userProfile?.description || "No Data"}
          </div>
          <p className="lg:text-[20px] md:text-[16px] text-[14px] font-semibold text-[#05212C] md:ml-2 md:mb-3 mt-6">
            Tags That Defines You
          </p>
          {userProfile?.description ? <Tags
            tags={userProfile?.tag_defines || []}
          /> : <div className="bg-white lg:text-[16px] md:text-[14px] text-[12px] font-normal text-[#646464] p-3 my-2 rounded-lg">
            {"No Data"}
          </div>}


          <p className="lg:text-[20px] md:text-[16px] text-[14px] font-semibold text-[#05212C] ml-2 mb-3 mt-6">
            Personal Links & Contact Info
          </p>
          {userProfile?.description ? (<PersonalLinksAndContactInfo
            links={[
              { icon: "phone-icon", name: "Phone", value: userProfile?.contact_number },
              {
                icon: "email-icon",
                name: "Email",
                value: userProfile?.email_id,
              },
              {
                icon: "X-icon",
                name: "X",
                value: userProfile?.twitter_id,
              },
              {
                icon: "telegram-icon",
                name: "Telegram",
                value: userProfile?.telegram,
              },
              {
                icon: "web-icon",
                name: "Web",
                value: userProfile?.website,
              },
            ]}
          />) : <div className="bg-white lg:text-[16px] md:text-[14px] text-[12px] font-normal text-[#646464] p-3 my-2 rounded-lg">
            {"No Data"}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
