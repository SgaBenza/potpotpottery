'use client'

import { formatPrice } from '@/utils/format'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export interface SinglePotProps {
  name: string
  price: number
  imageUrl?: string
}

export const SinglePot = ({ name, price, imageUrl = '' }: SinglePotProps) => {
  const router = useRouter()
  const onClose = () => {
    router.back()
  }
  return (
    <div className="h-svh p-4 flex justify-between">
      <div className="flex items-end">{name}</div>
      <div className="flex items-center">
        <Image
          src={imageUrl}
          alt="pot image"
          width={650}
          height={650}
          style={{ maxHeight: 650, objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div
          className="cursor-pointer hover-items"
          onClick={onClose}
        >
          Close
        </div>
        <div>{formatPrice(price as number)}</div>
      </div>
    </div>
  )
}
