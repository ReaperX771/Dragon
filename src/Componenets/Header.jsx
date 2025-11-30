import React from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGoogleplay } from "react-icons/si";
import logo from "../assets/images/drag.jpg";

const Header = () => {
  const openSignApp = () => {
    const appLink = "signdynasty://open";
    const playstore = "https://play.google.com/store/apps/details?id=com.signdynasty.app";
    try {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = appLink;
      document.body.appendChild(iframe);
      setTimeout(() => {
        window.location.href = playstore;
      }, 1200);
    } catch {
      window.location.href = playstore;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-10">

        <div className="flex justify-center w-full lg:w-[45%]">
          <img
            src={logo}
            alt="dragon"
            className="w-44 h-44 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-full object-cover shadow-[0_0_50px_rgb(255,122,0)] border-4 border-orange-500/50"
          />
        </div>

        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start leading-none">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-4xl sm:text-5xl lg:text-6xl">
              <span className="text-5xl sm:text-6xl lg:text-7xl">🍊</span>
              <span>SIGN DRAGON</span>
            </div>

            <div className="text-white font-extrabold text-5xl sm:text-6xl lg:text-7xl -mt-1">
              Clan
            </div>

            <div className="text-orange-400 font-semibold text-sm sm:text-base lg:text-lg -mt-1">
              of the Orange Dynasty
            </div>
          </div>

          <p className="text-gray-300 mt-6 text-xs sm:text-sm lg:text-base leading-relaxed">
            Togetherness & Supportive Clan.<br />
            Join the movement and stake with us.
          </p>

          <p className="text-gray-300 mt-4 text-xs sm:text-sm lg:text-base leading-relaxed">
            for staking <span className="text-orange-500 font-semibold">SIGN</span> with commitment and officially joining<br />
            <span className="text-orange-500 font-semibold">SIGNDRAGONS</span> clan. your dedication, trust, love,<br />
            care and support our community.
          </p>

          <div className="mt-6 flex flex-col items-center lg:items-start">
            <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">Clan Leader</div>

            <img
              src="https://via.placeholder.com/150"
              alt="leader"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg mt-2 object-cover shadow-[0_0_25px_rgb(255,122,0)]"
            />

            <div className="bg-orange-500 text-white px-3 py-1 rounded-md text-[9px] sm:text-[10px] lg:text-xs mt-2 font-bold">
              sign teacher
            </div>

            <div className="text-gray-300 text-[9px] sm:text-[10px] lg:text-[11px] mt-1 leading-tight text-center lg:text-left">
              We dominates<br />on different social apps.
            </div>
          </div>

          <div className="flex gap-3 mt-6 p-3 border border-orange-500 rounded-xl justify-center lg:justify-start">
            <FaWhatsapp size={26} className="text-green-500 sm:size-[30px] lg:size-[38px]" />
            <FaTelegramPlane size={26} className="text-blue-400 sm:size-[30px] lg:size-[38px]" />
            <FaXTwitter size={26} className="text-white sm:size-[30px] lg:size-[38px]" /><div
              onClick={openSignApp}
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-orange-500 rounded flex items-center justify-center cursor-pointer"
            >
              <SiGoogleplay size={16} className="text-white sm:size-[18px] lg:size-[22px]" />
            </div>
          </div>

          <div className="text-white font-semibold text-base sm:text-lg lg:text-xl mt-8">
            Lets stake together!!!
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;