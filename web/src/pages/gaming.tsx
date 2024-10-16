import LeftBarGroups from '@/features/groups/left-section/LeftBarGroups'
import { Outlet } from 'react-router-dom'

export default function Gaming() {
  return (
    <div className="bg-gray-100">
      <LeftBarGroups className="fixed w-90 flex-col pt-4" />
      <div className="ml-90 h-screen pt-4">
        <Outlet />
      </div>
    </div>
  )
}
