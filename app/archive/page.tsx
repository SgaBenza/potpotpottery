import { Brand } from '@/components/Brand'
import { Footer } from '@/components/Footer'
import { PotsList } from '@/components/PotsList'
import { createClient } from '@/prismicio'
import { Pot } from '@/types'

export default async function Archive() {
  const client = createClient()
  const products = await client.getByType('products')
  const results = products.results ?? []

  const pots: Pot[] = results.map(({ data: { image, name, price } }) => ({
    image: image as Pot['image'],
    name: name as Pot['name'],
    price: price as Pot['price'],
  }))

  return (
    <div className="p-4">
      <Brand />
      <PotsList pots={pots} />
      <Footer />
    </div>
  )
}
