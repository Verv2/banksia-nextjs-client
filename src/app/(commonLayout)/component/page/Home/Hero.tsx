"use client";

import { Input } from "@/components/ui/input";
import heroImage from "../../../../../assets/images/banner.png";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllProperties } from "@/actions/query.action";
import useDebounce from "@/hooks/debounce.hook";
import { TProperty } from "@/types/property.type";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [properties, setProperties] = useState<TProperty[] | []>([]);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
  };

  // const router = useRouter();

  console.log("Hero component rendered", properties);

  // const handleOnClick = () => {
  //   router.push("https://www.spareroom.co.uk/u9042565");
  // };

  const handleOnClick = async () => {
    try {
      const data = await getAllProperties({ searchTerm });
      setProperties(data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedSearchTerm.trim() === "") return;

      try {
        const data = await getAllProperties({
          searchTerm: debouncedSearchTerm,
        });
        setProperties(data);
      } catch (error) {
        console.error("Debounced search failed:", error);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

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
        <div>
          <div className="lg:w-[500px] mx-auto relative mt-5">
            <Input
              type="text"
              placeholder="Enter your location"
              className="pr-28"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="w-24 absolute top-0 right-0">
              <Button
                className="w-full bg-colorPrimary font-semibold"
                onClick={handleOnClick}
              >
                Search
              </Button>
            </div>
            {/* {properties.length > 0 && (
              <div className="mt-2 rounded-xl p-3 bg-white shadow-md">
                <div className="space-y-3">
                  {properties.map((item, index) => (
                    <Link
                      key={index}
                      className="text-default-900 block rounded-md from-default-200 p-2 transition-all hover:bg-gradient-to-l hover:bg-gray-300"
                      href={`/all-listings/${item._id}`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <Image
                            src={
                              item?.main_image_url
                                ? item.main_image_url
                                : `placeholder.svg?height=50&width=50`
                            }
                            alt={`Property at ${item.address_line_1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              {item.bedrooms} Bed, {item.bathrooms} Bath house{" "}
                            </p>
                            <p className="mt-1 line-clamp-2 h-12 w-full text-sm">
                              {item?.city}, {item?.address_line_1}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 flex justify-center border-t-1 border-default-50 pt-3">
                  <button
                    className="flex items-center justify-center gap-1"
                    // onClick={() => handleSeeAll(searchTerm)}
                  >
                    <span>See All</span>
                  </button>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
