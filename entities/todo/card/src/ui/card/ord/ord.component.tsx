import { FC } from 'react'
import { styled } from '@lmpx/styled'
import { OrdProps } from './ord.interface'
import { styles } from './ord.styles'

const OrdElement = styled.div(styles)

export const Ord: FC<OrdProps> = ({ children }) => <OrdElement>#{children}</OrdElement>
