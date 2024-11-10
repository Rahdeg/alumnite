import { z } from "zod";
import { Role } from "@/configs/types";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.nativeEnum(Role, { errorMap: () => ({ message: "Invalid role" }) }),
  status: z.boolean().default(true),
  profileImage: z
    .union([z.instanceof(File), z.string()])
    .optional()
    .refine(
      (value) =>
        typeof value === "string" || !value || value.size <= 1024 * 1024, // Only check size if it's a File
      {
        message: "Profile image must be less than 1 MB",
      }
    ),
});
