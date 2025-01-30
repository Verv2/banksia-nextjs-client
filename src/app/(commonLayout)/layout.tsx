import { Metadata } from "next";
import React, { ReactNode } from "react";
import Navbar from "./component/Shared/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to InnovativeHR home",
};

const CommonLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full max-w-[1800px] m-auto">
      <Navbar />
      {children}
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default CommonLayout;
