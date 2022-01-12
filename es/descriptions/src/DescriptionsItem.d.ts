import { PropType, CSSProperties } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const descriptionItemProps: {
  readonly label: StringConstructor
  readonly span: {
    readonly type: NumberConstructor
    readonly default: 1
  }
  readonly labelStyle: PropType<string | CSSProperties>
  readonly contentStyle: PropType<string | CSSProperties>
}
export declare type DescriptionItemProps = ExtractPublicPropTypes<
  typeof descriptionItemProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly label: StringConstructor
    readonly span: {
      readonly type: NumberConstructor
      readonly default: 1
    }
    readonly labelStyle: PropType<string | CSSProperties>
    readonly contentStyle: PropType<string | CSSProperties>
  },
  unknown,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    {
      readonly label?: unknown
      readonly span?: unknown
      readonly labelStyle?: unknown
      readonly contentStyle?: unknown
    } & {
      span: number
    } & {
      label?: string | undefined
      contentStyle?: string | CSSProperties | undefined
      labelStyle?: string | CSSProperties | undefined
    }
  >,
  {
    span: number
  }
>
export default _default
