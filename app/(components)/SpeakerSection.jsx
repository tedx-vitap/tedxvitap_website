import React from "react";
import SpeakerCard from "./SpeakerCard";
//Make a grid for flex in which there is a grid for spakers, and to the right of it there is a space for text
const defaultText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, facilis eum quod aspernatur corporis corrupti. Ea, soluta aliquid! Suscipit, placeat recusandae vero deserunt consequuntur magnam! Ex sed doloribus debitis corporis.;"
const SpeakerSection = () => {
  return (
    <div className="max-w-full flex justify-center">
      <div className="max-w-screen-lg flex flex-col items-center px-4 md:px-8 lg:justify-between lg:flex-row">
        <div className="">
        <h1 className="text-4xl font-bold text-center lg:text-left pb-4">Our Speakers</h1>
        <p className="text-white max-w-sm pt-14 hidden lg:block">{defaultText}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
