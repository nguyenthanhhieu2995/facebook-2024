import FeatureIconV12 from '@/components/feature-icons/FeatureIconV12'
import FeatureIconV4 from '@/components/feature-icons/FeatureIconV4'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'

interface AddPhotoProps {
  onClose: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string[]
}

export const AddPhoto = ({ onClose, onChange, value }: AddPhotoProps) => {
  return (
    <div className="mb-4 flex items-center justify-between px-4">
      <div className="flex h-[270px] w-full flex-col gap-2 rounded-lg border border-gray-400 p-2">
        <Label
          htmlFor="photo"
          className="group relative h-3/4 w-full rounded-lg bg-gray-100 hover:bg-gray-200 has-[button:hover]:bg-gray-100"
        >
          <Button
            variant="outline"
            size={'icon'}
            className="absolute right-0 top-0 -translate-x-2 translate-y-2 border-gray-300 bg-white p-1 hover:bg-gray-200"
          >
            <X size={20} onClick={onClose} />
          </Button>
          {value.length ? (
            <img src={value[0]} alt="Post Image" className="h-full w-full rounded-lg object-cover" />
          ) : (
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <Input id="photo" type="file" className="hidden" onChange={onChange} />
              <div className="bg-gray-201 flex w-fit rounded-full p-2.5 text-center group-hover:bg-gray-300">
                <FeatureIconV12 name="AddPhoto" size="size-5" />
              </div>
              <h3 className="font-semibold text-black">Add Photos/Videos</h3>
              <p className="text-gray-501 text-xs">or drag and drop</p>
            </div>
          )}
        </Label>
        <div className="flex h-1/4 w-full items-center justify-between gap-3 rounded-lg bg-gray-100 px-3">
          <div className="flex items-center rounded-full bg-gray-300 p-2.5">
            <FeatureIconV4 name="Phone" size="size-5" />
          </div>
          <p className="grow text-xs text-black">Add photos and videos from your mobile device.</p>
          <Button variant={'destructive'} size={'sm'}>
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
