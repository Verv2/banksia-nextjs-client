import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

const ReadyToStart = () => {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto mt-20">
      {/* Bottom CTA */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Start your journey today with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#F16232] hover:bg-[#F16232]/90 text-white px-8 py-4"
            onClick={() => router.push("/investors")}
          >
            Become an investor
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#F16232] text-[#F16232] hover:bg-[#F16232] hover:text-white px-8 py-4 bg-transparent"
            onClick={() => router.push("/partnership")}
          >
            Make a partnership
          </Button>
        </div>

        {/* Google reviews link */}
        <a
          href={siteConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-medium text-gray-700 hover:text-[#F16232] transition-colors"
        >
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          Read our reviews on Google
        </a>
      </div>
    </div>
  );
};

export default ReadyToStart;
