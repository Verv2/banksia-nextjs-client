import React, { ReactNode } from "react";
import Navbar from "./component/Shared/Navbar/Navbar";
import Footer from "./component/Shared/Footer/Footer";

const CommonLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full m-auto">
      <Navbar />
      {/* <ResponsiveNavbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
