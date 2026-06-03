import { Badge } from "@/components/ui/badge";
import { Clock, Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "team@banksialondon.com",
    href: "mailto:team@banksialondon.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 1268 538971",
    href: "tel:+441268538971",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri, 9:00 – 18:00",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[position:50%_80%] opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none text-lg px-6 py-2">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get in <span className="text-[#F16232]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Have a question about renting, partnerships, or support? Our team
              is here to help you navigate the London rental market with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let&apos;s start a conversation
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Reach out through any of the channels below, or send us a
                message directly and we&apos;ll get back to you shortly.
              </p>

              <div className="space-y-5">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                      <div className="w-12 h-12 flex-shrink-0 bg-[#F16232] rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wide text-gray-500">
                          {detail.label}
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );

                  return detail.href ? (
                    <a key={index} href={detail.href} className="block group">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
