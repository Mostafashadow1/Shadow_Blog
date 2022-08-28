import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  // const [isSmallNav, setIsSmallNav] = useState(false);
  // const { asPath } = useRouter();
  // const categories = [
  //   { id: "1", name: "react", href: "/react" },
  //   { id: "2", name: "java script ", href: "/javascript" },
  //   { id: "3", name: "react native", href: "/reactnative" },
  // ];

  // // navItems big screen
  // const navItemsBig = () => {
  //   return (
  //     <>
  //       <ul className="flex p-3 gap-4 capitalize">
  //         <Link href="/">
  //           <li
  //             className={`text-base ${
  //               asPath === "/"
  //                 ? "cursor-default text-mainColor"
  //                 : "text-secColor cursor-pointer"
  //             }`}
  //           >
  //             home
  //           </li>
  //         </Link>
  //         {categories.map((category, idx) => (
  //           <Link key={idx} href={`${category.href}`}>
  //             <li
  //               className={`text-base ${
  //                 asPath === category.href
  //                   ? "cursor-default text-mainColor"
  //                   : "cursor-pointer text-secColor"
  //               }`}
  //             >
  //               {category.name}
  //             </li>
  //           </Link>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };

  // // smalll navbar
  // const smallNavBar = () => {
  //   return (
  //     <div className="bg-mainColor  mainBorder fixed top-0 w-screen z-50 ">
  //       <div className="flex border-b  justify-between ">
  //         <Link href="/">
  //           <div className="flex items-center cursor-pointer">
  //             <Image src={logo} alt="logo" width="50" height="50" />
  //             <h2 className="text-2xl capitalize font-medium">shadow</h2>
  //           </div>
  //         </Link>
  //       </div>
  //       <ul className="gap-4 p-3  capitalize ">
  //         <Link href="/" onClick={() => setIsSmallNav(false)}>
  //           <li
  //             className={`text-base ${
  //               asPath === "/"
  //                 ? "cursor-default text-mainColor"
  //                 : "cursor-pointer text-secColor"
  //             }`}
  //           >
  //             home
  //           </li>
  //         </Link>
  //         {categories.map((category, idx) => (
  //           <Link
  //             key={idx}
  //             href={`${category.href}`}
  //             onClick={() => setIsSmallNav(false)}
  //           >
  //             <li
  //               className={`text-base ${
  //                 asPath === category.href
  //                   ? "cursor-default text-mainColor"
  //                   : "cursor-pointer text-secColor"
  //               }`}
  //             >
  //               {category.name}
  //             </li>
  //           </Link>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };

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

          {/* <div className="hidden md:block">{navItemsBig()}</div> */}
          {/* <div className="flex md:hidden items-center mr-2">
            <button onClick={() => setIsSmallNav(true)} className="mainButton">
              <AiOutlineMenuFold className="icon" />
            </button>
          </div> */}
        </div>
      </nav>
      {/* {isSmallNav && smallNavBar()} */}
    </>
  );
};

export default Navbar;
