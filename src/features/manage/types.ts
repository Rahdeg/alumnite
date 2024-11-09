import { z } from "zod";
import { Role } from "@/configs/types";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.nativeEnum(Role, { errorMap: () => ({ message: "Invalid role" }) }),
  status: z.boolean().default(true), // Use boolean for the switch
  profileImage: z.instanceof(File).optional(),
});

export const editUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.nativeEnum(Role, { errorMap: () => ({ message: "Invalid role" }) }),
  status: z.boolean().default(true), // Use boolean for the switch
  profileImage: z.union([z.instanceof(File), z.string()]).optional(),
});
