// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../utils/useAuthClient";
// import { LuChevronDown } from "react-icons/lu";
// import LoginModal from "../Auth/LoginModal";
// import { FaUser, FaSignOutAlt, FaSitemap, FaComments } from "react-icons/fa";
// import logo from "../../../assets/ColorLogo.png";
// import MyProfileImage from "../../../assets/MyProfile-img.png";
// import { useUserProfile } from "../../context/UserProfileContext";
// import { toast } from "react-toastify";
// import Container from "../Container/Container";

// const Navbar = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const { userProfile, fetchUserProfile } = useUserProfile();
//   const { login, isAuthenticated, signInPlug, logout, backendActor } = useAuth();
//   const location = useLocation();

//   const [username, setUsername] = useState("");
//   const protocol = process.env.DFX_NETWORK === "ic" ? "https" : "http";
//   const domain = process.env.DFX_NETWORK === "ic" ? "raw.icp0.io" : "localhost:4943";
//   const [imageSrc, setImageSrc] = useState(
//     userProfile?.profile_img
//     ? `${protocol}://${process.env.CANISTER_ID_IC_ASSET_HANDLER}.${domain}/f/${userProfile.profile_img}`
//     : MyProfileImage
//   );

//   const menuItems = [
//     { label: "Home", route: "/" },
//     { label: "Social Feed", route: "/social-feed" },
//     { label: "DAOs", route: "/dao" },
//     // { label: "Proposals", route: "/proposals" },
//   ];

//   useEffect(() => {
//     if (backendActor === null || userProfile) return;

//     const createAndFetchUserProfile = async () => {
//       try {
//         const response = await backendActor.check_user_existance();

//         if (response["Ok"]) {
//           await fetchUserProfile();
//         } else {
//           const profileResponse = await backendActor.create_profile();
//           if (profileResponse.Ok === null) {
//             toast.success("User login successfully");
//           } else {
//             toast.error("User login failed");
//           }
//           await fetchUserProfile();
//           toast.warning("Please update your details");
//         }
//       } catch (error) {
//         console.error("Error creating or fetching user profile:", error);
//       }
//     };

//     createAndFetchUserProfile();
//   }, [backendActor, principal, fetchUserProfile, userProfile]);

//   useEffect(() => {
//     setImageSrc(userProfile?.profile_img
//       ? `${protocol}://${process.env.CANISTER_ID_IC_ASSET_HANDLER}.${domain}/f/${userProfile.profile_img}`
//       : MyProfileImage);

//     setUsername(userProfile?.username || "")
//   }, [userProfile?.profile_img])

//   const handleLogin = async () => {
//     setIsConnecting(true);
//     await login().then(() => window.location.reload());
//   };

//   const handleLogout = async () => {
//     setIsLoading(true);
//     try {
//       await logout();
//       localStorage.removeItem("username");
//       localStorage.removeItem("userImageId");
//       window.location.href = "/";
//     } catch (error) {
//       toast.error("Error during logout");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLoginPlug = async () => {
//     setIsConnecting(true);
//     await signInPlug().then(() => setIsModalOpen(false));
//   };

//   const handleLoginModalOpen = () => {
//     setIsConnecting(false); // Ensure that the button text is "Connect" when the modal opens
//     setIsModalOpen(true);
//   };

//   const dropdownItems = [
//     {
//       label: "Profile",
//       route: "/my-profile",
//       icon: <FaUser className="mr-2" />,
//     },
//     {
//       label: "Dao",
//       route: "/dao",
//       icon: <FaSitemap className="mr-2" />,
//     },
//     {
//       label: "Social Feed",
//       route: "/social-feed",
//       icon: <FaComments className="mr-2" />,
//     },
//     // {
//     //   label: "My Proposals",
//     //   route: "/my-proposals",
//     //   icon: <FaUser className="mr-2" />,
//     // },
//     {
//       label: "Logout",
//       onClick: handleLogout,
//       icon: <FaSignOutAlt className="mr-2" />,
//     },
//   ];

//   const filteredDropdownItems = window.innerWidth < 769
//     ? dropdownItems
//     : dropdownItems.filter(item => item.label === "Profile" || item.label === "Logout");

