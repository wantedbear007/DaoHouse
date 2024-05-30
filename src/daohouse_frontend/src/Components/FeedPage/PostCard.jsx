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
        "w-full flex big_phone:flex-row flex-col items-start big_phone:gap-12 gap-4 bg-white big_phone:p-8 p-6 rounded-lg justify-between mobile:mt-0 mt-4"
      }
    >
      <section
        className={className + "__rightSide h-full tablet:w-3/5 big_phone:w-1/2 flex flex-col gap-y-4 justify-between"}
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
            <p className="font-semibold">{post.userName}</p>
          </section>

          <section className={className + "__time text-slate-500 mobile:text-base text-sm"}>
            {post.time / 60} min ago
          </section>
        </div>

        <div>
          <p className="h-full mobile:text-base text-sm">{post.content}</p>
        </div>

        <div className={className + "__buttons mobile:flex hidden flex-row items-center justify-between tablet:gap-x-4 gap-x-2 big_phone:mt-8 mt-0"}>
          <button className="flex flex-row tablet:gap-2 gap-1 tablet:text-base text-xs items-center bg-[#0E3746] text-white tablet:py-3 py-2 tablet:px-8 px-4 rounded-[2rem]">
            <FaRegHeart />
            Like
          </button>
          <button className="flex flex-row tablet:gap-2 gap-1 tablet:text-base text-xs items-center bg-[#0E3746] text-white tablet:py-3 py-2 tablet:px-8 px-4 rounded-[2rem]">
            <MdOutlineInsertComment />
            Comment
          </button>
          <button className="flex flex-row tablet:gap-2 gap-1 tablet:text-base text-xs items-center bg-[#0E3746] text-white tablet:py-3 py-2 tablet:px-8 px-4 rounded-[2rem]">
            <PiTelegramLogoBold />
            Share
          </button>

          <button className="m-0">
            <IoLink className="text-lg" />
          </button>
        </div>
      </section>

      <section className={className + "__leftSide tablet:w-2/5 big_phone:w-1/2 w-full h-full"}>
        {post.postMedia && (
          <img
            src={post.postMedia}
            alt="POST Media"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </section>

      <section className={className + "__buttons w-full mobile:hidden flex flex-row items-center justify-between"}>
        <div className="flex flex-row items-center justify-between gap-x-4">
          <button >
            <FaRegHeart className="text-[#0E3746] text-lg" />
          </button>

          <button >
            <MdOutlineInsertComment className="text-[#0E3746] text-lg" />
          </button>

          <button >
            <PiTelegramLogoBold className="text-[#0E3746] text-lg" />
          </button>
        </div>

        <button className="m-0">
          <IoLink className="text-lg" />
        </button>
      </section>
    </div>
  );
};

export default PostCard;
