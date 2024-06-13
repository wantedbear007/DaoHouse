import React from 'react';
import { useParams } from 'react-router-dom';
import Lottie from "react-lottie";
import BigCircleComponent from "../../../Components/Ellipse-Animation/BigCircle/BigCircleComponent";
import SmallCircleComponent from "../../../Components/Ellipse-Animation/SmallCircle/SmallCircleComponent";
import MediumCircleComponent from "../../../Components/Ellipse-Animation/MediumCircle/MediumCircleComponent";
import BigCircleAnimation from "../../../Components/Ellipse-Animation/BigCircle/BigCircleAnimation.json";
import SmallCircleAnimation from "../../../Components/Ellipse-Animation/SmallCircle/SmallCircleAnimation.json";
import BigCircle from "../../../../assets/BigCircle.png";
import MediumCircle from "../../../../assets/MediumCircle.png";
import SmallestCircle from "../../../../assets/SmallestCircle.png";
import MyProfileRectangle from "../../../../assets/MyProfileRectangle.png";
import { BsPlusLg } from "react-icons/bs";
import { singleProposalData } from './proposal';
import SingleProposalCard from './SingleProposalCard';
import { useNavigate } from "react-router-dom";

const SingleProposal = () => {
    const { id } = useParams();
    const navigate=useNavigate()
    // Animation options for the big circle
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: BigCircleAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            id: "lottie-bigCircle",
        },
    };

    // Animation options for the small circle
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: SmallCircleAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            id: "lottie-smallCircle",
        },
    };

    // Animation options for the medium circle
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: SmallCircleAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            id: "lottie-mediumCircle",
        },
    };
    return (
        <div className={" bg-zinc-200 w-full relative"}>
            <div
                className={
                    "__topComponent w-full lg:h-[25vh] h-[20vh] p-20 flex flex-col items-start justify-center relative hero-container"
                }
                style={{
                    backgroundImage: `url("${MyProfileRectangle}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute z-20 top-0 left-0 w-full h-full overflow-x-hidden">
                    {/* Big circle image */}
                    <BigCircleComponent imgSrc={BigCircle} />

                    {/* Big circle animation */}
                    <div className="absolute z-20  md:right-[68px] big_phone:top-1/2 md:top-[50%] top-[60%] -translate-y-1/2 right-[-50px]">
                        <Lottie
                            options={defaultOptions}
                            style={{ height: "112px", width: "112px" }}
                            className="absolute z-50 "
                        />
                    </div>
                    {/* Smallest circle image */}
                    <SmallCircleComponent imgSrc={SmallestCircle} />

                    {/* Small circle animation */}
                    <div className="absolute md:right-[24.75rem] right-[7.1rem] big_phone:top-[30%] md:top-[30%] top-[35.2%] -translate-y-[93%]">
                        <Lottie
                            options={defaultOptions2}
                            height={50}
                            width={50}
                            className="absolute z-20"
                        />
                    </div>

                    {/* Medium circle image */}
                    <MediumCircleComponent imgSrc={MediumCircle} />

                    {/* Medium circle animation */}
                    <div className="absolute md:right-[39.71rem] right-[11.6rem] big_phone:top-[95%] md:top-[95.6%] top-[99.8%] -translate-y-[93%]">
                        <Lottie
                            options={defaultOptions3}
                            height={61}
                            width={61}
                            className="absolute z-20"
                        />
                    </div>
                </div>
                <div className="absolute flex justify-start top-0 left-9 p-8 z-30 ">
                    <div className="text-white text-[40px] font-normal">
                        My Proposals
                    </div>
                    <div className="flex justify-center items-baseline mt-2 items-center mx-4 left-[18%] z-30 flex space-x-2 flex-col gap-2">
                        <span className="border-b border-white w-20" />
                        <span className="border-b border-white w-10" />
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen">
                <div className="flex items-center justify-between px-9">
                    <h1 className="text-[#05212C] text-[30px] px-4">Proposal ID:  {id}</h1>

                    <button      onClick={() => {
              navigate("/create-proposal");
            }} className="ml-auto my-4 mx-4 bg-white text-[16px] text-[#05212C] gap-1 px-7 shadow-xl py-4 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
                        <BsPlusLg className='mx-1' size={19} />
                        Create New Proposals
                    </button>
                </div>

               <div className="px-8">
               {singleProposalData.map((proposal, index) => (
                    <SingleProposalCard
                        key={index}
                        id={proposal.id.replace(/#/g, '')}
                        status={proposal.status}
                        timeLeft={proposal.timeLeft}
                        description={proposal.description}
                        submittedOn={proposal.submittedOn}
                        expiresOn={proposal.expiresOn}
                        votesRequired={proposal.votesRequired}
                        votesInFavour={proposal.votesInFavour}
                        votesAgainst={proposal.votesAgainst}
                        comments={proposal.comments}
                        shares={proposal.shares}
                        voters={proposal.voters}
                    />
                ))}
               </div>

            </div>
        </div>
    );
};

export default SingleProposal;
