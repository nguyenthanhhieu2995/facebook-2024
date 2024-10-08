import {  getMe } from '@/apis/user'
import { useQuery } from '@tanstack/react-query'

export const useGetMe = () =>
  useQuery({
    queryKey: ['me'],
    queryFn: () => getMe()
  })

