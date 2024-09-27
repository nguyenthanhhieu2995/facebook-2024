import { forwardRef } from 'react'
import { SearchIcon } from 'lucide-react'
import { cn } from '../utils/cn'

interface SearchProps {
  valueInput?: string
  placeholderValue?: string
  canCollapse?: boolean
  minimalView?: boolean
  disabled?: boolean
  className?: string
  paddingInput?: string
  onclick?: () => void
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Search(
  {
    placeholderValue,
    disabled,
    valueInput,
    canCollapse,
    minimalView,
    className,
    paddingInput,
    onchange,
    onclick
  }: SearchProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div
      className={cn('flex grow flex-row items-center justify-center gap-2 px-2 text-base', className)}
      onClick={onclick}
    >
      <div
        className={cn('flex size-10 items-center justify-center rounded-full', {
          'bg-gray-100': canCollapse
        })}
      >
        <SearchIcon className="z-10 size-4" />
      </div>
      <input
        ref={ref}
        disabled={disabled}
        onChange={onchange}
        type="text"
        value={valueInput}
        placeholder={placeholderValue ? placeholderValue : 'Search'}
        className={cn(
          '-ml-12 block w-full rounded-full bg-gray-100 py-2 pl-10 font-normal placeholder:font-normal placeholder:text-gray-600 focus:outline-none',
          {
            'hidden lg:block': canCollapse
          },
          {
            'lg:hidden': minimalView
          },
          paddingInput
        )}
      />
    </div>
  )
}

export default forwardRef(Search)
