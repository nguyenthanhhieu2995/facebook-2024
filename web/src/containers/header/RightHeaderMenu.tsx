import { Bell, MessengerIcon, Menu } from '@/assets/svgs'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import AccountMenu from './AccountMenu'
import { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashboardDropdown from './DashboardDropdown'
import MessengerDropdown from './MessengerDropdown'
import NotificationDropdown from './NotificationsDropdown'
import Dashboard from './Dashboard'
import Messenger from './Messenger'
import Notifications from './Notifications'

const MENUS = [
  {
    title: 'Menu',
    icon: <Menu className="size-5" />,
    dropdown: <DashboardDropdown />
  },
  {
    title: 'Messenger',
    icon: <MessengerIcon className="size-5" />,
    dropdown: <MessengerDropdown />
  },
  {
    title: 'Notifications',
    icon: <Bell className="size-5" />,
    dropdown: <NotificationDropdown  />
  }
]

function HeaderMenu() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return (
    <div className="flex items-center gap-2 pr-4">
      <Dashboard/>
      <Messenger/>
      <Notifications/>
      <AccountMenu />
    </div>
  )
}

export default memo(HeaderMenu)
