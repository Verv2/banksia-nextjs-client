import aboutHome from "../../../../../assets/images/about-home.png";
import aboutPeople from "../../../../../assets/images/about-people.png";

import Image from "next/image";

const About = () => {
  return (
    <section className="lg:w-[1180px] m-auto">
      <div className="lg:flex lg:justify-between mt-5">
        <div className="flex flex-col justify-center items-center lg:-mt-10">
          <h2 className="text-4xl font-semibold lg:hidden">ABOUT US</h2>
          <Image
            src={aboutHome}
            alt="about home"
            width={370}
            className="rounded-md"
          />
        </div>
        <div className="hidden lg:block">
          <h2 className="text-7xl font-semibold text-right mb-6">ABOUT US</h2>
          <Image
            src={aboutPeople}
            alt="about people"
            width={770}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="lg:w-[70%] px-2 m-auto leading-10 text-lg mt-20">
        <p>
          Welcome to Banksia, where London living meets quirky charm and modern
          convenience! We’re not just another serviced accommodation
          provider—we’re your home-away-from-home with a twist. Picture this:
          expertly designed rooms that feel like they’ve been plucked from a
          design magazine, fully furnished with everything you need (and a few
          surprises you didn’t know you wanted). Fancy a hassle-free stay? Our
          smart locks make check-ins and check-outs as smooth as your morning
          coffee, while our housekeeping and linen services ensure your space
          stays fresher than a daisy. Oh, and did we mention the entertainment?
          Whether you’re here for work, play, or a little bit of both, Banksia
          has you covered. From business travelers to wanderlust-filled
          tourists, we’re here to make your London stay stylish, secure, and
          just a little bit fabulous. Let’s redefine modern stays together—one
          quirky detail at a time!
        </p>
      </div>
    </section>
  );
};

export default About;
