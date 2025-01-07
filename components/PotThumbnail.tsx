import { Pot } from '@/types'
import { formatPrice } from '@/utils/format'
import Image from 'next/image'

export const PotThumbnail = ({ image, name, price }: Pot) => {
  return (
    <div className="relative h-[475px] w-full xl:h-[634px] xl:w-[453px] hover-items" style={{border:'solid'}}>
      {/* <Image
        src={image.url ?? ''}
        alt="pot image"
        width={453}
        height={453}
        style={{ maxHeight: 453, objectFit: 'cover' }}
      /> */}
      <div className="xl:absolute bottom-0 left-0 right-0">
        <div className="h-14">{name}</div>
        <div className="h-14">{formatPrice(price)}</div>
      </div>
    </div>
  )
}
