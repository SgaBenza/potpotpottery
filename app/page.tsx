import { createClient } from '@/prismicio'
import { asLink } from '@prismicio/client'

export default async function Home() {
  const client = createClient()
  console.log('client: ', client)

  const page = await client.getSingle('homepage')
  const { facebook, hero, instagram, products, website } = page.data

  return (
    <div>
      <div className="hero h-[654px] bg-gray-300 mb-4"></div>

      <div className="p-4">
        <div className="text-center mb-24">
          <div>PotPotPottery</div>
          <div className="text-stone">Potteries by Leonardo Romano</div>
        </div>
        <div className="bg-red-300 h-96"></div>
        <div className="text-center my-4">Discover all</div>
        <footer className="flex justify-between my-4">
          <a href={asLink(website) as string} target='_blank'>PotPotPottery</a>
          <div className="text-stone flex gap-5">
            <a href={asLink(instagram) as string} target='_blank'>Instagram</a>
            <a href={asLink(facebook) as string} target='_blank'>Facebook</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
