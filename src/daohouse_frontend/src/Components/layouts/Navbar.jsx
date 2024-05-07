import React, { useState } from 'react';
import i18n from '../../i18n';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", () => setLocale(i18n.language));

  const handleLangChange = (event) => {
    i18n.changeLanguage(event.target.value);
    window.location.reload();
  };
  
  const location = useLocation();

  const menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Social Feed', route: '/social-feed' },
    { label: 'DAOs', route: '/dao' },
    { label: 'Proposals', route: '/proposals' },
  ];

  return (
    <nav>
      <div className="flex flex-col h-20 justify-center bg-[#DADEE4] border-b shadow-lg shadow-slate-900/20 shadow-b-2 sticky w-full z-50">
        <div className="px-4 flex justify-around items-center w-full">
          <div className="md:flex items-center space-x-8 hidden ">
            {menuItems.map((item, index) => (
              <div key={index} className="text-lg font-normal font-inter leading-[19.36px] text-[#829095]">
                <Link to={item.route} className={`hover:text-[#05212C] hover:font-medium cursor-pointer text-[16px] text-[#829095] ${location.pathname === item.route ? 'font-semibold border-b-2 border-[#05212C] text-black' : 'border-transparent border-b-0.5'}`}>{item.label}</Link>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <p className='text-black font-semibold'>LOGO</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-8 py-2 rounded-[27.5px] bg-[#0E3746] text-white whitespace-nowrap">Sign In</button>
            <button className="px-8 py-2 rounded-[27.5px] bg-[#FFFFFF]">Connect</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
