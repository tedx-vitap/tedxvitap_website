import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function App({title, name, disc, image, link}  ) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      href = {link}
    >
      <Image
        alt= {title}
        className="object-cover"
        height={200}
        src= {image}
        width={200}
      />
      
    </Card>
  );
}
