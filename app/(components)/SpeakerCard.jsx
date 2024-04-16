import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://storage.googleapis.com/pfpai/styles/3265a266-3c54-4460-9e07-3bfc95cadca2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20240413%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240413T020128Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=674eea4583f6d494f501bd7751e3101307782d17d1e0c8e240ef61bebd634bc0eed128f4e6232005e08dfb8bdcd808eeb6b991d230c3ee937e58ade1ecb708ae5dba2f33d403696468da4c2791bfca597d7f50b4703dc0bcc329566513258330ee1fdc78b7f5304a6e57e2cd7ddfd9de8963a6287aed25c63e060e562f24be8488dfc2f6cafefdc18119be34aa15acbf5188db5c6b1f86f0ae7eae1f49331d5430c0500f95a6e37383581ae4deff892c8623e5b5edc700595b0bf59197da3f3bb8246fb5449ef8517ea06fec1cf84e847d7c5a4990ac0ab92665814a408749d39adff8991f8265fc3952241da5b8740278807983f70bc8690a5d1f782cc84aa4"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Name Here</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
