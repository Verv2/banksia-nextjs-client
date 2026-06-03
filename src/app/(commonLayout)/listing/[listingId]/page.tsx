import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { listingData } from "../../component/page/Listing/listingData";
import SingleListing from "../../component/page/Listing/SingleListing";
import { siteConfig } from "@/config/site";

type PageProps = {
  params: Promise<{ listingId: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { listingId } = await params;
  const listing = listingData.find((data) => data.id === listingId);

  if (!listing) {
    return {
      title: "Listing not found",
      robots: { index: false, follow: true },
    };
  }

  const description =
    listing.description ||
    `${listing.room_type} room to rent in ${listing.location.area} for ${listing.currency} ${listing.rent} ${listing.payment_frequency} with Banksia London.`;
  const image = listing.image_urls?.[0]?.src;
  const canonical = `/listing/${listingId}`;

  return {
    title: listing.title,
    description: description.slice(0, 200),
    alternates: { canonical },
    openGraph: {
      title: `${listing.title} | Banksia London`,
      description: description.slice(0, 200),
      url: canonical,
      type: "website",
      images: image ? [{ url: image, alt: listing.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${listing.title} | Banksia London`,
      description: description.slice(0, 200),
      images: image ? [image] : undefined,
    },
  };
}

const page = async ({ params }: PageProps) => {
  const { listingId } = await params;

  const propertyData = listingData.find((data) => data.id === listingId);

  if (!propertyData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: propertyData.title,
    description: propertyData.description,
    url: `${siteConfig.url}/listing/${listingId}`,
    image: propertyData.image_urls?.map((img) => img.src),
    address: {
      "@type": "PostalAddress",
      addressLocality: propertyData.location.area,
      addressCountry: "GB",
    },
    offers: {
      "@type": "Offer",
      price: propertyData.rent,
      priceCurrency: propertyData.currency,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SingleListing data={propertyData} />
    </div>
  );
};

export default page;
