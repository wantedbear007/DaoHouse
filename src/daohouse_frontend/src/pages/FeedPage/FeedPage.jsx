import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

import allFeed from "../../Components/FeedPage/AllFeeds";
import latestFeed from "../../Components/FeedPage/LatestFeed";
import PostCard from "../../Components/FeedPage/PostCard";
import image from "../../../assets/bg_image.png";
import CreatePostPopup from "../../Components/FeedPage/CreatePostPopup";

import { useAuth } from "../../Components/utils/useAuthClient";

const FeedPage = () => {
  const [feed, setFeed] = useState(allFeed);
  const [active, setActive] = useState({ all: true, latest: false });
  const [showPopup, setShowPopup] = useState(false);

  const className = "FeedPage";
  const { backendActor } = useAuth();
  // console.log(backendActor);

  const setAllActive = () => {
    setFeed(allFeed);
    setActive({ all: true, latest: false });
  };

  const setLatestActive = () => {
    setFeed(latestFeed);
    setActive({ all: false, latest: true });
  };

  const handleCreatePostClick = () => {
    setShowPopup(!showPopup);

  
    
  };

  return (
    <div className={className + " " + "w-full"}>
      {showPopup && (
        <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
      )}

      <div
        className={
          className +
          "__filter w-100 mobile:h-[25vh] h-[17vh] big_phone:p-20 small_phone:p-10 p-4 flex flex-col items-start justify-center"
        }
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="mobile:text-5xl text-3xl p-3 text-white">Social Feed</h1>

        <div
          className={
            className + "__buttons flex flex-row border-t-2 border-white"
          }
        >
          <button
            className={`px-6 py-2 mobile:text-lg text-sm text-white ${!active.all ? "" : "shadow-lg font-semibold"
              }`}
            onClick={setAllActive}
          >
            All
          </button>
          <button
            className={`px-6 py-2 mobile:text-lg text-sm text-white ${!active.latest ? "" : "shadow-lg font-semibold"
              }`}
            onClick={setLatestActive}
          >
            Latest
          </button>
        </div>
      </div>

      <div
        className={
          className +
          "__label bg-[#c8ced3] small_phone:py-8 py-5 mobile:px-10 px-5 flex flex-row w-full justify-between items-center"
        }
      >
        <p className="small_phone:text-4xl text-3xl big_phone:px-8 flex flex-row items-center gap-4">
          {active.all ? "All" : "Latest"}
          <div className="flex flex-col items-start">
            <div className="mobile:w-32 w-12 border-t-2 border-black"></div>
            <div className="mobile:w-14 w-8 small_phone:mt-2 mt-1 border-t-2 border-black"></div>
          </div>
        </p>

        <button
          className="bg-white small_phone:gap-2 gap-1 mobile:px-5 p-2 small_phone:text-base text-sm shadow-xl rounded-full shadow-md flex items-center rounded-2xl hover:bg-[#ececec] hover:scale-105 transition"
          onClick={handleCreatePostClick}
          
        >
          <HiPlus />
          Create Post
        </button>
      </div>

      <div
        className={
          className +
          "__postCards mobile:px-10 px-6 pb-10 bg-[#c8ced3] gap-8 flex flex-col"
        }
      >
        {feed && feed.map((post, i) => <PostCard post={post} key={i} />)}
      </div>

      {showPopup && <CreatePostPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default FeedPage;
