// app/page.tsx
import { Button } from "@nextui-org/button";
import HeroComp from "./(components)/HeroComp";
import SpeakerSection from "./(components)/SpeakerSection";
import GalleryComp from "./(components)/GalleryComp";
import Image from "next/image";
import Head from "next/head";

export default function Page() {
  return (
    <div>

    <Head>
        <title lang="en">TEDxVITAP</title>
        <link rel="icon" href="https://i.postimg.cc/HkV8szgY/fav.webp" />
        <meta name="TEDxVITAP" content="This is the website for TEDxVITAP"></meta>
      </Head>
      <section className="fixed w-screen -z-20 flex justify-center">
        <img
          src="https://i.postimg.cc/DyCbTDRp/tedx-bg-min.webp"
          alt="bg-red-image"
          className="w-screen blur-lg"
          id = "tedx-bg"
        />
      </section>
      <HeroComp />
      <SpeakerSection />
      <GalleryComp />
    </div>
  );
}
