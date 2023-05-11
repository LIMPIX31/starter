import { combine, ifProp, type StyleFn } from 'styled'
import { ButtonProps } from '../button.interface'

const base: StyleFn = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  cursor: 'pointer',
})

const disabled: StyleFn = () => ({
  opacity: '50%',
  cursor: 'not-allowed',
})

export const baseStyles = combine(base, ifProp<ButtonProps>('disabled', disabled))
