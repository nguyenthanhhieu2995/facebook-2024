import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { POST_AUDIENCE_OPTIONS } from './UserInfo'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'


interface PostAudienceProps {
  onBack: () => void
}
export default function PostAudience({ onBack }: PostAudienceProps) {
  const handleCheckChange = (e: boolean) => {
    return e
  }

  return (
    <>
      <DialogHeader className="relative">
        <DialogTitle className="border-b border-gray-400 pb-5">
          <div
            className="absolute -top-3 left-4 flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={() => {
              onBack()
            }}
          >
            <FeatureIconV3 name="ArrowLeft" />
          </div>
          <h4>Post Audience</h4>
        </DialogTitle>
      </DialogHeader>
      <div className="h-[324px] overflow-y-auto px-4">
        <h4 className="text-start font-semibold">Who can see your post?</h4>
        <p className="text-sm font-normal">Your post will show up in Feed, on your profile and in search results.</p>
        <p className="pt-3 text-sm font-normal">
          Your default audience is set to Only me, but you can change the audience of this specific post.
        </p>
        <RadioGroup defaultValue={POST_AUDIENCE_OPTIONS[0].title}>
          {POST_AUDIENCE_OPTIONS.map(option => (
            <Label htmlFor={option.title} className="rounded-xl p-2 text-sm font-normal hover:bg-gray-200">
              <div className="group relative flex flex-row items-center gap-2">
                <div className="rounded-full bg-gray-200 p-4 group-hover:bg-gray-300">{option.icon}</div>
                <div className="grow">
                  <h4 className="font-semibold">{option.title}</h4>
                  {option.description && <p className="text-sm font-normal">{option.description}</p>}
                </div>
                <RadioGroupItem value={option.title} id={option.title} className="absolute right-2" />
              </div>
            </Label>
          ))}
        </RadioGroup>
      </div>
      <div className="flex items-center space-x-2 px-4">
        <Checkbox id="defaultAudience" checked={true} onCheckedChange={(e: boolean) => handleCheckChange(e)} />
        <label
          htmlFor="defaultAudience"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Set as default audience.
        </label>
      </div>
      <div className="flex justify-end gap-2 px-4 pb-1">
        <Button
          variant="ghost"
          onClick={() => {
            onBack()
          }}
        >
          Cancel
        </Button>
        <Button
          variant="default"
          className="px-10"
          onClick={() => {
            onBack()
          }}
        >
          Save
        </Button>
      </div>
    </>
  )
}
