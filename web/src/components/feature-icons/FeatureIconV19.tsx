import FeatureIconsImagev19 from '../../assets/images/feature-icon-v19.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name: 'Bell' | 'HomeGood' 
  size?: string
}
function FeatureIconV19({ name, size }: FeatureIconProps) {
  const icons = {
    Bell: {
      backgroundPosition: '0px -104px'
    },
    HomeGood: {
      backgroundPosition: '0px -398px'
    }

  }
  return (
    <i
      style={{
        backgroundImage: `url(${FeatureIconsImagev19})`,
        backgroundPosition: icons[name].backgroundPosition,
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-5 bg-no-repeat', size)}
    ></i>
  )
}

export default FeatureIconV19
