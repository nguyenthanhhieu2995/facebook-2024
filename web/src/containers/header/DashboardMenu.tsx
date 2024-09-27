
import FeatureIconV10 from '@/components/feature-icons/FeatureIconV10'

import NewFeed from '@/assets/images/news-feed.png'
import Feeds from '@/assets/images/feeds.png'
import GamingVideo from '@/assets/images/gaming-video.png'
import PlayGame from '@/assets/images/play-games.png'
import Video from '@/assets/images/video.png'
import NavbarIcon from '@/components/feature-icons/NavbarIcon'
import MenuItem from './MenuItem'
import Image from '@/components/Image'
import Search from '@/components/Search'
import { useState } from 'react'

import DashboardCreateMenus from './DashboardCreateMenus'

export const SOCIAL_MENUS = [
  {
    title: 'Events',
    logoIcon: <FeatureIconV10 name="Event" />,
    content: 'Organize or find events and other things to do online and nearby'
  },
  {
    title: 'Friends',
    logoIcon: <NavbarIcon name="friends" />,
    content: 'Search for friends or people you may know'
  },
  {
    title: 'Groups',
    logoIcon: <NavbarIcon name="group" />,
    content: 'Connect with people who share your interests'
  },
  {
    title: 'News Feed',
    logoIcon: <Image src={NewFeed} alt={'news-feed'} />,
    content: 'See relevant posts from people and Pages you follow'
  },
  {
    title: 'Feeds',
    logoIcon: <Image src={Feeds} alt={'feeds'} />,
    content: 'See the most recent posts from your friends, groups, Pages, and more.'
  },
  {
    title: 'Pages',
    logoIcon: <NavbarIcon name="pages" />,
    content: 'Discover and connect with business of Facebook'
  }
]

export const ENTERTAINMENT_MENUS = [
  {
    title: 'Gaming Video',
    logoIcon: <Image src={GamingVideo} alt={'gaming-video'} />,
    content: 'Watch and connect with your favourite games and streamers.'
  },
  {
    title: 'Play games',
    logoIcon: <Image src={PlayGame} alt="play-games" />,
    content: 'Play your favourite games'
  },
  {
    title: 'Video',
    logoIcon: <Image src={Video} alt="video" />,
    content: 'A video destination to your interests and connections.'
  }
]

function DashboardMenu() {
  const [searchValue, setSearchValue] = useState('')
  let FilterSocialMenu = SOCIAL_MENUS.filter(menu => menu.title.toLowerCase().includes(searchValue.toLowerCase()))
  let FilterEntertainmentMenu = ENTERTAINMENT_MENUS.filter(menu =>
    menu.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  const handleChange = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className="text-gray-900m w-152 rounded-lg bg-gray-50 p-2 pr-0 text-sm font-semibold">
      <h1 className="px-4 py-2 text-2xl font-bold">Menu</h1>
      <div className="group ml-3 mr-1 grid h-[82vh] grid-cols-8 overflow-y-auto">
        <div className="col-span-5 mx-1 my-1 rounded-xl bg-white shadow-thin">
          <div className="flex flex-col px-1.5 pb-2 pt-4">
            <Search
              placeholderValue="Search in menu"
              valueInput={searchValue}
              onchange={e => handleChange(e.target.value)}
            />
          </div>
          <h3 className="px-4 text-base font-semibold">Social</h3>
          {FilterSocialMenu.map(menu => (
            <MenuItem key={menu.title} {...menu} />
          ))}
          <div className="mx-4 my-3 h-[1px] bg-gray-300" />
          {FilterEntertainmentMenu.map(menu => (
            <MenuItem key={menu.title} {...menu} />
          ))}
        </div>
        <div className="absolute left-2/3 mx-1 w-50 -translate-x-5 translate-y-1 overflow-auto rounded-xl bg-white shadow-thin">
          <div className="right-0 top-0 h-fit pb-2">
            <h2 className="px-4 py-2 text-xl font-bold">Create</h2>
            <DashboardCreateMenus/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMenu
