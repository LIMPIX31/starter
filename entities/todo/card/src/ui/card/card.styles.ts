import { type StyleFn } from '@lmpx/styled'

export const styles: StyleFn = ({ theme }) => ({
  width: '400px',
  borderRadius: '6px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.gray,
  padding: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '24px',
})
