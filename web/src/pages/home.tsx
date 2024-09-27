import LeftBarHome from '@/containers/left-section/LeftBarHome'
import Stories from '@/features/home/components/stories/Stories'
import RightSection from '@/features/home/components/right-section/RightSection'
import PostListHome from '@/features/home/containers/PostListHome'
import PostHeader from '@/features/home/containers/PostHeader'

export default function Home() {
  return (
    <div className="grid w-full grid-cols-8 bg-gray-100">
      <div className="hidden justify-items-stretch xl:col-span-2 xl:grid">
        <LeftBarHome className="fixed w-1/5 flex-col justify-self-start pt-4 lg:w-1/4" />
      </div>
      <div className="col-span-8 grid pt-4 lg:col-span-5 xl:col-span-4">
        <Stories />
        <PostHeader />
        <PostListHome />
      </div>
      <div className="hidden pt-4 lg:col-span-3 lg:grid lg:justify-items-stretch xl:col-span-2">
        <RightSection />
      </div>
    </div>
  )
}
