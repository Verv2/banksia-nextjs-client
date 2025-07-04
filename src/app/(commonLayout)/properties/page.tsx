import { Suspense } from "react";
import Properties from "../component/page/Properties/Properties";
import PropertyLoading from "../component/UI/PropertyLoading";

const PropertiesPage = () => {
  return (
    <>
      <Suspense fallback={<PropertyLoading repeat={8} />}>
        <Properties />
      </Suspense>
    </>
  );
};

export default PropertiesPage;
