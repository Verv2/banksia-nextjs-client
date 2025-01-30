import { HandCoins, School, ShieldCheck, Users } from "lucide-react";
import whyUs from "../../../../../assets/images/why-us.png";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="lg:w-[1600px] m-auto mt-20 flex justify-between items-center gap-10 px-20 rounded-md py-5">
      <div>
        <Image src={whyUs} alt="why-choose-us" />
      </div>
      <div>
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
            Why Choose Us?
          </h2>
          <p className="lg:text-lg mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            quos{" "}
          </p>
        </div>
        {/* condition */}
        <div className="w-[70%]">
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <School size={60} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quam, placeat facilis odio necessitatibus
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <HandCoins size={60} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quam, placeat facilis odio necessitatibus
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <Users size={60} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quam, placeat facilis odio necessitatibus
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <ShieldCheck size={60} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quam, placeat facilis odio necessitatibus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
