import { type StyleFn } from 'styled'

export const styles: StyleFn = ({ theme }) => ({
  width: '100%',
  padding: '8px 16px',
  borderRadius: '6px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.gray,
  fontFamily: theme.sansFont,
  ':focus': {
    borderColor: theme.primary,
  },
})
