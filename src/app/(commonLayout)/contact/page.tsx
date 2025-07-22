import { Metadata } from "next";
import Contact from "../component/page/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Banksia for rental inquiries, partnership opportunities, or customer support. We're here to help you navigate the London rental market with ease.",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
