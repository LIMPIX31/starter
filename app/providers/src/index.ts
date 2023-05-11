import { type FC } from 'react'
import { withTheme } from './with-theme'
import { withRouter } from './with-router'

export const withProviders = (component: FC) => withRouter(withTheme(component))
