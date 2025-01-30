import { Quote } from "lucide-react";
import people from "../../../../../assets/images/people.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  const peopleStyle = {
    backgroundImage: `url(${people.src})`,
    backgroundColor: "lightcyan",
  };

  return (
    <section className="bg-sky-100 p-10 mt-20">
      <div className="w-[1000px] m-auto">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-5">
          What our client are saying about us
        </h2>
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex gap-10 items-center">
                    {/* image */}
                    <div
                      style={peopleStyle}
                      className="w-[200px] h-[300px] bg-center bg-no-repeat bg-cover rounded-xl"
                    ></div>
                    {/* review */}
                    <div className="w-[750px]">
                      <div className="flex gap-5">
                        <div className="w-[50px] h-[50px] bg-colorPrimary/60 flex items-center justify-center rounded-lg">
                          <Quote size={40} />
                        </div>
                        <h2 className="text-2xl font-semibold">Alex Hamadi</h2>
                      </div>
                      <p className="mt-5 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste doloremque aspernatur reprehenderit corrupti qui
                        consequuntur fugit deleniti error, accusantium animi
                        doloribus eius minus facere assumenda, velit deserunt
                        maiores atque cupiditate.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-colorPrimary" />
            <CarouselNext className="bg-colorPrimary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
