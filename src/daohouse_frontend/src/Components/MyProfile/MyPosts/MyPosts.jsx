import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { usePostContext } from "../../../PostProvider";
import image1 from "../../../../assets/post1.png";
import image2 from "../../../../assets/post2.png";
import image3 from "../../../../assets/post3.png";
import NoPostProfile from "../../Dao/NoPostProfile";

const MyPosts = () => {
  const [postsList, setPostsList] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(false);
  const [readMoreIndex, setReadMoreIndex] = useState(false);
  const { setSelectedPost } = usePostContext();
  const className = "MyPosts";


  return (
    <div className={className}>
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4">
          Post
        </h3>

        {postsList.length === 0 ? (
          <NoPostProfile />
        ) : (
          <div className="grid grid-cols-2 md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg gap-4">
            {postsList.map((post, index) => {
              return (
                <div
                  key={index}
                  className="post relative w-full"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                    setReadMoreIndex(null);
                  }}
                >
                  <Link
                    to={`/post/${index}`}
                    onClick={() => setSelectedPost(post)}
                  >
                    <img
                      src={post.image}
                      alt="Post"
                      className="postImage w-full rounded-md object-cover"
                    />
                  </Link>

                  <div
                    style={{ opacity: hoverIndex === index ? 1 : 0 }}
                    className="postContant w-full max-h-full flex flex-col gap-4 p-2 overflow-y-auto bg-[#05212C80] backdrop-blur absolute bottom-0 text-white rounded-b-lg transition-opacity duration-500"
                  >
                    <p className="laptop:text-base text-sm">
                      {readMoreIndex === index
                        ? post.content
                        : post.content.slice(0, 50)}

                      {post.content.length > 120 && readMoreIndex !== index && (
                        <span
                          id="readMore"
                          className="text-blue-500 cursor-pointer"
                          onClick={() => setReadMoreIndex(index)}
                        >
                          ..more
                        </span>
                      )}
                      {post.content.length > 120 && readMoreIndex == index && (
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
                        {post.likes}
                      </span>
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <FaTelegramPlane />
                        {post.comments}
                      </span>
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <BiSolidCommentDetail />
                        {post.shares}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )};
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
    shares: 7,
    date: "18/05/2024",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    index: 2,
    image: image2,
    likes: 10,
    comments: 5,
    shares: 7,
    date: "18/05/2024",
    content: "Lorem ipsum dolor.",
  },
  {
    index: 3,
    image: image3,
    likes: 10,
    comments: 5,
    shares: 7,
    date: "18/05/2024",
    content:
      "Lorem ipsum dolor.Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 4,
    image: image1,
    likes: 10,
    comments: 5,
    shares: 7,
    date: "18/05/2024",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 5,
    image: image2,
    likes: 10,
    comments: 5,
    shares: 7,
    date: "18/05/2024",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 6,
    image: image3,
    likes: 10,
    comments: 5,
    shares: 7,
    date: "18/05/2024",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },

];
