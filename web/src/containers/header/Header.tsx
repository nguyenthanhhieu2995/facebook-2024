import { useState, useRef } from 'react'
import { Link, useLocation, useBeforeUnload } from 'react-router-dom'
import { cn } from '@/utils/cn'
import HeaderBar from './HeaderBar'
import logoFacebook from '@/assets/images/logo-facebook.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft } from '@/assets/svgs'
import { useClickOutside } from '@/hooks/useClickOutSize'
import HeaderMenu from './HeaderMenu'
import Search from '@/components/Search'
import SearchItem from '@/components/SearchItem'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { getSearchUser } from '@/apis/user'

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const ref = useRef(null)
  const location = useLocation()
  const debounceValue = useDebounce(searchInput, 500)

  const searchResult = useQuery({
    queryKey: ['searchResult', debounceValue],
    queryFn: () => {
      if (debounceValue) {
        return getSearchUser(debounceValue)
      } else return null
    },
    enabled: debounceValue !== ''
  })

  useClickOutside({ ref, onClickOutside: () => setSearchToggle(false) })

  return (
    <header className="relative z-0 grid h-14 w-full grid-cols-4 place-items-center justify-between bg-white shadow-thin">
      <div className="col-span-1 flex items-center justify-self-start pl-5">
        <Link to="/">
          <Avatar>
            <AvatarImage src={logoFacebook} />
            <AvatarFallback>FB</AvatarFallback>
          </Avatar>
        </Link>
        <div
          ref={ref}
          className={cn('', {
            'border-1 fixed left-0 top-0 z-50 flex w-[340px] flex-col rounded-lg bg-white shadow-lg': searchToggle
          })}
        >
          <div className="my-2 flex items-center justify-start gap-2 pr-2">
            {searchToggle && (
              <ArrowLeft
                className="ml-3 size-6 scale-150 rounded-full p-1.5 hover:bg-gray-100"
                onClick={() => setSearchToggle(false)}
              />
            )}
            <Search
              valueInput={searchInput}
              onchange={e => setSearchInput(e.target.value)}
              canCollapse={!searchToggle}
              minimalView={!searchToggle && location.pathname !== '/'}
              onclick={() => setSearchToggle(true)}
              placeholderValue="Search on Facebook"
            />
          </div>

          {searchToggle && (
            <>
              <div className="flex items-center justify-between px-2">
                <h4 className="px-3 font-semibold">Recently</h4>
                <p className="px-2 py-1 text-sm text-blue-500 hover:bg-gray-100">Edit</p>
              </div>
              <div>
                {searchResult.data?.data.map(
                  (searchUser: { id: string; avatar: string; full_name: string; nickname: string }) => {
                    return (
                      <SearchItem
                        key={searchUser.id}
                        image={searchUser.avatar}
                        name={searchUser.full_name}
                        username={searchUser.nickname}
                      />
                    )
                  }
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="col-span-2 place-self-center">
        <HeaderBar />
      </div>
      <div className="col-span-1 justify-self-end">
        <HeaderMenu />
      </div>
    </header>
  )
}
