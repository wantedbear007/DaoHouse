import React from "react";
import image1 from "../../../../assets/post1.png";
import image2 from "../../../../assets/post2.png";
import image3 from "../../../../assets/post3.png";

const images = [image1, image2, image1, image3, image2, image1];

const MyPosts = () => {
  const className = "MyPosts";

  return (
    <div className={className}>
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4">
          Post
        </h3>

        <div className="grid grid-cols-2 md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg gap-4">
          {images.map((image) => {
            return (
              <img
                src={image}
                alt="Post"
                className="w-full rounded-md object-cover"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
