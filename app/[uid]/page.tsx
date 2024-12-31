import { createClient } from '@/prismicio'

export default async function Page() {
  const client = createClient()
  console.log('client: ', client);

  // const page = await client.getByUID('archive', 'potpotpot')
  // console.log('page: ', page.data.potpotpot);

  return <h1>{'page.uid'}</h1>
}
