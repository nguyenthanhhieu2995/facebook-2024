import { Link, useLocation, useOutletContext } from 'react-router-dom'
import Image from './Image'
import { Button } from './ui/button'
import { Camera, ChevronDown, Pen, Plus } from 'lucide-react'
import { cn } from '@/utils/cn'
import { User } from '@/apis/user'

export default function ProfileHeader() {
  const MENUS = [
    { name: 'Posts', path: '/profile' },
    { name: 'About', path: '/profile/about' },
    { name: 'Friends', path: '/profile/friends' },
    { name: 'Photos', path: '/profile/photos' },
    { name: 'Videos', path: '/profile/videos' },
    { name: 'Reels', path: '/profile/reels' },
    { name: 'More', path: '/profile/more', icon: <ChevronDown size={16} /> }
  ]
  const location = useLocation()
  const {me} = useOutletContext<{ me: User }>()
  
  return (
    <div className="mx-auto h-fit w-full bg-white px-20 shadow-thin">
      <Image
        src={me?.avatar}
        alt="profile"
        className="relative mx-auto h-87 w-[940px] cursor-pointer rounded-b-lg object-cover hover:brightness-90"
      >
        <Button
          size="sm"
          variant={'outline'}
          className="absolute bottom-0 left-3/4 flex -translate-x-1/3 -translate-y-1/2 gap-2"
        >
          <Camera />
          Edit cover photo
        </Button>
      </Image>
      <div className="z-10 mx-auto  md:w-11/12 lg:w-5/6 xl:w-3/5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 place-items-center gap-2 py-2">
          <div className="size-42 relative lg:-mt-8 -mt-24">
            <Image
              src={me?.avatar}
              alt="avatar"
              className="size-42 relative cursor-pointer rounded-full border-4 border-white object-cover hover:brightness-90"
            />
            <Button
              variant={'destructive'}
              size={'icon'}
              className="absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4 p-2 hover:bg-gray-400"
            >
              <Camera />
            </Button>
          </div>
          <div className="lg:col-span-2 grid lg:place-items-start place-items-center gap-2 lg:pt-8 xl:pl-4">
            <h1 className="text-4xl font-bold">{me?.firstName+" "+me?.lastName}</h1>
            <p className="text-sm font-semibold text-gray-600"> 512 friends </p>
          </div>

          <div className="lg:col-span-2 flex items-center justify-end gap-2">
            <Button variant={'default'} className="flex items-center gap-1">
              <Plus size={16} />
              Add Story
            </Button>
            <Button variant={'secondary'} className="flex items-center gap-1">
              <Pen size={16} />
              Edit profile
            </Button>
            <Button variant={'secondary'} className="flex items-center gap-1">
              <ChevronDown size={16} />
            </Button>
          </div>
        </div>
        <div className="flex items-center border-t border-gray-300 py-1">
          {MENUS.map((menu, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                to={menu.path}
                className={cn('border-b-4 border-transparent', {
                  'border-b-primary *:text-primary': location.pathname === menu.path
                })}
              >
                <Button variant={'ghost'} className="flex items-center gap-1">
                  {menu.name}
                  {menu.icon}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
