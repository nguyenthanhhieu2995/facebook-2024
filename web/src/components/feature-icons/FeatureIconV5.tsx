import FeatureIconsImagev5 from '../../assets/images/feature-icon-v5.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'ArrowRight' | 'Global' | 'MousePointer' | 'Gift'
  size?: string
}
function FeatureIconV5({ name, size }: FeatureIconProps) {
  const icons = {
    ArrowRight: {
      backgroundPosition: '0px -50px'
    },
    Global: {
      backgroundPosition: '0px -159px'
    },
    MousePointer: {
      backgroundPosition: '0px -117px'
    },
    Gift: {
      backgroundPosition: '0px -137px'
    }
  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev5})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-6 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV5
