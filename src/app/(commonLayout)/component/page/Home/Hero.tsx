import heroImage from "../../../../../assets/images/banner.png";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
    // width: "1216px",
    // height: "528px",
  };
  return (
    <section
      style={backgroundImageStyle}
      className="w-full h-[842px] absolute top-0"
    >
      <h2>This is Hero Section</h2>
    </section>
  );
};

export default Hero;
