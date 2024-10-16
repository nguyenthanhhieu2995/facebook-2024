import { Ellipsis, SearchIcon } from 'lucide-react'
import FriendRequestItem from './FriendRequestItem'
import ContactItem from './ContactItem'

function RightSection() {
  return (
    <div
      style={{ width: '-webkit-fill-available' }}
      className="no-scrollbar fixed z-0 flex h-[90dvh] flex-col space-y-1 overflow-y-auto pl-4 pr-2 children:justify-between children:border-b children:border-gray-300 children:pb-3"
    >
      <div className="flex flex-row items-center justify-between px-2">
        <h4 className="font-semibold text-gray-600">Your Pages and profiles</h4>
        <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
          <Ellipsis className="size-4" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex w-full flex-row items-center justify-between px-2">
          <h4 className="font-semibold text-gray-600">Friend requests</h4>
          <p className="cursor-pointer p-2 tracking-tighter text-primary hover:bg-gray-200">See all</p>
        </div>
        <div className="w-full">
          <FriendRequestItem />
          <FriendRequestItem />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full flex-row items-center justify-between px-2">
          <h4 className="font-semibold text-gray-600">Contacts</h4>
          <div className="flex space-x-3">
            <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
              <SearchIcon className="size-4" />
            </div>
            <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
              <Ellipsis className="size-4" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="my-1 flex w-full flex-row items-center justify-between px-2">
          <h4 className="font-semibold text-gray-600">Your community chats</h4>
        </div>
        <div className="w-full">
          <ContactItem />
          <ContactItem />
        </div>
      </div>
    </div>
  )
}

export default RightSection
