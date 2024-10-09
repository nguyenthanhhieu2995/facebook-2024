import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email is not valid!' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters!' })
})

export const registerSchema = z.object({
  firstName: z.string().min(1, { message: 'First name must not be empty!' }),
  lastName: z.string().min(1, { message: 'Last name must not be empty!' }),
  email: z.string().email({ message: 'Email is not valid!' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters!' })
})

export const createPostSchema = z.object({
  content: z.string().min(1, { message: 'Content must not be empty!' }),
  title: z.string().min(1, { message: 'Title must not be empty!' }),
  images: z.array(z.string())
})

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Email is not valid!' })
})

export const resetPasswordSchema = z.object({
  type: z.enum(['sendLink', 'enterCurrentPassword'])
})

export const newPasswordSchema = z
  .object({
    newPassword: z.string().min(6, { message: 'Password must be at least 6 characters!' }),
    confirmNewPassword: z.string().min(6, { message: 'Password must be at least 6 characters!' })
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmNewPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password and confirm password do not match!',
        path: ['confirmNewPassword']
      })
    }
  })
