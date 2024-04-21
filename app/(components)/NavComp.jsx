import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import  Ticket  from "./svg/ticket_svg";

import navLogo from "../../public/navLogo.png";
import Image from "next/image";

export default function App() {
  return (
    <Navbar maxWidth="lg" position="sticky" className="fixed top-0">
      <NavbarBrand>
        <a href="#" className="max-w-52">
          <Image src={navLogo} alt="TEDxVITAP"/>
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            {/* The Team */}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {/* About Us */}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {/* Contact */}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Link href="https://vtop1.vitap.ac.in/TEDX/Conferenceinitial" target='_blank' color="foreground">
                        <div className='flex items-center px-2 py-1 border-2 border-red-900 bg-red-600 hover:bg-red-700 text-red-0 hover:text-red-50 rounded-lg transition duration-150 drop-shadow-[0_2px_2px_rgba(255,46,67,0.5)]'>
                            <Ticket/>
                            <span className='pl-1'>Get Tickets</span>
                        </div>
                    </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );

  
}
