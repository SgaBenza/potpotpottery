import { asLink } from '@prismicio/client'
import { createClient } from '@/prismicio'

export const Footer = async () => {
  const client = createClient()

  const page = await client.getSingle('footer')
  const { facebook, instagram, website } = page.data
  return (
    <footer className="xl:flex justify-between m-4 pt-32">
      <a href={asLink(website) as string} target="_blank">
        PotPotPottery
      </a>
      <div className="text-stone flex gap-5">
        <a href={asLink(instagram) as string} target="_blank">
          Instagram
        </a>
        <a href={asLink(facebook) as string} target="_blank">
          Facebook
        </a>
      </div>
    </footer>
  )
}
