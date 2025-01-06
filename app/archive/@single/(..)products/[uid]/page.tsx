import { Modal } from '@/components/Modal'
import { SinglePot } from '@/components/SinglePot'
import { createClient } from '@/prismicio'

export default async function Single({ params }: { params: { uid: string } }) {
  const uid = (await params)?.uid
  const client = createClient()
  const page = await client.getByUID('products', uid)
  const { image, name, price } = page.data
  return (
    <Modal>
      <div style={{ height: '100vh', width: '100vw' }}>
        <SinglePot name={name as string} price={price as number} imageUrl={image.url ?? ''} />
      </div>
    </Modal>
  )
}
