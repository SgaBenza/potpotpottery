import { useEffect, useState } from 'react'

export const useTranslateY = (initial: string, effectState: string) => {
  const [translateY, setTrnaslateY] = useState(initial)
  
  useEffect(() => {
    const entryIndex = setTimeout(() => {
      setTrnaslateY(effectState)
    }, 0)

    return () => {
      clearTimeout(entryIndex)
    }
  }, [])

  return [translateY, setTrnaslateY] as const
}
