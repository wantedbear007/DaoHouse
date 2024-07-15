import React, { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import PostCard from "../../Components/FeedPage/PostCard";
import image from "../../../assets/bg_image.png";
import CreatePostPopup from "../../Components/FeedPage/CreatePostPopup";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../Components/utils/useAuthClient";
import Container from "../../Components/Container/Container";
import NoDataComponent from "../../Components/Dao/NoDataComponent";

const FeedPage = () => {
  const [active, setActive] = useState({ all: true, latest: false });
  const [showPopup, setShowPopup] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 140;
  const { backendActor } = useAuth();
  const className = "FeedPage";

  console.log("myposts", posts)

  const setAllActive = () => {
   
    const allFeed = [
     
    ];
    setPosts(allFeed);

    setActive({ all: true, latest: false });
  };

  const setLatestActive = () => {

    const latestFeed = [
   
    ];
    setPosts(latestFeed);
    setActive({ all: false, latest: true });
  };

  const handleCreatePostClick = () => {
    setShowPopup(!showPopup);





  };

  // get data from backend 
  // console the data 

  const getdetails = async () => {

    const pagination = {
      "end": 12,
      "start": 0,
    }

    const canisterId = process.env.CANISTER_ID_IC_ASSET_HANDLER;
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const getDetails = async () => {
      const pagination = {
        start: (currentPage - 1) * postsPerPage,
        end: currentPage * postsPerPage,
      };

      try {
        const response = await backendActor.get_all_posts(pagination);
        console.log("Fetched posts:", response);
        setPosts(response);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getDetails();
  }, [currentPage, backendActor, postsPerPage]);

  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / postsPerPage);

  return (
    <div className={className + " " + "w-full"}>
      {showPopup && (
        <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
      )}

      <div  style={{
          backgroundImage: `url("${image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}>
        <Container classes={`__filter w-100 mobile:h-[25vh] h-[17vh] big_phone:p-20 small_phone:p-10 p-4 flex flex-col items-start justify-center ${className}`}>
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
        </Container>
      </div>

      <div className={"bg-[#c8ced3]"}>
        <Container classes={`__label  small_phone:py-8 py-5 mobile:px-10 px-5 flex flex-row w-full justify-between items-center ${className}`}>
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
        </Container>
      </div>

      <div
        className={
          className +
          "__postCards mobile:px-10 px-6 pb-10 bg-[#c8ced3] gap-8 flex flex-col"
        }
      >
        <Container>
          {posts && posts.map((posts, i) => <PostCard posts={posts} key={i}

          />)}
        </Container>
      </div>

      {showPopup && <CreatePostPopup onClose={() => setShowPopup(false)} />}

      <div className="flex items-center justify-center mt-5 ">
        <button
          onClick={prevPage}
          className="text-black  hover:text-gray-500 ml-6 text-xl"
          style={{ display: "flex", alignItems: "center" }}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> Prev
        </button>

        <button
          onClick={nextPage}
          className="text-black hover:text-gray-500 ml-6 text-xl"
          style={{ display: "flex", alignItems: "center" }}
          disabled={currentPage === totalPages}
        >
          Next <FaArrowRight />
        </button>
      </div>

      <div className="flex items-center justify-center mb-7 text-xl">
        <span className="text-lg mx-6">
          {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default FeedPage;






