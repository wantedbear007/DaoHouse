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
  const [uplodedPost, setUplodedPost] = useState('')
  const [getLike, setGetLike] = useState(null)
  const { backendActor } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [totalItems, setTotalItems] = useState(0);
  const className = "FeedPage";

  const setAllActive = () => {
    setActive({ all: true, latest: false });
  };

  const setLatestActive = () => {
    setActive({ all: false, latest: true });
  };

  const handleCreatePostClick = () => {
    setShowPopup(!showPopup);
  };

  const getDetails = async () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    console.log('start : ', start, 'end', end)

    const pagination = {
      start,
      end,
    };
    try {
      let response;
      if (active.all) {
        response = await backendActor.get_all_posts(pagination);
        const dataLength = response?.size / 4;
        setTotalItems(Math.ceil(dataLength))
        setPosts(response?.posts);
      }
      else if (active.latest) {
        response = await backendActor.get_latest_post(pagination);
        const dataLength = response?.size / 4;
        setTotalItems(Math.ceil(dataLength))
        setPosts(response?.posts);
      }
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  const handleGetResponse = (res) => {
    setUplodedPost(res);
  }

  const handleGetLikePost = (response) => {
    setGetLike(response)
  }


  const handleNextPage = () => {
    if (currentPage < totalItems) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  useEffect(() => {
    getDetails();
  }, [backendActor, uplodedPost, getLike, active.all, active?.latest, currentPage]);

  return (
    <div className={className + " " + "w-full"}>
      {showPopup && (
        <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
      )}

      <div style={{
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
        }>
        <Container>
          {posts && posts?.map((posts, i) => <PostCard handleGetLikePost={handleGetLikePost} posts={posts} key={i} />)}
        </Container>
      </div>

      {showPopup && <CreatePostPopup handleGetResponse={handleGetResponse} onClose={() => setShowPopup(false)} />}

      <div className="flex items-center justify-center mt-5 ">
        <button onClick={handlePrevPage} disabled={currentPage === 1}
          className={`text-black hover:text-gray-500 ml-6 text-xl flex items-center ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <FaArrowLeft /> Prev
        </button>

        <button onClick={handleNextPage}
          disabled={currentPage === totalItems}
          className={`text-black hover:text-gray-500 ml-6 text-xl flex items-center ${currentPage === totalItems ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          Next <FaArrowRight />
        </button>
      </div>

      <div className="flex items-center justify-center mb-7 text-xl">
        <span className="text-lg mx-6">
          {currentPage} of {totalItems}
        </span>
      </div>
    </div>
  );
};

export default FeedPage;






