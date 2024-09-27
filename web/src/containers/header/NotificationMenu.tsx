import { useState } from 'react'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import NotificationItem from './NotificationItem'

function NotificationDropDown() {
  const [View, setView] = useState({ all: true, notRead: false })
  return (
    <div className="w-90 rounded-xl bg-white p-2 pr-0 text-sm font-semibold text-gray-900 shadow-2xl">
      <div className="mx-2 mb-2 flex items-center justify-between px-2 font-bold">
        <h1 className="text-2xl">Notification</h1>
        <div className="relative flex cursor-pointer items-center rounded-full p-1.5 text-gray-200 opacity-70 hover:bg-gray-100">
          <FeatureIconV3 name="Ellipsis" />
        </div>
      </div>
      <div className="mx-2 flex items-center gap-2 px-2">
        <p
          onClick={() => setView({ all: true, notRead: false })}
          className={cn('min-w-12 cursor-pointer rounded-full p-2 text-center hover:bg-gray-100', {
            'bg-blue-50 text-primary hover:bg-blue-100': View.all
          })}
        >
          All
        </p>
        <p
          onClick={() => setView({ all: false, notRead: true })}
          className={cn('cursor-pointer rounded-full p-2 text-center hover:bg-gray-100', {
            'bg-blue-50 text-primary hover:bg-blue-100': View.notRead
          })}
        >
          Not read
        </p>
      </div>
      <div className="mb-2 gap-2 px-3">
        <div className="flex items-center justify-between">
          <h3>New</h3>
          <Link to="/notifications" className="p-2 font-normal text-primary hover:bg-gray-100">
            Show all
          </Link>
        </div>
        <div className="-mx-2 max-h-[72vh] overflow-auto">
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </div>
      </div>
    </div>
  )
}

export default NotificationDropDown
