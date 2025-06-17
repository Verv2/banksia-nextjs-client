const SinglePropertyPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;
  return (
    <div>
      <h2>This is single property page by id: {propertyId}</h2>
    </div>
  );
};

export default SinglePropertyPage;
