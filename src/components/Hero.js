import React from "react";
import { Button } from "./button/button";

function Hero() {
  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-1 ">
        <div className="">
          <h1 className="text-[50px] text-secondary font-bold font-sora w-[400px]  leading-[56px] ">
            Show Them Don’t Just Tell
          </h1>
          <p className="text-[rgba(0, 0, 0, 0.75)] font-inter text-xl w-[400px]  ">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <Button variant="primary" imgAlt="google">
            Install HelpMeOut
          </Button>
        </div>
      </div>
      <div className="flex flex-1">
        {" "}
        <div>
          <ul class="grid grid-cols-2 grid-rows-4 gap-8 grid-flow-row">
            <li class="row-span-2 bg-red-500 ">
              <div class="w-[300px] h-[200px]"></div>
            </li>
            <li class=" bg-red-500 ">
              <div class="w-[300px]  h-[200px]"></div>
            </li>
            <li class=" bg-red-500 ">
              <div class="w-[300px]  h-[200px]"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Hero;
