/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getAllProperties } from "@/actions/query.action";
import { TProperty } from "@/types/property.type";
import { useEffect, useState } from "react";
import SingleProperty from "./SingleProperty";
import PropertyLoading from "../../UI/PropertyLoading";
import { useSearchParams } from "next/navigation";
import { searchParamsToObject } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

const Properties = () => {
  const searchParams = useSearchParams();
  const paramsObject = searchParamsToObject(searchParams);

  const [properties, setProperties] = useState<TProperty[]>([]);
  const [meta, setMeta] = useState<TMeta | null>(null); // Adjust type as needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("Meta", meta);
  console.log("properties", properties);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getAllProperties(paramsObject);
        setProperties(result.data || []);
        setMeta(result.meta || null);
      } catch (err: any) {
        setError(err.message || "Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [paramsObject]);

  if (loading) return <PropertyLoading repeat={8} />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-20 py-10">
        {properties.map((property) => (
          <SingleProperty key={property._id} property={property} />
        ))}
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Properties;
