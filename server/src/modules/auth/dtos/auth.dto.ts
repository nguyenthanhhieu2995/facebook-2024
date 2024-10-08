import { z } from "zod";
import { errorMessages } from "@/lib/messages";
export const identifyAccountDto = z.object({
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

export const newPasswordDto = z.object({
  newPassword: z
    .string({ required_error: errorMessages.invalidPassword })
    .min(6, { message: errorMessages.password }),
  accessToken: z.string({ required_error: "Access token is required" }),
});
