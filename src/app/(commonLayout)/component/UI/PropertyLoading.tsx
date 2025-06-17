import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PropertyLoading = ({ repeat }: { repeat?: number }) => {
  if (!repeat) {
    repeat = 1;
  }

  //   const skeletons = Array.from({ length: repeat }, (_, index) => (
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-20 py-10">
      {Array.from({ length: repeat }, (_, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4">
          <Skeleton className="bg-colorPrimary/10 h-48 w-full mb-4" />
          <div className="space-y-2">
            <Skeleton className="bg-colorPrimary/10 h-6 w-3/4" />
            <Skeleton className="bg-colorPrimary/10 h-4 w-1/2" />
            <Skeleton className="bg-colorPrimary/10 h-4 w-1/3" />
            <Skeleton className="bg-colorPrimary/10 h-10 w-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyLoading;
