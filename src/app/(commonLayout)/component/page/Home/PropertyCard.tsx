import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TDummyProperty } from "@/types/property.type";
import { MapPin } from "lucide-react";
import Image from "next/image";

const PropertyCard = ({ property }: { property: TDummyProperty }) => {
  return (
    <div>
      <Card
        key={property.id}
        className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-none flex flex-col"
      >
        <div className="relative">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-[#F16232] hover:bg-[#F16232]/90 text-white">
            {property.badge}
          </Badge>
        </div>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {property.title}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#F16232]">
                {property.price}
              </div>
              <div className="text-sm text-gray-500">{property.period}</div>
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 flex-grow">
            {property.features.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs px-3 py-1 rounded-full h-6 flex items-center"
              >
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            <Button className="flex-1 bg-[#F16232] hover:bg-[#F16232]/90 text-white">
              View Details
            </Button>
            {/* <Button
              variant="outline"
              className="flex-1 border-[#F16232] text-[#F16232] hover:bg-[#F16232] hover:text-white bg-transparent"
            >
              Book Tour
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyCard;
