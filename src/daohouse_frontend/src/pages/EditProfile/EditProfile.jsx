import ProfileTitleDivider from "../../Components/MyProfile/ProfileTitleDivider";
import MyProfileRectangle from "../../../assets/MyProfileRectangle.png";
import MyProfileImage from "../../../assets/MyProfile-img.png";
import UploadIcon from "../../../assets/upload-icon.png";
import BigCircle from "../../../assets/BigCircle.png";
import MediumCircle from "../../../assets/MediumCircle.png";
import SmallestCircle from "../../../assets/SmallestCircle.png";
import EditTags from "../../Components/EditProfile/EditTags";
import EditPersonalLinksAndContactInfo from "./EditPersonalLinksAndContactInfo";
import BigCircleComponent from "../../Components/MyProfile/BigCircleComponent";
import SmallCircleComponent from "../../Components/MyProfile/SmallCircleComponent";
import MediumCircleComponent from "../../Components/MyProfile/MediumCircleComponent";

const EditProfile = () => {
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
      <div className="md:mt-12 mt-8 md:mx-24 mx-6 bg-[#F4F2EC] md:p-6 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <img
            className="rounded-md md:w-[105px]  w-[69px] md:mr-12 "
            src={MyProfileImage}
            alt="profile-pic"
            style={{
              boxShadow:
                "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
            }}
          />
          <button
            onClick={() => navigate("/upload-icon")}
            className="bg-white md:text-[16px] text-[12px] text-[#05212C] gap-1 shadow-xl md:h-[50px] h-[40px] md:px-6 px-3 rounded-[27px] flex items-center"
          >
            <img
              src={UploadIcon}
              alt="edit"
              className="md:mr-2 mr-1 md:h-4 md:w-4 w-3 h-3 edit-pen"
            />
            <span className="">Upload New Photo</span>
          </button>
          <button
            onClick={() => navigate("/remove-icon")}
            className="md:text-[16px] text-[12px] text-[#9F9F9F] shadow-xl md:h-[50px] h-[40px] md:px-6 px-3 rounded-[27px] border-solid border border-[#9F9F9F]"
          >
            Remove Photo
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
              className="border-solid border border-[#DFE9EE] py-2 pl-4 md:w-[40%] w-[82%] rounded-[6px]"
            />
          </div>
          <p className="md:text-[20px] text-[16px] font-semibold text-[#05212C] md:ml-2 md:mb-3">
            Description
          </p>
          <div className="bg-[#FFFFFF] md:text-[16px] text-[12px] font-normal text-[#646464] py-3 px-5 my-2 rounded-lg">
            I'm a firm believer in the power of kindness and the beauty of
            diversity, constantly seeking out new perspectives and experiences
            to broaden my horizons. From hiking through rugged mountain trails
            to savoring exotic cuisines from around the globe, I thrive on the
            thrill of adventure and the joy of discovery.
          </div>
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
          <EditPersonalLinksAndContactInfo />
          <div className="hidden sm:flex justify-center gap-5 mt-8">
            <button className="py-2 px-9 border border-[#0E3746] hover:bg-[#0E3746] hover:text-white rounded-[27px] transition duration-200 ease-in-out">
              Discard
            </button>
            <button className="py-2 px-9 border border-[#0E3746] bg-[#0E3746] text-white  hover:bg-[#0E37464D] hover:border-[#0E37464D] rounded-[27px] transition duration-200 ease-in-out">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
