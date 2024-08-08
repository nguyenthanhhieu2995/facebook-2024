
import { Outlet } from 'react-router-dom'
import LeftBarFriends from '@/containers/left-section/LeftBarFriends'

export default function FriendsLayout() {
  return (
    <div className="bg-gray-100">
      <LeftBarFriends className="fixed w-full flex-col pt-4 lg:w-90" />
      <div className="ml-90 h-screen pt-4 lg:block hidden">
        <Outlet />
      </div>
    </div>
  )
}
