import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import team1 from "../../../../../assets/teams/team-1.jpeg";
import team2 from "../../../../../assets/teams/team-2.jpeg";
import team3 from "../../../../../assets/teams/team-3.jpeg";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hafiza Khatun",
    role: "Delta Operator",
    image: team1,
  },
  {
    name: "Anirban Dey James",
    role: "Delta Operator",
    image: team2,
  },
  {
    name: "Norbert Bod",
    role: "Rental Manager",
    image: team3,
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group flex flex-col items-center text-center w-56">
      <div className="rounded-full p-1.5 bg-[#F16232] shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="relative w-44 h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-4 ring-white">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-[#F16232] font-medium">{member.role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[position:50%_80%] opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none text-lg px-6 py-2">
              Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet the <span className="text-[#F16232]">Experts</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Meet the experts behind your perfect rental experience. Our
              dedicated team is here to guide you every step of the way,
              ensuring a seamless and stress-free journey to your new home.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-x-16 gap-y-12">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#F16232] to-[#E55527] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get in Touch
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Have a question or ready to find your new home? Our team is just a
              message or call away.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:rentals@banksialondon.com"
                className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-6 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#F16232]" />
                </div>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-wide text-white/70">
                    Email
                  </p>
                  <p className="text-lg font-semibold break-all">
                    rentals@banksialondon.com
                  </p>
                </div>
              </a>

              <a
                href="tel:01268538971"
                className="group flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-6 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#F16232]" />
                </div>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-wide text-white/70">
                    Phone
                  </p>
                  <p className="text-lg font-semibold">01268 538971</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;