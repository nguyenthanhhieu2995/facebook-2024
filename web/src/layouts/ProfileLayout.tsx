import { User } from '@/apis/user'
import ProfileHeader from '@/components/ProfileHeader'
import { Outlet, useOutletContext } from 'react-router-dom'

export default function ProfileLayout() {
  const { me } = useOutletContext<{ me: User }>()
  return (
    <div className=" bg-gray-100">
      <ProfileHeader />
      <Outlet context={{ me }} />
    </div>
  )
}
