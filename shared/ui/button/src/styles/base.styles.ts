import { combine, ifProp, type StyleFn } from '@lmpx/styled'
import type { ButtonProps } from '../button.interface'

const base: StyleFn<ButtonProps> = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  cursor: 'pointer',
})

const disabled: StyleFn<ButtonProps> = () => ({
  opacity: '50%',
  cursor: 'not-allowed',
})

export const baseStyles = combine(base, ifProp<ButtonProps>('disabled', disabled))
