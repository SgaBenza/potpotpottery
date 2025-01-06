import { ReactNode } from 'react'

export default async function Layout({
  children,
  single,
}: {
  children: ReactNode
  single: ReactNode
}) {
  return (
    <>
      {children}
      {single}
      <div id="modal-root"></div>
    </>
  )
}
