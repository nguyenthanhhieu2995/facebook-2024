import { Dialog, DialogContent } from '@/components/ui/dialog'
import TagPeople from './TagPeople'
import FeelingActivity from './FeelingActivity'
import Gif from './Gif'
import ShowMore from './ShowMore'
import CheckIn from './CheckIn'
import PostAudience from './PostAudience'
import { User } from '@/apis/user'
import { Position, usePositionStore } from '@/features/home/stores/position'
import { CreatePostDefault } from './CreatePostDefault'
import { DialogProps } from '@radix-ui/react-dialog'


interface CreatePostProps extends DialogProps {
  data: User | undefined
  isAddPhoto?: boolean
  onCreatePostSuccess: () => void
  currentPosition?: Position
}

export enum PostAudienceOptions {
  Public,
  Friends,
  FriendsExcept,
  SpecificFriends,
  OnlyMe,
  Setting
}

function CreatePost({ open, onOpenChange, data, onCreatePostSuccess }: CreatePostProps) {
  const setPosition = usePositionStore(state => state.setPosition)
  const position = usePositionStore(state => state.position)
  const PostContent = {
    [Position.Root]: <CreatePostDefault data={data} onSuccess={onCreatePostSuccess} />,
    [Position.TagPeople]: <TagPeople onBack={() => setPosition(Position.Root)} />,
    [Position.FeelingActivity]: <FeelingActivity onBack={() => setPosition(Position.Root)} />,
    [Position.Gif]: <Gif onBack={() => setPosition(Position.Root)} />,
    [Position.CheckIn]: <CheckIn onBack={() => setPosition(Position.Root)} />,
    [Position.ShowMore]: <ShowMore onBack={() => setPosition(Position.Root)} />,
    [Position.PostAudience]: (
      <PostAudience
        onBack={() => {
          setPosition(Position.Root)
        }}
      />
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[500px] pb-2 shadow-3xl"
        onInteractOutside={() => {
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
