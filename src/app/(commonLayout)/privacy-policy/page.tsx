import { Metadata } from "next";
import PrivacyPolicy from "../component/page/PrivacyPolicy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Banksia's Privacy Policy to understand how we collect, use and protect your personal data when you use our London rental platform.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const page = () => {
  return (
    <section className="flex items-center justify-center">
      <PrivacyPolicy />
    </section>
  );
};

export default page;
