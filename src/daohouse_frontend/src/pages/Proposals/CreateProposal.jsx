import React, { useState } from 'react';
import proposals from "../../../assets/proposals.png"
import createProposal from "../../../assets/createProposal.png"

function CreateProposal() {
    const [proposalType, setProposalType] = useState('');
    const [proposalDescription, setProposalDescription] = useState('');
    const className = "CreateProposals";

    const handleProposalTypeChange = (event) => {
        setProposalType(event.target.value);
    };

    const handleProposalDescriptionChange = (event) => {
        setProposalDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="bg-zinc-200 w-full">
            <div
                className={`${className}__filter w-full h-[25vh] p-20 flex flex-col items-start justify-center`}
                style={{
                    backgroundImage: `url("${proposals}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-[40px] p-2 text-white border-b-2 border-white">Proposals</h1>
            </div>

            <div className={`${className}__label bg-[#c8ced3] relative py-8 px-10 flex gap-2 flex-col w-full justify-between items-center`}>
                <p className="text-[40px] text-black px-8 mr-auto flex flex-row justify-start items-center gap-4">
                    Create Proposal
                    <div className="flex flex-col items-start">
                        <div className="w-32 border-t-2 border-black"></div>
                        <div className="w-14 mt-2 border-t-2 border-black"></div>
                    </div>
                </p>

                <div className="mx-auto bg-[#F4F2EC] p-6 m-6 rounded-lg shadow w-full">
                    <h1 className="text-xl font-semibold mb-4">Proposal Type</h1>
                    <div className="mb-6  max-w-6xl">
                        <select
                            id="proposalType"
                            name="proposalType"
                            value={proposalType}
                            onChange={handleProposalTypeChange}
                            className="mt-1 block bg-transparent w-full pl-3 pr-10 py-2 text-base border border-gray-300 border-opacity-30 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Type here</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>

                    <h1 className="text-xl font-semibold mb-4">Proposal Description</h1>
                    <div className="mb-6 max-w-6xl">
                        <textarea
                            id="proposalDescription"
                            name="proposalDescription"
                            value={proposalDescription}
                            onChange={handleProposalDescriptionChange}
                            rows="4"
                            placeholder='Write here...'
                            className="mt-1 block bg-transparent w-full p-2.5 text-base border border-gray-300 border-opacity-30 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        ></textarea>
                    </div>

                    <div className="flex justify-center my-8">
                        <button
                            className="bg-[#819499] hover:bg-[#819499] text-white font-normal text-center rounded-full text-[16px] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="absolute right-10 top-10">
                    <img src={createProposal} alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default CreateProposal;
