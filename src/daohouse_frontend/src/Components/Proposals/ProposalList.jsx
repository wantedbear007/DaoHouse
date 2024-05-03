import React from 'react';
import ProposalCard from './ProposalCard';

const ProposalList = ({ proposals }) => {
    return (
        <div className=" w-full px-[4rem]">
            {proposals.map((proposal, index) => (
                <div className='my-8'>
                    <ProposalCard key={index} proposal={proposal} />
                </div>
            ))}
        </div>
    );
}

export default ProposalList;
