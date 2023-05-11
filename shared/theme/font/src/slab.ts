import { StyleFn } from 'styled'
import font from './assets/RobotoSlab.ttf'

export const slabFontFace: StyleFn = () => ({
  '@font-face': {
    fontFamily: 'Slab',
    src: `url('${font}')`,
  },
})
