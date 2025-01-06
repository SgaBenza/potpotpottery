import { SingleModal } from '@/components/SinglePotModal'

export default async function Single({ params }: { params: { uid: string } }) {
  const uid = (await params).uid
  return <SingleModal uid={uid} />
}
