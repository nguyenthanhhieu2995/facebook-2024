import Image from '@/components/Image'
import camera from '@/assets/images/camera.png'
import smile from '@/assets/images/smile.png'
import { Button } from '@/components/ui/button'
import picture from '@/assets/images/picture.png'
import CreatePost, { Position } from '../components/post-header/CreatePost'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import useStore from '@/store/store'
import { useOutletContext } from 'react-router-dom'
import { User } from '@/apis/user'
function PostHeader() {
  const { me } = useOutletContext<{ me: User}>()
  const contentPostHeader = useStore((state) => state.contentPostHeader)
  const setContentPostHeader = useStore((state) => state.setContentPostHeader)
  return (
    <div className={'w-125 justify-self-center rounded-lg bg-white px-4 pb-2.5 pt-3 shadow-md'}>
      <div className="flex items-center gap-2 text-lg">
        <Avatar className="size-10 cursor-pointer">
          <AvatarImage src={me?.avatar} />
          <AvatarFallback>
            <span className="sr-only">Loading...</span>
          </AvatarFallback>
        </Avatar>
        <CreatePost
          data={me}
          handleContentPostHeader={setContentPostHeader}
          trigger={
            <Button
              className="flex w-full min-w-72 justify-start rounded-full p-2.5 text-lg font-normal text-gray-500"
              variant="secondary"
            >
              <p className="pl-2">
                {contentPostHeader ? contentPostHeader : `${me?.fullName}, what's on your mind?`}
              </p>
            </Button>
          }
        />
      </div>
      <div className="my-2 border-b border-gray-300" />
      <div className="flex w-full cursor-pointer items-center">
        <Button size={'default'} variant={'ghost'} className="basis-1/3 items-center gap-2">
          <Image src={camera} alt="camera" />
          <p>Live Video</p>
        </Button>
        <CreatePost
          data={me}
          handleContentPostHeader={setContentPostHeader}
          isAddPhoto
          trigger={
            <Button size={'default'} variant="ghost" className="basis-1/3 items-center gap-2">
              <Image src={picture} alt="picture" />
              <p>Photo/Video</p>
            </Button>
          }
        />
        <CreatePost
          data={me}
          handleContentPostHeader={setContentPostHeader}
          currentPosition={Position.FeelingActivity}
          trigger={
            <Button size={'default'} variant={'ghost'} className="basis-1/3 items-center gap-2">
              <Image src={smile} alt="feeling" />
              <p>Feeling/activity</p>
            </Button>
          }
        />
      </div>
    </div>
  )
}

export default PostHeader
