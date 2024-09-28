import React from "react";
import { CiLocationOn, CiMail, CiTwitter } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import Logo from "../../assets/Logo.png";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black pt-5">
      {/* MainPart */}
      <div className="flex md:flex-row flex-col justify-center p-2 mb-7 md:gap-3 gap-5 ">
        <div className=" border border-1 border-white rounded-lg text-center px-16 p-2 order-2 md:order-1">
          <p className="text-[#0796EF] mt-2 mb-3 font-bold text-lg font-sans">
            CONNECT WITH US
          </p>
          <p className="text-[#857878] flex items-center gap-2 justify-center">
            <GiRotaryPhone color="#C5A059" />
            +1 470-788-8255
          </p>
          <p className="text-[#857878] flex items-center gap-2 justify-center mb-2">
            <CiMail color="#C5A059" />
            email@42barandgrill.com
          </p>
        </div>
        <div className="border border-1 border-white rounded-lg text-center px-16 order-1 md:order-2">
          <img
            src={Logo}
            alt=""
            className="w-18 h-14 relative -top-6 left-32 md:left-16"
          />
          <p className="text-[#857878] text-3xl font-bold font-mono">
            <span className="text-[#0796EF]">DEEP</span>
            <span className="text-white"> NET </span>SOFT
          </p>
          <div className=" justify-center gap-3 flex mt-2 mb-3">
            <FiFacebook color="#808080" size={15} /> <CiTwitter color="#808080" size={15}/>
            <FiYoutube color="#808080" size={15} /> <FaInstagram color="#808080" size={15} />
          </div>
        </div>
        <div className=" border border-1 border-white rounded-lg text-center px-16 p-2 md:w-80 h-36 order-3">
          <p className="text-[#0796EF] mt-2 mb-3 font-bold text-lg font-sans">
            FIND US
          </p>
          <p className="text-wrap text-white flex md:gap-0 gap-4 justify-center"> 
            <CiLocationOn color="#C5A059" size={32}/>
            327 Memorial Dr SE, Atlanta, 
            GA 30312, USA
          </p>
        </div>
      </div>
      {/* copy right  */}
      <div className="bg-[#171616] w-full md:h-7 text-center md:flex text-[#857878] md:flex-row justify-between md:px-32 items-center">
        <div>
          <p className="md:text-sm text-xs">
            © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
          </p>
        </div>
        <div className="flex justify-center md:gap-3">
          <p className="md:text-sm text-xs">Terms & Conditions</p>
          <p className="md:text-sm text-xs">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
