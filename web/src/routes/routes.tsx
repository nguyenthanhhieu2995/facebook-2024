import Home from '@/pages/home'
import NotFound from '@/pages/not-found'
import Groups from '@/pages/groups'
import Gaming from '@/pages/gaming'
import Marketplace from '@/pages/market-place'
import MarketplaceNotifications from '@/pages/market-place-notifications'
import MarketplaceInbox from '@/pages/market-place-inbox'
import Notifications from '@/pages/notification'
import GroupCreate from '@/pages/group-create'
import GroupFeed from '@/pages/group-feed'
import GroupJoins from '@/pages/group-joins'
import GroupDiscover from '@/pages/group-discover'
import AuthGuard from '@/guards/AuthGuard'
import FullLayout from '@/layouts/FullLayout'
import MinimizeLayout from '@/layouts/MinimizeLayout'
import { Navigate } from 'react-router-dom'
import MarketplaceLayout from '@/layouts/MarketPlaceLayout'
import FriendsLayout from '@/layouts/FriendsLayout'
import Friends from '@/pages/friends'

const routes = [
  {
    element: <AuthGuard />,
    children: [
      {
        element: <FullLayout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/groups',
            element: <Navigate to="/groups/feed" />
          },
          {
            path: '/groups',
            element: <Groups />,
            children: [
              {
                path: '/groups/feed',
                element: <GroupFeed />
              },
              {
                path: '/groups/discover',
                element: <GroupDiscover />
              },
              {
                path: '/groups/joins',
                element: <GroupJoins />
              }
            ]
          },
          {
            path: '/gaming',
            element: <Gaming />
          },
          {
            path: '/notifications',
            element: <Notifications />
          },
          {
            path: '/marketplace',
            element: <MarketplaceLayout />,
            children: [
              {
                path: '/marketplace',
                element: <Marketplace />
              },
              {
                path: '/marketplace/notifications',
                element: <MarketplaceNotifications />
              },
              {
                path: '/marketplace/inbox',
                element: <MarketplaceInbox />
              }
            ]
          },
          {
            path:'/friends',
            element: <FriendsLayout/>,
            children: [
              {
                path: '/friends',
                element: <Friends/>
              }
            ]
          }
        ]
      },
      {
        element: <MinimizeLayout />,
        children: [
          {
            path: '/groups/create',
            element: <GroupCreate />
          }
        ]
      }
    ]
  },
  { path: '*', element: <NotFound /> }
]
export default routes
