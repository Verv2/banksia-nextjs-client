"use client";

import React from "react";
import Hero from "./Hero";
import HomeProperty from "./HomeProperty";
import Cities from "./Cities";
import WhyUs from "./WhyUs";
// import { useRouter, useSearchParams } from "next/navigation";
// import Reviews from "./Reviews";

const Home = () => {
  // const searchParams = useSearchParams();
  // const router = useRouter();

  // useEffect(() => {
  //   const code = searchParams.get("code");

  //   if (code) {
  //     const exchangeToken = async () => {
  //       await fetch("/api/auth/exchange-token", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ code }),
  //       });

  //       router.push("/");
  //     };

  //     exchangeToken();
  //   }
  // }, [searchParams, router]);
  return (
    <div>
      <Hero />
      <HomeProperty />
      <Cities />
      <WhyUs />
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;
