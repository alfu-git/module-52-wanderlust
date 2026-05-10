import { Separator } from "@heroui/react";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] text-white flex justify-between flex-col items-center gap-5 h-auto">
      <div className="p-2 xl:p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl font-lora">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="pt-3 pb-10 text-[#EDFCFF] text-[20px] max-w-170">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className=" bg-white/30 flex flex-wrap gap-y-5 justify-between gap-5 w-full items-center">
        <div className="px-3 py-3">
          <h3 className="text-sm">Location</h3>

          <p className="text-xs">Address, City or Zip</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime/3 Days</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">Budget</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div>
          <h3 className="text-sm">People</h3>
          <p className="text-xs">5-10</p>
        </div>

        <div className="bg-cyan-500 py-4 px-4">
          <h3>Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
