import london from "../../../../../assets/images/london.png";
import newYork from "../../../../../assets/images/new-york.png";
import sydny from "../../../../../assets/images/sydny.png";
import sandiago from "../../../../../assets/images/sandiago.png";
import florida from "../../../../../assets/images/florida.png";
import miamy from "../../../../../assets/images/miamy.png";

const Cities = () => {
  const londonStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${london.src})`,
    backgroundColor: "lightcyan",
  };
  const newYorkStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${newYork.src})`,
    backgroundColor: "lightcyan",
  };
  const sydnyStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${sydny.src})`,
    backgroundColor: "lightcyan",
  };
  const sandiagoStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${sandiago.src})`,
    backgroundColor: "lightcyan",
  };
  const floridaStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${florida.src})`,
    backgroundColor: "lightcyan",
  };
  const miamyStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${miamy.src})`,
    backgroundColor: "lightcyan",
  };

  return (
    <section className="lg:px-10 m-auto mt-20">
      <div>
        <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-5">
          Find Properties in This Cities
        </h2>
        <p className="lg:text-lg text-center mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium.
        </p>
      </div>
      <div className="lg:h-[600px] grid grid-cols-1 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-5">
        <div
          style={londonStyle}
          className="rounded-lg col-span-2 bg-blue-500 bg-center bg-no-repeat bg-cover p-10"
        >
          <p className="text-white text-lg">8 Properties</p>
          <h3 className="text-white text-3xl font-semibold">London</h3>
        </div>
        <div
          style={newYorkStyle}
          className="rounded-lg bg-blue-500 bg-center bg-no-repeat bg-cover p-10"
        >
          <p className="text-white text-lg">2 Properties</p>
          <h3 className="text-white text-3xl font-semibold">New York</h3>
        </div>
        <div
          style={sydnyStyle}
          className="rounded-lg bg-blue-500 bg-center bg-no-repeat bg-cover p-10"
        >
          <p className="text-white text-lg">2 Properties</p>
          <h3 className="text-white text-3xl font-semibold">Sydney</h3>
        </div>
        <div
          style={sandiagoStyle}
          className="rounded-lg bg-blue-500 bg-center bg-no-repeat bg-cover p-10"
        >
          <p className="text-white text-lg">1 Properties</p>
          <h3 className="text-white text-3xl font-semibold">San Diego</h3>
        </div>
        <div
          style={floridaStyle}
          className="rounded-lg bg-blue-500 bg-center bg-no-repeat bg-cover p-10"
        >
          <p className="text-white text-lg">2 Properties</p>
          <h3 className="text-white text-3xl font-semibold">Florida</h3>
        </div>
        <div
          style={miamyStyle}
          className="rounded-lg col-span-2 bg-blue-500 bg-center bg-no-repeat bg-cover p-10"
        >
          <p className="text-white text-lg">8 Properties</p>
          <h3 className="text-white text-3xl font-semibold">Miami</h3>
        </div>
      </div>
    </section>
  );
};

export default Cities;
