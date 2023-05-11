import { FC } from 'react'
import { ButtonProps } from './button.interface'
import { Button as SharedButton } from '@ui/button'
import { removeTodoById } from '@entities/todo-card'

export const Button: FC<ButtonProps> = ({ id }) => (
  <SharedButton primary destructive onClick={() => removeTodoById({ id })}>Удалить</SharedButton>
)
