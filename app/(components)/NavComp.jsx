import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { tedxvitapLogo } from "./tedxvitapLogo";

import navLogo from "../../public/navLogo.png";
import Image from "next/image";

export default function App() {
  return (
    <Navbar maxWidth="lg" position="sticky" className="fixed top-0">
      <NavbarBrand>
        <a href="tedxvitap.com" className="max-w-52">
          <Image src={navLogo} alt="TEDxVITAP"/>
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            The Team
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="#" variant="flat">
            Purchase Tickets
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
