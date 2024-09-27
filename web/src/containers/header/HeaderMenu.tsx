import { Bell, Messenger, Menu } from '@/assets/svgs'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import DashboardMenu from './DashboardMenu'
import MessengerMenu from './MessengerMenu'
import NotificationDropDown from './NotificationMenu'
import AccountMenu from './AccountMenu'
import { memo } from 'react'

const MENUS = [
  {
    title: 'Menu',
    icon: <Menu className="size-5" />,
    dropdown: <DashboardMenu />
  },
  {
    title: 'Message',
    icon: <Messenger className="size-5" />,
    dropdown: <MessengerMenu />
  },
  {
    title: 'Notification',
    icon: <Bell className="size-5" />,
    dropdown: <NotificationDropDown />
  }
]

function HeaderMenu() {
  return (
    <div className="flex items-center gap-2 pr-4">
      {MENUS.map(menu => (
        <Popover key={menu.title}>
          <PopoverTrigger asChild>
            <div className="group relative flex cursor-pointer items-center rounded-full bg-gray-200 p-2.5 hover:bg-gray-300">
              {menu.icon}
              <div className="absolute -right-2 -top-1.5 flex size-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
                3
              </div>
              <div className="absolute -bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-lg bg-gray-700 p-1 text-xs text-white group-hover:block">
                {menu.title}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full shadow-3xl">{menu.dropdown}</PopoverContent>
        </Popover>
      ))}
      <AccountMenu />
    </div>
  )
}

export default memo(HeaderMenu)
