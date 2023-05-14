import { Global } from '@lmpx/styled'
import type { FC } from 'react'
import { slabFontFace } from './slab'

export const FontStyles: FC = () => <Global styles={[slabFontFace]} />
