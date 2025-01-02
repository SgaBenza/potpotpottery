import { Brand } from '@/components/Brand'
import { PotsList } from '@/components/PotsList'
import { createClient } from '@/prismicio'
import { Pot } from '@/types'

export default async function Archive() {
  const client = createClient()
  const page = await client.getSingle('archive')

  const { products } = page.data
  const pots: Pot[] = products.map(({ image, name, price }) => ({
    image: image as Pot['image'],
    name: name as Pot['name'],
    price: price as Pot['price'],
  }))

  return (
    <div className="p-4">
      <Brand />
      <PotsList pots={pots} />
    </div>
  )
}
