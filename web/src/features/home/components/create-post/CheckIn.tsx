import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Search from '@/components/Search'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'

interface CheckInProps {
  onBack: () => void
}

function CheckIn({ onBack }: CheckInProps) {
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
          <h4>Search for location</h4>
        </DialogTitle>
        <div className="flex grow flex-row items-center justify-center gap-2">
          <Search placeholderValue="Where are you?" />
        </div>
      </DialogHeader>
    </>
  )
}

export default CheckIn
