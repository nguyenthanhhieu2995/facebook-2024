interface User {
  name: string
  avatarUrl: string
}

interface IStory {
  id: string
  user: User
  previewUrl: string
}

interface StoryProps {
  story: IStory
}

export default function Story({ story }: StoryProps) {
  return (
    <div className="h-62.5 w-35 shrink-0 cursor-pointer">
      <img src={story.previewUrl} alt="Story" className="h-full w-full shrink-0 rounded-xl object-cover shadow-thin" />
    </div>
  )
}
