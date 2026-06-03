import { Metadata } from "next";
import Investors from "../component/page/Investors/Investors";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Invest with Banksia and tap into London's high-demand rental market. Discover secure, transparent property investment opportunities backed by verified listings and reliable returns.",
  keywords: [
    "Banksia investors",
    "London property investment",
    "rental property investment UK",
    "buy to let London",
    "real estate investment London",
  ],
  alternates: { canonical: "/investors" },
  openGraph: {
    title: "Investors | Banksia London",
    description:
      "Invest with Banksia and tap into London's high-demand rental market. Discover secure, transparent property investment opportunities backed by verified listings and reliable returns.",
    url: "/investors",
    type: "website",
  },
};

const InvestorsPage = () => {
  return (
    <>
      <Investors />
    </>
  );
};

export default InvestorsPage;
