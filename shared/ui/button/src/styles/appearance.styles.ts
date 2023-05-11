import { combine, ifProp, type StyleFn } from 'styled'
import type { ButtonProps } from '../button.interface'

const base: StyleFn<ButtonProps> = ({ theme, destructive }) => ({
  borderColor: destructive ? theme.red : theme.gray,
  fontFamily: theme.sansFont,
  color: destructive ? theme.red : 'black',
})

const primary: StyleFn<ButtonProps> = ({ theme, destructive }) => {
  const color = destructive ? theme.red : theme.primary

  return {
    borderColor: color,
    backgroundColor: color,
    color: 'white',
  }
}

export const appearanceStyles = combine(base, ifProp<ButtonProps>('primary', primary))
