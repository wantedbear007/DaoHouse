import React from "react";

import { IoLink } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { PiTelegramLogoBold } from "react-icons/pi";
import { MdOutlineInsertComment } from "react-icons/md";

const PostCard = ({ post }) => {
  const className = "postCard";

  return (
    <div
      className={
        className +
        " " +
        "w-full h-[300px] flex flex-row items-start gap-12 bg-white p-8 rounded-lg justify-between"
      }
    >
      <section
        className={className + "__rightSide h-full w-3/5 flex flex-col justify-between"}
      >
        <div className="flex flex-row items-center justify-between">
          <section
            className={
              className + "__userData flex flex-row items-center gap-2"
            }
          >
            <img
              src={post.userImg}
              alt="userImage"
              className="rounded-[50%] w-10 h-10"
            />
            <p>{post.userName}</p>
          </section>

          <section className={className + "__time"}>
            {post.time / 60} min ago
          </section>
        </div>

        <div className="h-[70px]">
          <p className="h-full overflow-hidden line-clamp-3">{post.content}</p>
        </div>


        <div className={className + "__buttons flex flex-row items-center gap-4 mt-8"}>
          <button className="flex flex-row gap-2 items-center bg-[#0E3746] text-white py-3 px-8 rounded-[2rem]">
            <FaRegHeart />
            Like
          </button>
          <button className="flex flex-row gap-2 items-center bg-[#0E3746] text-white py-3 px-8 rounded-[2rem]">
            <MdOutlineInsertComment />
            Comment
          </button>
          <button className="flex flex-row gap-2 items-center bg-[#0E3746] text-white py-3 px-8 rounded-[2rem]">
            <PiTelegramLogoBold />
            Share
          </button>

          <button className="m-4">
            <IoLink className="text-2xl" />
          </button>
        </div>
      </section>

      <section className={className + "__leftSide w-2/5 h-full"}>
        {post.postMedia && (
          <img
            src={post.postMedia}
            alt="POST Media"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </section>
    </div>
  );
};

export default PostCard;
