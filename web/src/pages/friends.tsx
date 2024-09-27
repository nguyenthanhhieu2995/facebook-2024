import FriendItem from '@/features/friends/components/FriendItem'

export default function Friends() {
  return (
    <div className="mb-4 px-8 pb-8">
      <h1 className="mb-4 text-xl font-bold">Friends</h1>
      <div className="flex flex-wrap gap-2">
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    </div>
  )
}
