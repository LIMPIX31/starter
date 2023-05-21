import { PropsWithChildren } from 'react'

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean
  primary?: boolean
  destructive?: boolean
}

declare module '@lmpx/styled' {
  interface Props extends ButtonProps {}
}
