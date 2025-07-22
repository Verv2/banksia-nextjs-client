import React, { Suspense } from "react";
import Home from "./component/page/Home/Home";
import { Metadata } from "next";
import { Loading } from "./component/UI/Loading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore rental properties across London with Banksia. Find verified listings, connect with landlords, and rent your ideal home or commercial space effortlessly.",
};

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
};

export default page;
