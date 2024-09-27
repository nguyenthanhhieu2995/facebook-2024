import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/components/Image'
import { Button } from '@/components/ui/button'
import { Ellipsis } from 'lucide-react'

function MessengerItem() {
  return (
    <div className="group relative flex flex-row items-center rounded-xl p-2 font-normal hover:bg-gray-200 has-[button:hover]:bg-white">
      <div className="flex-none">
        <Image className="size-14 rounded-full" src={avatar} alt={avatar} />
        <div onClick={() => console.log('clicked')} className="absolute -bottom-2 -right-2" />
      </div>
      <div className="flex grow flex-col overflow-hidden pl-2">
        <h4 className="truncate font-semibold">FPT Software Innovation Career | FPT University</h4>
        <p className="truncate">Hot JOBS cơ hội cho ứng viên được tham gia các dự án lớn</p>
      </div>
      <div className="size-3 flex-none rounded-full bg-primary"></div>
      <Button className="absolute right-5 z-20 hidden -translate-x-5 rounded-full border border-gray-300 bg-white p-1.5 text-xs text-gray-600 hover:bg-gray-100 group-hover:block">
        <Ellipsis />
      </Button>
    </div>
  )
}

export default MessengerItem
