import { SingleModal } from '@/components/SinglePotModal'

export default async function Single({ params }: { params: Promise<{ uid: string }> }) {
  const uid = (await params)?.uid
  return <SingleModal uid={uid} />
}
