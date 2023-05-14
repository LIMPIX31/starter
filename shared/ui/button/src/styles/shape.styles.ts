import { type StyleFn } from '@lmpx/styled'

export const shapeStyles: StyleFn = ({ theme }) => ({
  padding: '12px',
  borderRadius: '6px',
  borderWidth: '1px',
  fontFamily: theme.sansFont,
})
