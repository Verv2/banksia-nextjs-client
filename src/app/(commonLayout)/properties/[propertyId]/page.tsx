import { getSingleProperty } from "@/actions/query.action";
import SingleProperty from "../../component/page/Properties/SingleProperty";
import { Metadata } from "next";
import { TProperty } from "@/types/property.type";
import { siteConfig } from "@/config/site";

type PageProps = {
  params: Promise<{ propertyId: string }>;
};

const buildTitle = (property: TProperty) => {
  const beds = property.bedrooms ? `${property.bedrooms} bedroom ` : "";
  const type = property.property_type || "property";
  const where = property.area || property.city || property.county || "London";
  return `${beds}${type} to rent in ${where}`.replace(/\s+/g, " ").trim();
};

const buildDescription = (property: TProperty) => {
  if (property.property_description) {
    return property.property_description.slice(0, 200);
  }
  const parts = [
    property.bedrooms ? `${property.bedrooms} bedroom` : null,
    property.bathrooms ? `${property.bathrooms} bathroom` : null,
    property.property_type,
    property.full_address ? `at ${property.full_address}` : null,
  ].filter(Boolean);
  return `${parts.join(" ")} available to rent with Banksia London.`.trim();
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { propertyId } = await params;

  try {
    const property: TProperty = await getSingleProperty(propertyId);
    const title = buildTitle(property);
    const description = buildDescription(property);
    const image = property.main_image_url || property.image_urls?.[0];
    const canonical = `/properties/${propertyId}`;

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: "website",
        images: image ? [{ url: image, alt: title }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch {
    return {
      title: "Property",
      description:
        "Explore verified rental properties across London with Banksia.",
      robots: { index: false, follow: true },
    };
  }
}

const SinglePropertyPage = async ({ params }: PageProps) => {
  const { propertyId } = await params;

  const property: TProperty = await getSingleProperty(propertyId);

  const image = property.main_image_url || property.image_urls?.[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: buildTitle(property),
    description: buildDescription(property),
    url: `${siteConfig.url}/properties/${propertyId}`,
    ...(image ? { image } : {}),
    ...(property.full_address || property.city || property.postcode
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: property.full_address || property.address_line_1,
            addressLocality: property.city || property.area,
            postalCode: property.postcode,
            addressCountry: property.country || "GB",
          },
        }
      : {}),
    ...(property.latitude && property.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: property.latitude,
            longitude: property.longitude,
          },
        }
      : {}),
    numberOfRooms: property.bedrooms,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SingleProperty property={property} />
    </>
  );
};

export default SinglePropertyPage;