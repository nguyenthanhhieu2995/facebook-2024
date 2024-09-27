import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Search from '@/components/Search'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'

interface FeelingActivityProps {
  onBack: () => void
}

function FeelingActivity({ onBack }: FeelingActivityProps) {
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
          <h4>Feeling Activity</h4>
        </DialogTitle>
        <div className="flex grow flex-row items-center justify-center gap-2">
          <Search />
        </div>
      </DialogHeader>
    </>
  )
}

export default FeelingActivity
