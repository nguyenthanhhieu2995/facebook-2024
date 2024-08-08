import { User } from '@/apis/user'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface AvatarWithIconProps {
  Icon: JSX.Element
  data: User | undefined
}
function AvatarWithIcon({ data, Icon }: AvatarWithIconProps) {
  return (
    <div className="group relative w-14">
      <Avatar className="size-14 cursor-pointer">
        <AvatarImage src={data?.avatar} />
        <AvatarFallback>
          <span className="sr-only">Loading...</span>
        </AvatarFallback>
      </Avatar>
      <div className="absolute -bottom-2 -right-2">{Icon}</div>
    </div>
  )
}

export default AvatarWithIcon
