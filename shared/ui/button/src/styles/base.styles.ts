import { combine, ifProp, type StyleFn } from '@lmpx/styled'
import '../button.interface'

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

export const baseStyles = combine(base, ifProp('disabled', disabled))
