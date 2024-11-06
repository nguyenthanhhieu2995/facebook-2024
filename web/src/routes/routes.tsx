import Home from '@/pages/home'
import NotFound from '@/pages/not-found'
import GamingLayout from '@/layouts/GamingLayout'
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
import Friends from '@/pages/friends'
import IdentifyAccount from '@/pages/IdentifyAccount'
import LoginLayout from '@/layouts/LoginLayout'
import ResetPassword from '@/pages/resetPassword'
import NewPassword from '@/pages/newPassword'
import FriendsLayout from '@/layouts/FriendsLayout'
import GroupsLayout from '@/layouts/GroupsLayout'
import PlayGames from '@/pages/play-games'
import GamingActivity from '@/pages/gaming-activity'
import GamingNotifications from '@/pages/gaming-notification'
import Me from '@/pages/me'

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
            path:'/:id',
            element: <Me />
          },
          {
            path: '/groups',
            element: <Navigate to="/groups/feed" />
          },
          {
            path: '/groups',
            element: <GroupsLayout />,
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
            element: <GamingLayout />,
            children: [
              {
                path: '/gaming/play',
                element: <PlayGames />
              },
              {
                path: '/gaming/me',
                element: <GamingActivity/>
              },
              {
                path: '/gaming/notifications',
                element: <GamingNotifications />
              }
            ]
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
            path: '/friends',
            element: <FriendsLayout />,
            children: [
              {
                path: '/friends',
                element: <Friends />
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
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        path: '/login',
        element: <Navigate to="/" />
      },
      {
        path: '/login/identify',
        element: <IdentifyAccount />
      },
      {
        path: '/login/reset-password/',
        element: <ResetPassword />
      },
      {
        path: '/login/new-password',
        element: <NewPassword />
      }
    ]
  },
  { path: '*', element: <NotFound /> }
]
export default routes
