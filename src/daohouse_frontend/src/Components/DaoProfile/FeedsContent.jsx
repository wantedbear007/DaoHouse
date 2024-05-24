import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FeedsContent = () => {
  const toolbarModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
      ["undo", "redo"],
    ],
  };

  const handleImageUpload = () => {
    console.log("Image upload triggered");
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-[24px] md:text-[18px] text-[16px] font-bold">
          Feeds
        </h1>
        <button
          onClick={() => {
            Navigate("/create-proposal");
          }}
          className="flex justify-center items-center text-[16px] relative w-[220px] h-[50px] bg-white rounded-full  hidden lg:block"
          style={{
            boxShadow:
              "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
          }}
        >
          <span className="absolute text-[35px] font-thin left-5 bottom-[1px] ">
            +
          </span>
          <span className="ml-6">Create Proposals</span>
        </button>
      </div>
      <div className="bg-[#F4F2EC] rounded-[10px] mt-4">
        <div className="flex items-center gap-5 p-4">
          <div className="mobile:w-[69px] mobile:h-[40px] bg-[#C2C2C2] rounded"></div>
          <div>
            <span className="md:text-[20px] text-[18px] font-normal text-[#05212C]">
              Username.user,
            </span>
            <span className="md:text-16px] text-[12px]  font-normal text-[#6C6C6C] ml-2">
              gmail@gmail.xyz
            </span>
          </div>
        </div>
        <div className="w-full border-t  border-[#0000004D]"></div>
        <div className="px-4 pt-4">
          <div className="bg-white h-[260px] rounded-[10px]">
            <div
              className="bg-[#F5F5F5] rounded-[10px] p-1 md:h-11 h-16"
              style={{ boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.26)" }}
            >
              <ReactQuill
                modules={toolbarModules}
                theme="snow"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8 pb-6">
          <button
            className="md:text-[16px] text-[12px] text-white font-normal bg-[#0E3746] md:w-[140px] md:h-[50px] w-[98px] h-[40px] rounded-[27px]"
            style={{
              boxShadow:
                "0px 0.26px 1.22px 0px #0000000A, 0px 1.14px 2.53px 0px #00000010, 0px 2.8px 5.04px 0px #00000014, 0px 5.39px 9.87px 0px #00000019, 0px 9.07px 18.16px 0px #0000001F, 0px 14px 31px 0px #00000029",
            }}
          >
            Post Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedsContent;
