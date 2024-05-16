import React from 'react';
import ProposalCard from './ProposalCard';
import { proposalsArray } from './proposalsData';

const ProposalList = () => {
    return (
        <div className=" w-full px-[4rem]">
            {proposalsArray.map((proposal, index) => (
                <div className='my-8' key={index} >
                    <ProposalCard proposal={proposal} />
                </div>
            ))}
        </div>
    );
}

export default ProposalList;
