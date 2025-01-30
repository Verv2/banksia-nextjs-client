"use client";

import Image from "next/image";
import logo from "../../../../../assets/logos/logo-bg.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigationLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Terms & Condition",
    link: "/terms-and-condition",
  },
];

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/"; // Check if the current route is home

  useEffect(() => {
    if (!isHomePage) return; // Only run scroll effect on the home page

    const handleScroll = () => {
      const heroHeight = 842; // Same as Hero section height
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav
      className={cn(
        "flex justify-between items-center px-14 py-3 sticky top-0 z-50 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100",
        isHomePage && !isScrolled ? "text-white" : "text-black"
      )}
    >
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" width={60} />
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
    </nav>
  );
};

export default Navbar;
