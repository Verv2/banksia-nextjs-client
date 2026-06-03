import { Metadata } from "next";
import Team from "../component/page/Team/Team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the experts behind your perfect rental experience. Our dedicated team is here to guide you every step of the way.",
  keywords: [
    "Banksia team",
    "Banksia London team",
    "London rental experts",
    "property management team",
  ],
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Team | Banksia London",
    description:
      "Meet the experts behind your perfect rental experience. Our dedicated team is here to guide you every step of the way.",
    url: "/team",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Team />
    </div>
  );
};

export default page;