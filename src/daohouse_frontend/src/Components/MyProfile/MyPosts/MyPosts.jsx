import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import image1 from "../../../../assets/post1.png";
import image2 from "../../../../assets/post2.png";
import image3 from "../../../../assets/post3.png";

const MyPosts = () => {
  const [hoverIndex, setHoverIndex] = useState(false);
  const [readMoreIndex, setReadMoreIndex] = useState(false);
  const className = "MyPosts";

  function show() { }

  return (
    <div className={className}>
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4">
          Post
        </h3>

        <div className="grid grid-cols-2 md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg gap-4">
          {postsList.map(
            ({ image, index, content, likes, comments, share }) => {
              return (
                <div
                  className="post relative w-full"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img
                    src={image}
                    alt="Post"
                    className="postImage w-full rounded-md object-cover"
                  />

                  <div
                    style={{ opacity: hoverIndex === index ? 1 : 0 }}
                    className="postContant w-full flex flex-col gap-4 p-2 bg-[#05212C80] backdrop-blur absolute bottom-0 text-white rounded-b-lg transition-opacity duration-500"
                  >
                    <p>
                      {readMoreIndex === index
                        ? content
                        : content.slice(0, 120)}

                      {
                        content.length > 120 &&
                        readMoreIndex !== index && (
                          <span
                            id="readMore"
                            className="text-blue-500 cursor-pointer"
                            onClick={() => setReadMoreIndex(index)}
                          >
                            ..more
                          </span>
                        )}
                      {
                        content.length > 120 &&
                        readMoreIndex == index && (
                          <span
                            id="readMore"
                            className="text-blue-500 cursor-pointer"
                            onClick={() => setReadMoreIndex(null)}
                          >
                            ..close
                          </span>
                        )}
                    </p>

                    <div className="w-full flex flex-row items-center justify-evenly">
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <FaHeart />
                        {likes}
                      </span>
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <FaTelegramPlane />
                        {comments}
                      </span>
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <BiSolidCommentDetail />
                        {share}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;

const postsList = [
  {
    index: 1,
    image: image1,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 2,
    image: image2,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor.",
  },
  {
    index: 3,
    image: image3,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor.Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 4,
    image: image1,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 5,
    image: image2,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 6,
    image: image3,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
];
