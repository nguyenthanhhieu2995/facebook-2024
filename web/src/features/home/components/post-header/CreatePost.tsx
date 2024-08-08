import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ChevronDown, Ellipsis, LucideSmile, X } from 'lucide-react'
import location from '@/assets/images/location.png'
import colorText from '@/assets/images/color-text.png'
import gif from '@/assets/images/gif.png'
import { useState } from 'react'
import tagUser from '@/assets/images/tag-user.png'
import smile from '@/assets/images/smile.png'
import picture from '@/assets/images/picture.png'
import TagPeople from './TagPeople'
import { cn } from '@/utils/cn'
import { DialogDescription } from '@radix-ui/react-dialog'
import FeelingActivity from './FeelingActivity'
import Gif from './Gif'
import ShowMore from './ShowMore'
import CheckIn from './CheckIn'
import PostAudience from './PostAudience'
import global from '@/assets/images/global.png'
import friend from '@/assets/images/friend.png'
import friendExcept from '@/assets/images/friend-except.png'
import specificFriend from '@/assets/images/specific-friend.png'
import lock from '@/assets/images/lock.png'
import setting from '@/assets/images/setting.png'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Image from '@/components/Image'
import { Button } from '@/components/ui/button'
import FeatureIconV12 from '@/components/feature-icons/FeatureIconV12'
import FeatureIconV4 from '@/components/feature-icons/FeatureIconV4'
import { User } from '@/apis/user'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface CreatePostProps {
  data: User | undefined
  isAddPhoto?: boolean
  trigger: React.ReactNode
  currentPosition?: Position
  handleContentPostHeader?: (value: string) => void
}

export enum Position {
  Root,
  TagPeople,
  FeelingActivity,
  Gif,
  ShowMore,
  CheckIn,
  PostAudience
}

export const POST_OPTIONS = [
  {
    icon: <Image src={picture} alt={picture} />,
    title: 'Photo/Video',
    position: Position.Root
  },
  {
    icon: <Image src={tagUser} alt={tagUser} />,
    title: 'Tag people',
    position: Position.TagPeople
  },
  {
    icon: <Image src={smile} alt={smile} />,
    title: 'Feeling/Activity',
    position: Position.FeelingActivity
  },
  {
    icon: <Image src={location} alt={location} />,
    title: 'Check in',
    position: Position.CheckIn
  },
  {
    icon: <Image src={gif} alt={gif} />,
    title: 'GIF',
    position: Position.Gif
  },
  {
    icon: <Ellipsis className="size-5" />,
    title: 'Show more',
    position: Position.ShowMore
  }
]

export enum PostAudienceOptions {
  Public,
  Friends,
  FriendsExcept,
  SpecificFriends,
  OnlyMe,
  Setting
}

export const POST_AUDIENCE_OPTIONS = [
  {
    title: 'Public',
    description: 'Anyone on or off Facebook',
    icon: <Image src={global} alt={global} />
  },
  {
    title: 'Friends',
    description: 'Your friends on Facebook',
    icon: <Image src={friend} alt={friend} />
  },
  {
    title: 'Friends except...',
    description: 'Your friends on Facebook except...',
    icon: <Image src={friendExcept} alt={friendExcept} />
  },
  {
    title: 'Specific friends',
    description: 'Specific friends on Facebook',
    icon: <Image src={specificFriend} alt={specificFriend} />
  },
  {
    title: 'Only me',
    icon: <Image src={lock} alt={lock} />
  },
  {
    title: 'Setting',
    description: 'Include and exclude friends and lists',
    icon: <Image src={setting} alt={setting} />
  }
]

