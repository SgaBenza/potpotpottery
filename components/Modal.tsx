'use client'

import { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }

    const html = document.querySelector('html')
    html?.classList.add('overflow-hidden')

    return () => {
      html?.classList.remove('overflow-hidden')
    }
  }, [])

  return createPortal(
    <div className="modal-backdrop">{children}</div>,
    document.getElementById('modal-root')!
  )
}
