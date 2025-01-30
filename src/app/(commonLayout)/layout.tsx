import { Metadata } from "next";
import React, { ReactNode } from "react";
import Navbar from "./component/Shared/Navbar/Navbar";
import Footer from "./component/Shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to InnovativeHR home",
};

const CommonLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full m-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
