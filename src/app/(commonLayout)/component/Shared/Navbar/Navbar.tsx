"use client";

import Image from "next/image";
import logo from "../../../../../assets/logos/logo-banksia.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationLink } from "@/app/constant/navigation.link";

const Navbar = () => {
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
            {/* <li>
              <Button onClick={handleLogin}>Login</Button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
