import { create } from 'zustand'

export enum Position {
  Root,
  TagPeople,
  FeelingActivity,
  Gif,
  ShowMore,
  CheckIn,
  PostAudience
}

interface PositionStore {
  position: Position
  setPosition: (position: Position) => void
  textContentCreatePost: string
  setTextContentCreatePost: (content: string) => void
}

export const usePositionStore = create<PositionStore>(set => ({
  position: Position.Root,
  textContentCreatePost: '',
  setPosition: (position: Position) => set({ position }),
  setTextContentCreatePost: (content: string) => set({ textContentCreatePost: content })
}))
