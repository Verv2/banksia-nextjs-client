/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import HomeProperty from "./HomeProperty";
import Cities from "./Cities";
import WhyUs from "./WhyUs";
import { useRouter, useSearchParams } from "next/navigation";
import { getAccessToken } from "@/actions/auth.action";

const Home = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      setLoading(false);
      return;
    }

    const exchange = async () => {
      try {
        const result = await getAccessToken({ code });
        console.log("Token result:", result);
        router.push("/");
      } catch (err: any) {
        const message = err?.message || "Token exchange failed";
        alert(message);
      } finally {
        setLoading(false);
      }
    };

    exchange();
  }, [searchParams, router]);

  if (loading) return <p>Exchanging data...</p>;

  return (
    <>
      <Hero />
      <HomeProperty />
      <Cities />
      <WhyUs />
    </>
  );
};

export default Home;
