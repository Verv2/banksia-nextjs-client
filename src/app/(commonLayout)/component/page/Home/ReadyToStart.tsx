import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

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
      </div>
    </div>
  );
};

export default ReadyToStart;
