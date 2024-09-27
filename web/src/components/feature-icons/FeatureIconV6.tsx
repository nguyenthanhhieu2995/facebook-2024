import FeatureIconsImagev6 from '../../assets/images/feature-icon-v6.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'PrivacyCenter' | 'DarkMode' | 'Group'
  size?: string
}
function FeatureIconV6({ name, size }: FeatureIconProps) {
  const icons = {
    PrivacyCenter: {
      backgroundPosition: '0px -260px'
    },
    DarkMode: {
      backgroundPosition: '0px -197px'
    },
    Group: {
      backgroundPosition: '0px -155px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev6})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV6
