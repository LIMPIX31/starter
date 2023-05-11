import type { ReactNode } from 'react'

export interface CardProps {
  ord: number
  content: string
  actions: ReactNode[]
}
