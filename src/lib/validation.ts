import { z } from "zod";

const requiredString = z.string().trim().min(1, "This field is required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, underscores, and hyphens are allowed"
  ),
  password: requiredString.min(
    8,
    "Password must be at least 8 characters long"
  ),
});

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type signUpValues = z.infer<typeof signUpSchema>;
export type loginValues = z.infer<typeof loginSchema>;
