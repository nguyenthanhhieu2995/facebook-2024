import { create } from 'zustand'

interface CreatePostState {
    isCreatePostOpen: boolean
    onOpenCreatePost:() => void
    onCloseCreatePost:() => void
    onToggleCreatePost:() => void
}

export const useCreatePost = create<CreatePostState>(set => ({
    isCreatePostOpen: false,
    onOpenCreatePost: () => set(() => ({ isCreatePostOpen: true })),
    onToggleCreatePost: () => set(state => ({ isCreatePostOpen: !state.isCreatePostOpen })),
    onCloseCreatePost: () => set(() => ({ isCreatePostOpen: false }))
  }))
  