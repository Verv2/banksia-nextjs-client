import React, { Suspense } from "react";
import Home from "./component/page/Home/Home";

const page = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Home />
      </Suspense>
    </>
  );
};

export default page;
