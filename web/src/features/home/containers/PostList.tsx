
import Post from '../components/post/Post'
import { usePostList } from '../hooks/usePostList'

function PostList({ className }: { className?: string }) {
  const { posts, lastElementRef, isFetching } = usePostList()
  return (
    <div className="justify-self-center">
      {posts?.map(post => (
        <div ref={lastElementRef} key={post.id}>
          <Post post={post} className={className} />
        </div>
      ))}
      {isFetching && (
        <div className="mt-4 space-y-4">
          <Post.Skeleton />
        </div>
      )}
    </div>
  )
}

export default PostList
