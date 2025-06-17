"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MapPin } from "lucide-react";
import { listingData } from "../Listing/listingData";
import { IListingData } from "@/types/property.type";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const HomeProperty = () => {
  const properties: IListingData[] = listingData;
  const route = useRouter();

  const handleOnClick = (id: string) => {
    route.push(`/listing/${id}`);
  };

  return (
    <section className="lg:px-10 m-auto mt-20">
      <h2 className="text-4xl font-semibold text-center mb-10">Home For you</h2>
      <div className="px-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {properties.map((property, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
                onClick={() => handleOnClick(property.id)}
              >
                <div className="rounded-md shadow-[3px_8px_10px_-2px_rgba(0,_0,_0,_0.1)] mb-4">
                  <div
                    style={{
                      backgroundImage: `url(${property.image_urls[0].src})`,
                    }}
                    className="w-full h-[200px] rounded-t-md bg-center bg-no-repeat bg-cover"
                  ></div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mt-4">
                      <h4 className="text-2xl font-semibold">
                        {property.title}
                      </h4>
                      <h4 className="text-2xl font-semibold text-colorPrimary">
                        &#163;{property.rent}
                      </h4>
                    </div>
                    <div className="flex items-center gap-5 mt-5">
                      <MapPin />
                      <p className="text-lg"> {property.location.area}</p>
                    </div>
                    {/* property */}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-colorPrimary" />
          <CarouselNext className="bg-colorPrimary" />
        </Carousel>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button
          className="bg-colorPrimary"
          onClick={() => route.push(`/properties?limit=20&page=1`)}
        >
          See All Properties
        </Button>
      </div>
    </section>
  );
};

export default HomeProperty;
