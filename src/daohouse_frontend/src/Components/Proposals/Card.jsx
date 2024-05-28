import React from "react";
import avatar from "../../../assets/avatar.png";
import { CircularProgressBar } from "./CircularProgressBar";
import SmallCard from "./SmallCard";
import { buttons, gridItems, sectionsData } from "./proposalsData";
import { CircularProgressBarMobile } from "./CircularProgressBarMobile";

export default function Card({ proposal }) {
  return (
    <div className="rounded-l-lg rounded-t-lg w-full  shadow-md flex">
      <div className="w-full">
        <div className="bg-[#000000] flex items-center justify-between w-full rounded-t-lg">
          <div className="flex p-3">
            <img src={avatar} alt="user photo" className="rounded-full mr-4" />

            <div className="flex flex-col">
              <h4 className="text-[20px] font-semibold text-white">username</h4>
              <p className="text-sm text-white ">username</p>
            </div>
          </div>

          <div className="p-3 mx-4 md:block hidden">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CircularProgressBar percentage={25} color="#4CAF50" />;
                <span className="text-base text-white">3 votes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CircularProgressBar percentage={1} color="red" />;
                <span className="text-base text-white">0 votes</span>
              </div>
            </div>
            <div className="mt-1 "></div>
          </div>

          <div
            className={`w-fit  ${
              proposal?.status === "Rejected"
                ? "bg-[#D85032]"
                : proposal.status === "Approved"
                ? "bg-[#4FB565]"
                : proposal.status === "In Progress"
                ? "bg-[#4993B0]"
                : ""
            } ml-auto text-white text-xs font-semibold rounded-full my-4 mx-4 pr-3 pl-7 py-1 inline-block md:hidden relative`}
          >
            {" "}
            <span
              className={`absolute  ${
                proposal.status === "Rejected"
                  ? "  w-[35%] h-[35%] -left-[0%] -top-[10%]"
                  : proposal.status === "Approved"
                  ? " w-[60%] h-[60%] -left-[14%] -top-[65%]"
                  : proposal.status === "In Progress"
                  ? " w-[100%] h-[100%] -left-[33%] -top-[150%]"
                  : ""
              } `}
            >
              <img
                src={
                  proposal.status === "In Progress"
                    ? "https://s3-alpha-sig.figma.com/img/e963/6c42/1608a8a5c3864207303e12791066cb81?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vwi6xVx6lBLGYngkXCNa4VGyaJudk4y~QLZH4tiQkco7lTzOZ516j27UJv7GpdEK72jkamjBFdzG2Btbh6wBQwLT7UPuGxkVuuFUK2oATQ~M~LPlOkkOSvOAb3m3sjjlrCsHzmjw5zj1s6jHyKhUTtp-XGKFRzxQ8FSflMAuVYwdiN4KAGuxbTdnYY2ucX5LhD2Pwa69z6v70HPH3Y3tU4RTeNKhZssqcTKsLaXxfrqSAaXsif~zwKAEc~MfWzUwdwMzWKFsM1LxoCSOHqjP6rv50z1wBc669mJa~pvU96SKYysN-gSmVt-d1H-bp4Mr3HiUHKAYZpu9bzwkaUC53Q__"
                    : proposal.status === "Approved"
                    ? "https://s3-alpha-sig.figma.com/img/e00b/cac3/672814b264634546ce93867fb0beeff5?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVREv81cUAAXt6d0kN~O~bDb54hDpmM-5CfhyhlMgsoZ5v2-vpFybq8A99pWBuMoGy7q1FARaQddipqo2qrWQbWWcOFsDrzORvZIB6WEhjQof-nmGVtwlI-EzHdefu~1JWAFKWNb5ewBVv0RRBMU0GDln7lHKXdSEegGgQoa2WfBFBTwP4vwqEXA9xLknMYLkigYdIb4cbc1z5dqrKOe86k4~Aoc~5hcjc1mttci1t4cBw8SrgHLprD71GSPJLu58eeoyedoC8Wa1u3E1USKsqk6n4G0T64A-xwuiuY1HaPzSA18Dq2cYl8iGUpkaxNjjGjSXCL2r9jXj2Jb964HAA__"
                    : "https://s3-alpha-sig.figma.com/img/13ee/beb9/e675e55dcc1cbec1e25e6c00bce763a8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FIilO8FufTg6P9pS60o9w30G3bQhmU3cmDkb5Sl30qsZ0oNny2ivUtl~WbF6z-bK6k0oqXH4WAKatlkIDUbqtXUcnXbqIRm4HLNNUIfhDpJ140cbXeRsiTLo2-I5hvClUjzct4sIzUmMi75aJQ76mpHs6EbFKwmFGuD8dPRa37NeUm5IU9N7ETe6kg~RDHgUyxFg-2Ehdu7qW3KfGQe3CejfT~lk1j~GIK7iMYB0fmnRND2~Mh8YuwVXw~2c4m5x4M~UGp3BqdKqkgiMTEmlNf345OAcPt8nVC-tJCH-cHDYBmuzAbjfpD12thHjhko-MPIz5K4SuGIRscAc8sf41A__"
                }
                alt="Proposal Status Image"
              />
            </span>
            {proposal.status}
          </div>
        </div>
        <div className="md:flex gap-4 text-xs py-2 px-6  bg-[#AAC8D6] rounded-b-lg hidden">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="text-[16px] text-black py-2 rounded-md text-nowrap"
            >
              <span className="font-bold text-[12px] text-nowrap	">
                {" "}
                • {item.label}
              </span>
              <br />
              <div className="text-nowrap	py-1 text-[16px] mx-2">
                <span className=" text-[16px]"> {item.value}</span>

                {item.time && (
                  <span className="text-[#55646b] mx-1 text-[12px]">
                    {" "}
                    {item.time}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div
            className={`w-fit  ${
              proposal.status === "Rejected"
                ? "bg-[#D85032]"
                : proposal.status === "Approved"
                ? "bg-[#4FB565]"
                : proposal.status === "In Progress"
                ? "bg-[#4993B0]"
                : ""
            } ml-auto text-white text-xs font-semibold rounded-full my-4 mx-4 px-4 py-2 inline-block relative`}
          >
            {" "}
            <span className="text-[#34342a] text-[16px] ml-4">
              <span
                className={`absolute  ${
                  proposal.status === "Rejected"
                    ? "  w-[35%] h-[35%] -left-[0%] top-[2%]"
                    : proposal.status === "Approved"
                    ? " w-[60%] h-[60%] -left-[14%] -top-[40%]"
                    : proposal.status === "In Progress"
                    ? " w-[100%] h-[100%] -left-[35%] -top-[105%]"
                    : ""
                } `}
              >
                <img
                  src={
                    proposal.status === "In Progress"
                      ? "https://s3-alpha-sig.figma.com/img/e963/6c42/1608a8a5c3864207303e12791066cb81?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vwi6xVx6lBLGYngkXCNa4VGyaJudk4y~QLZH4tiQkco7lTzOZ516j27UJv7GpdEK72jkamjBFdzG2Btbh6wBQwLT7UPuGxkVuuFUK2oATQ~M~LPlOkkOSvOAb3m3sjjlrCsHzmjw5zj1s6jHyKhUTtp-XGKFRzxQ8FSflMAuVYwdiN4KAGuxbTdnYY2ucX5LhD2Pwa69z6v70HPH3Y3tU4RTeNKhZssqcTKsLaXxfrqSAaXsif~zwKAEc~MfWzUwdwMzWKFsM1LxoCSOHqjP6rv50z1wBc669mJa~pvU96SKYysN-gSmVt-d1H-bp4Mr3HiUHKAYZpu9bzwkaUC53Q__"
                      : proposal.status === "Approved"
                      ? "https://s3-alpha-sig.figma.com/img/e00b/cac3/672814b264634546ce93867fb0beeff5?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVREv81cUAAXt6d0kN~O~bDb54hDpmM-5CfhyhlMgsoZ5v2-vpFybq8A99pWBuMoGy7q1FARaQddipqo2qrWQbWWcOFsDrzORvZIB6WEhjQof-nmGVtwlI-EzHdefu~1JWAFKWNb5ewBVv0RRBMU0GDln7lHKXdSEegGgQoa2WfBFBTwP4vwqEXA9xLknMYLkigYdIb4cbc1z5dqrKOe86k4~Aoc~5hcjc1mttci1t4cBw8SrgHLprD71GSPJLu58eeoyedoC8Wa1u3E1USKsqk6n4G0T64A-xwuiuY1HaPzSA18Dq2cYl8iGUpkaxNjjGjSXCL2r9jXj2Jb964HAA__"
                      : "https://s3-alpha-sig.figma.com/img/13ee/beb9/e675e55dcc1cbec1e25e6c00bce763a8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FIilO8FufTg6P9pS60o9w30G3bQhmU3cmDkb5Sl30qsZ0oNny2ivUtl~WbF6z-bK6k0oqXH4WAKatlkIDUbqtXUcnXbqIRm4HLNNUIfhDpJ140cbXeRsiTLo2-I5hvClUjzct4sIzUmMi75aJQ76mpHs6EbFKwmFGuD8dPRa37NeUm5IU9N7ETe6kg~RDHgUyxFg-2Ehdu7qW3KfGQe3CejfT~lk1j~GIK7iMYB0fmnRND2~Mh8YuwVXw~2c4m5x4M~UGp3BqdKqkgiMTEmlNf345OAcPt8nVC-tJCH-cHDYBmuzAbjfpD12thHjhko-MPIz5K4SuGIRscAc8sf41A__"
                  }
                  alt="Proposal Status Image"
                />
              </span>
            </span>{" "}
            {proposal.status}
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col right-card flex-1 relative">
            <div className="flex items-center justify-start ">
              <div className="font-bold text-xl text-[#229ED9]  mb-2 p-2 hidden md:block">
                Transfer
              </div>
              <span className="border-r-2 h-6 border-[#229ED9] mx-2 hidden md:block" />
              <div className="font-semibold md:text-[16px] text-[14px] text-[#229ED9] mb-2 p-2">
                Proposal ID: #{proposal.id}
              </div>
            </div>

            {proposal.description.map((paragraph, index) => (
              <p
                className="mx-4 text-black text-[12px] md:text-[16px] font-normal my-3"
                key={index}
              >
                {paragraph}
              </p>
            ))}

            <div className="md:flex justify-start items-center gap-2 hidden">
              {sectionsData.map((section, index) => (
                <SmallCard
                  key={index}
                  title={section.title}
                  input1={section.input1}
                  input2={section.input2}
                />
              ))}
            </div>
            <div className="flex justify-start items-center gap-2 md:hidden">
              {sectionsData.slice(0, 1).map((section, index) => (
                <SmallCard
                  key={index}
                  title={section.title}
                  input1={section.input1}
                  input2={section.input2}
                />
              ))}
            </div>
            <div className="md:mt-4 mt-2 absolute right-4 text-right md:text-sm text-[10px] text-white bg-[#4993B0] w-fit px-2 py-1 rounded-2xl">
              {proposal.timeLeft}
            </div>
          </div>
          <div className="flex gap-2 text-xs py-2 px-2 rounded-b-lg flex-wrap md:hidden">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="text-black py-2 rounded-md text-nowrap"
              >
                <span className="font-bold text-[12px] text-nowrap	">
                  {" "}
                  • {item.label}
                </span>
                <br />
                <div className="text-nowrap	py-1 text-[16px] mx-2">
                  <span className=" text-[12px]"> {item.value}</span>

                  {item.time && (
                    <span className="text-[#55646b] mx-1 text-[10px]">
                      {" "}
                      {item.time}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 md:hidden">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <CircularProgressBarMobile percentage={25} color="#4CAF50" />
                <span className="text-base text-black">3 votes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CircularProgressBarMobile percentage={1} color="red" />
                <span className="text-base text-black">0 votes</span>
              </div>
            </div>
            <div className="mt-1 "></div>
          </div>

          <div className="flex justify-start items-center gap-2 md:hidden">
            {sectionsData.slice(1, 2).map((section, index) => (
              <SmallCard
                key={index}
                title={section.title}
                input1={section.input1}
                input2={section.input2}
              />
            ))}
          </div>

          <div className="dark:border-zinc-700 py-2 flex md:justify-start justify-around gap-4 text-zinc-500 dark:text-zinc-400">
            {buttons.map((button, index) => (
              <React.Fragment key={index}>
                <button className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 md:mx-4">
                  {button.icon}
                  <span className="text-black text-[14px]">{button.text}</span>
                </button>
                {index !== buttons.length - 1 && (
                  <span className="border-r h-6 border-black mx-2 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
