import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProposal = () => {
    const { id } = useParams();

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center">

                <h2 className="text-xl font-semibold">Proposal ID {id}</h2>
                <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-yellow-300 text-yellow-800 rounded-full text-sm">In Progress</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">6d 8h 35m 12s left</span>
                </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-gray-700">
                    <div>
                        <span className="font-medium">Submitted On:</span>
                        <span className="block">01/01/24 5:32:11 AM</span>
                    </div>
                    <div>
                        <span className="font-medium">Expires On:</span>
                        <span className="block">07/01/24 5:32:11 AM</span>
                    </div>
                    <div>
                        <span className="font-medium">Votes Require:</span>
                        <span className="block">15</span>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h4 className="font-semibold">Voted In Favour</h4>
                        <div className="flex justify-center items-center mt-2">
                            <span className="text-2xl font-bold">7</span>
                            <span className="ml-2 text-green-600 font-semibold">60%</span>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <h4 className="font-semibold">Voted In Against</h4>
                        <div className="flex justify-center items-center mt-2">
                            <span className="text-2xl font-bold">3</span>
                            <span className="ml-2 text-red-600 font-semibold">20%</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-around text-gray-700">
                    <div className="text-center">
                        <span className="block text-xl font-semibold">5</span>
                        <span>Comments</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-semibold">7</span>
                        <span>Share</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-semibold">10</span>
                        <span>Voters</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProposal;
