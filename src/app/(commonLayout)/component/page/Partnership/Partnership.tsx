import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Home,
  Mail,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const Partnership = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1637094408647-0d81d08f81b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none text-lg px-6 py-2">
              Partnership Opportunities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Grow With <span className="text-[#F16232]">Banksia</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Transform your property into a profitable serviced accommodation
              or HMO with our comprehensive partnership program. From analysis
              to management, we handle everything.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
              >
                Get Property Analysis
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Unlock the{" "}
                <span className="text-[#F16232]">Serviced Living Market</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                If you own a house or apartment that could shine as short stay
                HMO or serviced accommodation, Banksia can turn that potential
                into reliable earnings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-6">
                      <BarChart3 className="w-8 h-8 text-[#F16232]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Full Service Approach
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We analyse the nightly and monthly revenue you could
                      achieve, plan the fit out and even handle the
                      refurbishment from start to finish.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">
                          Revenue analysis & projections
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">
                          Professional fit-out planning
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">
                          Complete refurbishment management
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border-none shadow-lg bg-[#F16232] text-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Hands-Off Route</h3>
                    <p className="text-white/90 leading-relaxed mb-6">
                      Prefer a hands off route? We can lease the property
                      straight away so you start earning sooner.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="text-white/90">
                          Immediate lease agreements
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="text-white/90">
                          Start earning right away
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="text-white/90">
                          Zero management hassle
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4 text-lg"
              >
                Get Your Property Analyzed
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Choose Your Partnership Model
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Two flexible options designed to match your investment goals and
                risk appetite
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1 - Performance Management */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#F16232]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-[#F16232]" />
                    </div>
                    <Badge className="bg-[#F16232] text-white mb-4">
                      Option 1
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Performance Management
                    </h3>
                    <p className="text-gray-600">
                      Revenue share model with full property ownership
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Zero set up headache
                        </h4>
                        <p className="text-sm text-gray-600">
                          We photograph, list and price your property on
                          multiple platforms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          End to end guest care
                        </h4>
                        <p className="text-sm text-gray-600">
                          Bookings, check ins, cleaning, linen and compliance
                          are covered
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Monthly payout
                        </h4>
                        <p className="text-sm text-gray-600">
                          You keep full ownership and receive income that rises
                          with occupancy while utilities remain in your name
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <Button className="w-full bg-[#F16232] hover:bg-[#F16232]/90 text-white">
                    Choose Performance Model
                  </Button> */}
                </CardContent>
              </Card>

              {/* Option 2 - Guaranteed Rent */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#F16232] text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-white text-[#F16232] mb-4">
                      Option 2
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">Guaranteed Rent</h3>
                    <p className="text-white/90">
                      Fixed monthly income with zero hassle
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">
                          Fixed monthly income
                        </h4>
                        <p className="text-sm text-white/80">
                          Banksia signs an agreement from one year and pays the
                          same rent every month, bookings or not
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">
                          Bills on us
                        </h4>
                        <p className="text-sm text-white/80">
                          We or our occupants cover utilities, council tax and
                          broadband protecting you from cost shocks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">
                          Weekly upkeep
                        </h4>
                        <p className="text-sm text-white/80">
                          Professional cleaning and routine maintenance keep
                          your asset in peak condition
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <Button className="w-full bg-white text-[#F16232] hover:bg-white/90">
                    Choose Guaranteed Rent
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partners Choose Banksia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Partners Choose Banksia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional expertise and established relationships that
                maximize your property&apos;s potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Expert Refurb Teams
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expert refurb teams that elevate tired homes into high yield
                    HMOs or stylish serviced suites
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Local Authority Contracts
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Contracts in place with local authorities for social housing
                    placements providing dependable occupancy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Insurance Relationships
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Relationships with insurance relocation providers securing
                    long stay bookings when households need emergency
                    accommodation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Transparent Reporting
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transparent reporting with live dashboards so you can track
                    revenue and occupancy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    National Coverage
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    National coverage and growing demand for flexible quality
                    accommodation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    Quality Standards
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Professional corporate landlord operations ensuring
                    consistent quality and compliance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk */}
      <section className="py-20 bg-[#F16232]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you prefer a revenue share model, a fixed lease or a
              blended arrangement, our team will tailor a proposal that suits
              your goals and risk profile. We are actively adding partner and
              landlord properties across the United Kingdom.
            </p>

            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F16232]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-[#F16232]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-[#F16232] font-semibold">
                      partners@banksialondon.com
                    </p>
                  </div>

                  <div className="hidden md:block w-px h-16 bg-gray-200"></div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get Tailored Proposal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer integrated at bottom */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-start justify-center space-x-3 max-w-3xl mx-auto">
                <AlertTriangle className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 text-center leading-relaxed">
                  Banksia operates as a professional corporate landlord.
                  Earnings may vary in the performance model. Capital
                  investments in refurbishments can be agreed on a project by
                  project basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
