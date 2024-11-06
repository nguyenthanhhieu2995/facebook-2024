import { z } from "zod";

export const updateMeDto = z.object({
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    avatar: z.string().nullable(),
})