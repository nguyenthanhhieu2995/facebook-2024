import { useState } from 'react'

import { cn } from '@/utils/cn'
import MessengerItem from './MessengerItem'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import FeatureIconV9 from '@/components/feature-icons/FeatureIconV9'
import Search from '@/components/Search'

function MessengerDropdown() {
  const [View, setView] = useState({ inbox: true, notRead: false })
  return (
    <div className="b w-90 overflow-hidden rounded-xl bg-white p-2 pr-0 text-sm font-semibold text-gray-900">
      <div className="mx-2 mb-1 flex items-center justify-between px-2 font-bold">
        <h1 className="text-2xl">Message</h1>
        <div className="flex items-center space-x-3 children:relative children:flex children:cursor-pointer children:items-center children:rounded-full children:p-1.5 children:opacity-60">
          <div className="hover:bg-gray-100">
            <FeatureIconV3 name="Ellipsis" />
          </div>
          <div className="hover:bg-gray-100">
            <FeatureIconV9 name="ShowAll" />
          </div>
          <div className="hover:bg-gray-100">
            <FeatureIconV9 name="NewMessage" size="size-4" />
          </div>
        </div>
      </div>
      <Search className="px-4 py-2" placeholderValue="Search on Messenger" />
      <div className="mx-2 flex items-center gap-2 px-2 pb-2">
        <p
          onClick={() => setView({ inbox: true, notRead: false })}
          className={cn('min-w-12 cursor-pointer rounded-full p-2 text-center hover:bg-gray-100', {
            'bg-blue-50 text-primary hover:bg-blue-100': View.inbox
          })}
        >
          Inbox
        </p>
        <p
          onClick={() => setView({ inbox: false, notRead: true })}
          className={cn('cursor-pointer rounded-full p-2 text-center hover:bg-gray-100', {
            'bg-blue-50 text-primary hover:bg-blue-100': View.notRead
          })}
        >
          Community
        </p>
      </div>
      <div className="mx-1 max-h-[62vh] gap-2 overflow-auto">
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
        <MessengerItem />
      </div>
      <div className="mx-6 cursor-pointer border-t-2 border-gray-300 py-2 text-center text-primary hover:underline">
        Show all in Messenger
      </div>
    </div>
  )
}

export default MessengerDropdown
