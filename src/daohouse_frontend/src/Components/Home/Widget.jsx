import React from 'react';

export default function Widget() {
    const statistics = [
        { label: 'Members', value: '150K+' },
        { label: 'Proposals', value: '1000K+' },
        { label: 'DAOs', value: '800+' },
        { label: 'Posts', value: '1200K+' }
    ];

    return (
        <div className="bg-white p-5 rounded-lg shadow-md w-fit md:mx-0 mx-6">
            <div className="flex justify-between items-center flex-wrap">
                {statistics.map((statistic, index) => (
                    <div className="text-center mx-6" key={index}>
                        <div className="text-[#0E3746] font-semibold text-[20px] md:text-[40px]">{statistic.value}</div>
                        <div className="text-[#0E3746] text-[12px] md:text-[16px] font-medium">{statistic.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
