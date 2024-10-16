import { cn } from '@/utils/cn'
import LeftMenuHome from './LeftMenuHome'
import YourShortcuts from './YourShortcuts'

interface NavbarProps {
  className?: string
}
function LeftBar({ className }: NavbarProps) {
  return (
    <div className={cn('no-scrollbar h-[90dvh] overflow-y-auto', className)}>
      <LeftMenuHome />
      <div className="mx-4 my-2 border-b border-gray-400"></div>
      <YourShortcuts />
    </div>
  )
}

export default LeftBar
