import avatar from '@/assets/images/avatar.jpeg'
import Image from '@/components/Image'
import { Button } from '@/components/ui/button'
export default function FriendItem() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <Image className="max-w-52 rounded-t-lg" src={avatar} alt={avatar} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Son Tung</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">2 mutual friends</p>
        <div className="flex flex-col gap-2">
          <Button className="w-full" size={'sm'}>
            Add Friend
          </Button>
          <Button variant={'secondary'} className="w-full" size={'sm'}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
