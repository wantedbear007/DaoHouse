import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/WhiteLogo.png";
import twitter from "../../../assets/twitter.png";
import telegram from "../../../assets/telegram.png";
import linkedin from "../../../assets/linkedin.png";
import discord from "../../../assets/discord.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-[#05212C] py-12 text-center">
        <div className="w-full mb-8">
          <img src={logo} alt="DAO HOuse" className="w-32 mx-auto mb-10" />
          <div className="flex justify-center mb-4">
            <Link
              to="/"
              className="text-[#728288] font-inter font-normal text-base mr-6 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/social-feed"
              className="text-[#728288]  font-inter font-normal text-base mr-6 hover:underline"
            >
              Social Feed
            </Link>
            <Link
              to="/daos"
              className="text-[#728288]  font-inter font-normal text-base mr-6 hover:underline"
            >
              DAOs
            </Link>
            <Link
              to="/proposals"
              className="text-[#728288]  font-inter font-normal text-base hover:underline"
            >
              Proposals
            </Link>
          </div>
          <div className="flex justify-center mb-4">
            <img src={twitter} alt="Twitter" className="w-8 h-8 mr-4" />
            <img src={telegram} alt="Telegram" className="w-8 h-8 mr-4" />
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-4" />
            <img src={discord} alt="Discord" className="w-8 h-8" />
          </div>
        </div>
      </footer>
      <div className="bg-[#0E3746] py-4 flex justify-center items-center">
        <p className="text-white font-inter font-normal  text-[10px] md:text-base ">
          All rights reserved. &copy; {new Date().getFullYear()} Your DAO House
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
