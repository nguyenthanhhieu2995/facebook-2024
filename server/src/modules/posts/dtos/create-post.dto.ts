import { z } from "zod";

export const createPostDto = z.object({
  content: z.string({
    required_error: "Content is required",
  }),
  images: z.array(z.string()),
});
