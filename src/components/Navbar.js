import React from "react";
import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <div>
      <div className="py-2 flex justify-between items-center h-[84px]">
        <div className=" flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <h4 className="font-bold text-base text-primary bg-[#FFFFFF] font-inter">
            HelpMeOut
          </h4>
        </div>
        <nav>
          <ul className="flex gap-7 font-workSans font-semibold text-base">
            <li>Features</li>
            <li>How It Works</li>
          </ul>
        </nav>
        <div>
          <button className="font-sora text-bas text-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
