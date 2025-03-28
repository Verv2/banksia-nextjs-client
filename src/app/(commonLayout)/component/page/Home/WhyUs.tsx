import { HandCoins, School, ShieldCheck, Users } from "lucide-react";
import whyUs from "../../../../../assets/images/why-us.png";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="lg:px-[150px] m-auto mt-20 flex justify-center items-center gap-10  rounded-md px-5 py-3 lg:py-5">
      <div className="hidden lg:block rounded-lg">
        <Image src={whyUs} alt="why-choose-us" className="rounded-lg" />
      </div>
      <div className="w-full">
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
            Why Choose Us?
          </h2>
        </div>
        {/* condition */}
        <div className="">
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <School size={60} />
            <div>
              <h4 className="text-lg font-medium">
                Professionally Leased Homes
              </h4>
              <p>
                We’re corporate landlords, not middlemen. Enjoy our spaces with
                consistent quality and service.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <HandCoins size={60} />
            <div>
              <h4 className="text-lg font-medium">Flexible Terms & Pricing</h4>
              <p>
                Stay your way with short-term options, flexible contracts, and
                pricing that fits your lifestyle.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <Users size={60} />
            <div>
              <h4 className="text-lg font-medium">Rapid Bookings</h4>
              <p>
                From virtual viewings to instant bookings, we make the process
                fast, easy, and transparent.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] p-5">
            <ShieldCheck size={60} />
            <div>
              <h4 className="text-lg font-medium">Smart & Secure Stays</h4>
              <p>
                Many of our properties come with smart locks, smart TVs,
                messaging support, and peace of mind built-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
