import { z } from "zod";

const String = z.string().trim()
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


export const profileFormSchema = z.object({
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, underscores, and hyphens are allowed"
  ),
  email: requiredString.email("Invalid email address"),
  password: String,
})

export const taskSchema = z.object({
  taskName: requiredString,
  startingTime: z.coerce.date(),
  deadline: z.coerce.date(),
  status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
});


export type signUpValues = z.infer<typeof signUpSchema>;
export type loginValues = z.infer<typeof loginSchema>;
export type ProfileFormValues = z.infer<typeof profileFormSchema>
export type taskValues = z.infer<typeof taskSchema>