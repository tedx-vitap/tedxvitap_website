// app/page.tsx
import { Button } from "@nextui-org/button";
import HeroComp from "./(components)/HeroComp";
import SpeakerSection from "./(components)/SpeakerSection";
import GalleryComp from "./(components)/GalleryComp";
import Image from "next/image";
export default function Page() {
  return (
    <div>
      <section className="fixed w-screen -z-20 flex justify-center">
        <img
          src="https://i.postimg.cc/tTwdXD7X/Frame-2-2.png"
          alt="bg-red-image"
          className="w-screen"
        />
      </section>
      <HeroComp />
      <SpeakerSection />
      <GalleryComp />
    </div>
  );
}
