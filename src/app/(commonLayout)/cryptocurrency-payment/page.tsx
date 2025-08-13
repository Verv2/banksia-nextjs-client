import { Metadata } from "next";
import Cryptocurrency from "../component/page/Cryptocurrency/Cryptocurrency";

export const metadata: Metadata = {
  title: "Pay Rent with Bitcoin & Ethereum | Banksia",
  description:
    "Settle your Banksia London rent instantly with Bitcoin (BTC) or Ethereum (ETH). No bank delays, no card fees, just enter your property address, review the live crypto price and pay in seconds.",
  keywords: [
    "pay rent with Bitcoin",
    "pay rent with Ethereum",
    "crypto rent payment UK",
    "Banksia London cryptocurrency",
    "Bitcoin rent London",
    "Ethereum rent London",
  ],
  openGraph: {
    title: "Pay Rent with Bitcoin & Ethereum | Banksia",
    description:
      "Settle your Banksia London rent instantly with Bitcoin (BTC) or Ethereum (ETH). No bank delays, no card fees, just enter your property address, review the live crypto price and pay in seconds.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Rent with Bitcoin & Ethereum | Banksia",
    description:
      "Settle your Banksia London rent instantly with Bitcoin (BTC) or Ethereum (ETH). No bank delays, no card fees, just enter your property address, review the live crypto price and pay in seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const CryptocurrencyPage = () => {
  return (
    <>
      <Cryptocurrency />
    </>
  );
};

export default CryptocurrencyPage;
