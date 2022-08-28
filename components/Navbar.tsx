import Image from "next/image";
import React from "react";
import logo from "images/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav
        className={`w-screen bg-mainColor z-40  top-0 fixed py-1  transition  border-b border-mainBorder`}
      >
        <div className="container flex  justify-between ">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src={logo} alt="logo" width="50" height="50" />
              <h2 className="text-2xl capitalize font-medium">shadow</h2>
            </div>
          </Link>
        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
