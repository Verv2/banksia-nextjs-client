import { Input } from "@/components/ui/input";
import heroImage from "../../../../../assets/images/banner.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
    // width: "1216px",
    // height: "528px",
  };
  return (
    <section
      style={backgroundImageStyle}
      className="w-full h-[842px] m-auto py-[200px] absolute top-0"
    >
      <div className="w-[700px] m-auto">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl text-white text-center font-semibold">
            Discover a place you&apos;ll
          </h2>
          <h2 className="text-5xl text-center text-white font-semibold">
            love to live
          </h2>
          <p className="text-lg text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            saepe cupiditate quas fugit, voluptate accusamus temporibus
            perspiciatis dolorem voluptatibus blanditiis ipsum eaque laudantium.
            Minus, accusamus officiis neque fugit perspiciatis magnam?
          </p>
        </div>
        <div className="w-[600px] mx-auto relative mt-5">
          <Input
            type="text"
            placeholder="Enter your location"
            className="pr-28"
          />
          <div className="w-24 absolute top-0 right-0">
            <Button className="w-full bg-colorPrimary font-semibold">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
