import FeatureIconsImagev20 from '../../assets/images/feature-icon-v21.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name:
    | 'Game'
    | 'User'
  size?: string
}

function FeatureIconV21({ name, size }: FeatureIconProps) {
  const icons = {
    Game: {
      backgroundPosition: '0px 0px'
    },
    User: {
      backgroundPosition: '0px -21px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev20})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV21
