import { Pot } from '@/types'
import { PotThumbnail } from './PotThumbnail'
import Link from 'next/link'

interface PotsListProps {
  pots: Pot[]
}
export const PotsList = ({ pots }: PotsListProps) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-items-center">
      {pots.map(({ image, name, price }, i) => (
        <Link key={i} href={`/products/${name.toLowerCase()}`} className='w-full'>
          <PotThumbnail key={i} image={image} name={name} price={price} />
        </Link>
      ))}
    </div>
  )
}
