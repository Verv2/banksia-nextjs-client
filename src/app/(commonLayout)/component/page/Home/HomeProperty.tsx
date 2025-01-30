import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import propertyImage from "../../../../../assets/images/property.png";
import { Bath, BedDouble, MapPin, SquareStack } from "lucide-react";

const backgroundImageStyle = {
  backgroundImage: `url(${propertyImage.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "lightcyan",
};

const HomeProperty = () => {
  return (
    <section className="lg:w-[1600px] m-auto mt-20">
      <h2 className="text-4xl font-semibold text-center mb-10">Home For you</h2>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] mb-4">
                  <div
                    style={backgroundImageStyle}
                    className="w-full h-[200px] rounded-t-md"
                  ></div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mt-4">
                      <h4 className="text-2xl font-semibold">Pool Apartment</h4>
                      <h4 className="text-2xl font-semibold text-colorPrimary">
                        &#163;300
                      </h4>
                    </div>
                    <div className="flex items-center gap-5 mt-5">
                      <MapPin />
                      <p className="text-lg">
                        {" "}
                        Green Valley, Highland Lake, FL
                      </p>
                    </div>
                    {/* property */}
                    <div className="flex justify-between items-center">
                      {/* bed */}
                      <div className="flex items-center gap-2 mt-6">
                        <BedDouble />
                        <p className="font-semibold">4 beds</p>
                      </div>
                      <div className="flex items-center gap-2 mt-6">
                        <Bath />
                        <p className="font-semibold">2 baths</p>
                      </div>
                      <div className="flex items-center gap-2 mt-6">
                        <SquareStack />
                        <p className="font-semibold">400 sqft</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-colorPrimary" />
          <CarouselNext className="bg-colorPrimary" />
        </Carousel>
      </div>
    </section>
  );
};

export default HomeProperty;
