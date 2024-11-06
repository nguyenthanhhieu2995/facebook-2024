import { request } from '@/helpers/request'
import { type User } from '@/apis/user'

export interface Comment {
  id: number
  content: string
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Like {
  id: number
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Post {
  id: string
  title: string
  content: string
  likes: Like[]
  image?: string
  owner: User
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
  const res = await request.post<Post>('/posts', data)
  return res.data
}

export const deletePost = async (id: string) => {
  const res = await request.delete(`/posts/${id}`)
  return res.data
}

export const likePost = async (id: string) => {
  const res = await request.put(`/posts/${id}/like`)
  return res.data
}