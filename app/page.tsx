import { PotsList } from '@/components/PotsList'
import { createClient } from '@/prismicio'
import { Pot } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Brand } from '@/components/Brand'
import { Footer } from '@/components/Footer'

export default async function Home() {
  const client = createClient()

  const page = await client.getSingle('homepage')
  const products = await client.getByType('products', { pageSize: 3, page: 2 })

  const { hero } = page.data
  const pots: Pot[] = products.results.map(({ data: { image, name, price } }) => ({
    image: image as Pot['image'],
    name: name as Pot['name'],
    price: price as Pot['price'],
  }))

  return (
    <>
      <div className="bg-gray-300 mb-4 w-full h-[654px]">
        <Image
          className="object-cover"
          src={hero.url ?? ''}
          alt="HERO PICTURE"
          width={1440}
          height={654}
          sizes="100vw"
          style={{
            width: '100%',
            maxHeight: 654,
          }}
        />
      </div>

      <div className="p-4">
        <Brand />

        <PotsList pots={pots} />

        <Link href="/archive">
          <div className="text-center my-4 hover-items">Discover all</div>
        </Link>
      </div>
      <Footer />
    </>
  )
}
