import React from "react";
import SpeakerCard from "./SpeakerCard";
//Make a grid for flex in which there is a grid for spakers, and to the right of it there is a space for text
const defaultText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, facilis eum quod aspernatur corporis corrupti. Ea, soluta aliquid! Suscipit, placeat recusandae vero deserunt consequuntur magnam! Ex sed doloribus debitis corporis.;";
const SpeakerSection = () => {
  return (
    <div className="max-w-full flex justify-center">
      <div className="max-w-screen-lg flex flex-col items-center px-4 md:px-8 lg:justify-between lg:flex-row">
        <div className="">
          <h1 className="text-4xl font-bold text-center lg:text-left pb-4">
            Our Speakers
          </h1>
          <p className="text-white max-w-sm pt-15 hidden lg:block pr-10">
            Meet our diverse speakers, from an author to a CEO, each sharing
            insights on embracing failure and moving forward courageously.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <SpeakerCard
            title="Speaker"
            disc="Author and Publisher"
            name="Sanjay Lunia Jain"
            link="https://www.instagram.com/authorsanjay/"
            image={"https://i.postimg.cc/CxvmZxTv/Sanjay.png"}
          />
          <SpeakerCard
            title="Speaker"
            disc="Author and Publisher"
            name="Dr. Madhan K"
            link="https://www.linkedin.com/in/drmadhaniimcal/?originalSubdomain=in"
            image={"https://i.postimg.cc/BvfK65LJ/Dr-Madhan-K.png"}
          />
          <SpeakerCard
            title="Speaker"
            disc="Author and Publisher"
            name="Sagarikka S"
            link="https://www.instagram.com/sagarikka/?hl=en"
            image={"https://i.postimg.cc/cHst7sBj/Sagarikka.jpg"}
          />
          <SpeakerCard
            title="Speaker"
            disc="Author and Publisher"
            name="Narendra Nath"
            link="https://www.instagram.com/narencloseup/"
            image={"https://i.postimg.cc/L55q7N73/Narendra.png"}
          />
          <SpeakerCard
            title="Speaker"
            disc="Author and Publisher"
            name="Aaryan Banthia"
            link="https://www.instagram.com/aaryanofficialmusic/"
            image={"https://i.postimg.cc/ZK03D5zz/aaryan.png"}
          />
          <SpeakerCard
            title="Speaker"
            disc="Author and Publisher"
            name="Chandan Perla"
            link="https://www.instagram.com/authorsanjay/"
            image={"https://i.postimg.cc/0QcMcLtN/chandan.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
