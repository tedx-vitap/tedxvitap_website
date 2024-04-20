import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

export default function TeamCard({ name, position, image}) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Image of Speaker"
        className="object-cover"
        height={200}
        src={image}
        width={200}
      />
      <CardFooter className="justify-start bg-black/50 border-white/10 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-col">
            <h3 className="font-semibold text-foreground/90">{name}</h3>
            <p className="text-small text-foreground/80">{position}</p>

        </div>
      </CardFooter>
    </Card>
  );
}
