import { SinglePot } from '@/components/SinglePot'
import { createClient } from '@/prismicio'

export default async function Page({ params }: { params: Promise<{ uid: string }> }) {
  const uid = (await params).uid

  const client = createClient()
  const page = await client.getByUID('products', uid)
  const { image, name, price } = page.data

  return <SinglePot name={name as string} price={price as number} imageUrl={image.url ?? ''} />
}
