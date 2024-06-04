import React from "react";

const EditPersonalLinksAndContactInfo = ({ userProfile, handleInputChange, handleSaveChangesClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4 flex flex-col">
        {/* Contact No. */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="contactNo"
            className="block md:text-[16px] text-[12px] font-semibold text-[#05212C] mr-2 md:w-[100px] w-[70px]"

          >
            Contact No.
          </label>
          <div className="flex flex-grow">
            <input
              id="contact_number"
              type="tel"
              name="contact_number"
              value={userProfile.contact_no}
              onChange={handleInputChange}
              placeholder="0123456789"
              className="py-2 px-3 w-full md:w-[50%] md:ml-16 ml-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#05212C] focus:border-[#05212C] sm:text-sm box-border text-[12px]"
            />
            <button className="ml-20 px-10 py-2 bg-[#0E3746] text-white text-[14px] rounded-[27px] transition duration-200 ease-in-out hover:bg-[#0E37464D] box-border hidden sm:block">
              Update
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="email"
            className="block md:text-[16px] text-[12px] font-semibold text-[#05212C] mr-2 md:w-[100px] w-[70px]"
          >
            Email
          </label>
          <div className="flex flex-grow">
            <input
              id="email"
              type="email"
              name="email_id"

              placeholder="Emailid.id@example.com"
              value={userProfile.email_id}
              onChange={handleInputChange}
              className="py-2 px-3 w-full md:w-[50%] md:ml-16 ml-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#05212C] focus:border-[#05212C] sm:text-sm box-border text-[12px]"
            />
            <button className="ml-20 px-10 py-2 bg-[#0E3746] text-white text-[14px] rounded-[27px] transition duration-200 ease-in-out hover:bg-[#0E37464D] box-border hidden sm:block">
              Update
            </button>
          </div>
        </div>

        {/* Twitter */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="twitter"
            className="block md:text-[16px] text-[12px] font-semibold text-[#05212C] mr-2 md:w-[100px] w-[70px]"
          >
            Twitter
          </label>
          <div className="flex flex-grow">
            <input
              id="twitter_id"
              name="twitter_id"
              value={userProfile.twitter}
              onChange={handleInputChange}
              type="url"
              placeholder="http://www.example.com"
              className="py-2 px-3 w-full md:w-[50%] md:ml-16 ml-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#05212C] focus:border-[#05212C] sm:text-sm box-border text-[12px]"
            />
            <button className="ml-20 px-10 py-2 bg-[#0E3746] text-white text-[14px] rounded-[27px] transition duration-200 ease-in-out hover:bg-[#0E37464D] box-border hidden sm:block">
              Update
            </button>
          </div>
        </div>

        {/* Telegram */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="telegram"
            className="block md:text-[16px] text-[12px] font-semibold text-[#05212C] mr-2 md:w-[100px] w-[70px]"
          >
            Telegram
          </label>
          <div className="flex flex-grow">
            <input
              id="telegram"
              type="url"
              name="telegram"
              value={userProfile.telegram}
              onChange={handleInputChange}

              placeholder="http://www.example.com"
              className="py-2 px-3 w-full md:w-[50%] md:ml-16 ml-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#05212C] focus:border-[#05212C] sm:text-sm box-border text-[12px]"
            />
            <button className="ml-20 px-10 py-2 bg-[#0E3746] text-white text-[14px] rounded-[27px] transition duration-200 ease-in-out hover:bg-[#0E37464D] box-border hidden sm:block">
              Update
            </button>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center mb-4">
          <label
            htmlFor="website"
            className="block md:text-[16px] text-[12px] font-semibold text-[#05212C] mr-2 md:w-[100px] w-[70px]"
          >
            Website
          </label>
          <div className="flex flex-grow">
            <input
              id="website"
              type="url"
              name="website"

              value={userProfile.website}
              onChange={handleInputChange}
              placeholder="http://www.example.com"
              className="py-2 px-3 w-full md:w-[50%] md:ml-16 ml-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#05212C] focus:border-[#05212C] sm:text-sm box-border text-[12px]"
            />
            <button className="ml-2 md:ml-20 px-10 py-2 bg-[#0E3746] text-white text-[14px] rounded-[27px] transition duration-200 ease-in-out hover:bg-[#0E37464D] box-border hidden sm:block">
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-8 md:text-[16px] text-[12px] md:hidden">
        <button className="py-2 w-[126px] border border-[#0E3746] hover:bg-[#0E3746] hover:text-white rounded-[27px] transition duration-200 ease-in-out">
          Discard
        </button>
        <button
          onClick={handleSaveChangesClick}
          className="py-2 w-[126px] border border-[#0E3746] bg-[#0E3746] text-white  hover:bg-[#0E37464D] hover:border-[#0E37464D] rounded-[27px] transition duration-200 ease-in-out"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditPersonalLinksAndContactInfo;