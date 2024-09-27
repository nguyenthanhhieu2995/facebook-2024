import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import Search from '@/components/Search'

interface TagPeopleProps {
  onBack: () => void
}

function Gif({ onBack }: TagPeopleProps) {
  return (
    <>
      <DialogHeader className="relative">
        <DialogTitle className="border-b border-gray-400 pb-5">
          <div
            className="absolute -top-3 left-4 flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={onBack}
          >
            <FeatureIconV3 name="ArrowLeft" />
          </div>
          <h4>Choose a GIF</h4>
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-2 px-2">
        <div className="flex grow flex-row items-center justify-center gap-2">
          <Search className="text-sm" />
        </div>
      </div>
    </>
  )
}

export default Gif
