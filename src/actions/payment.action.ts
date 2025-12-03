/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/axios";

type TPayload = {
  name: string;
  description: string;
  pricing_type: string;
  local_price: {
    amount: string;
    currency: string;
  };
};

export type TChargeResponse = {
  success: boolean;
  message: string;
  data: { hosted_url: string };
};

// export const createCoinbaseCharge = async (
//   payload: TPayload
// ): Promise<TChargeResponse> => {
//   try {
//     const { data } = await axiosInstance.post(
//       "/coinbase/create-charge",
//       payload
//     );

//     return data as TChargeResponse;
//   } catch (error) {
//     const axiosError = error as AxiosError;
//     console.log(axiosError.response?.data || axiosError.message);
//     throw new Error(
//       (axiosError.response?.data as any)?.message || "Failed to create charge"
//     );
//   }
// };

export const getCheckouts = async () => {
  try {
    const response = await axiosInstance.get(
      "https://api.commerce.coinbase.com/checkouts",
      {
        headers: {
          "X-CC-Api-Key": envConfig.coinbaseApiKey as string,
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching checkouts:", error);
    throw error;
  }
};

export const createCharge = async (payload: TPayload) => {
  try {
    const res = await axiosInstance.post(
      "https://api.commerce.coinbase.com/charges",
      payload,
      {
        headers: {
          "X-CC-Api-Key": envConfig.coinbaseApiKey as string,
          "X-CC-Version": "2018-03-22",
        },
      }
    );

    return res.data?.data?.hosted_url;
  } catch (err: any) {
    const msg =
      err?.response?.data?.error?.message ||
      err?.message ||
      "Unknown error creating charge";
    console.error("Coinbase createCharge error:", msg, err?.response?.data);
    throw new Error(msg);
  }
};
