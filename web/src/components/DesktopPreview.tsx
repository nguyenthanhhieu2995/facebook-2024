import { Monitor, Smartphone } from 'lucide-react'
import banner from '@/assets/images/group-banner.png'
import Image from './Image'
import PostHeaderGroupCreate from './PostHeaderGroupCreate'
import { useState } from 'react'
import { cn } from '@/utils/cn'

export default function DesktopPreview() {
  const [smartPhoneView, setSmartPhoneView] = useState(false)
  return (
    <div
      className={cn(
        'relative mx-6 mb-8 h-[86dvh] max-w-243 overflow-hidden rounded-lg bg-white px-4 py-2 pb-4 pt-2 shadow-thin',
        {
          'w-141': smartPhoneView
        }
      )}
    >
      <h4 className="mb-6 font-semibold">Desktop Preview</h4>
      <div className="absolute right-2 top-2 flex items-center text-gray-500">
        <div className="rounded-full p-2 hover:bg-gray-200" onClick={() => setSmartPhoneView(false)}>
          <Monitor size={24} />
        </div>
        <div className="rounded-full p-2 hover:bg-gray-200" onClick={() => setSmartPhoneView(true)}>
          <Smartphone size={24} />
        </div>
      </div>
      <div className="h-[76dvh] overflow-y-scroll opacity-60">
        <div className="rounded-t-lg border border-gray-300">
          <Image src={banner} alt="banner" className="w-full rounded-lg grayscale" />
          <div className="border-b border-gray-400 p-4 py-6">
            <h1 className="mb-2 text-3xl font-bold">Group name</h1>
            <p>
              Group privacy . <span>1.2k members</span>
            </p>
          </div>
          <div className="flex-start flex flex-row items-center gap-4 children:cursor-not-allowed children:p-4 children:text-sm children:font-semibold">
            <div>About</div>
            <div>Posts</div>
            <div>Members</div>
            <div>Events</div>
          </div>
        </div>
        <div
          className={cn(
            'grid grid-cols-5 gap-4 rounded-b-lg border-x border-b border-gray-300 bg-gray-100 p-4 children:rounded-lg children:bg-white children:shadow-thin',
            {
              'grid-cols-1 gap-0': smartPhoneView
            }
          )}
        >
          <div
            className={cn('col-span-5 xl:col-span-3', {
              'col-span-1': smartPhoneView
            })}
          >
            <PostHeaderGroupCreate />
          </div>
          <div
            className={cn('hidden h-1/2 p-4 font-bold xl:col-span-2 xl:block', {
              'mt-4 block h-fit w-full': smartPhoneView
            })}
          >
            About
          </div>
        </div>
      </div>
    </div>
  )
}
