import React from "react";
import PropTypes from "prop-types";

const PersonalLinksAndContactInfo = ({ links }) => {
  const className = "PersonalLinksAndContactInfo";

  return (
    <div className={className + " bg-[#FFFFFF] md:text-[16px] text-[13px]  font-normal text-[#646464] p-2 my-2 rounded-lg"}>
      <ul className="list-disc pl-4">
        {links.map((link, index) => (
          <li key={index} className="flex items-center my-4">
            <img
              src={`../../../assets/${link.icon}.png`}
              alt={link.name}
              className="h-8 w-8 md:mr-12 mr-7"
            />

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
