import React, { useEffect, useState } from "react";
import ProfileTitleDivider from "../../Components/ProfileTitleDivider/ProfileTitleDivider";
import MyProfileRectangle from "../../../assets/MyProfileRectangle.png";
import MyProfileImage from "../../../assets/MyProfile-img.png";
import UploadIcon from "../../../assets/upload-icon.png";
import BigCircle from "../../../assets/BigCircle.png";
import MediumCircle from "../../../assets/MediumCircle.png";
import SmallestCircle from "../../../assets/SmallestCircle.png";
import EditTags from "../../Components/EditProfile/EditTags";
import EditPersonalLinksAndContactInfo from "./EditPersonalLinksAndContactInfo";

import BigCircleComponent from "../../Components/Circles/BigCircleComponent";
import SmallCircleComponent from "../../Components/Circles/SmallCircleComponent";
import MediumCircleComponent from "../../Components/Circles/MediumCircleComponent";
import SuccessModal from "../../Components/EditProfile/SuccessModal";
import { useAuth } from "../../Components/utils/useAuthClient";

const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "",
    description: "",
    email_id: "",
    profile_img: [], // Array of int8 representing image data
    contact_number: "",
    twitter_id: "",
    telegram: "",
    website: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1]; // Extract Base64 part
        const byteArray = Uint8Array.from(atob(base64String), char => char.charCodeAt(0));
        const int8Array = Array.from(byteArray).map(byte => byte < 128 ? byte : byte - 256); // Convert to int8 range
        setUserProfile((prevProfile) => ({
          ...prevProfile,
          profile_img: int8Array,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChangesClick = async () => {
    try {
      await backendActor.create_profile(userProfile);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error creating user profile:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { backendActor } = useAuth();

  useEffect(() => {
    if (backendActor === null) {
      return;
    }
    const fetchUserProfile = async () => {
      try {
        const userProfileData = await backendActor.get_user_profile();
        console.log("User profile data after creation:", userProfileData);
        setUserProfile(userProfileData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [backendActor]);

  return (
    <div className="bg-zinc-200 w-full pb-20 relative">
      <div
        className="w-full h-[25vh] p-20 flex flex-col items-start justify-center relative hero-container"
        style={{
          backgroundImage: `url("${MyProfileRectangle}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-20 top-0 left-0 w-full h-full overflow-x-hidden">
          <BigCircleComponent imgSrc={BigCircle} />
          <SmallCircleComponent imgSrc={SmallestCircle} />
          <MediumCircleComponent imgSrc={MediumCircle} />
        </div>
        <ProfileTitleDivider title="Edit Profile" />
      </div>
      <div className={`relative ${isModalOpen ? "blur-sm" : ""}`}>
        <div className="md:mt-12 mt-8 md:mx-24 mx-6 bg-[#F4F2EC] md:p-6 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <img
              className="rounded-md md:w-[105px] w-[69px] md:mr-12 mr-1"
              src={
                userProfile.profile_img.length
                  ? `data:image/png;base64,${btoa(String.fromCharCode(...userProfile.profile_img.map(byte => byte >= 0 ? byte : byte + 256)))}`
                  : MyProfileImage
              }
              alt="profile-pic"
              style={{
                boxShadow: "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
              }}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="profile-img-upload"
            />
            <label
              htmlFor="profile-img-upload"
              className="bg-white md:text-[16px] text-[12px] text-[#05212C] gap-1 shadow-xl md:h-[50px] h-[40px] md:px-6 px-3 rounded-[27px] flex items-center"
            >
              <img
                src={UploadIcon}
                alt="edit"
                className="md:mr-2 mr-1 md:h-4 md:w-4 w-3 h-3 edit-pen"
              />
              <span className="">Upload New Photo</span>
            </label>
            <button
              onClick={() => setUserProfile((prevProfile) => ({ ...prevProfile, profile_img: [] }))}
              className="md:text-[16px] text-[12px] text-[#9F9F9F] shadow-xl md:h-[50px] h-[40px] md:px-6 px-4 rounded-[27px] border-solid border border-[#9F9F9F] flex items-center"
            >
              Remove<span className="hidden sm:inline-block ml-1">Photo</span>
            </button>
          </div>

          <div className="md:ml-40 md:mr-5 md:mt-12 mt-5">
            <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-semibold font-medium ml-3">
              About Me
            </h3>
            <div className="bg-[#FFFFFF] md:text-[16px] text-[12px] font-normal text-[#646464] py-3 md:px-5 pl-3 my-4 sm:w-[100%] rounded-lg">
              <span className="text-[#05212C] md:mr-32 mr-4">Name</span>
              <input
                type="text"
                placeholder="Username.user"
                name="username"
                className="border-solid border border-[#DFE9EE] py-2 pl-4 md:w-[40%] w-[82%] rounded-[6px]"
                value={userProfile.username}
                onChange={handleInputChange}
              />
            </div>
            <p className="md:text-[20px] text-[16px] font-semibold text-[#05212C] md:ml-2 md:mb-3">
              Description
            </p>
            <textarea
              value={userProfile.description}
              name="description"
              placeholder="Enter your description"
              className="bg-[#FFFFFF] md:text-[16px] w-full text-[12px] font-normal text-[#646464] py-3 px-5 my-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-[#05212C] focus:border-[#05212C] sm:text-sm box-border"
              onChange={handleInputChange}
            />

            <p className="md:text-[20px] text-[16px] font-semibold text-[#05212C] md:ml-2 md:mb-3 mt-6">
              Tags That Defines You
            </p>
            <EditTags
              editTags={[
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
            <EditPersonalLinksAndContactInfo
              handleSaveChangesClick={handleSaveChangesClick}
              closeModal={closeModal}
              handleInputChange={handleInputChange}
              userProfile={userProfile}
            />
            <div className="hidden sm:flex justify-center gap-5 mt-8">
              <button className="py-2 px-9 border border-[#0E3746] hover:bg-[#0E3746] hover:text-white rounded-[27px] transition duration-200 ease-in-out">
                Discard
              </button>
              <button
                onClick={handleSaveChangesClick}
                className="py-2 px-10 border border-[#0E3746] bg-[#0E3746] text-white  hover:bg-[#0E37464D] hover:border-[#0E37464D] rounded-[27px] transition duration-200 ease-in-out"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
      )}
    </div>
  );
};

export default EditProfile;
