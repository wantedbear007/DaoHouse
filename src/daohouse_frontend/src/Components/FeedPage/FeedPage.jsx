import React, { useState } from "react";
import image from "../../../assets/bg_image.jpeg";
import Navbar from "../layouts/Navbar";

const FeedPage = () => {
  const className = "FeedPage";
  const [active, setActive] = useState();

  return (
    <div className={className + " " + "w-100"}>
      <Navbar />

      <div
        className={
          className +
          "__filter w-100 h-[15vh] p-6 flex flex-col items-start justify-center"
        }
        style={{ backgroundImage: `${image}` }}
      >
        <h1 className="text-2xl border border-b-1 p-3">Social Feed</h1>

        <div className={className + "__buttons flex flex-row"}>
          <button className="px-4 py-2">All</button>
          <button className="px-4 py-2">Latest</button>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
