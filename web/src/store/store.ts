import { create } from 'zustand'

interface StoreState {
    contentPostHeader: string
    setContentPostHeader: (value:string) => void
}

const useStore = create<StoreState>()((set) => ({
    contentPostHeader: '',
    setContentPostHeader: (value:string) => set({ contentPostHeader: value }),
}))
export default useStore