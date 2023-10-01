import React from "react";
import { features } from "../data/data";
import video from "../assets/video.png";

function Header() {
  return (
    <div>
      <div className="">
          <h4 className="font-sora text-secondary text-[40px] text-center font-bold">Features</h4>
          <h5 className="font-workSans text-[#616163] text-center text-xl mb-16">Key Highlights of Our Extension</h5>
        <div className="flex md:flex-row flex-col">
          
          <div className="flex flex-col justify-center items-start flex-1">
            {features.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex flex-row justify-start items-center mb-3 feature-card p-6 rounded-[20px]"
                >
                  <div className="p-2 flex justify-center items-center rounded-full bg-primary">
                    <img
                      className="w-[32px] h-[32px] object-contain"
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col leading-[23px] ml-3 ">
                    <h4 className=" font-inter font-semibold text-[18px] text-primary">
                      {" "}
                      {item.title}
                    </h4>
                    <p className="mt-1  font-workSans font-normal text-[16px] text-[#616163]">
                      {item.content}
                    </p>
                  </div>
                </li>
              );
            })}
          </div>
          <div className="flex flex-col flex-1 justify-center items-start ">
            <img src={video} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
