
import { Bell } from '@/assets/svgs'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useState } from 'react'
import NotificationsDropdown from './NotificationsDropdown'



export default function Notifications() {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="group relative flex cursor-pointer items-center rounded-full bg-gray-200 p-2.5 hover:bg-gray-300">
          <Bell className="size-5" />
          <div className="absolute -right-2 -top-1.5 flex size-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
            3
          </div>
          <div className="absolute -bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-lg bg-gray-700 p-1 text-xs text-white group-hover:block">
            Notifications
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full shadow-3xl">
        <NotificationsDropdown />
      </PopoverContent>
    </Popover>
  )
}