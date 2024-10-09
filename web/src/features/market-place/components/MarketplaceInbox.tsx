import { useState } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/button'
import MarketplaceNotificationItem from './MarketplaceNotificationItem'
enum Tabs {
  Selling = 'Selling',
  Buying = 'Buying'
}

enum Filters {
  All = 'All',
  PendingPayment = 'Pending Payment',
  Paid = 'Paid',
  ToBeShipped = 'To be shipped',
  Shipped = 'Shipped',
  CashOnDelivery = 'Cash on delivery',
  Completed = 'Completed'
}

export default function MarketplaceInbox() {
  const [activeTab, setActiveTab] = useState(Tabs.Selling)
  const [activeFilter, setActiveFilter] = useState(Filters.All)
  return (
    <div className="grid place-content-center gap-2">
      <div className="mb-2 hidden flex-row rounded-lg bg-white pt-1 text-sm shadow-lg lg:block lg:w-125 xl:w-200">
        <div className="flex items-center px-4 children:font-semibold children:text-gray-500">
          <div
            onClick={() => setActiveTab(Tabs.Selling)}
            className={cn('border-b-4 border-transparent', {
              'border-primary': activeTab === Tabs.Selling
            })}
          >
            <div
              className={cn('cursor-pointer rounded-lg p-4', {
                'hover:bg-gray-100': activeTab !== Tabs.Selling
              })}
            >
              Selling
            </div>
          </div>
          <div
            onClick={() => setActiveTab(Tabs.Buying)}
            className={cn('border-b-4 border-transparent', {
              'border-primary': activeTab === Tabs.Buying
            })}
          >
            <div
              className={cn('cursor-pointer rounded-lg p-4', {
                'hover:bg-gray-100': activeTab !== Tabs.Buying
              })}
            >
              Buying
            </div>
          </div>
        </div>
        {activeTab === Tabs.Selling && (
          <>
            <div className="border-b border-gray-300" />
            <div>
              <h4 className="px-4 pt-2 text-gray-500">Filter by label</h4>
              <div className="flex items-center gap-2 px-4 py-3 children:p-2">
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.All ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.All)}
                >
                  All
                </Button>
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.PendingPayment ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.PendingPayment)}
                >
                  Pending payment
                </Button>
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.Paid ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.Paid)}
                >
                  Paid
                </Button>
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.ToBeShipped ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.ToBeShipped)}
                >
                  To be shipped
                </Button>
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.Shipped ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.Shipped)}
                >
                  Shipped
                </Button>
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.CashOnDelivery ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.CashOnDelivery)}
                >
                  Cash on delivery
                </Button>
                <Button
                  size={'icon'}
                  variant={activeFilter === Filters.Completed ? 'success' : 'secondary'}
                  onClick={() => setActiveFilter(Filters.Completed)}
                >
                  Completed
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mb-2 hidden flex-row rounded-lg bg-white p-4 text-sm shadow-lg lg:block lg:w-125 xl:w-200">
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
        <MarketplaceNotificationItem />
      </div>
    </div>
  )
}
