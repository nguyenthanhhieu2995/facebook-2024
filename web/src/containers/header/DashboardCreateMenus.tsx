import FeatureIconV11 from '@/components/feature-icons/FeatureIconV11'
import FeatureIconV12 from '@/components/feature-icons/FeatureIconV12'
import FeatureIconV13 from '@/components/feature-icons/FeatureIconV13'
import FeatureIconV7 from '@/components/feature-icons/FeatureIconV7'
import { useNavigate } from 'react-router-dom'
import { CreateItem } from './MenuItem'
import { memo } from 'react'
import { useCreatePost } from '@/features/home/stores/post'

interface DashboardCreateMenusProps {
  onSelect?: () => void
}

function DashboardCreateMenus({onSelect}: DashboardCreateMenusProps) {
  const  {onOpenCreatePost} = useCreatePost()
  const CREATE_MENUS = [
    {
      title: 'Post',
      logoIcon: <FeatureIconV7 name="Post" />,
      onClick: () => {
        onSelect?.()
        onOpenCreatePost()
      }
    },
    {
      title: 'Story',
      logoIcon: <FeatureIconV11 name="Story" />
    },
    {
      title: 'Reel',
      logoIcon: <FeatureIconV7 name="Reel" />
    },
    {
      title: 'Life Event',
      logoIcon: <FeatureIconV11 name="LifeEvent" />
    },
    {
      title: 'Page',
      logoIcon: <FeatureIconV7 name="Page" />
    },
    {
      title: 'Ad',
      logoIcon: <FeatureIconV12 name="Ad" />
    },
    {
      title: 'Group',
      logoIcon: <FeatureIconV11 name="Group" />,
      onClick: () => navigate('/groups/create')
    },
    {
      title: 'Event',
      logoIcon: <FeatureIconV13 name="Event" />
    },
    {
      title: 'Marketplace Listing',
      logoIcon: <FeatureIconV11 name="MarketplaceListing" />
    }
  ]

  

  const navigate = useNavigate()
  return (
    <div className="flex flex-col">
      {CREATE_MENUS.map((menu, index) => {
        return (
          <div key={menu.title} className="flex flex-col" onClick={menu.onClick}>
            {index === 4 && <div className="mx-4 my-2 h-[1px] border-0 bg-gray-300"></div>}
            <CreateItem {...menu} />

          </div>
        )
      })}
    </div>
  )
}

export default memo(DashboardCreateMenus)
