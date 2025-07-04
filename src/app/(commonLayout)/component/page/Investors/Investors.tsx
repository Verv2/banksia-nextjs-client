import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Calculator,
  Clock,
  Mail,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

const Investors = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none text-lg px-6 py-2">
              Investment Opportunities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let Your Capital Grow with{" "}
              <span className="text-[#F16232]">Banksia</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Property backed placements focused on high yield multi occupancy
              HMO and serviced accommodation projects that can deliver up to{" "}
              <span className="text-[#F16232] font-bold">7% each year*</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Investor Relations
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Savings Climate */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Current Savings Climate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional savings accounts are failing to keep pace with
                inflation and economic growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Traditional Savings
                  </h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    0.5%
                  </div>
                  <p className="text-gray-600 mb-4">Average return after tax</p>
                  <p className="text-sm text-gray-500">
                    On a balance of £50,000 an ordinary easy access account
                    returns roughly £200 after tax
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-[#F16232] text-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Banksia Investment
                  </h3>
                  <div className="text-4xl font-bold mb-2">Up to 7%*</div>
                  <p className="text-white/90 mb-4">Target yearly return</p>
                  <p className="text-sm text-white/80">
                    Property-backed investments with potential for significant
                    capital growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Proposition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible investment terms designed to meet your financial goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Target Return
                  </h3>
                  <p className="text-2xl font-bold text-[#F16232] mb-1">
                    2% - 7%*
                  </p>
                  <p className="text-sm text-gray-600">Yearly return</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Minimum</h3>
                  <p className="text-2xl font-bold text-[#F16232] mb-1">
                    £20,000
                  </p>
                  <p className="text-sm text-gray-600">Initial placement</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Maximum</h3>
                  <p className="text-2xl font-bold text-[#F16232] mb-1">
                    £1,000,000
                  </p>
                  <p className="text-sm text-gray-600">Investment limit</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#F16232]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-[#F16232]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Terms</h3>
                  <p className="text-2xl font-bold text-[#F16232] mb-1">
                    12+ months
                  </p>
                  <p className="text-sm text-gray-600">Flexible duration</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Now?
              </h2>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    With policymakers discussing negative base rates, holding
                    cash could soon become costly. Demand for quality shared
                    living and flexible stays is rising fast while existing
                    stock lags behind.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Banksia secures long leases on underused properties then
                    refurbishes them into high specification HMOs or serviced
                    accommodation delivering robust rental streams and potential
                    capital uplift.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Tailor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How We Tailor Each Offer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#F16232]/10 rounded-full flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-[#F16232]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Dedicated Specialist
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Every investor is paired with a dedicated specialist who
                      aligns your timeframe, risk appetite, and income goals
                      with our live pipeline of refurbishment projects.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Funds remain in a secure client account until drawdown,
                      ensuring your capital is protected throughout the process.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F16232] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Risk Assessment
                    </h4>
                    <p className="text-gray-600">
                      We evaluate your risk tolerance and investment objectives
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F16232] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Project Matching
                    </h4>
                    <p className="text-gray-600">
                      Match you with suitable projects from our active pipeline
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#F16232] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Secure Placement
                    </h4>
                    <p className="text-gray-600">
                      Funds held securely until project drawdown begins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-[#F16232]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Next Steps</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Email our investor relations team for a personalised illustration
              and immediate access to the latest opportunities.
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
                      investors@banksia.com
                    </p>
                  </div>

                  <div className="hidden md:block w-px h-16 bg-gray-200"></div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get Personalised Illustration
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Risk Disclaimer integrated at bottom */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-start justify-center space-x-3 max-w-3xl mx-auto">
                <AlertTriangle className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80 text-center leading-relaxed">
                  *Capital is at risk. Projected returns vary with amount
                  invested and term. Not covered by the Financial Services
                  Compensation Scheme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
