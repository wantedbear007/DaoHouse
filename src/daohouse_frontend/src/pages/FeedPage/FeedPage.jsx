import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

import allFeed from "../../Components/FeedPage/AllFeeds";
import latestFeed from "../../Components/FeedPage/LatestFeed";
import PostCard from "../../Components/FeedPage/PostCard";
import image from "../../../assets/bg_image.png";

const FeedPage = () => {
  const [feed, setFeed] = useState(allFeed);
  const [active, setActive] = useState({ all: true, latest: false });
  const className = "FeedPage";

  const setAllActive = () => {
    setFeed(allFeed);
    setActive({ all: true, latest: false });
  };

  const setLatestActive = () => {
    setFeed(latestFeed);
    setActive({ all: false, latest: true });
  };

  return (
    <div className={className + " " + "w-full"}>
      <div
        className={
          className +
          "__filter w-100 h-[25vh] p-20 flex flex-col items-start justify-center"
        }
        style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl border-b-2 border-white p-3 text-white">
          Social Feed
        </h1>

        <div className={className + "__buttons flex flex-row"}>
          <button
            className={`px-6 py-2 text-lg text-white ${!active.all ? "" : "shadow-lg font-semibold"
              }`}
            onClick={setAllActive}
          >
            All
          </button>
          <button
            className={`px-6 py-2 text-lg text-white ${!active.latest ? "" : "shadow-lg font-semibold"
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
          "__label bg-[#c8ced3] py-8 px-10 flex flex-row w-full justify-between items-center"
        }
      >
        <p className="text-4xl px-8 flex flex-row items-center gap-4">
          {active.all ? "All" : "Latest"}
          <div className="flex flex-col items-start">
            <div className="w-32 border-t-2 border-black"></div>
            <div className="w-14 mt-2 border-t-2 border-black"></div>
          </div>
        </p>

        <button className="bg-white gap-2 px-4 shadow-xl py-2 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
          <HiPlus />
          Create Post
        </button>
      </div>

      <div
        className={
          className + "__postCards px-10 pb-10 bg-[#c8ced3] gap-8 flex flex-col"
        }
      >
        {feed && feed.map((post, i) => <PostCard post={post} key={i} />)}
      </div>
    </div>
  );
};

export default FeedPage;
