"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TProperty } from "@/types/property.type";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllProperties } from "@/actions/query.action";
import SinglePropertyCard from "../Properties/SinglePropertyCard";

// const properties: TDummyProperty[] = [
//   {
//     id: 1,
//     title: "Modern Studio in Shoreditch",
//     location: "Shoreditch, East London",
//     price: "£1,200",
//     period: "per month",
//     image:
//       "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     features: ["Studio", "1 Bath", "WiFi", "Furnished"],
//     badge: "Popular",
//   },
//   {
//     id: 2,
//     title: "Cozy Room in Camden",
//     location: "Camden, North London",
//     price: "£950",
//     period: "per month",
//     image:
//       "https://plus.unsplash.com/premium_photo-1687960116506-f31f84371838?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     features: ["Private Room", "Shared Bath", "WiFi", "Bills Included"],
//     badge: "New",
//   },
//   {
//     id: 3,
//     title: "Luxury Apartment in Canary Wharf",
//     location: "Canary Wharf, East London",
//     price: "£1,800",
//     period: "per month",
//     image:
//       "https://plus.unsplash.com/premium_photo-1687960116228-13d383d20188?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     features: ["1 Bed", "1 Bath", "Gym", "Concierge"],
//     badge: "Premium",
//   },
//   {
//     id: 4,
//     title: "Luxury Apartment in Canary Wharf",
//     location: "Canary Wharf, East London",
//     price: "£1,800",
//     period: "per month",
//     image:
//       "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     features: ["1 Bed", "1 Bath", "Gym", "Concierge"],
//     badge: "Premium",
//   },
// ];

const HomeProperty = () => {
  // const properties: IListingData[] = listingData;
  const route = useRouter();

  // const handleOnClick = (id: string) => {
  //   route.push(`/listing/${id}`);
  // };

  const [properties, setProperties] = useState<TProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProperties({})
      .then((res) => setProperties(res.data.slice(0, 5)))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading properties...</p>;

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Properties in{" "}
                <span className="text-[#F16232]">London</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our handpicked selection of premium properties across
                London&apos;s most desirable neighborhoods. All fully managed
                with flexible terms and smart access.
              </p>
            </div>

            {/* Properties Grid */}
            <div>
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
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <SinglePropertyCard property={property} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-colorPrimary ml-8" />
                <CarouselNext className="bg-colorPrimary mr-8" />
              </Carousel>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-10">
              <Button
                size="lg"
                variant="outline"
                className="border-[#F16232] text-[#F16232] hover:bg-[#F16232] hover:text-white px-8 py-4 text-lg bg-transparent"
                onClick={() => route.push("/properties?page=1&limit=20")}
              >
                View All Properties
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProperty;
