import { User } from '@/apis/user'
import Image from '@/components/Image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import global from '@/assets/images/global.png'
import friend from '@/assets/images/friend.png'
import friendExcept from '@/assets/images/friend-except.png'
import specificFriend from '@/assets/images/specific-friend.png'
import lock from '@/assets/images/lock.png'
import setting from '@/assets/images/setting.png'

export const POST_AUDIENCE_OPTIONS = [
  {
    title: 'Public',
    description: 'Anyone on or off Facebook',
    icon: <Image src={global} alt={global} />
  },
  {
    title: 'Friends',
    description: 'Your friends on Facebook',
    icon: <Image src={friend} alt={friend} />
  },
  {
    title: 'Friends except...',
    description: 'Your friends on Facebook except...',
    icon: <Image src={friendExcept} alt={friendExcept} />
  },
  {
    title: 'Specific friends',
    description: 'Specific friends on Facebook',
    icon: <Image src={specificFriend} alt={specificFriend} />
  },
  {
    title: 'Only me',
    icon: <Image src={lock} alt={lock} />
  },
  {
    title: 'Setting',
    description: 'Include and exclude friends and lists',
    icon: <Image src={setting} alt={setting} />
  }
]

interface UserInfoProps {
  onClick: () => void
  data: User | undefined
}

export default function UserInfo({ data, onClick }: UserInfoProps) {
  //const { me } = useOutletContext<{ me: User }>()
  //console.log(me)
  return (
    <div className="group relative my-3 flex flex-row items-center rounded-xl px-4 font-normal">
      <div className="flex-none">
        <Image className="size-10 rounded-full" src={data?.avatar} alt={data ? data.fullName : ''} />
      </div>
      <div className="flex flex-col pl-2">
        <h4 className="font-semibold text-black">{data?.fullName}</h4>
        <Button onClick={onClick} variant="secondary" size={'xs'} className="my-1 flex w-fit flex-row gap-1 p-1">
          <div className="size-4">{POST_AUDIENCE_OPTIONS[0].icon}</div>
          <p className="text-xs">{POST_AUDIENCE_OPTIONS[0].title}</p>
          <ChevronDown className="size-4" />
        </Button>
      </div>
    </div>
  )
}
