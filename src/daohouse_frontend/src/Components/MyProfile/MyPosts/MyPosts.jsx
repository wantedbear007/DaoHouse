import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import image1 from "../../../../assets/post1.png";
import image2 from "../../../../assets/post2.png";
import image3 from "../../../../assets/post3.png";

const MyPosts = () => {
  const [hoverIndex, setHoverIndex] = useState(false);
  const [readMoreIndex, setReadMoreIndex] = useState(false);
  const className = "MyPosts";

  function show() {}

  return (
    <div className={className}>
      <div className="md:ml-10 mx-5 md:mt-12 mt-5">
        <h3 className="text-[#05212C] md:text-[24px] text-[18px] md:font-bold font-semibold ml-4">
          Post
        </h3>

        <div className="grid grid-cols-2 md:mt-4 mt-2 mb-6 bg-[#F4F2EC] p-4 rounded-lg gap-4">
          {postsList.map(
            ({ image, index, content, likes, comments, share }) => {
              return (
                <div
                  className="post relative w-full"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img
                    src={image}
                    alt="Post"
                    className="postImage w-full rounded-md object-cover"
                  />

                  <div
                    style={{ opacity: hoverIndex === index ? 1 : 0 }}
                    className="postContant w-full max-h-full flex flex-col gap-4 p-2 overflow-y-auto bg-[#05212C80] backdrop-blur absolute bottom-0 text-white rounded-b-lg transition-opacity duration-500"
                  >
                    <p>
                      {readMoreIndex === index
                        ? content
                        : content.slice(0, 120)}

                      {content.length > 120 && readMoreIndex !== index && (
                        <span
                          id="readMore"
                          className="text-blue-500 cursor-pointer"
                          onClick={() => setReadMoreIndex(index)}
                        >
                          ..more
                        </span>
                      )}
                      {content.length > 120 && readMoreIndex == index && (
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
                        {likes}
                      </span>
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <FaTelegramPlane />
                        {comments}
                      </span>
                      <span className="flex flex-row gap-2 items-center text-lg">
                        <BiSolidCommentDetail />
                        {share}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;

const postsList = [
  {
    index: 1,
    image: image1,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsa sit optio aperiam qui obcaecati maiores eum dolor ratione eaque? Neque voluptatibus quas laudantium, sed non explicabo. Fugiat eos, eius consequatur voluptate quisquam veniam sit excepturi, laboriosam nostrum quam saepe. Minus vero molestiae consectetur error? Eum aperiam hic ipsum sed accusantium ex corporis eveniet doloremque. Animi praesentium alias iusto iure voluptatem culpa voluptas magni ipsam architecto pariatur non eius et nesciunt ex qui inventore sequi hic, eaque, delectus similique excepturi nobis possimus necessitatibus. Cupiditate, fugiat nisi perferendis minima fugit repudiandae officia explicabo modi vitae illo maiores, sit id enim neque adipisci numquam corporis quo ipsum tenetur eveniet officiis ut error? Facilis, in. Omnis perferendis incidunt vero atque culpa porro doloribus neque libero corrupti, cupiditate nobis, rem dolor iusto accusantium itaque eum, ex perspiciatis. Officiis similique itaque delectus exercitationem suscipit pariatur at saepe ad accusamus quod omnis et odit, ipsa cupiditate magnam velit ut, totam officia dolore rerum! Quisquam, possimus nostrum inventore vel sunt et sequi, eius non praesentium amet eos at quos quo ullam eligendi quis aperiam perferendis nulla distinctio doloribus quas! Quia ducimus ab corporis soluta aut sed fugiat eum, magni optio maiores, iste sit aperiam provident sunt nobis temporibus quos. Rerum beatae, repellat commodi voluptatem magni provident voluptatibus modi illum officiis ratione ab deleniti, recusandae nulla unde alias magnam maiores earum expedita. Dolorum voluptatem dolorem maiores neque aut quos beatae reprehenderit odit quam facilis ipsam nobis magni vel saepe doloribus vitae, vero, dicta culpa pariatur. Explicabo magni veniam earum voluptatum. Exercitationem quidem labore amet velit nam laudantium possimus voluptates repellendus beatae fugiat repudiandae odit ipsa, pariatur quo quas enim cumque ad ipsum itaque alias animi quam atque! Doloribus repellat, accusantium corporis ipsa accusamus facere mollitia, cupiditate rerum nesciunt est laborum eius corrupti voluptas architecto exercitationem quae quibusdam veritatis neque impedit quas consequuntur a porro. Necessitatibus doloremque atque temporibus optio? Veniam ipsum laudantium libero facilis ullam eius pariatur, soluta, quidem consectetur aliquid nostrum, ab quos. Ullam quos id veniam odit voluptate voluptates eum perspiciatis placeat deserunt, qui tempore, corporis neque itaque ab nulla quo sed dignissimos sunt. Molestias reiciendis eos quos magni labore sequi dignissimos sapiente debitis necessitatibus nam! Vel eveniet reiciendis, beatae tempore ipsam explicabo numquam quae a, blanditiis earum et sint ea ullam eos esse, nisi tenetur omnis ut incidunt error? Voluptatum, ex? Temporibus nulla sapiente libero at dolores reprehenderit est excepturi, autem modi mollitia assumenda rem consequuntur iste exercitationem praesentium commodi nostrum veniam obcaecati, dolorem dolorum tempora, corporis inventore beatae numquam. Nihil esse voluptates dolores porro officiis. Nobis placeat suscipit itaque exercitationem officia quasi tempora nemo perspiciatis aspernatur a harum ipsam aperiam cumque odit libero veniam doloremque ratione maxime nostrum facilis, accusamus magnam. Molestiae nihil sit, quo suscipit dolorum deleniti unde fuga quis, natus distinctio ullam, aliquam magni labore commodi neque aliquid eligendi tenetur consequatur vitae! Corporis voluptatum, sunt illo fugiat facilis deleniti accusantium iusto magni aut perferendis rem impedit sint nihil tempore aperiam culpa, dolores alias hic in? Recusandae, eligendi? Nostrum aliquam ratione repudiandae suscipit!",
  },
  {
    index: 2,
    image: image2,
    likes: 10,
    comments: 5,
    share: 7,
    content: "Lorem ipsum dolor.",
  },
  {
    index: 3,
    image: image3,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor.Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 4,
    image: image1,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 5,
    image: image2,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
  {
    index: 6,
    image: image3,
    likes: 10,
    comments: 5,
    share: 7,
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aspernatur quae perspiciatis doloremque quaerat tempore saepe hic mollitia.",
  },
];
