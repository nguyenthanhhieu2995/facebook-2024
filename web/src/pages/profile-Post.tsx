import { Button } from '@/components/ui/button'
import Post from '@/features/home/components/post/Post'
import PostHeader from '@/features/home/containers/PostHeader'
import PostList from '@/features/home/containers/PostList'
import { Home, Clock, MapPin, SlidersHorizontal, Settings, AlignJustify, Grid2X2 } from 'lucide-react'
export default function ProfilePost() {
  return (
    <div className="mx-auto grid w-full grid-cols-5 gap-4 px-10 pt-4 md:w-11/12 lg:w-5/6 xl:w-3/5">
      <div className="col-span-5 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-thin xl:col-span-2 h-fit">
        <h1 className="text-xl font-bold">Intro</h1>
        <Button variant={'secondary'} size={'sm'} className="w-full">
          Add bio
        </Button>
        <div className="flex items-center gap-2">
          <Home size={16} />
          <p>Live in London, UK</p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <p>From London, UK</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <p>Joined on 02.02.2022</p>
        </div>
        <Button variant={'secondary'} size={'sm'} className="w-full">
          Edit details
        </Button>
        <Button variant={'secondary'} size={'sm'} className="w-full">
          Edit featured
        </Button>
      </div>
      <div className="col-span-3 hidden h-fit flex-col gap-4 *:w-full *:rounded-lg *:bg-white *:shadow-thin xl:flex">
        <PostHeader showName={false} />
        <div className="pt-3">
          <div className="flex items-center justify-between px-3 pb-3">
            <h1 className="text-xl font-bold">Posts</h1>
            <div className="flex items-center gap-2 *:gap-2">
              <Button variant={'secondary'} size={'sm'} className="w-full">
                <SlidersHorizontal size={16} />
                Filters
              </Button>
              <Button variant={'secondary'} size={'sm'} className="w-full">
                <Settings size={16} />
                Manage Posts
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center border-t border-gray-300 px-3 py-1 *:w-full *:gap-2 *:text-gray-600">
            <Button variant={'ghost'} size={'default'} >
              <AlignJustify size={16} />
              List View
            </Button>
            <Button variant={'ghost'} size={'default'}>
              <Grid2X2 size={16} />
              Grid View
            </Button>
          </div>
        </div>
        <PostList />
      </div>
    </div>
  )
}
