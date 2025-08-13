"use server";

import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";

export const getArthurAuth = async () => {
  try {
    const { data } = await axiosInstance.get("/auth/arthur");
    return data.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    const message =
      (axiosError.response?.data as { message?: string })?.message ||
      axiosError.message;

    console.error("Failed to fetch leave requests:", message);
    throw new Error(message);
  }
};

export const getAccessToken = async (code: { code: string }) => {
  try {
    const { data } = await axiosInstance.post("/auth/token", code);

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.log(axiosError.response?.data || axiosError.message);
    const errorMessage =
      (axiosError.response?.data as { message?: string })?.message ||
      axiosError.message;

    throw new Error(errorMessage);
  }
};

// code=1e9066bd3c1be6e986862dec6ca9ca25eb76f6bc&state=random_generated_state
