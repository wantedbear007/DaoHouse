import React, { useState } from 'react'
import proposals from "../../../assets/proposals.png"
import SearchProposals from '../../Components/Proposals/SearchProposals';
import { BsPlusLg } from 'react-icons/bs';
import ProposalList from '../../Components/Proposals/ProposalList';
import { proposalsArray } from '../../Components/Proposals/proposals';
import { useNavigate } from 'react-router-dom';

const Proposals = () => {
    const [Recent, setRecent] = useState(true);
    const [joinedDAO, setJoinedDAO] = useState(false);
    const navigate=useNavigate()
    const className = "Proposals";

    return (
        <div className="bg-zinc-200 w-full">

            <div
                className={
                    className +
                    "__filter w-100 h-[25vh] p-20 flex flex-col items-start justify-center"
                }
                style={{
                    backgroundImage: `url("${proposals}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-[40px] p-2 text-white border-b-2 border-white">Proposals</h1>


            </div>

            <div
                className={
                    className +
                    "__label bg-[#c8ced3] py-8 px-10 flex md:flex-row gap-2 flex-col w-full justify-between items-center"
                }
            >
                <p className="text-[40px] text-black px-8 flex flex-row items-center gap-4">
                    {Recent ? "Most Recent" : "Joined"}
                    <div className="flex flex-col items-start">
                        <div className="w-32 border-t-2 border-black"></div>
                        <div className="w-14 mt-2 border-t-2 border-black"></div>
                    </div>
                </p>
                <div className="flex-grow flex justify-center px-6 mx-2">
                    <SearchProposals
                        width="100%"
                        bgColor="transparent"
                        placeholder="Search by proposal ID"
                        className="border-2 border-[#AAC8D6] w-full max-w-lg"
                    />
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <button className="bg-white text-[16px] text-[#05212C] gap-1 px-7 shadow-xl py-4 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
                        <div>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1251 17.55H16.8751C17.0437 17.5497 17.2064 17.6125 17.3311 17.7262C17.4557 17.8398 17.5333 17.996 17.5486 18.164C17.5638 18.332 17.5156 18.4996 17.4134 18.6338C17.3113 18.768 17.1626 18.8591 16.9966 18.8892L16.8751 18.9H10.1251C9.9564 18.9003 9.79372 18.8375 9.66907 18.7238C9.54442 18.6102 9.46683 18.454 9.45159 18.286C9.43635 18.118 9.48456 17.9504 9.58672 17.8162C9.68888 17.682 9.83759 17.5909 10.0036 17.5608L10.1251 17.55ZM7.42507 12.15H19.5751C19.7438 12.1497 19.9064 12.2125 20.0311 12.3262C20.1557 12.4398 20.2333 12.596 20.2486 12.764C20.2638 12.932 20.2156 13.0996 20.1134 13.2338C20.0113 13.368 19.8626 13.4591 19.6966 13.4892L19.5751 13.5H7.42507C7.2564 13.5003 7.09371 13.4375 6.96907 13.3238C6.84442 13.2102 6.76683 13.054 6.75159 12.886C6.73635 12.718 6.78456 12.5504 6.88672 12.4162C6.98888 12.282 7.13759 12.1909 7.30357 12.1608L7.42507 12.15ZM4.72507 6.75H22.2751C22.4438 6.74969 22.6064 6.81255 22.7311 6.92619C22.8557 7.03983 22.9333 7.19602 22.9486 7.36401C22.9638 7.532 22.9156 7.6996 22.8134 7.83382C22.7113 7.96804 22.5626 8.05915 22.3966 8.0892L22.2751 8.1H4.72507C4.5564 8.10031 4.39371 8.03746 4.26907 7.92381C4.14442 7.81017 4.06683 7.65398 4.05159 7.48599C4.03635 7.318 4.08456 7.1504 4.18672 7.01618C4.28888 6.88196 4.43759 6.79085 4.60357 6.7608L4.72507 6.75Z" fill="black" />
                            </svg>

                        </div>
                        Filter
                    </button>

                    <button onClick={()=>{
                        navigate("/create-proposal")
                    }} className="bg-white text-[16px] text-[#05212C] gap-1 px-7 shadow-xl py-4 px-4 rounded-full shadow-md flex items-center space-x-4 rounded-2xl">
                        <BsPlusLg className='mx-1' size={19} />
                        Create Proposals
                    </button>
                </div>
            </div>


            <div
                className={
                    className + "__proposalsCard  bg-[#c8ced3] gap-8 flex flex-col w-full"
                }
            >
                <ProposalList proposals={proposalsArray} />
            </div>

        </div>
    )
}

export default Proposals