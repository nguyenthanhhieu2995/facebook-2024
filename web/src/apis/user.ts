import requestSearch, { request } from '@/helpers/request'

export const getSearchUser = async (inputSearch: string, type = 'less') => {
  const res = await requestSearch.get('/users/search', {
    params: {
      q: inputSearch,
      type
    }
  })
  return res.data
}

export interface User {
  fullName: string
  avatar: string
}

export const getMe = async () => {
  const res = await request.get<User>('/users/me')
  return res.data
}
