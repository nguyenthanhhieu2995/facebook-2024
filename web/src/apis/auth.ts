import {request} from '@/helpers/request'

interface LoginDto {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginDto) => {
  const res = await request.post('/login', {
    email,
    password
  })
  return res.data
}

export const signUp = async (email: string, password: string) => {
  const res = await request.post('/sign-up', {
    email,
    password
  })
  return res.data
}
