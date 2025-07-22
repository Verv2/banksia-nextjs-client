"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Building,
  ChevronLeft,
  Check,
} from "lucide-react";

import { TProperty } from "@/types/property.type";
import { useRouter } from "next/navigation";
import GoogleMaps from "../../UI/GoogleMaps";
import PropertyGallery from "./PropertyGallery";
import { removeNumbers } from "@/lib/utils";

const SingleProperty = ({ property }: { property: TProperty }) => {
  const router = useRouter();

  const arrOfData = [property];

  let ref;
  if (property.ref) {
    ref = removeNumbers(property.ref);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-4 sm:mb-6 hover:bg-[#F16232]/10 hover:text-[#F16232]"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Button>

        {/* Image Gallery */}
        <div className="mb-6 sm:mb-8">
          <PropertyGallery images={property.image_urls} />
        </div>

        {/* Property Information */}
        <div className="space-y-6 sm:space-y-8">
          {/* Property Header */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">
                  Luxury Villa in {property.city}
                </h1>
                <div className="flex items-center text-gray-600 mb-3 sm:mb-4">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-[#F16232]" />
                  <span className="text-base sm:text-lg">
                    {ref}, {property.city}, {property.country}
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                {/* <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F16232] mb-1">
                  $8,500/mo
                </div> */}
                <div className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full inline-block">
                  Available Now
                </div>
              </div>
            </div>

            {/* Property Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center justify-center bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
                <Bed className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-[#F16232]" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {property.bedrooms}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Bedrooms
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
                <Bath className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-[#F16232]" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {property.bathrooms}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Bathrooms
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
                <Square className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-[#F16232]" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {property.area}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">sq ft</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-[#F16232]" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {property.floors}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Floors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Property Description */}
          <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl text-gray-900">
                Property Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {property.property_description}
              </p>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl text-gray-900 flex items-center">
                  <div className="w-2 h-6 sm:h-8 bg-[#F16232] rounded-full mr-2 sm:mr-3"></div>
                  Property Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 sm:gap-4">
                  {property.property_features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#F16232] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <Check className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl text-gray-900 flex items-center">
                  <div className="w-2 h-6 sm:h-8 bg-[#F16232] rounded-full mr-2 sm:mr-3"></div>
                  Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 sm:gap-4">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#F16232] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <Check className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Section */}
          <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="text-xl sm:text-2xl text-gray-900 flex items-center">
                <div className="w-2 h-6 sm:h-8 bg-[#F16232] rounded-full mr-2 sm:mr-3"></div>
                Location & Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="font-semibold mb-1 sm:mb-2 text-gray-900">
                      Address:
                    </p>
                    <p className="text-gray-600 text-base sm:text-lg">
                      {ref}, {property.city}, {property.country}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="font-semibold mb-1 sm:mb-2 text-gray-900">
                      Coordinates:
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Latitude: {property.lat}, Longitude: {property.lng}
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-64 sm:h-80 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <GoogleMaps
                    locationMarkers={arrOfData}
                    mapZoom={15}
                    mapClassName="w-full h-64 sm:h-80"
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
