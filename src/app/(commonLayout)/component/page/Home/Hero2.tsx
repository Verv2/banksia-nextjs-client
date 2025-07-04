"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Key, MapPin, Shield, Star } from "lucide-react";
import heroImage from "../../../../../assets/images/banner.png";
import { useEffect, useState } from "react";
import { TProperty } from "@/types/property.type";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useDebounce from "@/hooks/debounce.hook";
import { getAllProperties } from "@/actions/query.action";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  const [searchResults, setSearchResults] = useState<TProperty[] | []>([]);

  const { register, handleSubmit, watch } = useForm();
  const searchTerm = useDebounce(watch("search"));

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
    <section className="relative min-h-screen lg:h-screen w-full overflow-hidden lg:flex lg:items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroImage.src}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Main Hero Content */}
          <div className="mb-12 text-center">
            <div className="max-w-2xl mx-auto">
              <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none">
                <MapPin className="w-3 h-3 mr-1" />
                London&apos;s Premier Rental Platform
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Stay Wise,
                <br />
                Book <span className="text-[#F16232]">Banksia</span>
              </h1>

              <p className="text-2xl text-white/90 mb-8 font-light">
                Flexible terms. Fair prices. Only on Banksia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  size="lg"
                  className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4 text-lg"
                >
                  Find Your Perfect Room
                </Button> */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/30 hover:bg-white px-8 py-4 text-lg"
                  onClick={() => router.push("/properties?page=1&limit=20")}
                >
                  Explore Properties
                </Button>
              </div>
            </div>
          </div>

          {/* Search Section - No Background */}
          <div className="relative z-[999]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <Input
                  placeholder="Enter location in London..."
                  className="flex-1 h-12 text-lg bg-white/90 backdrop-blur-sm border-none"
                  {...register("search")}
                />
                <Button className="bg-[#F16232] hover:bg-[#F16232]/90 text-white h-12 px-6">
                  Search Now
                </Button>
              </div>
              <p className="text-sm text-white/70 italic">
                Smart stays, done right.
              </p>
            </form>
            {searchResults.length > 0 && (
              <div className="lg:w-[500px] mx-auto rounded-xl p-3 bg-white shadow-md absolute left-1/2 transform -translate-x-1/2 z-[999]">
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

          {/* Cards Section - Row Layout */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
            {/* Question Card */}
            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Looking for a room in London?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Banksia offers modern, fully-managed rentals with flexible
                  terms and zero hassle.
                </p>
              </CardContent>
            </Card>

            {/* Features Card */}
            <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose Banksia?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-[#F16232]" />
                    <span className="text-sm text-gray-700">
                      Corporate Managed
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Key className="w-4 h-4 text-[#F16232]" />
                    <span className="text-sm text-gray-700">
                      Smart Lock Access
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#F16232]" />
                    <span className="text-sm text-gray-700">
                      Flexible Terms
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer Card */}
            <Card className="bg-[#F16232] border-none shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Special Offer!
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      Get £50 off your first month&apos;s rent and enjoy
                      exclusive giveaways when you secure your booking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero2;
