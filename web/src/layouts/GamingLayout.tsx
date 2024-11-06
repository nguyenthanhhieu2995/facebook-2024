import LeftBarGaming from '@/features/gaming/left-section/LeftBarGaming'
import { Outlet } from 'react-router-dom'

export default function GamingLayout() {
  return (
    <div className="bg-gray-100">
      <LeftBarGaming className="fixed w-90 flex-col pt-4" />
      <div className="ml-90 h-screen pt-4">
        <Outlet />
      </div>
    </div>
  )
}