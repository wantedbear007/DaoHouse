import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { usePostContext } from "../../../PostProvider";
import NoPostProfile from "../../Dao/NoPostProfile";
import { useAuth } from "../../utils/useAuthClient";
import Pagination from "../../pagignation/Pagignation";

const MyPosts = () => {
  const { backendActor } = useAuth();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [readMoreIndex, setReadMoreIndex] = useState(null); 
  const { setSelectedPost } = usePostContext();
  const[myPost,setMyPost] =useState([])
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
// =======

// const MyPosts = () => {
//   const { backendActor, frontendCanisterId, identity } = useAuth();
//   const [postsList, setPostsList] = useState([]);
//   const [hoverIndex, setHoverIndex] = useState(null); // Initialize as null instead of false
//   const [readMoreIndex, setReadMoreIndex] = useState(null); // Initialize as null instead of false
//   const { setSelectedPost } = usePostContext();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(4);
//   const [totalItems, setTotalItems] = useState(0);
//  >>>>>>> main
  const className = "MyPosts";
  const[post,setpost] =useState({})
  console.log("post info----",post)

  const getpost =async()=>{

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    console.log('start : ', start, 'end', end)
    const pagination = {
      start,
      end,
    };
    try {
      const res = await backendActor.get_my_post(pagination);
      console.log("---res--",res);
      setpost(res);
      const dataLength = res?.size / 4;
      setTotalItems(Math.ceil(dataLength))
    } catch (error) {
      console.log("error fetching post",error)
    }
  }

const getpost =async()=>{
  const itemsPerPage = 4;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginationPayload = {
    start,
    end,
  }
    try {
      const res = await backendActor.get_my_post(paginationPayload);
      console.log("---res--",res?.userProfile);
      const dataLength = response?.size || 0;
      setTotalItems(Math.ceil(dataLength / 4));
      setMyPost(res?.userProfile);
    } catch (error) {
      console.log("error fetching post",error)
    }
  }
  
  useEffect(()=>{
    getpost();
  },[currentPage])

  return (
    <div className={className}>
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4" onClick={getpost}>
          Post
        </h3>
        {postsList.length === 0 ? (

   
        <button>
        Create
        </button>
        {myPost.length === 0 ? (
          <NoPostProfile />
        ) : (
          <div className="grid grid-cols-2 md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg gap-4">
          {myPost.map((post, index) => (
            <div
              key={index}
              className="post relative w-full"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => {
                setHoverIndex(null);
                setReadMoreIndex(null);
              }}
            >
              <Link to={`/post/${index}`} onClick={() => setSelectedPost(post)}>
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
                  {post.content.length > 120 && readMoreIndex === index && (
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
          ))}
        </div>
        )}
      </div>
      <Pagination totalItems={totalItems} currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default MyPosts;