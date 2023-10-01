import React from "react";
import { feedback } from "../data/data";
function HowItWorks() {
  return (
    <div className="mt-48">
      <h4 className="font-sora text-secondary text-[40px] text-center font-bold">
        How it works
      </h4>
      <div className="flex flex-wrap justify-between w-full  z-[1] relative">
        {feedback.map((item) => {
          return (
            <div className=" px-10 py-12 flex justify-center items-center flex-col max-w-[370px] my-5">
              <div className="p-2 flex justify-center items-center rounded-full w-[68px] h-[68px] bg-primary">
                <h6 className="text-lg">1</h6>
              </div>
              <h5 className=" text-primary text-[28px] font-semibold">
                Record Screen
              </h5>
              <p className="font-poppins font-normal text-[18px] text-center leading-[32px] text-[#616163] my-4">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
