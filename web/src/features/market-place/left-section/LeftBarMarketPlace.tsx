import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Search from '@/components/Search'
import { Plus } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import FeatureIconV18 from '@/components/feature-icons/FeatureIconV18'
import FeatureIconV19 from '@/components/feature-icons/FeatureIconV19'
import FeatureIconV7 from '@/components/feature-icons/FeatureIconV7'
import FeatureIconV3 from '@/components/feature-icons/FeatureIconV3'
import FeatureIconV5 from '@/components/feature-icons/FeatureIconV5'
import FeatureIconV20 from '@/components/feature-icons/FeatureIconV20'
import FeatureIconV4 from '@/components/feature-icons/FeatureIconV4'

interface NavbarProps {
  className?: string
}

function LeftBarMarketPlace({ className }: NavbarProps) {
  const navigate = useNavigate()
  const MENUS = [
    {
      title: 'Browse all',
      icon: <FeatureIconV18 name="MarketPlace" />,
      path: '/marketplace'
    },
    {
      title: 'Notifications',
      icon: <FeatureIconV19 name="Bell" />,
      path: '/marketplace/notifications'
    },
    {
      title: 'Inbox',
      icon: <FeatureIconV7 name="Inbox" />,
      path: '/marketplace/inbox'
    },
    {
      title: 'Buying',
      icon: <FeatureIconV3 name="ShoppingCart" />,
      directIcon: <FeatureIconV5 name="ArrowRight" />,
      path: '/marketplace/you'
    },
    {
      title: 'Selling',
      icon: <FeatureIconV20 name="Selling" />,
      directIcon: <FeatureIconV5 name="ArrowRight" />,
      path: '/marketplace/you/selling'
    }
  ]
  const CATEGORIES = [
    {
      title: 'Vehicles',
      path: '/marketplace/category/vehicles',
      icon: <FeatureIconV18 name="Car" />
    },
    {
      title: 'Property Rentals',
      path: '/marketplace/category/propertyrentals',
      icon: <FeatureIconV20 name="PropertyRental" />
    },
    {
      title: 'Apparel',
      path: '/marketplace/category/apparel',
      icon: <FeatureIconV20 name="Apparel" />
    },
    {
      title: 'Classifieds',
      path: '/marketplace/category/classifieds',
      icon: <FeatureIconV20 name="Selling" />
    },
    {
      title: 'Electronics',
      path: '/category/electronics',
      icon: <FeatureIconV4 name="Phone" size="size-5" />
    },
    {
      title: 'Entertainment',
      path: '/marketplace/category/entertainment',
      icon: <FeatureIconV20 name="Camera" />
    },
    {
      title: 'Family',
      path: '/marketplace/category/family',
      icon: <FeatureIconV20 name="Heart" />
    },
    {
      title: 'Free Stuff',
      path: '/marketplace/category/free',
      icon: <FeatureIconV20 name="FreeStuff" />
    },
    {
      title: 'Garden & Outdoor',
      path: '/marketplace/category/garden',
      icon: <FeatureIconV20 name="GardenAndOutdoor" />
    },
    {
      title: 'Hobbies',
      path: '/marketplace/category/hobbies',
      icon: <FeatureIconV20 name="Hobbies" />
    },
    {
      title: 'Home Goods',
      path: '/marketplace/category/home',
      icon: <FeatureIconV19 name="HomeGood" />
    },
    {
      title: 'Home Improvement Suppliers',
      path: '/marketplace/category/home-improvements',
      icon: <FeatureIconV20 name="HomeImprovement" />
    },
    {
      title: 'Home Sales',
      path: '/marketplace/category/propertyforsale',
      icon: <FeatureIconV20 name="HomeSales" />
    },
    {
      title: 'Musical Instruments',
      path: '/marketplace/category/instruments',
      icon: <FeatureIconV20 name="MusicalInstruments" />
    },
    {
      title: 'Office Supplies',
      path: '/category/office-supplies',
      icon: <FeatureIconV20 name="Selling" />
    },
    {
      title: 'PetSupplies',
      path: '/marketplace/category/pets',
      icon: <FeatureIconV20 name="PetSupplies" />
    },
    {
      title: 'Sporting Goods',
      path: '/marketplace/category/sports',
      icon: <FeatureIconV20 name="SportingGoods" />
    },
    {
      title: 'Toys & Games',
      path: '/marketplace/category/toys',
      icon: <FeatureIconV20 name="ToysAndGames" />
    },
    {
      title: 'Buy and sell groups',
      path: '/category/marketplace/groups',
      icon: <FeatureIconV20 name="Group" />
    }
  ]
  const location = useLocation()

  return (
    <div className={cn('h-[100dvh] overflow-y-auto bg-white px-2 shadow-thin', className)}>
      <div className="border-b border-gray-300 px-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <div className="flex cursor-pointer items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
            <FeatureIconV3 name="SettingAndPrivacy" />
          </div>
        </div>
        <Search className="px-0 py-1 text-base" placeholderValue="Search Marketplace" paddingInput="py-1.5" />
      </div>
      <div className="no-scrollbar my-2 flex h-[76vh] flex-col overflow-auto px-2">
        {MENUS.map(menu => (
          <Link
            to={menu.path}
            key={menu.title}
            className={cn('group flex flex-row items-baseline justify-between gap-2 rounded-lg p-2 hover:bg-gray-200', {
              'bg-gray-200': location.pathname === menu.path
            })}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn('flex rounded-full bg-gray-200 p-2 group-hover:bg-gray-300', {
                  'bg-amber-600 invert group-hover:bg-amber-600': location.pathname === menu.path
                })}
              >
                {menu.icon}
              </div>
              <div className="grow font-semibold">{menu.title}</div>
            </div>
            <div className="scale-75">{menu.directIcon}</div>
          </Link>
        ))}
        <Button variant={'success'} className="mt-2 gap-2" onClick={() => navigate('/groups/create')}>
          <Plus />
          Create new listing
        </Button>

        <div className="my-2 border-b border-gray-300" />
        <h3 className="px-2 pb-2 font-semibold">Filters</h3>
        <p className="cursor-pointer rounded-lg p-2 text-sm font-semibold text-primary hover:bg-gray-100">
          Hue,Vietnam . Within 5 kilometers
        </p>
        <div className="my-2 border-b border-gray-300" />
        <div>
          <h3 className="px-2 pb-2 font-semibold">Categories</h3>
          {CATEGORIES.map(category => (
            <Link
              to={category.path}
              key={category.title}
              className="group flex flex-row items-center gap-2 rounded-lg p-2 hover:bg-gray-200"
            >
              <div
                className={cn('flex rounded-full bg-gray-200 p-2 group-hover:bg-gray-300', {
                  'bg-amber-600 invert group-hover:bg-amber-600': location.pathname === category.path
                })}
              >
                {category.icon}
              </div>
              <div className="grow font-semibold">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftBarMarketPlace
