import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import Image from '@/components/Image'
import climateScienceCenter from '@/assets/images/climate-center.png'
import feeds from '@/assets/images/feeds.png'
import gamingVideo from '@/assets/images/gaming-video.png'
import adsManager from '@/assets/images/ads-manager.png'
import recentActivity from '@/assets/images/ads-activity.png'
import messengerKid from '@/assets/images/messenger-kid.png'
import metaBusinessSuite from '@/assets/images/meta-business-suite.png'
import { ChevronDown, ChevronUp } from 'lucide-react'
import NavbarIcon from '@/components/feature-icons/NavbarIcon'
import FeatureIconV10 from '@/components/feature-icons/FeatureIconV10'
import FeatureIconV12 from '@/components/feature-icons/FeatureIconV12'
import { useOutletContext } from 'react-router-dom'
import { User } from '@/apis/user'


interface NavbarProps {
  className?: string
}

function LeftMenuHome({ className }: NavbarProps) {
  const [isToggle, setIsToggle] = useState(false)
  const { me } = useOutletContext<{ me: User }>()

  const MENUS = [
    {
      label: me?.firstName + ' ' + me?.lastName,
      link: '/profile',
      icon: <Image src={me?.avatar} alt="User Avatar" className="size-10 rounded-full object-cover" />,
    },
    { label: 'Friends', link: '/friends', icon: <NavbarIcon name="friends" /> },
    {
      label: 'Memories',
      link: '/onthisday',
      icon: <NavbarIcon name="memories" />
    },
    {
      label: 'Saved',
      link: '/saved',
      icon: <NavbarIcon name="saved" />
    },
    {
      label: 'Group',
      link: '/groups/feed',
      icon: <NavbarIcon name="group" />
    },
    {
      label: 'Video',
      link: '/video',
      icon: <NavbarIcon name="video" />
    },
    {
      label: 'Ads Manager',
      link: '/adsmanager',
      icon: <Image src={adsManager} alt={adsManager} />
    },
    {
      label: 'Climate Science Center',
      link: '/climatesciencecenter',
      icon: <Image src={climateScienceCenter} alt={climateScienceCenter} />
    },
    {
      label: 'Events',
      link: '/events',
      icon: <FeatureIconV10 name="Event" size="size-9" />
    },
    {
      label: 'Feeds',
      link: '/feeds',
      icon: <Image src={feeds} alt="feeds" />
    },
    {
      label: 'Fundraisers',
      link: '/fundraisers',
      icon: <NavbarIcon name="fundraisers" />
    },
    {
      label: 'Gaming Video',
      link: '/gamingvideo',
      icon: <Image src={gamingVideo} alt="gaming-video" />
    },
    {
      label: 'Marketplace',
      link: '/marketplace',
      icon: <NavbarIcon name="marketplace" />
    },
    {
      label: 'Messenger',
      link: '/messenger',
      icon: <FeatureIconV12 name="Messenger" size="size-9" />
    },
    {
      label: 'Messenger Kids',
      link: '/messengerkids',
      icon: <Image src={messengerKid} alt="messenger-kids" />
    },
    {
      label: 'Meta Business Suite',
      link: '/metabusinesssuite',
      icon: <Image src={metaBusinessSuite} alt="meta-business-suite" />
    },
    {
      label: 'Pages',
      link: '/pages',
      icon: <NavbarIcon name="pages" />
    },
    {
      label: 'Play games',
      link: '/Playgames',
      icon: <NavbarIcon name="playGames" />
    },
    {
      label: 'Recent ad activity',
      link: '/recentadactivity',
      icon: <Image src={recentActivity} alt="recent-activity" />
    }
  ]

  return (
    <div className={cn('px-3', className)}>
      {MENUS.map((menu, item) => {
        let isHidden = false
        if (!isToggle && item > 5) {
          isHidden = true
        }
        return (
          <div key={menu.link} >
            <Link
              to={menu.link}
              className={cn('flex items-center gap-4 rounded-lg p-2 font-semibold hover:bg-gray-200', {
                hidden: isHidden
              })}
            >
              {menu.icon}
              {menu.label}
            </Link>
          </div>
        )
      })}
      <div
        className="group/item relative flex flex-row items-center gap-4 rounded-xl p-2 font-normal hover:bg-gray-200"
        onClick={() => setIsToggle(!isToggle)}
      >
        <div className="flex items-center rounded-full bg-gray-200 p-2.5 group-hover/item:bg-gray-300">
          {isToggle ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </div>
        <h4 className="text-wrap font-semibold">{'Show More'}</h4>
      </div>
    </div>
  )
}
export default LeftMenuHome
