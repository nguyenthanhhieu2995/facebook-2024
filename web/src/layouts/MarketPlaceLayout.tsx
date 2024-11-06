import LeftBarMarketPlace from '@/features/market-place/left-section/LeftBarMarketPlace'
import { Outlet } from 'react-router-dom'

export default function MarketplaceLayout() {
  return (
    <div className="bg-gray-100">
      <LeftBarMarketPlace className="fixed flex-col pt-4 lg:w-90" />
      <div className="ml-90  h-screen pt-4 lg:block">
        <Outlet />
      </div>
    </div>
  )
}
