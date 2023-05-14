import { Global } from '@lmpx/styled'
import type { FC } from 'react'
import { monaFontFace } from './mona'

export const FontStyles: FC = () => <Global styles={[monaFontFace]} />
