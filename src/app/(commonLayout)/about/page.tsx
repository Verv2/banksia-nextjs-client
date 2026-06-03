import { Metadata } from "next";
import About from "../component/page/About/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Banksia – a trusted rental platform across London. We simplify the property rental process with verified listings, secure transactions, and reliable support.",
  keywords: [
    "about Banksia",
    "Banksia London",
    "trusted rental platform London",
    "verified property listings",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Banksia London",
    description:
      "Learn more about Banksia – a trusted rental platform across London. We simplify the property rental process with verified listings, secure transactions, and reliable support.",
    url: "/about",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
