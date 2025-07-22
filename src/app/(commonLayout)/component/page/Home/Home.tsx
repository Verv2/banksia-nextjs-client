/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
// import Hero from "./Hero";
import HomeProperty from "./HomeProperty";
// import Cities from "./Cities";
import WhyUs from "./WhyUs";
import { useRouter, useSearchParams } from "next/navigation";
import { getAccessToken } from "@/actions/auth.action";
import PropertiesInLondon from "./PropertiesInLondon";
import ReadyToStart from "./ReadyToStart";
import Hero from "./Hero";
import { Loading } from "../../UI/Loading";

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
        await getAccessToken({ code });

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

  if (loading) return <Loading />;

  return (
    <>
      <Hero />
      <HomeProperty />
      <PropertiesInLondon />
      <WhyUs />
      <ReadyToStart />
    </>
  );
};

export default Home;
