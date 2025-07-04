import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TProperty } from "@/types/property.type";
import { Bath, Bed, Building, Home, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SinglePropertyCard = ({ property }: { property: TProperty }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/properties/${property._id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Image
          src={
            property?.main_image_url
              ? property.main_image_url
              : `placeholder.svg?height=200&width=400`
          }
          alt={`Property at ${property.address_line_1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-colorPrimary/90">
            {property.total_units} Units
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {property.ref}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>
                {property.area}, {property.city}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                <span>{property.total_units} Units</span>
              </div>
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-1" />
                <span>{property.rentable_units} Rentable</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Button className="w-full bg-colorPrimary" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SinglePropertyCard;
