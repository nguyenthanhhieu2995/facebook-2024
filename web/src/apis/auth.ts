import { request } from '@/helpers/request'

interface LoginDto {
  email: string
  password: string
}

interface SignUpDto {
  email: string
  password: string
  firstName: string
  lastName: string
}

interface IdentifyAccountDto {
  email: string
}

interface ResetPasswordDto {
  email: string
}

interface NewPasswordDto {
  newPassword: string
  accessToken: string
}

export const login = async ({ email, password }: LoginDto) => {
  const res = await request.post('/login', {
    email,
    password
  })
  return res.data
}

export const signUp = async ({ email, password, firstName, lastName }: SignUpDto) => {
  const res = await request.post('/sign-up', {
    email,
    password,
    firstName,
    lastName
  })
  return res.data
}

export const checkIdentifyAccount = async ({ email }: IdentifyAccountDto) => {
  const res = await request.post('/login/identify', {
    email
  })
  return res.data
}

export const sendResetPasswordLink = async ({ email }: ResetPasswordDto) => {
  const res = await request.post(`/login/reset-password`, {
    email
  })
  return res.data
}

export const updatePassword = async ({ newPassword, accessToken }: NewPasswordDto) => {
  const res = await request.post('/login/new-password', {
    newPassword,
    accessToken
  })
  return res.data
}
