import React from 'react';

const SmallCard = ({ title, input1, input2 }) => {
    return (
        <div className="w-full bg-white border-2 border-[#ABABAB] rounded-xl shadow-sm m-2">
            <h2 className="text-lg font-semibold text-black mb-4 px-2">{title}</h2>
            <div className="border-b border-zinc-300 dark:border-zinc-700 mb-4"></div>
            <div className="flex justify-between items-center px-2">
                <div className="flex-1">
                    <label htmlFor="amount" className="block text-sm font-medium text-black">{input1}</label>
                    <input type="radio" id="amount" name="amount" className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter amount" />
                </div>

                <div className="flex-1">
                    <label htmlFor="receiver" className="block text-sm font-medium text-black">{input2}</label>

                    <input type="radio" id="receiver" name="receiver" className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter receiver's details" />
                </div>
            </div>
        </div>
    );
}

export default SmallCard;

