"use client";

import Image from "next/image";
import logo from "../../../../../assets/logos/logo-banksia.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationLink } from "@/app/constant/navigation.link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
// navigationLink
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        "shadow-sm transition-all duration-300"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Banksia Logo"
                width={180}
                height={60}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navigationLink.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={cn(
                        "text-sm font-medium transition-colors duration-200 relative",
                        isActive
                          ? "text-[#F16232] font-semibold"
                          : "text-gray-700 hover:text-[#F16232]",
                        "hover:underline underline-offset-4",
                        "focus:outline-none focus:ring-2 focus:ring-[#F16232] focus:ring-offset-2 rounded-sm px-2 py-1"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-[#F16232] hover:bg-[#F16232]/90 text-white transition-colors duration-200"
              asChild
            >
              <Link href="/properties?page=1&limit=20">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-[#F16232]/10 hover:text-[#F16232]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center">
                    <Image
                      src={logo}
                      alt="Banksia Logo"
                      width={180}
                      height={80}
                      className="h-[80px] w-auto"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigationLink.map((item, index) => {
                      const isActive = pathname === item.link;
                      return (
                        <Link
                          key={index}
                          href={item.link}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors duration-200 relative",
                            isActive
                              ? "text-[#F16232] font-semibold bg-[#F16232]/10 border-l-4 border-[#F16232]"
                              : "text-gray-700 hover:text-[#F16232]",
                            "py-2 px-3 rounded-md hover:bg-[#F16232]/10",
                            "focus:outline-none focus:ring-2 focus:ring-[#F16232] focus:ring-offset-2"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button
                      className="w-full bg-[#F16232] hover:bg-[#F16232]/90 text-white transition-colors duration-200"
                      asChild
                    >
                      <Link href="/properties?page=1&limit=20">
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
