import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "error_email" }),
  password: z
    .string()
    .min(8, { message: "error_password" })
    .regex(/[0-9]/, { message: "error_password" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "error_password",
    }),
});

export type LoginForm = z.infer<typeof loginSchema>;
