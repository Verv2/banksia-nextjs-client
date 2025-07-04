"use server";

import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";

export const getAllProperties = async (queryParams: Record<string, string>) => {
  try {
    const { data } = await axiosInstance.get("/auth/get-properties", {
      params: queryParams,
    });

    return { data: data.data, meta: data.meta };
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.response?.data || axiosError.message);
    const errorMessage =
      (axiosError.response?.data as { message?: string })?.message ||
      axiosError.message;

    throw new Error(errorMessage);
  }
};

export const getSingleProperty = async (propertyId: string) => {
  try {
    const { data } = await axiosInstance.get(`/properties/${propertyId}`);

    return data.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.log(axiosError.response?.data || axiosError.message);

    throw new Error("Failed to fetch the data");
  }
};
