import { FC } from 'react'
import { Button as SharedButton } from '@ui/button'
import { removeTodoById } from '@entities/todo-card'
import { ButtonProps } from './button.interface'

export const Button: FC<ButtonProps> = ({ id }) => (
  <SharedButton primary destructive onClick={() => removeTodoById({ id })}>
    Удалить
  </SharedButton>
)
