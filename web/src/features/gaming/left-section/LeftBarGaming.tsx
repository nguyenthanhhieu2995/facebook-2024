import FeatureIconV19 from "@/components/feature-icons/FeatureIconV19"
import FeatureIconV21 from "@/components/feature-icons/FeatureIconV21"
import FeatureIconV3 from "@/components/feature-icons/FeatureIconV3"
import Search from "@/components/Search"
import { cn } from "@/utils/cn"
import { Link, useLocation } from "react-router-dom"


interface LeftBarGamingProps {
    className?: string
}
export default function LeftBarGaming({className} : LeftBarGamingProps) {
    const MENUS = [
        {
            title: 'Play Games',
            icon: <FeatureIconV21 name="Game" />,
            path: '/gaming/play'
        },
        {
            title: 'Gaming Activity',
            icon: <FeatureIconV21 name="User" />,
            path: '/gaming/me'
        },
        {
            title: 'Notifications',
            icon: <FeatureIconV19 name="Bell" />,
            path: '/gaming/notifications'
        }
    ]


    const location = useLocation()
  return (
    <div className={cn('h-[100dvh] overflow-y-auto bg-white px-2 shadow-thin', className)}>
      <div className="border-gray-300 px-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Gaming</h1>
          <div className="flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <FeatureIconV3 name="SettingAndPrivacy" />
          </div>
        </div>
        <Search className="px-0 py-1 text-base" placeholderValue="Search gaming" paddingInput="py-1.5" />
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
          </Link>
        ))}
      <div className="my-2 border-b border-gray-300" />
      </div>
    </div>
  )
}
