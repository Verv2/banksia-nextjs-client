import { Metadata } from "next";
import Team from "../component/page/Team/Team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the experts behind your perfect rental experience. Our dedicated team is here to guide you every step of the way.",
};

const page = () => {
  return (
    <div>
      <Team />
    </div>
  );
};

export default page;