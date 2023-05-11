import { FC } from 'react'
import { OrdProps } from './ord.interface'
import { styled } from 'styled'
import { styles } from './ord.styles'

const OrdElement = styled.div(styles)

export const Ord: FC<OrdProps> = ({ children }) => (
  <OrdElement>
    #{children}
  </OrdElement>
)
