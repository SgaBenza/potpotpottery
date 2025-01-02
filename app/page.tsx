import { PotsList } from '@/components/PotsList'
import { createClient } from '@/prismicio'
import { Pot } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Brand } from '@/components/Brand'

export default async function Home() {
  const client = createClient()

  const page = await client.getSingle('homepage')
  const { hero, products } = page.data
  const pots: Pot[] = products.map(({ image, name, price }) => ({
    image: image as Pot['image'],
    name: name as Pot['name'],
    price: price as Pot['price'],
  }))

  return (
    <div>
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
    </div>
  )
}
