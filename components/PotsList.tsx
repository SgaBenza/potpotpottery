import { Pot } from '@/types'
import { PotThumbnail } from './PotThumbnail'

interface PotsListProps {
  pots: Pot[]
}
export const PotsList = ({ pots }: PotsListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {pots.map(({ image, name, price }, i) => (
        <PotThumbnail key={i} image={image} name={name} price={price} />
      ))}
    </div>
  )
}
