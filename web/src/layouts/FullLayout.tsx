import { Outlet, useBlocker } from 'react-router-dom'
import Header from '@/containers/header/Header'
import { useGetMe } from '@/hooks/useGetMe'
import {usePositionStore} from '@/features/home/stores/position'
import { LeavePage } from '@/components/LeavePage'
export default function FullLayout() {
  const textContentCreatePost = usePositionStore(state => state.textContentCreatePost)
  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      textContentCreatePost !== '' && currentLocation.pathname !== nextLocation.pathname
  )
  const { data } = useGetMe()
  return (
    <div>
      <div className="fixed left-0 z-10 w-dvw">
        <Header />
      </div>
      <div className="pt-14">
        <Outlet context={{ me: data }} />
      </div>
      {blocker.state === 'blocked' ? <LeavePage blocker={blocker} /> : null}
    </div>
  )
}
