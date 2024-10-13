import FeatureIconV11 from '@/components/feature-icons/FeatureIconV11'
import FeatureIconV12 from '@/components/feature-icons/FeatureIconV12'
import FeatureIconV13 from '@/components/feature-icons/FeatureIconV13'
import FeatureIconV7 from '@/components/feature-icons/FeatureIconV7'
import CreatePost from '@/features/home/components/create-post'
import { useNavigate } from 'react-router-dom'
import { CreateItem } from './MenuItem'
import { useGetMe } from '@/hooks/useGetMe'
import { memo } from 'react'

function DashboardCreateMenus() {
  const CREATE_MENUS = [
    {
      title: 'Post',
      logoIcon: <FeatureIconV7 name="Post" />
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
      click: () => navigate('/groups/create')
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

  const { data } = useGetMe()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col">
      {CREATE_MENUS.map((menu, index) => {
        return (
          <div key={menu.title} className="flex flex-col" onClick={menu.click}>
            {index === 4 && <div className="mx-4 my-2 h-[1px] border-0 bg-gray-300"></div>}
            {menu.title === 'Post' ? (
              <CreatePost data={data} trigger={<CreateItem {...menu} />} />
            ) : (
              <CreateItem {...menu} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default memo(DashboardCreateMenus)
