import { Metadata } from "next";
import About from "../component/page/About/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Banksia – a trusted rental platform across London. We simplify the property rental process with verified listings, secure transactions, and reliable support.",
};

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
