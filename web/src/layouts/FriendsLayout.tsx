import { Outlet } from 'react-router-dom'
import LeftBarFriends from '@/features/friends/left-section/LeftBarFriends'

export default function FriendsLayout() {
  return (
    <div className="bg-gray-100">
      <LeftBarFriends className="fixed w-full flex-col pt-4 lg:w-90" />
      <div className="ml-90 hidden h-screen pt-4 lg:block">
        <Outlet />
      </div>
    </div>
  )
}
