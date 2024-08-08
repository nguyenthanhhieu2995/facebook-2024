import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import useStore from '@/store/store'
import { X } from 'lucide-react'

export function LeavePage({ blocker }: { blocker: { proceed: () => void; reset: () => void } }) {
  const setContentPostHeader = useStore(state => state.setContentPostHeader)
  const handleBeforeLeavePage = () => {
    blocker.proceed()
    setContentPostHeader('')
  }
  return (
    <Dialog open={true}>
      <DialogContent hideCloseButton className="w-137" onInteractOutside={() => blocker.reset()}>
        <div onClick={()=>blocker.reset()} className="absolute right-4 top-4 rounded-full bg-input p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="size-6" />
          <span className="sr-only">Close</span>
        </div>
        <DialogHeader className="px-4">
          <DialogTitle className="py-2 text-start">Leave Page?</DialogTitle>
          <div className="border-b border-gray-300" />
          <DialogDescription className="text-start">
            You have unsaved changes that will be lost if you leave the page.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-4">
          <Button
            variant={'success'}
            size={'lg'}
            className="h-10 bg-transparent px-4 hover:bg-gray-100"
            onClick={() => blocker.reset()}
          >
            keep editing
          </Button>
          <Button variant={'default'} size={'lg'} className="h-10" onClick={() => handleBeforeLeavePage()}>
            Leave
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
