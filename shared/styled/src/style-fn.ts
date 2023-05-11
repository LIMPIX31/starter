import type { Schema } from '@theme/types'
import type { InterpolationPrimitive } from '@emotion/serialize'

export type StyleFn<T = {}> = (props: (Record<any, any> | { theme: Schema }) & T) => InterpolationPrimitive
