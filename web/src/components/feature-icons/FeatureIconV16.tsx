import FeatureIconsImagev16 from '../../assets/images/feature-icon-v16.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'YourFeed' | 'FriendsRequests' | 'FriendSuggestions' | 'AllFriends' | 'Birthday' 
  size?: string
}
function FeatureIconV16({ name, size }: FeatureIconProps) {
  const icons = {
    YourFeed: {
      backgroundPosition: '0px -147px'
    },
    FriendsRequests: {
      backgroundPosition: '0px -126px'
    },
    FriendSuggestions: {
      backgroundPosition: '0px -42px'
    },
    AllFriends: {
      backgroundPosition: '0px -84px'
    },
    Birthday: {
      backgroundPosition: '0px -588px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev16})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV16
