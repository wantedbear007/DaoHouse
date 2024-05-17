import React from "react";
import Tags from "../../../Components/MyProfile/Tags";
import PersonalLinksAndContactInfo from "../../../Components/MyProfile/PersonalLinksAndContactInfo";

const AboutMe = () => {
  const className = "AboutMe";

  return (
    <div className={className + "w-full"}>
      {/* About me section */}
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4">
          About Me
        </h3>
        <div className="md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg">
          <p className="md:text-[20px] text-[16px] font-semibold text-[#05212C] md:ml-2 md:mb-3">
            Description
          </p>
          <div className="bg-[#FFFFFF] md:text-[16px] text-[12px] font-normal text-[#646464] p-3 my-2 rounded-lg">
            I'm a firm believer in the power of kindness and the beauty of
            diversity, constantly seeking out new perspectives and experiences
            to broaden my horizons. From hiking through rugged mountain trails
            to savoring exotic cuisines from around the globe, I thrive on the
            thrill of adventure and the joy of discovery.
          </div>
          <p className="md:text-[20px] text-[16px] font-semibold text-[#05212C] md:ml-2 md:mb-3 mt-6">
            Tags That Defines You
          </p>
          <Tags
            tags={[
              "ICP",
              "Blockchain",
              "Engineer",
              "Digital Artist",
              "NFT Artist",
              "Decentralization",
              "Ethereum",
            ]}
          />
          <p className="md:text-[20px] text-[16px] font-semibold text-[#05212C] ml-2 mb-3 mt-6">
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
  );
};

export default AboutMe;
