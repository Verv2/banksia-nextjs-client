import Image from "next/image";
import logo from "../../../../../assets/logos/logo.png";
import Link from "next/link";

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
  return (
    <nav className="bg-slate-300 flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" width={80} />
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
