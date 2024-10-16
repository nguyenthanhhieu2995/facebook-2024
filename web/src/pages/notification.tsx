import NotificationItem from '@/containers/header/NotificationItem'
import { cn } from '@/utils/cn'
import { useState } from 'react'

function Notification() {
  const [View, setView] = useState({ all: true, unRead: false })
  return (
    <div className="bg-gray-100 pt-8">
      <div className="mx-auto max-w-[75ch] rounded-md bg-white p-4 shadow-thin">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="my-4 flex items-center gap-2">
          <p
            onClick={() => setView({ all: true, unRead: false })}
            className={cn('min-w-12 cursor-pointer rounded-full p-2 text-sm text-center font-semibold hover:bg-gray-100', {
              'bg-blue-50 text-primary hover:bg-blue-100': View.all
            })}
          >
            All
          </p>
          <p
            onClick={() => setView({ all: false, unRead: true })}
            className={cn('cursor-pointer rounded-full p-2 text-center text-sm font-semibold hover:bg-gray-100', {
              'bg-blue-50 text-primary hover:bg-blue-100': View.unRead
            })}
          >
            Not read
          </p>
        </div>
        <div>
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

export default Notification
