import React from 'react';

const CenteredBackgroundImageWithButtons = ({ backgroundImageSrc, altText, children }) => {
  return (
    <div className="text-center my-6 relative" style={{ minHeight: '300px' }}>
      <img src={backgroundImageSrc} alt={altText} className="absolute inset-0 object-cover w-full h-full" />
      <div className="flex flex-col justify-center gap-4 mt-4 absolute left-[4rem] top-[5.5rem]">
        {children}
      </div>
    </div>
  );
};

export default CenteredBackgroundImageWithButtons;
