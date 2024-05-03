import React from 'react';
import LeftCard from './LeftCard';
import SmallCard from './SmallCard';

const ProposalCard = ({ proposal }) => {
    const sectionsData = [
        { title: 'Transfer', input1: "Amount", input2: "Receiver" },
        { title: 'Cast Vote', input1: "In Favour", input2: "Against" }
    ];
    return (
        <div className="bg-white rounded-lg shadow-lg flex md:flex-row flex-col relative w-full">
            <div className="md:w-[30%]">
                <LeftCard />
            </div>            <div className='flex flex-col right-card flex-1'>
                <div className="mt-4">
                    <div className="font-bold text-xl text-[#229ED9] mb-2  p-2">Proposal ID: #{proposal.id}</div>
                    <span className="block w-auto border-[#ABABAB] border-b-2 mb-2 mx-3" />
                    {proposal.description.map((paragraph, index) => (
                        <p className='mx-4 text-black text-[16px] font-normal my-3' key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-2" >

                    {sectionsData.map((section, index) => (
                        <SmallCard key={index} title={section.title} input1={section.input1} input2={section.input2} />
                    ))}
                </div>
                <div className="mt-4 absolute right-4 text-right text-sm text-white bg-[#4993B0] w-fit px-2 py-1 rounded-2xl">
                    {proposal.timeLeft}
                </div>

            </div>
        </div>
    );
}

export default ProposalCard;
