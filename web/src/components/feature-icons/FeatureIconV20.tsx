import FeatureIconsImagev20 from '../../assets/images/feature-icon-v20.png'
import { cn } from '../../utils/cn'
interface FeatureIconProps {
  name:
    | 'PropertyRental'
    | 'Selling'
    | 'Apparel'
    | 'Camera'
    | 'Heart'
    | 'FreeStuff'
    | 'GardenAndOutdoor'
    | 'Hobbies'
    | 'HomeImprovement'
    | 'HomeSales'
    | 'MusicalInstruments'
    | 'PetSupplies'
    | 'SportingGoods'
    | 'ToysAndGames'
    | 'Group'
    |'AllGames'
  size?: string
}
function FeatureIconV20({ name, size }: FeatureIconProps) {
  const icons = {
    PropertyRental: {
      backgroundPosition: '-84px -340px'
    },
    Selling: {
      backgroundPosition: '-294px -340px'
    },
    Apparel: {
      backgroundPosition: '-274px -340px'
    },
    Camera: {
      backgroundPosition: '-318px -315px'
    },
    Heart: {
      backgroundPosition: '-63px -340px'
    },
    FreeStuff: {
      backgroundPosition: '-315px -340px'
    },
    GardenAndOutdoor: {
      backgroundPosition: '-21px -361px'
    },
    Hobbies: {
      backgroundPosition: '-276px -315px'
    },
    HomeImprovement: {
      backgroundPosition: '-63px -361px'
    },
    HomeSales: {
      backgroundPosition: '-84px -340px'
    },
    MusicalInstruments: {
      backgroundPosition: '-42px -340px'
    },
    PetSupplies: {
      backgroundPosition: '-168px -340px'
    },
    SportingGoods: {
      backgroundPosition: '-210px -340px'
    },
    ToysAndGames: {
      backgroundPosition: '-21px -340px'
    },
    Group: {
      backgroundPosition: '-285px -283px'
    },
    AllGames: {
      backgroundPosition: '-238px -282px'
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

export default FeatureIconV20
