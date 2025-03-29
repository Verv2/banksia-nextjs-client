import Image from "next/image";
import {
  Bath,
  Bed,
  Calendar,
  Check,
  Clock,
  Home,
  Info,
  MapPin,
  Tv,
  Users,
  Wifi,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ImageGallery from "./ImageGallery";
import { IListingData } from "@/types/property.type";

const SingleListing = ({ data }: { data: IListingData }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Image Gallery */}
      <ImageGallery images={data.image_urls} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{data.location.area}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary text-white text-sm px-3 py-1">
                {data.room_type}
              </Badge>
              {data.bills_included && (
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Bills Included
                </Badge>
              )}
              {data.amenities.furnishings && (
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {data.amenities.furnishings}
                </Badge>
              )}
              {data.amenities.living_room && (
                <Badge variant="outline" className="text-sm px-3 py-1">
                  {data.amenities.living_room} Living Room
                </Badge>
              )}
            </div>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold text-primary">{data.rent}</h2>
              <span className="text-muted-foreground ml-2">
                {data.payment_frequency}
              </span>
            </div>
            <p className="text-muted-foreground">{data.deposit} deposit</p>
          </div>

          <Separator />

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Available From</p>
                <p className="font-medium">
                  {data.availability.available_from}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Minimum Term</p>
                <p className="font-medium">{data.availability.minimum_term}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Maximum Term</p>
                <p className="font-medium">{data.availability.maximum_term}</p>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                What&apos;s Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.whats_included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contract Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Contract Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Minimum Stay</h3>
                <p>{data.contract_terms.minimum_stay}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Students & Recent Graduates
                </h3>
                <p>{data.contract_terms.students_recent_graduates}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Self-employed & Non-working
                </h3>
                <p>{data.contract_terms.self_employed_non_working}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Additional Info */}
        <div className="space-y-8">
          {/* Household */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Household
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Flatmates
                  </p>
                  <p className="font-medium">
                    {data?.household?.total_flatmates}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Rooms</p>
                  <p className="font-medium">{data?.household?.total_rooms}</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Gender</span>
                  <span className="font-medium">{data?.household?.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Smoker</span>
                  <span className="flex items-center">
                    {data?.household?.smoker ? (
                      <>
                        <Check className="h-4 w-4 text-green-500 mr-1" />
                        Yes
                      </>
                    ) : (
                      <>
                        <X className="h-4 w-4 text-red-500 mr-1" />
                        No
                      </>
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pets</span>
                  <span className="flex items-center">
                    {data?.household?.any_pets ? (
                      <>
                        <Check className="h-4 w-4 text-green-500 mr-1" />
                        Yes
                      </>
                    ) : (
                      <>
                        <X className="h-4 w-4 text-red-500 mr-1" />
                        No
                      </>
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Occupation</span>
                  <span className="font-medium">
                    {data?.household?.occupation}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Amenities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {data.amenities.furnishings && (
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-3 text-primary" />
                    <span>{data.amenities.furnishings}</span>
                  </div>
                )}
                {data.amenities.living_room && (
                  <div className="flex items-center">
                    <Tv className="h-5 w-5 mr-3 text-primary" />
                    <span>{data.amenities.living_room} Living Room</span>
                  </div>
                )}
                {data.amenities.broadband_included && (
                  <div className="flex items-center">
                    <Wifi className="h-5 w-5 mr-3 text-primary" />
                    <span>Broadband Included</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-3 text-primary" />
                  <span>Private Ensuite</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Couples</span>
                <span className="flex items-center">
                  {data.preferences.couples_ok ? (
                    <>
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      OK
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4 text-red-500 mr-1" />
                      Not OK
                    </>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Smoking</span>
                <span className="flex items-center">
                  {data.preferences.smoking_ok ? (
                    <>
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      OK
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4 text-red-500 mr-1" />
                      Not OK
                    </>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pets</span>
                <span className="flex items-center">
                  {data.preferences.pets_ok ? (
                    <>
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      OK
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4 text-red-500 mr-1" />
                      Not OK
                    </>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Occupation</span>
                <span className="font-medium">
                  {data.preferences.occupation}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">References</span>
                <span className="flex items-center">
                  {data.preferences.references_required ? (
                    <>
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      Required
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4 text-red-500 mr-1" />
                      Not Required
                    </>
                  )}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-48 bg-muted rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Map"
                  alt="Location map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Area</p>
                <p className="font-medium">{data.location.area}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Transport Links</p>
                <p className="font-medium">{data.location.transport_links}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
