import AvatarWithIcon from '@/components/AvatarWithIcon'
import FeatureIconV8 from '@/components/feature-icons/FeatureIconV8'
import { useGetMe } from '@/hooks/useGetMe'

function NotificationItem() {
  const {data} = useGetMe()
  return (
    <div className="flex flex-row items-center rounded-xl p-2 font-normal hover:bg-gray-200">
      <div className="flex-none">
        <AvatarWithIcon data={data} Icon={<FeatureIconV8 name="Flag" />} />
      </div>
      <div className="grow overflow-hidden pl-4">
        <p className="line-clamp-3">
          Page<strong> SonTung Mtp </strong>that you follow has been change name{' '}
          <strong>Page SonTung Mtp Official</strong>
        </p>
      </div>
      <div className="size-3 flex-none rounded-full bg-blue-500"></div>
    </div>
  )
}

export default NotificationItem
