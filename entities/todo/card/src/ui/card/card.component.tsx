import { FC } from 'react'
import { styled } from 'styled'
import { styles } from './card.styles'
import { CardProps } from './card.interface'
import { Ord } from './ord'
import { Content } from './content'
import { Actions } from './actions'

const CardElement = styled.div(styles)

export const Card: FC<CardProps> = ({ ord, content, actions }) => (
  <CardElement>
    <Ord>{ord}</Ord>
    <Content>{content}</Content>
    <Actions>{actions}</Actions>
  </CardElement>
)
