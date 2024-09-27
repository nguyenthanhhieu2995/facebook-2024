import { Link } from 'react-router-dom'
import Image from '../components/Image'
import { X } from 'lucide-react'

interface AccountItemProps {
  image: string
  name: string
  username: string
}
function SearchItem({ image, name, username }: AccountItemProps) {
  return (
    <Link
      to={`/@${username}`}
      className="group flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100"
    >
      <Image className="mr-4 inline-block size-10 rounded-full" src={image} alt={name} />
      <div className="w-full text-sm">
        <p className="overflow-hidden overflow-ellipsis font-bold">{name}</p>
        <p className="text-xs text-gray-400">{username}</p>
      </div>
      <X className="size-5" />
    </Link>
  )
}

export default SearchItem
