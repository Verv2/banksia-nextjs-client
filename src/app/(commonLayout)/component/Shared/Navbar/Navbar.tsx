"use client";

import Image from "next/image";
// import logo from "../../../../../assets/logos/logo.png";
import logo from "../../../../../assets/logos/logo-banksia.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import { navigationLink } from "@/app/constant/navigation.link";

const Navbar = () => {
  // const pathname = usePathname(); // Get current route
  // const [isScrolled, setIsScrolled] = useState(false);
  // const isHomePage = pathname === "/"; // Check if the current route is home

  // useEffect(() => {
  //   if (!isHomePage) return; // Only run scroll effect on the home page

  //   const handleScroll = () => {
  //     const heroHeight = 842; // Same as Hero section height
  //     setIsScrolled(window.scrollY > heroHeight);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isHomePage]);

  return (
    <nav className={cn("lg:px-14 py-3 sticky top-0 z-50 bg-white  text-black")}>
      <div className="lg:px-10 m-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={100} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-6">
            {navigationLink.map((item, index) => (
              <li key={index} className="font-semibold text-lg">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
