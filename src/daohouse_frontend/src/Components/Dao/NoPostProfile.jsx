// import React from "react";
// import nodata from "../../../assets/nodata.png";

// const NoPostProfile = ({ setJoinedDAO }) => {
//   return (
//     <div className="w-full flex flex-col items-center justify-center p-0 bg-white object-contain">
//       <img src={nodata} alt="No Data" className="h-[53vh]  w-full object-contain" />
//       <p className="text-center text-gray-700 mb-4 text-[16px]">
//         You have not created post anything!
//       </p>
//    </div>
//   );
// };

// export default NoPostProfile;
import React from "react";
import nodata from "../../../assets/nodata.png";

const NoPostProfile = ({ setposts }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white">
      <div className="flex flex-col items-center justify-center max-w-full ">
        <img src={nodata} alt="No Data" className="w-full h-full object-contain  max-h-[52vh]" />
      </div>
      <p className="text-center text-gray-700 text-lg mt-4">
        You have not created any posts yet!
      </p>
    </div>
  )
};

export default NoPostProfile;

