import Image from '@/components/Image'
import camera from '@/assets/images/camera.png'
import smile from '@/assets/images/smile.png'
import { Button } from '@/components/ui/button'
import picture from '@/assets/images/picture.png'
import CreatePost from '../components/create-post'
import { useOutletContext } from 'react-router-dom'
import { User } from '@/apis/user'
import { Position, usePositionStore } from '@/features/home/stores/position'
import { useCreatePost } from '@/features/home/stores/post'
import { cn } from '@/utils/cn'

interface PostHeaderProps {
  className?: string
  showName?: boolean
}
function PostHeader({ className, showName = true }: PostHeaderProps) {
  const { me } = useOutletContext<{ me: User }>()
  const { isCreatePostOpen, onToggleCreatePost, onCloseCreatePost, onOpenCreatePost } = useCreatePost()
  const textContentCreatePost = usePositionStore(state => state.textContentCreatePost)
  const setPosition = usePositionStore(state => state.setPosition)
  return (
    <div className={cn('w-125 justify-self-center rounded-lg bg-white px-4 pb-2.5 pt-3 shadow-md', className)}>
      <div className="flex items-center gap-2 text-lg">
        <Image src={me?.avatar} alt="User Avatar" className="size-10 rounded-full object-cover" />
        <Button
          className="flex w-full min-w-72 justify-start rounded-full p-2.5 text-lg font-normal text-gray-500"
          variant="secondary"
          onClick={onOpenCreatePost}
        >
          <p className="pl-2">
            {showName
              ? (textContentCreatePost
                ? textContentCreatePost
                : `${me?.firstName} ${me?.lastName}, what's on your mind?`)
              : "What's on your mind?"}
          </p>
        </Button>
      </div>
      <div className="my-2 border-b border-gray-300" />
      <div className="grid w-full cursor-pointer grid-cols-3 items-center">
        <Button size={'default'} variant={'ghost'} className="col-span-1 items-center gap-2">
          <Image src={camera} alt="camera" className="min-w-6" />
          <p>Live Video</p>
        </Button>
        <Button size={'default'} variant="ghost" className="col-span-1 items-center gap-2" onClick={onOpenCreatePost}>
          <Image src={picture} alt="picture" className="min-w-6" />
          <p>Photo/Video</p>
        </Button>
        <Button
          size={'default'}
          variant={'ghost'}
          className="col-span-1 items-center gap-2"
          onClick={() => {
            setPosition(Position.FeelingActivity)
            onOpenCreatePost()
          }}
        >
          <Image src={smile} alt="feeling" className="min-w-6" />
          <p>Feeling/activity</p>
        </Button>
      </div>
      <CreatePost
        open={isCreatePostOpen}
        onOpenChange={onToggleCreatePost}
        onCreatePostSuccess={onCloseCreatePost}
        data={me}
      />
    </div>
  )
}

export default PostHeader
