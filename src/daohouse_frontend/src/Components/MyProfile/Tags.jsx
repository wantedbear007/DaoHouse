import React from "react";

const Tags = () => {
  const tags = [
    "ICP",
    "Blockchain",
    "Engineer",
    "Digital Artist",
    "NFT Artist",
    "Decentralization",
    "Ethereum",
  ];

  return (
    <div className="bg-[#FFFFFF] text-[16px] font-normal text-[#646464] p-2 my-2 rounded-lg">
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-3 my-2 py-2 px-12 rounded-full bg-white text-[16px] font-normal text-[#646464]"
            style={{
              boxShadow:
                "0px 0.46px 2.56px 0px #00000003, 0px 2.04px 5.3px 0px #00000005, 0px 5px 10.56px 0px #00000006, 0px 9.63px 20.7px 0px #00000008, 0px 16.2px 38.07px 0px #0000000A, 0px 25px 65px 0px #0000000D",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
