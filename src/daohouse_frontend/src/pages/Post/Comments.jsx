import React, { useState } from "react";

import { PiArrowBendUpRightBold } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import commentUser from "../../../assets/commentUser.jpg";

const Comments = () => {
  const [reply, setReply] = useState("");

  const className = "Post__Comments";

  return (
    <div className={className}>
      <div className="flex flex-col gap-4 border-l relative mt-7">
        <div
          className={`absolute -left-4 tablet:-left-5 top-0 w-8 h-8 tablet:w-10 tablet:h-10 flex justify-center rounded`}
        >
          <img
            className="block h-full w-full object-cover rounded-[50%]"
            src={commentUser}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4 ml-10 pt-1 tablet:pt-2">
          <h1 className="font-semibold">Username.user</h1>
          <div className="ml-6 text-[#000]  text-xs text-opacity-50 y-50">
            2 days gao
          </div>
        </div>

        <div className=" tablet:text-base text-sm y-50 ml-10">
          Hey, how do u do?
        </div>

        <div className="flex-row-center gap-10 ml-10">
          <div
            className={`flex tablet:text-lg text-xs items-center text-[#000]  text-opacity-50 y-50 gap-1`}
          >
            <MdOutlineVerifiedUser />
            <span>10</span>
          </div>

          <div>
            <button
              className="flex-row-center text-[#000]  text-opacity-50 y-50 gap-1 cursor-pointer"
              type="button"
            >
              <PiArrowBendUpRightBold />
              <span>Reply</span>
            </button>
          </div>
        </div>

        <div>
          <form>
            <section className="">
              <input
                className="border-b border-opacity-50 border-[#000] f] w-full bg-transparent p-2"
                type="text"
                placeholder="Add a reply"
                value={reply}
                onChange={(e) => {
                  setReply(e.target.value);
                }}
              />
              <div className="flex items-center justify-end mt-4">
                <div className="flex justify-center items-center gap-4">
                  <button
                    className={
                      "border border-[#000] f] text-[#000]  rounded-full px-6 py-2 font-semibold cursor-pointer disabled:text-opacity-50 disabled:y-50 disabled:border-opacity-50 disabled:ity-50"
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </form>
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
          <button className="text-sm ml-1">View replies</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
