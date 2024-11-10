import { Role } from "@/configs/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return (
    Date.now().toString(36) + Math.random().toString(36).substring(2, 10)
  ).toUpperCase();
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export const roleConfig = {
  [Role.Admin]: {
    icon: "FaUserShield",
    label: "Admin",
  },
  [Role.User]: {
    icon: "FaUser",
    label: "User",
  },
  [Role.Guest]: {
    icon: "FaUserAltSlash",
    label: "Guest",
  },
};
