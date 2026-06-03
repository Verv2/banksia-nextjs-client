import { Metadata } from "next";
import TermsAndConditions from "../component/page/TermsAndConditions/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms & Conditions governing the use of Banksia's London rental platform, including tenant, landlord and payment obligations.",
  alternates: { canonical: "/terms-and-condition" },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="flex items-center justify-center">
      <TermsAndConditions />
    </section>
  );
};

export default page;
