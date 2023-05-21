import { combine, ifProp, type StyleFn } from '@lmpx/styled'
import '../button.interface'

const base: StyleFn = ({ theme, destructive }) => ({
  borderColor: destructive ? theme.red : theme.gray,
  fontFamily: theme.sansFont,
  color: destructive ? theme.red : 'black',
})

const primary: StyleFn = ({ theme, destructive }) => {
  const color = destructive ? theme.red : theme.primary

  return {
    borderColor: color,
    backgroundColor: color,
    color: 'white',
  }
}

export const appearanceStyles = combine(base, ifProp('primary', primary))
