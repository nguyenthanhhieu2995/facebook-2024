import avatar from '@/assets/images/villa.jpg'
import { MapPin } from 'lucide-react'
import MarketplaceBrowseItem from '../components/MarketplaceBrowseItem'

const TODAY_PICKS = [
  {
    id: 1,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 2,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 3,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 4,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 5,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 6,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 7,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  },
  {
    id: 8,
    avatar: avatar,
    price: '1.100.000.000đ',
    title: 'Bán căn VILLA đường Minh Mạng',
    description: 'Hội mua bán nhà đất tại Huế'
  }
]

export default function BrowseAllMarketPlace() {
  return (
    <div className="px-8">
      <div className="mb-4 pb-8">
        <div className="flex justify-between">
          <h1 className="mb-4 text-xl font-bold">{`Today's pick`}</h1>
          <div className="flex items-center gap-2 text-primary">
            {' '}
            <MapPin size={16} />
            <p className="cursor-pointer hover:underline">Huế . 5km</p>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TODAY_PICKS.map(item => (
            <MarketplaceBrowseItem
              className="col-span-1"
              key={item.id}
              avatar={item.avatar}
              price={item.price}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
