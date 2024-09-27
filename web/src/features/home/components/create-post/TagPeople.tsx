import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import Search from '@/components/Search'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface TagPeopleProps {
  onBack: () => void
}

function TagPeople({ onBack }: TagPeopleProps) {
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
          <h4>Tag people</h4>
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-2 px-2">
        <div className="flex grow flex-row items-center justify-center gap-2">
          <Search className="text-sm" />
        </div>
        <p className="cursor-pointer pr-4 font-semibold text-primary" onClick={onBack}>
          Done
        </p>
      </div>
      <p className="px-4 text-start text-sm font-semibold text-gray-500">Suggestions</p>
    </>
  )
}

export default TagPeople
