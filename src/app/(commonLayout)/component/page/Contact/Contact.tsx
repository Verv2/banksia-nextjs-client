import { Input } from "@/components/ui/input";
import contactImage from "../../../../../assets/images/contact.jpg";
import { MailPlus, MapPinHouse } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactStyle = {
    backgroundImage: `url(${contactImage.src})`,
    backgroundColor: "lightcyan",
  };

  return (
    <section className="lg:w-[1600px] m-auto mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <div
          style={contactStyle}
          className="w-[390px] lg:w-[450px] lg:h-[650px] h-[550px] rounded-tr-[50px] rounded-bl-[50px] bg-center bg-no-repeat bg-cover"
        ></div>
        <div>
          <h2 className="text-4xl lg:text-7xl font-semibold">CONTACT US</h2>
          <div className="flex flex-col gap-10 mt-10">
            {/* address */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MailPlus />
                <p className="text-lg font-semibold">team@banksialondon.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPinHouse />
                <p className="text-lg font-semibold">
                  29-31 Adelaide Road, London, NW3 3QB
                </p>
              </div>
            </div>
            {/* input field */}
            <div className="flex flex-col gap-5">
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Enter your email" />
              <Textarea placeholder="Type your message here." />
              <Button className="w-full bg-colorPrimary">Send message</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
