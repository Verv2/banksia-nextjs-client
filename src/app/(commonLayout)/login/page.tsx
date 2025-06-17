"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
import arthurLogo from "../../../assets/logos/arthur-logo.jpg";
import { useState } from "react";
import { getArthurAuth } from "@/actions/auth.action";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const loginUrl = await getArthurAuth();
      console.log("Fetched Leave Requests:", loginUrl);

      window.location.href = loginUrl;
    } catch (error) {
      console.error("Login with Arthur failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 -mt-10">
      <Card className="w-full max-w-sm shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-center mb-4">
            <Image
              src={arthurLogo}
              alt="Arthur Logo"
              width={150}
              height={56}
              className="h-14 w-auto"
            />
          </div>
          <Button
            variant="outline"
            className="w-full h-12 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
            onClick={handleLogin}
            disabled={loading}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-colorPrimary rounded-full">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-gray-700">Login with Arthur</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
