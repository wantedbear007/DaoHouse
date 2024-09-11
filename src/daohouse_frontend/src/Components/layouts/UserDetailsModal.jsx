import React, { useState } from "react";
import { toast } from "react-toastify";
import MyProfileImage from "../../../assets/Avatar.png";
import defaultImage from "../../../assets/defaultImage.png"
import { useAuth } from "../utils/useAuthClient";
import { useNavigate } from "react-router-dom";

const UserDetailsModal = ({ isOpen, onClose, onSubmit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  console.log("profileimage", profileImage);

  const [fileURL, setFileURL] = useState(defaultImage);
  const { backendActor } = useAuth();



  const handleFileInput = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        toast.error("File size must be less than 2 MB");
        return;
      }

      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
    } else {
      setFile(null);
      setFileURL(defaultImage);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);

      setFileURL(URL.createObjectURL(file));
    }
  };


  const handleSubmit = async () => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(profileImage);

    reader.onloadend = async () => {


      const fileContent = new Uint8Array(reader.result);


      const MinimalProfileinput = {
        email_id: email,
        name: name,
        // image_content:  new Uint8Array(fileContent),
        image_content: fileContent,
        image_title: profileImage.name,
        image_content_type: profileImage.type,
      };


      console.log("minimal", MinimalProfileinput);
      console.log("image", MinimalProfileinput?.image_content);





      try {
        const response = await backendActor.create_profile(MinimalProfileinput);
        console.log("response", response);
        console.log("Navigating to home...");
        navigate("/");

      } catch (error) {
        console.log("error", error);

      }
    }

  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-[10000]">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[15000]">
            <div className="bg-[#F4F2EC] p-4 mobile:p-10 small_phone:p-6 p-4 rounded-lg shadow-lg w-full max-w-md max-h-[100vh] overflow-y-auto z-[20000] mx-4">
              <div className="flex flex-col mb-3 border-b-2 border-white relative">
                <h2 className="font-lg mobile:text-lg text-lg text-center font-mulish mb-4  ">
                  Add Details
                </h2>

                {/* Name Input */}
                <label htmlFor="name" className=" mobile:text-base text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="rounded-lg mobile:p-3 p-2 mobile:text-base text-sm mb-4"
                />

                {/* Email Input */}
                <label htmlFor="email" className=" mobile:text-base text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="rounded-lg mobile:p-3 p-2 mobile:text-base text-sm mb-4"
                />

                {/* Profile Image Upload */}
                <label htmlFor="profile" className="mobile:text-base text-sm mb-1">
                  Upload Image
                </label>
                <div class="relative mb-4  bg-white border border-red-400 rounded-lg flex justify-center items-center h-32">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="rounded-xl mobile:p-3 mobile:text-base text-sm text-center mb-4 flex-row items-center"
                  />

                  <input
                    type="file"
                    id="profile"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileInput}
                  />

                </div>
                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#0E3746] w-[122px] flex justify-center items-center text-white rounded-2xlp-2 mobile:text-base text-sm transition hover:bg-[#123b50]"
                  >
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default UserDetailsModal;

