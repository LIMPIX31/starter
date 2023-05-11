import { GlobalStyles } from '@theme/global'
import { type FC } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { FontStyles } from '@theme/font'
import { theme } from '@theme/common'
import { ThemeProviderProps } from './theme-provider.interface'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <>
    <GlobalStyles />
    <FontStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
