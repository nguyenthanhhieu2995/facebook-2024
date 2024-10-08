import { request } from '@/helpers/request'
import { type User } from '@/apis/user'

export interface Comment {
  id: number
  content: string
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Post {
  id: number
  title: string
  content: string
  likes: number
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

interface CreatePostDto {
  content: string
  images: string[]
}

export const getPosts = async ({ pageParam }: { pageParam: number }) => {
  const res = await request.get(`/posts?page=${pageParam}&limit=${3}`)

  return res.data.items
}

export const createPost = async (data: CreatePostDto) => {
  const res = await request.post('/posts', data)
  return res.data
}
