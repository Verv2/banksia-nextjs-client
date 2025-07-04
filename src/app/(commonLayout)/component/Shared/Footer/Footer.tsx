import { Button } from "@/components/ui/button";
import logo from "../../../../../assets/logos/banksia.png";
import prsLogo from "../../../../../assets/logos/prsLogo.png";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-20 text-white text-center lg:text-left">
      <div className="lg:px-10 m-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* logo with address */}
          <div className="mb-3 flex items-center justify-center flex-col lg:block">
            <Image src={logo} alt="logo" width={120} />
            <p>team@banksialondon.com</p>
          </div>

          {/* main part */}
          <div className="flex flex-col items-center justify-center px-1 mb-5">
            <p className="mb-5 lg:text-center">
              Thank you for considering Banksia. We look <br /> forward to
              hearing from you and assisting you on your journey.
            </p>
            <Button className="bg-colorPrimary hover:bg-colorPrimary/50">
              Get in touch
            </Button>
          </div>

          <div>
            {/* links */}
            <div>
              <ul className="flex flex-col gap-2">
                <li className="hover:text-colorPrimary transition-colors">
                  <Link href="/about">About us</Link>
                </li>
                <li className="hover:text-colorPrimary transition-colors">
                  <Link href="/investors">Investors</Link>
                </li>
                <li className="hover:text-colorPrimary transition-colors">
                  <Link href="/partnership">Partnership</Link>
                </li>
                <li className="hover:text-colorPrimary transition-colors">
                  <Link href="/terms-and-condition">Terms & Conditions</Link>
                </li>
                <li className="hover:text-colorPrimary transition-colors">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            {/* social media */}
            <div className="flex items-center gap-5 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
            <div className="mt-3">
              <Image src={prsLogo} alt="prs-logo" width={120} />
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      <div>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by Banksia
          Limited (16025193)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
