import React from "react";
import {Card, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";

export default function App({title, name, disc, image, link}  ) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="hover:opacity-40"
      href = {link}
    >

<CardHeader>
        <p className="text-sm text-red-500 absolute z-10 top-1">{name}</p>
      </CardHeader>
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
