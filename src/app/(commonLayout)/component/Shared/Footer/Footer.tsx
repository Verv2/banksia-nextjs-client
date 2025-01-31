import logo from "../../../../../assets/logos/banksia.png";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-[1600px] m-auto">
      <h2>This is the footer component</h2>
      <div>
        <Image src={logo} alt="logo" width={120} />
      </div>
    </footer>
  );
};

export default Footer;
