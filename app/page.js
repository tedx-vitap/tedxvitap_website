// app/page.tsx
import {Button} from '@nextui-org/button'; 
import HeroComp from './(components)/HeroComp';
import SpeakerSection from './(components)/SpeakerSection';
import GalleryComp from './(components)/GalleryComp';
export default function Page() {
  return (
    <div>
      <HeroComp/>
      <SpeakerSection />
      <GalleryComp/>
    </div>
  )
}