import { Outlet } from 'react-router-dom'
import LoginHeader from '@/containers/header/LoginHeader'

export default function LoginLayout() {
  return (
    <div className="min-h-screen bg-gray-300">
      <LoginHeader />
      <Outlet />
    </div>
  )
}
