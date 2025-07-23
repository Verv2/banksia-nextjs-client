import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Key, Sparkles, Users, Wifi } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[position:50%_80%] opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none text-lg px-6 py-2">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-[#F16232]">Banksia</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Where London living meets quirky charm and modern convenience
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We&apos;re not just another serviced accommodation provider
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We&apos;re your home-away-from-home with a twist
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Expertly Designed Rooms
                </h3>
                <p className="text-gray-600">
                  Spaces that feel like they&apos;ve been plucked from a design
                  magazine, fully furnished with everything you need
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Lock Technology
                </h3>
                <p className="text-gray-600">
                  Check-ins and check-outs as smooth as your morning coffee with
                  our hassle-free smart locks
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Premium Services
                </h3>
                <p className="text-gray-600">
                  Housekeeping and linen services ensure your space stays
                  fresher than a daisy
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-[#F16232] to-[#E55527] rounded-3xl p-8 md:p-12 text-white text-center mb-16">
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                &quot;Picture this: a few surprises you didn&apos;t know you
                wanted, entertainment for work and play, and a stay that&apos;s
                stylish, secure, and just a little bit fabulous.&quot;
              </blockquote>
            </div>

            {/* Who We Serve */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Who We Welcome
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center p-6 border-2 border-[#F16232] rounded-2xl hover:bg-orange-50 transition-colors duration-300">
                  <Users className="w-8 h-8 text-[#F16232] mr-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Business Travelers
                    </h3>
                    <p className="text-gray-600">
                      Professional stays with modern amenities
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-2 border-[#F16232] rounded-2xl hover:bg-orange-50 transition-colors duration-300">
                  <Wifi className="w-8 h-8 text-[#F16232] mr-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Wanderlust Tourists
                    </h3>
                    <p className="text-gray-600">
                      Stylish comfort for your London adventure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gray-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let&apos;s redefine modern stays together
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                One quirky detail at a time
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-[#F16232] font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Modern Convenience
                </div>
                <div className="flex items-center text-[#F16232] font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Quirky Charm
                </div>
                <div className="flex items-center text-[#F16232] font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  London Living
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// cgi-bin
