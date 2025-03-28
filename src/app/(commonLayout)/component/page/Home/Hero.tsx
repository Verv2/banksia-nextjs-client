import { Input } from "@/components/ui/input";
import heroImage from "../../../../../assets/images/banner.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})`,
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
      className="w-full lg:h-[calc(100vh-84px)] m-auto  flex items-center justify-center px-2 py-4 lg:py-0 lg:px-0"
    >
      <div className=" m-auto">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl lg:text-4xl text-white text-center font-semibold">
            Stay Wise, Book Banksia
          </h2>
          <h2 className="text-3xl lg:text-4xl text-center text-white font-semibold">
            Flexible terms. Fair prices. Only on Banksia.
          </h2>
          <div className="lg:px-[200px] text-white px-10 text-center">
            <p className=" text-2xl font-medium mb-3">
              Looking for a room in London?
            </p>
            <p className="text-lg">
              Banksia offers modern, fully-managed rentals with flexible terms,
              smart lock access, and zero hassle. As corporate landlords, we
              provide a more reliable and professional alternative to
              traditional agents and private landlords. Get £50 off your first
              month’s rent and enjoy exclusive giveaways when you secure your
              booking. Smart stays, done right.
            </p>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto relative mt-5">
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
