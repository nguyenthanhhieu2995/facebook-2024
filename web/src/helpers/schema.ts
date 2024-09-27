import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email is not valid!' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters!' })
})

export const createPostSchema = z.object({
  content: z.string().min(1, { message: 'Content must not be empty!' }),
  images: z.array(z.string())
})
