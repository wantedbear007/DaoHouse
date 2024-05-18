import React, { useState } from "react";

import { FaHeart } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import commentUser from "../../../assets/commentUser.jpg";

const Comments = () => {
  const [reply, setReply] = useState("");

  const className = "Post__Comments";

  return (
    <div className={className + " p-4"}>
      {commentsList.map(
        ({
          userImage,
          userName,
          commentText,
          comments,
          likes,
          shares,
          date,
        }) => (
          <div className="flex flex-col gap-4 border-l border-dark-green relative mt-7">
            <div
              className={`absolute -left-4 tablet:-left-5 top-0 w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center rounded`}
            >
              <img
                className="block h-full w-full object-cover rounded-[50%]"
                src={userImage}
                alt="userImage"
              />
            </div>
            <div className="flex items-center gap-x-8 ml-10">
              <h1 className="font-semibold text-dark-green">{userName}</h1>
              <div className="text-xs text-slate-400 y-50">{date}</div>
            </div>

            <div className="text-slate-600 tablet:text-base text-sm y-50 ml-10">
              {commentText}
            </div>

            <div className="ml-10 flex tablet:text-lg text-xs items-center text-[#000]  text-opacity-50 y-50 gap-x-8">
              <span className="flex flex-row gap-x-2 items-center text-sm text-slate-500">
                <FaHeart />
                {likes}
              </span>
              <span className="flex flex-row gap-x-2 items-center text-sm text-slate-500">
                <FaTelegramPlane />
                {shares}
              </span>
              <span className="flex flex-row gap-x-2 items-center text-sm text-slate-500">
                <BiSolidCommentDetail />
                {comments}
              </span>
            </div>

            {/** 
        <div className="flex mt-2">
        <div className="w-14 h-[1px] bg-[#000] t-8 tablet:mt-9"></div>
        <div className="">
        <Replies
        commentId={comment.commentId}
        repliesData={repliesData}
        getReplies={() => getReplies(comment.commentId)}
        />
        </div>
        </div>
    */}

            <div className="-mb-[10px] flex items-center mt-2">
              <div className="w-14 h-[1px] bg-[#000]"> </div>
              <button className="text-sm ml-1 text-dark-green font-semibold">
                View replies
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Comments;

const commentsList = [
  {
    userName: "Neha_0102",
    userImage: commentUser,
    commentText: "Hey, how do u do?",
    likes: 50,
    comments: 10,
    shares: 20,
    date: "2 days ago",
  },
  {
    userName: "Nikhil_22",
    userImage: commentUser,
    commentText: "Hey, how do u do?",
    likes: 25,
    comments: 1,
    shares: 2,
    date: "2 days ago",
  },
  {
    userName: "Sudhanshu_0102",
    userImage: commentUser,
    commentText: "Hey, how do u do?",
    likes: 24,
    comments: 17,
    shares: 9,
    date: "2 days ago",
  },
];
