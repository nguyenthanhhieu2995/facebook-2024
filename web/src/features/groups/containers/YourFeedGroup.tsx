import { Ellipsis, X, MessageSquare, ThumbsUp, MessageSquareShare } from 'lucide-react'
import Like from '@/assets/svgs/like.svg?react'
import Heart from '@/assets/svgs/heart.svg?react'
import avatar from '@/assets/images/avatar.jpeg'
import { Button } from '@/components/ui/button'
import Image from '@/components/Image'
import HoverCardInfo from '@/components/HoverCardInfo'
import PopoverMoreMenu from '../components/PopoverMoreMenu'
import { User } from '@/apis/user'
import { useOutletContext } from 'react-router-dom'

function YourFeedGroup() {
  const {me} = useOutletContext<{ me: User }>()
  return (
    <div className="grid place-content-center">
      <div className='ml-4 xl:w-170 lg:w-152'>
        <p className="mb-2 text-sm font-semibold text-gray-600">Recent activity</p>
        <div className=" flex flex-col space-y-2 rounded-lg bg-white shadow-md">
          <div className="px-3 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <HoverCardInfo owner={me} trigger={<Image src={avatar} alt="User Avatar" className="size-10 rounded-full" />} />
                <div>
                  <HoverCardInfo
                    owner={me}
                    trigger={<p className="cursor-pointer font-semibold text-gray-800 hover:underline">Son Tung</p>}
                  />
                  <p className="cursor-pointer text-xs text-gray-600">Posted 2 hours ago</p>
                </div>
              </div>
              <div className="cursor-pointer pr-1 text-gray-600">
                <PopoverMoreMenu
                  postId='1'
                  trigger={
                    <Button className="rounded-full p-2" variant={'ghost'}>
                      <Ellipsis className="size-6" />
                    </Button>
                  }
                />
                <Button className="rounded-full p-2" variant={'ghost'}>
                  <X className="size-6" />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-gray-800">Just another day with adorable kittens! 🐱 </p>
              <a href="#cute-kitten" className="text-primary">
                #CuteKitten
              </a>{' '}
              <a href="#adventure-cat" className="text-primary">
                #AdventureCat
              </a>
            </div>
          </div>
          <div>
            <Image src={avatar} alt="Post Image" className="w-full border-gray-300 object-cover" />
          </div>
          <div className="flex items-center justify-between px-5 text-sm text-gray-600">
            <div className="flex items-center justify-center">
              <Like className="z-10 -mr-1 size-5 rounded-full border-2 border-white" />
              <Heart className="size-5 rounded-full border-2 border-white" />
              <p className="cursor-pointer px-2">42 Likes</p>
            </div>
            <div className="flex cursor-pointer items-center justify-center gap-1">
              <p>9 Comments</p>
            </div>
          </div>
          <div className="px-4">
            <div className="my-1 border-b border-gray-300" />
            <div className="flex justify-around children:flex children:grow children:items-center children:justify-center children:gap-1 children:font-semibold children:text-gray-600">
              <Button className="hover:bg-gray-100" variant={'ghost'} size={'sm'}>
                <ThumbsUp className="size-5" />
                Like
              </Button>
              <Button className="hover:bg-gray-100" variant={'ghost'} size={'sm'}>
                <MessageSquare className="size-5" />
                Comment
              </Button>
              <Button className="hover:bg-gray-100" variant={'ghost'} size={'sm'}>
                <MessageSquareShare className="size-5" />
                Share
              </Button>
            </div>
            <div className="my-1 border-b border-gray-300" />
            <div className="mt-4">
              <div className="my-2 flex space-x-1">
                <Image src={avatar} alt="User Avatar" className="size-6 rounded-full" />
                <div className="w-fit rounded-3xl bg-gray-100 px-4 py-2">
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-sm text-gray-600">Lovely shot!</p>
                </div>
              </div>
  
              <div className="my-2 flex space-x-1">
                <Image src={avatar} alt="User Avatar" className="size-6 rounded-full" />
                <div className="w-fit rounded-3xl bg-gray-100 px-4 py-2">
                  <p className="font-semibold text-gray-800">Bob Johnson</p>
                  <p className="text-sm text-gray-600">{`I can't handle the cuteness! Where can I get one?`} </p>
                </div>
              </div>
  
              <div className="my-2 flex space-x-1">
                <Image src={avatar} alt="User Avatar" className="size-6 rounded-full" />
                <div className="w-fit rounded-3xl bg-gray-100 px-4 py-2">
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-600">
                    That little furball is from a local shelter. You should check it out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourFeedGroup
