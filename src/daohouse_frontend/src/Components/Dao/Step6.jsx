import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import defaultImage from "../../../assets/defaultImage.png";
import CircularProgress from '@mui/material/CircularProgress';

const Step6 = ({ data, setData, setActiveStep, handleDaoClick }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(defaultImage);
  const [shouldCreateDAO, setShouldCreateDAO] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const className = "DAO__Step6";

  const handleFileInput = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
    } else {
      setFile(null);
      setFileURL(defaultImage);
    }
  };

  const createDAO = async () => {
    setLoadingNext(true);
    setTimeout(async () => {
      if (file) {
        const fileContent = await readFileContent(file);
        setData((prevData) => ({
          ...prevData,
          step6: {
            imageURI: fileURL,
            image_content: new Uint8Array(fileContent),
            image_content_type: file.type,
            image_title: file.name,
            image_id: '12',
          },
        }));
      } else {
        setData((prevData) => ({
          ...prevData,
          step6: {
            imageURI: defaultImage,
            image_content: undefined,
            image_content_type: undefined,
            image_title: undefined,
            image_id: '12',
          },
        }));
      }
      setLoadingNext(false);
      setShouldCreateDAO(true);
    }, 2000);


  };

  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  useEffect(() => {
    if (shouldCreateDAO) {
      handleDaoClick();
      setShouldCreateDAO(false);
    }
  }, [data, shouldCreateDAO, handleDaoClick]);

  console.log("data of all steps: ", data)
  return (
    <React.Fragment>
      <div
        className={
          className +
          "__form w-full bg-[#F4F2EC] big_phone:p-10 mobile:p-6 p-3 big_phone:mx-4 mx-0 rounded-lg flex flex-col gap-4"
        }
      >
        <p className="mobile:text-base text-sm font-semibold">Set Profile Picture</p>

        <div className="uploadImage flex big_phone:flex-row flex-col items-center justify-start gap-4">
          <img
            src={fileURL}
            alt="Image"
            className="rounded-lg w-[350px] h-[200px] object-cover"
          />

          <label
            htmlFor="profile"
            className="flex mobile:text-base text-xs font-semibold cursor-pointer mobile:m-4 m-2 flex-row items-center gap-2 bg-white px-4 py-2 rounded-[2rem] text-black shadow-xl"
          >
            <FiUpload /> Upload New Photo
          </label>
          <input
            type="file"
            id="profile"
            className="hidden"
            accept="image/*"
            onChange={handleFileInput}
          />
        </div>

      </div>
      
      
      <div className={
        className +
        "__submitButton w-full flex flex-col md:flex-row items-start mt-3"
      }
    >
      <div className="w-full md:w-[70%] flex-none">
        <div className="h-auto max-w-full m-4 rounded-lg  border border-black">
          <div className="p-3 md:p-7">
            <p className="text-lg flex items-center space-x-2 font-bold">
              
              <span>Create a new DAO costs 6 ICP</span>
              <svg width="50" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className= "pl-2">
                <path d="M11 3v10h2V3h-2zM11 16v2h2v-2h-2z" fill="currentColor"/>
              </svg>
            </p>
            <p className="mt-3 text-lg bg-orange-400 border border-black">
              The 6 ICP will be used to pay for the contract deployment and storage.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col lg:mt-10 md:flex-row items-center md:items-end justify-center md:justify-end">
        <button
          onClick={() => setActiveStep(4)}
          className="flex mobile:m-4 my-4 flex-row items-center gap-2 border border-[#0E3746] hover:bg-[#0E3746] text-[#3d6979] hover:text-white mobile:text-base text-sm transition px-4 py-2 rounded-[2rem]"
        >
          <FaArrowLeftLong /> Back
        </button>

        {loadingNext ? (
          <CircularProgress className="m-4 my-4" />
        ) : (
          <button
            type="submit"
            onClick={createDAO}
            className="flex mobile:m-4 my-4 flex-row items-center gap-2 bg-[#0E3746] px-4 py-2 rounded-[2rem] text-white mobile:text-base text-sm"
          >
            Create DAO
          </button>
        )}
      </div>
    </div>

    
    
    </React.Fragment>
  );
};

export default Step6;


