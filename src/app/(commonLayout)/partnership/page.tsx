import { Metadata } from "next";
import Partnership from "../component/page/Partnership/Partnership";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "Partner with Banksia to transform the rental experience in London. Collaborate with us to reach more tenants, list verified properties, and grow your real estate business with confidence.",
  keywords: [
    "Banksia partnership",
    "landlord partnership London",
    "list property London",
    "estate agent partnership UK",
  ],
  alternates: { canonical: "/partnership" },
  openGraph: {
    title: "Partnership | Banksia London",
    description:
      "Partner with Banksia to transform the rental experience in London. Collaborate with us to reach more tenants, list verified properties, and grow your real estate business with confidence.",
    url: "/partnership",
    type: "website",
  },
};

const PartnershipPage = () => {
  return (
    <>
      <Partnership />

      {/* <h2 className="h-screen flex items-center justify-center">This page is under construction</h2> */}
    </>
  );
};

export default PartnershipPage;
