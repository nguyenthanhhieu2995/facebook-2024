import FeatureIconV16 from '@/components/feature-icons/FeatureIconV16'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import FeatureIconV5 from '@/components/feature-icons/FeatureIconV5'
import FeatureIconV6 from '@/components/feature-icons/FeatureIconV6'
import { cn } from '@/utils/cn'
import { Link } from 'react-router-dom'

interface LeftBarFriendsProps {
  className?: string
}

function LeftBarFriends({ className }: LeftBarFriendsProps) {
  const MENUS = [
    {
      title: 'Home',
      icon: <FeatureIconV6 name="Group" />,
      path: '/friends'
    },
    {
      title: 'Friend Requests',
      icon: <FeatureIconV16 name="FriendsRequests" />,
      path: '/friends/requests',
      directIcon: <FeatureIconV5 name="ArrowRight" />
    },
    {
      title: 'Suggestions',
      icon: <FeatureIconV16 name="FriendSuggestions" />,
      path: '/friends/suggestions',
      directIcon: <FeatureIconV5 name="ArrowRight" />
    },
    {
      title: 'All Friends',
      icon: <FeatureIconV16 name="AllFriends" />,
      path: '/friends/all',
      directIcon: <FeatureIconV5 name="ArrowRight" />
    },
    {
      title: 'Birthdays',
      icon: <FeatureIconV5 name="Gift" size="size-5" />,
      path: '/friends/birthdays'
    },
    {
      title: 'Custom Lists',
      icon: <FeatureIconV16 name="AllFriends" />,
      path: '/friends/custom-lists',
      directIcon: <FeatureIconV5 name="ArrowRight" />
    }
  ]
  return (
    <div className={cn('h-[100dvh] overflow-y-auto bg-white px-2 shadow-thin', className)}>
      <div className="border-gray-300 px-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Friends</h1>
          <div className="flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <FeatureIconV3 name="SettingAndPrivacy" />
          </div>
        </div>
      </div>
      <div className="my-2">
        {MENUS.map(menu => (
          <Link
            to={menu.path}
            key={menu.title}
            className={cn('group flex flex-row items-baseline justify-between gap-2 rounded-lg p-2 hover:bg-gray-200', {
              'bg-gray-200': location.pathname === menu.path
            })}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn('flex rounded-full bg-gray-200 p-2 group-hover:bg-gray-300', {
                  'bg-amber-600 invert group-hover:bg-amber-600': location.pathname === menu.path
                })}
              >
                {menu.icon}
              </div>
              <div className="grow font-semibold">{menu.title}</div>
            </div>
            <div className="scale-75">{menu.directIcon}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default LeftBarFriends
