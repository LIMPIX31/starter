import { GlobalStyles } from '@theme/global'
import { type FC } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { FontStyles } from '@theme/font'
import { ThemeProviderProps } from './theme-provider.interface'
import { theme } from '@theme/common'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </>
  )
}
