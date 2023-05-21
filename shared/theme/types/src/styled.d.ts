export interface Schema {
  gray: string
  sansFont: string
  red: string
  primary: string
}

import '@emotion/react'

declare module '@emotion/react' {
  interface Theme extends Schema {}
}
