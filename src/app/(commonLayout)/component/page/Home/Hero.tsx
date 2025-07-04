"use client";

import { Input } from "@/components/ui/input";
import heroImage from "../../../../../assets/images/banner.png";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllProperties } from "@/actions/query.action";
import useDebounce from "@/hooks/debounce.hook";
import { TProperty } from "@/types/property.type";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "lightcyan",
};

const Hero = () => {
  const [searchResults, setSearchResults] = useState<TProperty[] | []>([]);

  const { register, handleSubmit, watch } = useForm();
  const searchTerm = useDebounce(watch("search"));

  // const [searchTerm, setSearchTerm] = useState("");
  // const debouncedSearchTerm = useDebounce(searchTerm);
  // const [properties, setProperties] = useState<TProperty[] | []>([]);

  const router = useRouter();

  useEffect(() => {
    if (searchTerm) {
      const queryData = {
        searchTerm: searchTerm as string,
      };

      const fetchData = async () => {
        const data = await getAllProperties(queryData);
        setSearchResults(data.data);
      };
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  console.log("Hero component rendered", searchResults);

  const handleSeeAll = (query: string) => {
    const queryString = query.trim().split(" ").join("+");
    router.push(`/properties?searchTerm=${queryString}&page=1&limit=20`);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const queryData = {
      searchTerm: data.search,
    };
    console.log("Search submitted:", queryData);
    const queryString = searchTerm.trim().split(" ").join("+");
    router.push(`/properties?searchTerm=${queryString}&page=1&limit=20`);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:w-[500px] mx-auto relative mt-5">
            <Input
              type="text"
              placeholder="Enter your location"
              className="pr-28"
              {...register("search")}
            />
            <div className="w-24 absolute top-0 right-0">
              <Button className="w-full bg-colorPrimary font-semibold">
                Search
              </Button>
            </div>
          </div>
        </form>
        {searchResults.length > 0 && (
          <div className="lg:w-[500px] mx-auto mt-2 rounded-xl p-3 bg-white shadow-md absolute left-1/2 transform -translate-x-1/2 z-[999]">
            <div className="space-y-3">
              {searchResults.slice(0, 3).map((item, index) => (
                <Link
                  key={index}
                  className="text-default-900 block rounded-md from-default-200 p-2 transition-all hover:bg-gradient-to-l hover:bg-gray-300"
                  href={`/properties/${item._id}`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Image
                        alt="item"
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                        src={
                          item.main_image_url ||
                          "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {item.bedrooms} Bed, {item.bathrooms} Bath house{" "}
                        </p>
                        <p className="mt-1 line-clamp-2 h-12 w-full text-sm">
                          {item.city}, {item.ref}
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
                onClick={() => handleSeeAll(searchTerm)}
              >
                <span>See All</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
