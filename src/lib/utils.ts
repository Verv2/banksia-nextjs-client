import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function searchParamsToObject(searchParams: URLSearchParams) {
  const params: Record<string, string> = {};
  for (const [key, value] of searchParams.entries()) {
    if (value) {
      params[key] = value;
    }
  }
  return params;
}
