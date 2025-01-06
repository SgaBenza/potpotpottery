'use client'

import { formatPrice } from '@/utils/format'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface SinglePotProps {
  name: string
  price: number
  imageUrl?: string
}

export const SinglePot = ({ name, price, imageUrl = '' }: SinglePotProps) => {
  const [translateY, setTrnaslateY] = useState('translate-y-full')
  const router = useRouter()
  const onClose = () => {
    router.back()
  }

  useEffect(() => {
    setTimeout(() => {
      setTrnaslateY('translate-y-0')
    }, 0)
  }, [])

  return (
    <div
      className={`bg-white h-svh p-4 flex justify-between ${translateY} trans transition-all duration-500`}
      style={{ transform: 'translateY()' }}
    >
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
        <div className="cursor-pointer hover-items" onClick={onClose}>
          Close
        </div>
        <div>{formatPrice(price as number)}</div>
      </div>
    </div>
  )
}
