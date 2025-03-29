import React from "react";
import { listingData } from "../../component/page/Listing/listingData";
import SingleListing from "../../component/page/Listing/SingleListing";

const page = async ({ params }: { params: Promise<{ listingId: string }> }) => {
  const { listingId } = await params;

  const propertyData = listingData.find((data) => data.id === listingId);

  return <div>{propertyData && <SingleListing data={propertyData} />}</div>;
};

export default page;
