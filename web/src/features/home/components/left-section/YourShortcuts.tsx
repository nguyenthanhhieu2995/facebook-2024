import { useState } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/utils/cn'
import Image from '@/components/Image'
import avatar from '@/assets/images/avatar.jpeg'
import { ChevronDown, ChevronUp } from 'lucide-react'

const MENUS = [
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  },
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  },
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  },
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  },
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  },
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  },
  {
    label: 'Son Tung MTP',
    link: '#',
    icon: <Image src={avatar} alt="avatar" className="size-9 rounded-lg object-cover" />
  }
]

interface NavbarProps {
  className?: string
}

function YourShortcuts({ className }: NavbarProps) {
  const [isToggle, setIsToggle] = useState(false)
  return (
    <div className={cn('px-3', className)}>
      <h4 className="py-1 font-semibold text-gray-500"> Your shortcuts</h4>
      {MENUS.map((menu, item) => {
        let isHidden = false
        const id = crypto.randomUUID()
        if (!isToggle && item > 3) {
          isHidden = true
        }
        return (
          <div key={id}>
            <Link
              to={menu.link}
              className={cn('flex items-center gap-4 rounded-lg p-2 font-semibold hover:bg-gray-200', {
                hidden: isHidden
              })}
            >
              {menu.icon}
              {menu.label}
            </Link>
          </div>
        )
      })}
      <div
        className="group/item relative flex flex-row items-center gap-4 rounded-xl p-2 font-normal hover:bg-gray-200"
        onClick={() => setIsToggle(!isToggle)}
      >
        <div className="flex items-center rounded-full bg-gray-200 p-2.5 group-hover/item:bg-gray-300">
          {isToggle ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </div>
        <h4 className="text-wrap font-semibold">{'Show More'}</h4>
      </div>
    </div>
  )
}
export default YourShortcuts
