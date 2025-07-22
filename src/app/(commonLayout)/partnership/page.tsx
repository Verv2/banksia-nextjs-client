import { Metadata } from "next";
import Partnership from "../component/page/Partnership/Partnership";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "Partner with Banksia to transform the rental experience in London. Collaborate with us to reach more tenants, list verified properties, and grow your real estate business with confidence.",
};

const PartnershipPage = () => {
  return (
    <>
      <Partnership />
    </>
  );
};

export default PartnershipPage;