//   return (
//     <nav>
//       <div className="bg-bg-color shadow-lg shadow-slate-900/20 shadow-b-2 sticky w-full z-50">
//         <Container>
//           <div className="tablet:px-20 small_phone:px-8 px-4 small_phone:py-5 py-3 flex justify-between items-center w-full">
//             <div className="big_phone:flex items-center tablet:space-x-8 space-x-4 hidden lg:w-[33%]">
//               {menuItems.map((item, index) => (
//                 <div key={index} className="text-lg font-normal font-inter leading-[19.36px] text-[#829095]">
//                   <Link
//                     to={item.route}
//                     className={`hover:text-[#05212C] hover:font-medium cursor-pointer text-[16px] text-[#829095] ${
//                       location.pathname === item.route ? "font-semibold border-b-2 border-[#05212C] text-black" : "border-transparent border-b-0.5"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//             <Link className="w-[33%]" to="/">
//               <img src={logo} alt="DAO House" className="mobile:h-10 small_phone:w-30 w-25 h-8 lg:ml-6" />
//             </Link>
//             <div>
//               {!isAuthenticated ? (
//                 <div className="flex items-center tablet:space-x-4 space-x-2">
//                   <button
//                     onClick={handleLoginModalOpen}
//                     className="mobile:px-8 px-4 py-2 rounded-[27.5px] bg-[#FFFFFF] big_phone:text-base small_phone:text-sm text-xs"
//                   >
//                     {isModalOpen && isLoading ? "Connecting" : "Connect"}
//                   </button>
//                 </div>
//               ) : (
//                 <div className="relative">
//                   <div
//                     className="flex items-center space-x-4 relative bg-white rounded-full px-4 cursor-pointer shadow-lg"
//                     onClick={() => setDropdownVisible(!dropdownVisible)}
//                   >
//                     <div className="w-10 h-10 flex items-center rounded-full overflow-hidden my-auto">
//                       <img src={imageSrc} alt="User Avatar" className="w-8 h-8 object-cover rounded-full" />
//                     </div>
//                     {username && 
//                     <p className="text-black font-medium truncate w-20">{username}</p>
//                     }
//                     <LuChevronDown />
//                     {dropdownVisible && (
//                       <div className="absolute top-full right-0 bg-white rounded-md border border-gray-300 shadow-md py-2 w-40">
//                         {filteredDropdownItems.map((item, index) => (
//                           <Link
//                             key={index}
//                             to={item.route || "#"}
//                             onClick={item.onClick}
//                             className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                           >
//                             {item.icon}
//                             <span>{item.label}</span>
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </Container>
//         <LoginModal
//           isOpen={isModalOpen}
//           onClose={handleModalClose}
//           onLogin={handleLogin}
//           onLoginPlug={handleLoginPlug}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../utils/useAuthClient";
import { LuChevronDown } from "react-icons/lu";
import LoginModal from "../Auth/LoginModal";
import { FaUser, FaSignOutAlt, FaSitemap, FaComments } from "react-icons/fa";
import logo from "../../../assets/ColorLogo.png";
import MyProfileImage from "../../../assets/MyProfile-img.png";
import { useUserProfile } from "../../context/UserProfileContext";
import { toast } from "react-toastify";
import Container from "../Container/Container";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { userProfile, fetchUserProfile } = useUserProfile();
  const { login, isAuthenticated, signInPlug, logout, backendActor } = useAuth();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const protocol = process.env.DFX_NETWORK === "ic" ? "https" : "http";
  const domain = process.env.DFX_NETWORK === "ic" ? "raw.icp0.io" : "localhost:4943";
  const [imageSrc, setImageSrc] = useState(
    userProfile?.profile_img
      ? `${protocol}://${process.env.CANISTER_ID_IC_ASSET_HANDLER}.${domain}/f/${userProfile.profile_img}`
      : MyProfileImage
  );

  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Social Feed", route: "/social-feed" },
    { label: "DAOs", route: "/dao" },
  ];

  useEffect(() => {
    if (backendActor === null || userProfile) return;

    const createAndFetchUserProfile = async () => {
      try {
        const response = await backendActor.check_user_existance();

        if (response["Ok"]) {
          await fetchUserProfile();
        } else {
          const profileResponse = await backendActor.create_profile();
          if (profileResponse.Ok === null) {
            toast.success("User login successfully");
          } else {
            toast.error("User login failed");
          }
          await fetchUserProfile();
          toast.warning("Please update your details");
        }
      } catch (error) {
        console.error("Error creating or fetching user profile:", error);
      }
    };

    createAndFetchUserProfile();
  }, [backendActor, fetchUserProfile, userProfile]);

  useEffect(() => {
    setImageSrc(userProfile?.profile_img
      ? `${protocol}://${process.env.CANISTER_ID_IC_ASSET_HANDLER}.${domain}/f/${userProfile.profile_img}`
      : MyProfileImage);

    setUsername(userProfile?.username || "");
  }, [userProfile?.profile_img]);

  const handleLogin = async () => {
    setIsConnecting(true);
    await login().then(() => window.location.reload());
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      localStorage.removeItem("username");
      localStorage.removeItem("userImageId");
      window.location.href = "/";
    } catch (error) {
      toast.error("Error during logout");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginPlug = async () => {
    setIsConnecting(true);
    await signInPlug().then(() => setIsModalOpen(false));
  };

  const handleLoginModalOpen = () => {
    setIsConnecting(false);
    setIsModalOpen(true);
  };

  const dropdownItems = [
    { label: "Profile", route: "/my-profile", icon: <FaUser className="mr-2" /> },
    { label: "Dao", route: "/dao", icon: <FaSitemap className="mr-2" /> },
    { label: "Social Feed", route: "/social-feed", icon: <FaComments className="mr-2" /> },
    { label: "Logout", onClick: handleLogout, icon: <FaSignOutAlt className="mr-2" /> },
  ];

  const filteredDropdownItems = window.innerWidth < 769
    ? [...dropdownItems.filter(item => item.label !== "Logout"), dropdownItems.find(item => item.label === "Logout")]
    : dropdownItems.filter(item => item.label === "Profile" || item.label === "Logout");

  return (
    <nav>
      <div className="bg-bg-color shadow-lg shadow-slate-900/20 shadow-b-2 sticky w-full z-50">
        <Container>
          <div className="tablet:px-20 small_phone:px-8 px-4 small_phone:py-5 py-3 flex justify-between items-center w-full">
            <div className="big_phone:flex items-center tablet:space-x-8 space-x-4 hidden lg:w-[33%]">
              {menuItems.map((item, index) => (
                <div key={index} className="text-lg font-normal font-inter leading-[19.36px] text-[#829095]">
                  <Link
                    to={item.route}
                    className={`hover:text-[#05212C] hover:font-medium cursor-pointer text-[16px] text-[#829095] ${
                      location.pathname === item.route ? "font-semibold border-b-2 border-[#05212C] text-black" : "border-transparent border-b-0.5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            <Link className="w-[33%]" to="/">
              <img src={logo} alt="DAO House" className="mobile:h-10 small_phone:w-30 w-25 h-8 lg:ml-6" />
            </Link>
            <div>
              {!isAuthenticated ? (
                <div className="flex items-center tablet:space-x-4 space-x-2">
                  <button
                    onClick={handleLoginModalOpen}
                    className="mobile:px-8 px-4 py-2 rounded-[27.5px] bg-[#FFFFFF] big_phone:text-base small_phone:text-sm text-xs"
                  >
                    {isModalOpen && isLoading ? "Connecting" : "Connect"}
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <div
                    className="flex items-center space-x-4 relative bg-white rounded-full px-4 cursor-pointer shadow-lg"
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                  >
                    <div className="w-10 h-10 flex items-center rounded-full overflow-hidden my-auto">
                      <img src={imageSrc} alt="User Avatar" className="w-8 h-8 object-cover rounded-full" />
                    </div>
                    {username && 
                    <p className="text-black font-medium truncate w-20">{username}</p>
                    }
                    <LuChevronDown />
                    {dropdownVisible && (
                      <div className="absolute top-full right-0 bg-white rounded-md border border-gray-300 shadow-md py-2 w-40">
                        {filteredDropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.route || "#"}
                            onClick={item.onClick}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onLogin={handleLogin}
          onLoginPlug={handleLoginPlug}
        />
      </div>
    </nav>
  );
};

export default Navbar;
