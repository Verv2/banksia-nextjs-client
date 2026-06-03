import { Metadata } from "next";
import { ReactNode } from "react";

// The login page is a private, authenticated entry point and should not be
// indexed by search engines. Metadata lives in this layout because the page
// itself is a client component and cannot export `metadata`.
export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your Banksia account.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

const LoginLayout = ({ children }: { children: ReactNode }) => children;

export default LoginLayout;