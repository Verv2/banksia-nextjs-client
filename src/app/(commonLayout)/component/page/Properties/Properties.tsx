/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getAllProperties } from "@/actions/query.action";
import { TProperty } from "@/types/property.type";
import { useEffect, useMemo, useState } from "react";
import PropertyLoading from "../../UI/PropertyLoading";
import { useSearchParams } from "next/navigation";
import { searchParamsToObject } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SinglePropertyCard from "./SinglePropertyCard";

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

const Properties = () => {
  const searchParams = useSearchParams();
  const paramsObject = useMemo(() => {
    return searchParamsToObject(searchParams);
  }, [searchParams]);

  const [properties, setProperties] = useState<TProperty[]>([]);
  const [meta, setMeta] = useState<TMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentPage = Number(searchParams.get("page") || 1);
  const limitPerPage = Number(searchParams.get("limit") || 20);
  const totalPages = meta?.totalPage ?? 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 px-4 sm:px-6 md:px-10 lg:px-20 py-6">
        {properties.map((property) => (
          <SinglePropertyCard key={property._id} property={property} />
        ))}
      </div>
      <div className="overflow-x-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?${new URLSearchParams({
                  ...paramsObject,
                  page: String(currentPage > 1 ? currentPage - 1 : 1),
                  limit: String(limitPerPage),
                })}`}
              />
            </PaginationItem>

            {pageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`?${new URLSearchParams({
                    ...paramsObject,
                    page: String(page),
                    limit: String(limitPerPage),
                  })}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={`?${new URLSearchParams({
                  ...paramsObject,
                  page: String(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  ),
                  limit: String(limitPerPage),
                })}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Properties;
