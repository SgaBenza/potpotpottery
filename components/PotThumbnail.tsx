import { Pot } from '@/types'
import { formatPrice } from '@/utils/format'
import Image from 'next/image'

export const PotThumbnail = ({ image, name, price }: Pot) => {
  return (
    <div className="relative h-[634px] w-[453px] hover-items">
      <Image src={image.url ?? ''} alt="HERO PICTURE" width={453} height={453} />
      <div className="absolute bottom-0 left-0 right-0">
        <div className='h-14'>{name}</div>
        <div className='h-14'>{formatPrice(price)}</div>
      </div>
    </div>
  )
}