function CreatePost({ data, isAddPhoto, trigger, currentPosition, handleContentPostHeader }: CreatePostProps) {
  const [isOpenAddPhoto, setIsOpenAddPhoto] = useState(isAddPhoto)
  const [position, setPosition] = useState(currentPosition ? currentPosition : Position.Root)
  const [inputValue, setInputValue] = useState('')
  const [defaultPostAudience, setDefaultPostAudience] = useState(POST_AUDIENCE_OPTIONS[0])
  const [postAudienceMode, setPostAudienceMode] = useState(defaultPostAudience)

  const PostContent = {
    [Position.Root]: (
      <>
        <DialogHeader>
          <DialogTitle className="pb-3">Create post</DialogTitle>
          <div className="border-b border-gray-300"></div>
          <div className="group relative my-3 flex flex-row items-center rounded-xl px-4 font-normal">
            <div className="flex-none">
              <Avatar className="size-14 cursor-pointer">
                <AvatarImage src={data?.avatar} />
                <AvatarFallback>
                  <span className="sr-only">Loading...</span>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex grow flex-col pl-2">
              <h4 className="font-semibold text-black">Sơn Tùng</h4>
              <Button
                variant={'secondary'}
                size={'xs'}
                className="my-1 flex w-fit flex-row gap-1 p-1"
                onClick={() => setPosition(Position.PostAudience)}
              >
                <div className="size-4">{postAudienceMode.icon}</div>
                <p className="text-xs">{postAudienceMode.title}</p>
                <ChevronDown className="size-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        <DialogDescription>
          <div className={cn('group relative h-39 cursor-text px-4', { 'h-fit': isOpenAddPhoto })}>
            <textarea
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              name="post"
              id="post"
              className={cn('w-full resize-none text-2xl text-black outline-none placeholder:text-gray-700', {
                'text-base': isOpenAddPhoto
              })}
              placeholder="What's on your mind, Tung?"
            />
            {!isOpenAddPhoto && (
              <div className="absolute bottom-0 left-3 cursor-pointer">
                <Image className="size-9 rounded-lg" src={colorText} alt={colorText} />
              </div>
            )}

            <TooltipProvider delayDuration={100} skipDelayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  className={cn('absolute bottom-0 right-3', {
                    'top-0': isOpenAddPhoto
                  })}
                >
                  <LucideSmile className="size-7 cursor-pointer text-gray-300 hover:text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{'Emoji'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DialogDescription>
        {isOpenAddPhoto && (
          <div className="flex items-center justify-between px-4">
            <div className="flex h-[270px] w-full flex-col gap-2 rounded-lg border border-gray-400 p-2">
              <Label
                htmlFor="photo"
                className="group relative h-3/4 w-full rounded-lg bg-gray-100 hover:bg-gray-200 has-[button:hover]:bg-gray-100"
              >
                <Button
                  variant={'outline'}
                  size={'icon'}
                  className="absolute right-0 top-0 -translate-x-2 translate-y-2 border-gray-300 bg-white p-1 hover:bg-gray-200"
                >
                  <X size={20} onClick={() => setIsOpenAddPhoto(false)} />
                </Button>
                <Input id="photo" type="file" className="hidden"/>
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="flex w-fit rounded-full bg-gray-200 p-2.5 text-center group-hover:bg-gray-300">
                    <FeatureIconV12 name="AddPhoto" size="size-5" />
                  </div>
                  <h4 className="font-semibold text-black">Add Photos/Videos</h4>
                  <p className="text-xs text-gray-500">or drag and drop</p>
                </div>
              </Label>
              <div className="flex h-1/4 w-full items-center justify-between gap-3 rounded-lg bg-gray-100 px-3">
                <div className="flex items-center rounded-full bg-gray-300 p-2.5">
                  <FeatureIconV4 name="Phone" size="size-5" />
                </div>
                <p className="grow text-xs text-black">Add photos and videos from your mobile device.</p>
                <Button variant={'destructive'} size={'sm'}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="mx-4 flex items-center justify-between rounded-lg border border-gray-400 px-4 py-2">
          <div className="cursor-pointer font-semibold text-black" onClick={() => setPosition(Position.ShowMore)}>
            Add to your post
          </div>
          <div className="flex items-center gap-1">
            {POST_OPTIONS.slice(0, 5).map(item => {
              return (
                <TooltipProvider key={item.title} delayDuration={100} skipDelayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      {item.title === 'Photo/Video' ? (
                        <Button
                          key={item.title}
                          variant={'ghost'}
                          size={'icon'}
                          className={cn('p-2', {
                            'bg-green-100 hover:bg-green-200': isOpenAddPhoto === true
                          })}
                          onClick={() => setIsOpenAddPhoto(true)}
                        >
                          {item.icon}
                        </Button>
                      ) : (
                        <Button
                          key={item.title}
                          variant={'ghost'}
                          size={'icon'}
                          className={cn('p-2', {
                            'cursor-not-allowed opacity-50 grayscale hover:bg-transparent':
                              item.title === 'GIF' && isOpenAddPhoto
                          })}
                          onClick={item.title === 'GIF' && isOpenAddPhoto ? () => {} : () => setPosition(item.position)}
                        >
                          {item.icon}
                        </Button>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}

            <TooltipProvider delayDuration={100} skipDelayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="flex">
                  <div className="rounded-full p-2 hover:bg-gray-100" onClick={() => setPosition(Position.ShowMore)}>
                    <Ellipsis className="size-5" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{'More'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <DialogFooter className="mx-4 pb-2">
          <Button className={cn('w-full')} variant={inputValue ? 'default' : 'disabled'}>
            Post
          </Button>
        </DialogFooter>
      </>
    ),
    [Position.TagPeople]: <TagPeople onBack={() => setPosition(Position.Root)} />,
    [Position.FeelingActivity]: <FeelingActivity onBack={() => setPosition(Position.Root)} />,
    [Position.Gif]: <Gif onBack={() => setPosition(Position.Root)} />,
    [Position.CheckIn]: <CheckIn onBack={() => setPosition(Position.Root)} />,
    [Position.ShowMore]: (
      <ShowMore
        handleOpenAddPhoto={() => setIsOpenAddPhoto(true)}
        onBack={() => setPosition(Position.Root)}
        setPosition={setPosition}
      />
    ),
    [Position.PostAudience]: (
      <PostAudience
        onBack={() => {
          setPosition(Position.Root)
        }}
        getPostAudienceData={e => setPostAudienceMode(e)}
        getDefaultPostAudienceData={e => setDefaultPostAudience(e)}
        currentPostAudience={postAudienceMode}
        currentDefaultPostAudience={defaultPostAudience}
      />
    )
  }

  return (
    <Dialog>
      <DialogTrigger className="grow">{trigger}</DialogTrigger>
      <DialogContent
        className="w-[500px] pb-2 shadow-3xl"
        onInteractOutside={() => {
          if (handleContentPostHeader) {
            handleContentPostHeader(inputValue)
          }
          setPosition(Position.Root)
        }}
        hideCloseButton={position !== Position.Root}
      >
        {PostContent[position]}
      </DialogContent>
    </Dialog>
  )
}

export default CreatePost
