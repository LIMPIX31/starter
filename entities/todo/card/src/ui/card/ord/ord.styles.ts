import { type StyleFn } from 'styled'

export const styles: StyleFn = ({ theme }) => ({
  fontFamily: theme.sansFont,
  fontWeight: '900',
  fontSize: '24px',
  color: 'black'
})
