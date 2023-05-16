export declare interface Schema {
  gray: string
  sansFont: string
  red: string
  primary: string
}

declare module '@emotion/react' {
  interface Theme extends Schema {}
}
