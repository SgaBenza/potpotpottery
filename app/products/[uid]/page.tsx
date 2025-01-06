import { createClient } from '@/prismicio'

export default async function Page({ params }: { params: Promise<{ uid: string }> }) {
  const uid = (await params).uid

  const client = createClient()
  const page = await client.getByUID('products', uid)

  return <div>Product {uid}</div>
}
