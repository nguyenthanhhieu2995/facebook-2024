import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import AccountMenuContent from './AccountMenuContent'
import { useGetMe } from '@/hooks/useGetMe'
import Image from '@/components/Image'

function AccountMenu() {
  const { data } = useGetMe()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="group relative">
        <Image src={data?.avatar} alt="User Avatar" className="size-10 object-cover rounded-full" />
          <ChevronDown className="absolute -right-1 bottom-0.5 size-4 cursor-pointer rounded-full border-2 border-white bg-gray-300" />
          <div className="absolute -bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-lg bg-gray-700 p-1 text-xs text-white group-hover:block">
            Account
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-90 p-2">
        <AccountMenuContent avatar={data?.avatar} username={data?.firstName + ' ' + data?.lastName} />
      </PopoverContent>
    </Popover>
  )
}

export default AccountMenu
