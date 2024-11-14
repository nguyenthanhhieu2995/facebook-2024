import { Ellipsis, X, MessageSquare, ThumbsUp, MessageSquareShare } from 'lucide-react'
import Like from '@/assets/svgs/like.svg?react'
import Heart from '@/assets/svgs/heart.svg?react'
import HoverCardInfo from '@/components/HoverCardInfo'
import PopoverMoreMenu from '@/features/groups/components/PopoverMoreMenu'
import { Button } from '@/components/ui/button'
import Image from '@/components/Image'

import { likePost, type Post as IPost } from '@/apis/post'
import Comment from './Comment'
import { formatDistanceToNow } from 'date-fns'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { cn } from '@/utils/cn'

interface PostProps {
  post: IPost
  className?: string
}

function Post({ post, className }: PostProps) {
  const myLike = post.likes.find(like => like.user.id === post.owner.id)
  console.log(myLike)
  const queryClient = useQueryClient()
  const likeMutation = useMutation({
    mutationFn: likePost,
    onSuccess: data => {
      console.log(data.liked)
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      toast.success('Like post successfully')
    }
  })
  const updatedAt = new Date(post.updatedAt)
  const distanceToNow = formatDistanceToNow(updatedAt, { addSuffix: true })
  return (
    <div className={cn('mb-2 flex w-125 flex-col space-y-2 rounded-lg bg-white shadow-md', className)}>
      <div className="px-3 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HoverCardInfo
              owner={post.owner}
              trigger={
                <Image src={post.owner?.avatar} alt="User Avatar" className="size-10 rounded-full object-cover" />
              }
            />
            <div>
              <HoverCardInfo
                owner={post.owner}
                trigger={
                  <p className="cursor-pointer font-semibold text-gray-800 hover:underline">
                    {post.owner.firstName + ' ' + post.owner.lastName}
                  </p>
                }
              />
              <p className="cursor-pointer text-xs text-gray-700">Posted {distanceToNow}</p>
            </div>
          </div>
          <div className="cursor-pointer pr-1 text-gray-700">
            <PopoverMoreMenu
              postId={post.id}
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
          <p className="text-gray-800">{post.content}</p>
        </div>
      </div>
      <div>{<Image src={post.image} alt="Post Image" className="max-h-80 w-full border-gray-300 object-cover" />}</div>
      <div className="flex items-center justify-between px-5 text-sm text-gray-700">
        <div className="flex cursor-pointer items-center justify-center">
          <Like className="z-10 -mr-1 size-5 rounded-full border-2 border-white" />
          <Heart className="size-5 rounded-full border-2 border-white" />
          <p className="px-2"> {post.likes.length} Likes</p>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-1">
          <p> {post.comments?.length} Comments</p>
        </div>
      </div>
      <div className="px-4">
        <div className="my-1 border-b border-gray-300" />
        <div className="flex justify-around children:flex children:grow children:items-center children:justify-center children:gap-1 children:font-semibold children:text-gray-600">
          <Button
            className="hover:bg-gray-100"
            variant={'ghost'}
            size={'sm'}
            onClick={() => likeMutation.mutate(post.id)}
          >
            <ThumbsUp className={cn('size-5', { 'text-blue-500 fill-blue-500': myLike })} />
            <p className={cn({ 'text-blue-500': myLike })}>Like</p>
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
        <div className="mt-4">{post.comments?.map(comment => <Comment key={comment.id} comment={comment} />)}</div>
      </div>
    </div>
  )
}

function PostSkeleton() {
  return (
    <div data-testid="post-skeleton" className="mb-2 flex w-125 flex-col space-y-2 rounded-lg bg-white shadow-md">
      <div className="p-4 px-3">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="size-10 rounded-full bg-gray-200" />
            <div className="h-4 w-28 rounded-md bg-gray-200" />
            <div className="h-4 w-28 rounded-md bg-gray-200" />
          </div>
        </div>
        <div className="h-80 w-full rounded-md bg-gray-200" />
      </div>
    </div>
  )
}

Post.Skeleton = PostSkeleton
export default Post
