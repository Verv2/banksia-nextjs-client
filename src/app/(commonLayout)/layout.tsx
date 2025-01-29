import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to InnovativeHR home",
};

const CommonLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full bg-[#f16232] max-[]">
      {/* <Navbar /> */}
      {children}
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default CommonLayout;
