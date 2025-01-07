import { Modal } from '@/components/Modal'
import { SinglePot } from '@/components/SinglePot'
import { createClient } from '@/prismicio'

export const SingleModal = async ({ uid }: { uid: string }) => {
  const client = createClient()
  const page = await client.getByUID('products', uid)
  const { image, name, price } = page.data
  return (
    <Modal>
      <div className='w-dvw h-dvh'>
        <SinglePot name={name as string} price={price as number} imageUrl={image.url ?? ''} />
      </div>
    </Modal>
  )
}
