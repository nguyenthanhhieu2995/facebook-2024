import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/components/Image'

export default function GroupsItem() {
  return (
    <div className="flex flex-row items-center gap-1 rounded-xl p-2 text-sm hover:bg-gray-200">
      <div className="flex-none">
        <Image className="size-12 rounded-xl" src={avatar} alt={avatar} />
      </div>
      <div className="flex grow flex-col overflow-hidden pl-2">
        <h4 className="truncate text-sm font-semibold">Thông tin tuyển dụng tại huế</h4>
        <p className="truncate text-xs">Last active 13 hours ago</p>
      </div>
    </div>
  )
}
