import React from "react";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

export default function App({ title, name, disc, image, link }) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Image of Speaker"
        className="object-cover"
        height={200}
        src={image}
        width={200}
      />
      <CardFooter className="justify-between bg-black/50 border-white/10 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          
        >
          <a href={link}>Profile</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
