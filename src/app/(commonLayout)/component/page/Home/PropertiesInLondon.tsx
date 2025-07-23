"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Coffee, Train, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const areas = [
  {
    id: 1,
    name: "Central London",
    zone: "Zone 1",
    properties: 45,
    priceRange: "£1,400 - £2,500",
    image:
      "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Financial District", "West End", "Covent Garden"],
    transport: "Excellent tube connections",
    description:
      "Prime location with world-class dining, shopping, and entertainment at your doorstep.",
    icon: Building,
  },
  {
    id: 2,
    name: "East London",
    zone: "Zone 2-3",
    properties: 78,
    priceRange: "£900 - £1,600",
    image:
      "https://images.unsplash.com/photo-1559497353-d304de9f3647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Shoreditch", "Hackney", "Canary Wharf"],
    transport: "DLR & Overground",
    description:
      "Trendy neighborhoods with vibrant nightlife, street art, and creative communities.",
    icon: Coffee,
  },
  {
    id: 3,
    name: "North London",
    zone: "Zone 2-4",
    properties: 62,
    priceRange: "£800 - £1,400",
    image:
      "https://images.unsplash.com/flagged/photo-1603979045836-0e03cb7f735c?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Camden", "Islington", "Hampstead"],
    transport: "Northern & Piccadilly Lines",
    description:
      "Mix of urban energy and green spaces with excellent transport links to the city center.",
    icon: Train,
  },
  {
    id: 4,
    name: "South London",
    zone: "Zone 2-5",
    properties: 54,
    priceRange: "£750 - £1,300",
    image:
      "https://plus.unsplash.com/premium_photo-1731256170716-a0a96bdaee76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Clapham", "Greenwich", "Brixton"],
    transport: "National Rail & Tube",
    description:
      "Diverse communities with great parks, markets, and a more relaxed London lifestyle.",
    icon: MapPin,
  },
];

const PropertiesInLondon = () => {
  const router = useRouter();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Properties Across <span className="text-[#F16232]">London</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive portfolio of properties across London&apos;s
              most sought-after neighborhoods. From the bustling city center to
              trendy creative districts.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {areas.map((area) => {
              // const IconComponent = area.icon;
              return (
                <Card
                  key={area.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none group"
                >
                  <div className="relative">
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={area.name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-[#F16232] hover:bg-[#F16232]/90 text-white">
                        {area.zone}
                      </Badge>
                      {/* <Badge
                        variant="secondary"
                        className="bg-white/90 text-gray-900"
                      >
                        {area.properties} Properties
                      </Badge> */}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{area.name}</h3>
                      <p className="text-sm opacity-90">{area.transport}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#F16232]/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#F16232]" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#F16232]">
                            {area.priceRange}
                          </div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                      </div>
                    </div> */}

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Popular Areas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.highlights.map((highlight, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-[#F16232] hover:bg-[#F16232]/90 text-white"
                        onClick={() =>
                          router.push("properties?page=1&limit=20")
                        }
                      >
                        View Properties
                      </Button>
                      {/* <Button
                        variant="outline"
                        className="flex-1 border-[#F16232] text-[#F16232] hover:bg-[#F16232] hover:text-white bg-transparent"
                      >
                        Area Guide
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Stats */}
          {/* <div className="bg-white rounded-2xl p-8 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#F16232] mb-2">
                  239
                </div>
                <div className="text-gray-600">Total Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F16232] mb-2">32</div>
                <div className="text-gray-600">London Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F16232] mb-2">
                  4.8
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F16232] mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PropertiesInLondon;
