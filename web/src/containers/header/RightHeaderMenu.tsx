import AccountMenu from './AccountMenu'
import { memo } from 'react'
import Dashboard from './Dashboard'
import Messenger from './Messenger'
import Notifications from './Notifications'

function HeaderMenu() {
  return (
    <div className="flex items-center gap-2 pr-4">
      <Dashboard />
      <Messenger />
      <Notifications />
      <AccountMenu />
    </div>
  )
}

export default memo(HeaderMenu)
