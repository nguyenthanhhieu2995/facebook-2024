import { cn } from '@/utils/cn'
import GroupsItem from './GroupsItem'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import FeatureIconV16 from '@/components/feature-icons/FeatureIconV16'
import FeatureIconV17 from '@/components/feature-icons/FeatureIconV17'
import FeatureIconV6 from '@/components/feature-icons/FeatureIconV6'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import Search from '@/components/Search'
import { Button } from '@/components/ui/button'
interface NavbarProps {
  className?: string
}
function LeftBarGroups({ className }: NavbarProps) {
  const navigate = useNavigate()
  const MENUS = [
    {
      title: 'Your Feed',
      icon: <FeatureIconV16 name="YourFeed" />,
      path: '/groups/feed'
    },
    {
      title: 'Discover',
      icon: <FeatureIconV17 name="Compass" />,
      path: '/groups/discover'
    },
    {
      title: 'Your Groups',
      icon: <FeatureIconV6 name="Group" />,
      path: '/groups/joins'
    }
  ]

  const location = useLocation()

  return (
    <div className={cn('h-[100dvh] overflow-y-auto bg-white px-2 shadow-thin', className)}>
      <div className="border-b border-gray-300 px-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Groups</h1>
          <div className="flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <FeatureIconV3 name="SettingAndPrivacy" />
          </div>
        </div>
        <Search className="px-0 py-1 text-base" placeholderValue="Search groups" paddingInput="py-1.5" />
      </div>
      <div className="no-scrollbar my-2 flex h-[76vh] flex-col overflow-auto px-2">
        {MENUS.map(menu => (
          <Link
            to={menu.path}
            key={menu.title}
            className={cn('group flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-gray-200', {
              'bg-gray-200': location.pathname === menu.path
            })}
          >
            <div
              className={cn('flex rounded-full bg-gray-200 p-2 group-hover:bg-gray-300', {
                'bg-amber-600 invert group-hover:bg-amber-600': location.pathname === menu.path
              })}
            >
              {menu.icon}
            </div>
            <div className="grow font-semibold">{menu.title}</div>
          </Link>
        ))}
        <Button variant={'success'} className="mt-2 gap-2" onClick={() => navigate('/groups/create')}>
          <Plus />
          Create new group
        </Button>

        <div className="my-2 border-b border-gray-300" />
        <div>
          <div className="flex flex-row items-center justify-between">
            {' '}
            <h3 className="px-2 pb-2 font-bold">{`Groups you've joined`}</h3>
            <p className="cursor-pointer p-2 tracking-tighter text-primary hover:bg-gray-200">See all</p>
          </div>
          <GroupsItem />
          <GroupsItem />
          <GroupsItem />
          <GroupsItem />
        </div>
        <div className="my-2 border-b border-gray-300" />
        <div>
          <div className="flex flex-row items-center justify-between">
            {' '}
            <h3 className="px-2 pb-2 font-bold">{`Groups you've joined`}</h3>
            <p className="cursor-pointer p-2 tracking-tighter text-primary hover:bg-gray-200">See all</p>
          </div>
          <GroupsItem />
          <GroupsItem />
          <GroupsItem />
          <GroupsItem />
        </div>
      </div>
    </div>
  )
}

export default LeftBarGroups
