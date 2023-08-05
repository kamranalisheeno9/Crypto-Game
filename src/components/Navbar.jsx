import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const primaryColor = "[#080B10]";
  const tertiaryColor = "[#d5a777]";

  return (
    <div
      className={` bg-${primaryColor} w-full h-16 flex flex-row  justify-between  items-center shadow-sm shadow-gray-700`}
    >
      <div className={`  px-0 md:px-5 lg:px-10  flex items-center  `}>
        <img width="55px" className=" m-2 " src={Logo} alt="" />
      </div>
      <div
        className={` uppercase text-${tertiaryColor} font-semibold  bg-gradient-to-tr from-[#235462] to-[#594755] rounded-full mx-3 py-2 px-5 cursor-pointer hover:text-white transition-all duration-300   `}
      >
        Connect
      </div>
    </div>
  );
};

export default Navbar;
