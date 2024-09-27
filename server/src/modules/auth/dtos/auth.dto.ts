import { z } from "zod";
import { errorMessages } from "@/lib/messages";
export const forgotPasswordDto = z.object({
  email: z
    .string({ required_error: errorMessages.email })
    .email({
      message: errorMessages.invalidEmail,
    }),
});

export const signInDto = z.object({
  email: z
    .string({ required_error: errorMessages.email })
    .email({
      message: errorMessages.invalidEmail,
    }),
  password: z
    .string({ required_error: errorMessages.invalidPassword })
    .min(6, { message: errorMessages.password }),
});

export const signUpDto = z.object({
  email: z
    .string({ required_error: errorMessages.email })
    .email({
      message: errorMessages.invalidEmail,
    }),
  password: z
    .string({ required_error: errorMessages.invalidPassword })
    .min(6, { message: errorMessages.password }),
  firstName: z
    .string({ required_error: errorMessages.firstName })
    .min(2, { message: errorMessages.minFirstName }),
  lastName: z
    .string({ required_error: errorMessages.lastName })
    .min(2, { message: errorMessages.minLastName }),
});

export const resetPasswordDto = z.object({
  password: z
    .string({ required_error: errorMessages.invalidPassword })
    .min(6, { message: errorMessages.password }),
  confirmPassword: z
    .string({ required_error: errorMessages.invalidPassword })
    .min(6, { message: errorMessages.password }),
});