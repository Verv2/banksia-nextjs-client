"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Building,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

import { TProperty } from "@/types/property.type";
import { useRouter } from "next/navigation";
import GoogleMaps from "../../UI/GoogleMaps";

const SingleProperty = ({ property }: { property: TProperty }) => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.image_urls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + property.image_urls.length) % property.image_urls.length
    );
  };

  const arrOfData = [property];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 hover:bg-[#F16232]/10 hover:text-[#F16232]"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative">
            <div className="aspect-[16/9] relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={
                  property.image_urls[currentImageIndex] || "/placeholder.svg"
                }
                alt={`Property image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Navigation Buttons */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex gap-3">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`bg-white/90 hover:bg-white shadow-lg ${
                    isLiked ? "text-[#F16232]" : "text-gray-600"
                  }`}
                >
                  <Heart
                    className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`}
                  />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/90 hover:bg-white shadow-lg"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {property.image_urls.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {property.image_urls.map((url, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-3 transition-all duration-200 ${
                    index === currentImageIndex
                      ? "border-[#F16232] shadow-lg scale-105"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={url || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Property Information */}
        <div className="space-y-8">
          {/* Property Header */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-3 text-gray-900">
                  Luxury Villa in Beverly Hills
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-[#F16232]" />
                  <span className="text-lg">
                    {property.ref}, {property.city}, {property.country}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#F16232] mb-1">
                  $8,500/mo
                </div>
                <div className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full inline-block">
                  Available Now
                </div>
              </div>
            </div>

            {/* Property Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                <Bed className="h-6 w-6 mr-3 text-[#F16232]" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {property.bedrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                <Bath className="h-6 w-6 mr-3 text-[#F16232]" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {property.bathrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                <Square className="h-6 w-6 mr-3 text-[#F16232]" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {property.area}
                  </div>
                  <div className="text-sm text-gray-600">sq ft</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                <Building className="h-6 w-6 mr-3 text-[#F16232]" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {property.floors}
                  </div>
                  <div className="text-sm text-gray-600">Floors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Property Description */}
          <Card className="shadow-lg border-0 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-gray-900">
                Property Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.property_description}
              </p>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <div className="w-2 h-8 bg-[#F16232] rounded-full mr-3"></div>
                  Property Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {property.property_features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="w-6 h-6 bg-[#F16232] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <div className="w-2 h-8 bg-[#F16232] rounded-full mr-3"></div>
                  Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="w-6 h-6 bg-[#F16232] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Section */}
          <Card className="shadow-lg border-0 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <div className="w-2 h-8 bg-[#F16232] rounded-full mr-3"></div>
                Location & Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="font-semibold mb-2 text-gray-900">Address:</p>
                    <p className="text-gray-600 text-lg">
                      {property.ref}, {property.city}, {property.country}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="font-semibold mb-2 text-gray-900">
                      Coordinates:
                    </p>
                    <p className="text-gray-600">
                      Latitude: {property.lat}, Longitude: {property.lng}
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-80 rounded-2xl flex items-center justify-center">
                  <GoogleMaps
                    locationMarkers={arrOfData}
                    mapZoom={15}
                    mapClassName="w-full h-80"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
