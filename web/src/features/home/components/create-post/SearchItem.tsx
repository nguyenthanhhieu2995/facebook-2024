import Image from '@/components/Image'

interface SearchItemProps {
  image: string
  name: string
  tick?: boolean
}

function SearchItem({ image, name }: SearchItemProps) {
  return (
    <div className="flex cursor-pointer items-center rounded-lg px-4 py-2 hover:bg-gray-200">
      <div className="relative mr-4 inline-block size-10 overflow-hidden rounded-full">
        <Image className="size-10 object-cover" src={image} alt={name} />
      </div>
      <div className="grow leading-5">
        <div className="flex items-center gap-2">
          <p className="overflow-hidden overflow-ellipsis font-semibold">{name}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
