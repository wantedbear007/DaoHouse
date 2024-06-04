import React, { useState } from 'react';
import proposals from "../../../assets/proposals.png"
import createProposal from "../../../assets/createProposal.png"
import ReactQuill from 'react-quill';
import { quillFormats, quillModules } from '../../utils/quilConfig';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


function CreateProposal() {
    const [proposalType, setProposalType] = useState('Text');
    const [proposalDescription, setProposalDescription] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const className = "CreateProposals";

    const proposalTypes = [
        "Text",
        "Transfer",
        "Function Call",
        "Add Member",
        "Remove Member"
    ];


    const handleProposalTypeChange = (value) => {
        setProposalType(value);
        setDropdownOpen(!dropdownOpen)
    };

  const handleProposalDescriptionChange = (value) => {
        setProposalDescription(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    const renderAdditionalFields = () => {
        switch (proposalType) {
            case 'Transfer':
                return (
                    <div>
                        <label className="block mb-2 font-semibold text-xl">Recipient</label>
                        <input type="text" placeholder="Specify Account if any" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" /><br />
                        <div className="flex flex-wrap flex-row w-full gap-4">

                            <div className="flex-1">

                                <label className="block mb-2 font-semibold text-xl">Token</label>
                                <select className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent">
                                    {/* Options for token */}
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 font-semibold text-xl">Amount</label>

                                <input type="number" placeholder="Write here number type input" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" />
                            </div>
                        </div>
                    </div>
                );
            case 'Function Call':
                return (
                    <div>
                        <label className="block mb-2 font-semibold text-xl">Contract</label>
                        <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" /><br />
                        <label className="block mb-2 font-semibold text-xl">Method</label>
                        <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" /><br />
                        <label className="block mb-2 font-semibold text-xl">Arguments (JSON)</label>
                        <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" /><br />
                        <div className="flex flex-wrap flex-row w-full gap-4">
                            <div className="flex-1">
                                <label className="block mb-2 font-semibold text-xl">Gas (Tgas)</label>
                                <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 font-semibold text-xl">Deposit</label>
                                <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" />
                            </div>
                        </div>
                    </div>
                );
            case 'Add Member':
            case 'Remove Member':
                return (
                    <div className="flex flex-wrap flex-row w-full gap-4">
                        <div className="flex-1">
                            <label className="block mb-2 font-semibold text-xl">Account ID</label>
                            <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 font-semibold text-xl">Role</label>
                            <input type="text" className="w-full px-4 py-3 mb-4 border-opacity-30 border border-[#aba9a5] rounded-xl bg-transparent" />
                        </div>
                    </div>
                );
            default:
                return null;
        }
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
                    <div className="mb-6 max-w-6xl relative">
                        <div
                            className="mt-1 block bg-transparent w-full rounded-xl  pl-3 pr-10 py-3 text-base border border-[#aba9a5] border-opacity-30 focus:outline-none focus:ring-indigo-500 focus:border-[#aba9a5] sm:text-sm rounded-md cursor-pointer flex items-center justify-between"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {proposalType || "Select Type here"}
                            <span className="ml-2">
                                {dropdownOpen ? <BsChevronUp color='#7a7976' /> : <BsChevronDown color='#7a7976' />}
                            </span>
                        </div>
                        {dropdownOpen && (
                            <div className="absolute mt-1 w-full rounded-md bg-[#AAC8D6]  shadow-lg z-10">
                                <div className="flex gap-4  p-2">
                                    {proposalTypes.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => handleProposalTypeChange(type)}
                                            className={`px-2 py-1 flex-1 rounded border-white border-2  ${proposalType === type ? 'bg-[#DFE9EE] text-[#229ED9] font-medium' : 'bg-[#AAC8D6] text-white bg-transparent'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='max-w-6xl'>
                        {renderAdditionalFields()}
                    </div>

                    <div className='my-4'>
                        <h1 className="text-xl font-semibold mb-4">Proposal Description</h1>
                        <div className="mb-6 max-w-6xl mt-4 relative editor-container">
                            <ReactQuill
                                value={proposalDescription}
                                onChange={handleProposalDescriptionChange}
                                modules={quillModules}
                                formats={quillFormats}
                                placeholder='Write here...'
                                className='proposal-editor rounded-xl'
                            />
                        </div>
                    </div>



                    <div className="flex justify-center my-8">
                        <button
                            className="bg-[#0E3746] hover:bg-[#819499] text-white font-normal text-center rounded-full text-[16px] py-2 px-6 rounded focus:outline-none focus:shadow-outline"
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
