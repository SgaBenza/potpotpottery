import { createClient } from '@/prismicio'

export default async function Home() {
  const client = createClient()
  console.log('client: ', client);

  const page = await client.getSingle('homepage')
  console.log('page: ', page)

  return <div>ciao</div>
}
