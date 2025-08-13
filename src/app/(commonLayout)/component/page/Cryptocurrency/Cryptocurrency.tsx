"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Bitcoin,
  CheckCircle,
  Clock,
  Coins,
  CreditCard,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

const Cryptocurrency = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<
    "bitcoin" | "ethereum" | null
  >(null);
  const [propertyAddress, setPropertyAddress] = useState("");
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[position:50%_20%] opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#F16232] hover:bg-[#F16232]/90 text-white border-none text-lg px-6 py-2">
              Cryptocurrency
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pay Your Rent in <span className="text-[#F16232]">Crypto</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              True financial freedom with Bitcoin & Ethereum payments
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Staying with Banksia now comes with true financial freedom
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We accept Bitcoin (BTC) and Ethereum (ETH) for every monthly rent
              payment so you can pay from anywhere in the world, 24/7, without
              the friction of cards or bank transfers.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fast & Border-Free
                </h3>
                <p className="text-gray-600 text-sm">
                  Blockchain settlement clears without weekend or holiday delays
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 text-sm">
                  Live market rate locked for 15 minutes, shielding you from
                  swings
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Lower Fees
                </h3>
                <p className="text-gray-600 text-sm">
                  Skip card processing charges and hidden international bank
                  costs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Privacy & Security
                </h3>
                <p className="text-gray-600 text-sm">
                  Processed through Coinbase Commerce, recorded immutably on
                  chain
                </p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Enter Address
                </h3>
                <p className="text-gray-600 text-sm">
                  Input your Banksia property address in the checkout form
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Choose Crypto
                </h3>
                <p className="text-gray-600 text-sm">
                  Select Bitcoin or Ethereum as your payment method
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Lock Rate
                </h3>
                <p className="text-gray-600 text-sm">
                  See exact crypto amount equaling your GBP rent, locked for 15
                  minutes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F16232] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Scan & Pay
                </h3>
                <p className="text-gray-600 text-sm">
                  Scan QR code or copy wallet address to confirm payment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Confirmed
                </h3>
                <p className="text-gray-600 text-sm">
                  Network confirms, rent status flips to Paid automatically
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="mb-16">
            <Card className="max-w-2xl mx-auto border-2 border-[#F16232] shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-[#F16232] to-[#E55527] text-white rounded-t-lg">
                <CardTitle className="text-2xl">Ready to Pay?</CardTitle>
                <p className="text-orange-100">
                  Enter your property address and choose your cryptocurrency
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Banksia Property Address
                    </label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="e.g., 123 London Street, London SW1A 1AA"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Choose Cryptocurrency
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedCrypto === "bitcoin"
                            ? "border-2 border-[#F16232] bg-orange-50"
                            : "border-2 border-gray-200 shadow-lg hover:border-[#F16232] hover:shadow-xl"
                        }`}
                        onClick={() => setSelectedCrypto("bitcoin")}
                      >
                        <CardContent className="p-6 text-center">
                          <Bitcoin className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Bitcoin
                          </h3>
                          <p className="text-sm text-gray-600">BTC</p>
                        </CardContent>
                      </Card>

                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedCrypto === "ethereum"
                            ? "border-2 border-[#F16232] bg-orange-50"
                            : "border-2 border-gray-200 shadow-lg hover:border-[#F16232] hover:shadow-xl"
                        }`}
                        onClick={() => setSelectedCrypto("ethereum")}
                      >
                        <CardContent className="p-6 text-center">
                          <Coins className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Ethereum
                          </h3>
                          <p className="text-sm text-gray-600">ETH</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[#F16232] hover:bg-[#E55527] text-white py-5 text-lg font-semibold cursor-pointer"
                    disabled={!propertyAddress || !selectedCrypto}
                  >
                    Continue to Payment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 py-16 -mx-4 px-4 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do you accept credit or debit cards?
                  </h3>
                  <p className="text-gray-600">
                    No. Banksia is a crypto-only rent platform. We believe
                    blockchain payments offer the speed, transparency and global
                    reach modern renters expect.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which cryptocurrencies are supported?
                  </h3>
                  <p className="text-gray-600">
                    We currently support BTC (Bitcoin) and ETH (Ethereum) only.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is there an extra fee for paying in crypto?
                  </h3>
                  <p className="text-gray-600">
                    The only cost is the standard network (gas) fee your wallet
                    shows at checkout. Banksia adds zero processing fees.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Will I receive a receipt?
                  </h3>
                  <p className="text-gray-600">
                    Yes. A blockchain transaction ID and a PDF receipt are
                    emailed automatically once your payment is confirmed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Security Banner */}
          {/* <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4">
                <Lock className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">
                  Powered by Coinbase Commerce
                </span>
                <Receipt className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Enterprise-Grade Security
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All transactions are processed through Coinbase Commerce&apos;s
              secure infrastructure and recorded immutably on the blockchain for
              complete transparency and security.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cryptocurrency;
