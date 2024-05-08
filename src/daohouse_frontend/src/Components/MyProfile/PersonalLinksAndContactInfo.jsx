import React from "react";
import PropTypes from "prop-types";

const PersonalLinksAndContactInfo = ({ links }) => {
  return (
    <div className="bg-[#FFFFFF] text-[16px] font-normal text-[#646464] p-2 my-2 rounded-lg">
      <ul className="list-disc pl-4">
        {links.map((link, index) => (
          <li key={index} className="flex items-center my-4">
            <img
              src={`../../../assets/${link.icon}.png`}
              alt={link.name}
              className="h-8 w-8 mr-12"
            />{" "}
            {link.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

PersonalLinksAndContactInfo.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PersonalLinksAndContactInfo;
