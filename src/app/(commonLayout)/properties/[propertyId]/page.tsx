import { getSingleProperty } from "@/actions/query.action";
import SingleProperty from "../../component/page/Properties/SingleProperty";

const SinglePropertyPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;

  const property = await getSingleProperty(propertyId);

  return (
    <>
      <SingleProperty property={property} />
    </>
  );
};

export default SinglePropertyPage;
