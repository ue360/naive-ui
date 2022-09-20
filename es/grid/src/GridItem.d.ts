import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
export declare const defaultSpan = 1
export declare const gridItemProps: {
  readonly span: {
    readonly type: PropType<string | number>
    readonly default: 1
  }
  readonly offset: {
    readonly type: PropType<string | number>
    readonly default: 0
  }
  readonly suffix: BooleanConstructor
  readonly privateOffset: NumberConstructor
  readonly privateSpan: NumberConstructor
  readonly privateColStart: NumberConstructor
  readonly privateShow: {
    readonly type: BooleanConstructor
    readonly default: true
  }
}
export declare const gridItemPropKeys: (
  | 'offset'
  | 'span'
  | 'suffix'
  | 'privateSpan'
  | 'privateColStart'
  | 'privateShow'
  | 'privateOffset'
)[]
export declare type GridItemProps = ExtractPublicPropTypes<typeof gridItemProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly span: {
      readonly type: PropType<string | number>
      readonly default: 1
    }
    readonly offset: {
      readonly type: PropType<string | number>
      readonly default: 0
    }
    readonly suffix: BooleanConstructor
    readonly privateOffset: NumberConstructor
    readonly privateSpan: NumberConstructor
    readonly privateColStart: NumberConstructor
    readonly privateShow: {
      readonly type: BooleanConstructor
      readonly default: true
    }
  },
  {
    overflow: import('vue').Ref<boolean>
    itemStyle: import('vue').Ref<
      string | import('vue').CSSProperties | undefined
    >
    deriveStyle: () => {
      display: string
      gridColumn: string
      marginLeft: string
    }
  },
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
      readonly span?: unknown
      readonly offset?: unknown
      readonly suffix?: unknown
      readonly privateOffset?: unknown
      readonly privateSpan?: unknown
      readonly privateColStart?: unknown
      readonly privateShow?: unknown
    } & {
      offset: string | number
      span: string | number
      suffix: boolean
      privateShow: boolean
    } & {
      privateSpan?: number | undefined
      privateColStart?: number | undefined
      privateOffset?: number | undefined
    }
  >,
  {
    offset: string | number
    span: string | number
    suffix: boolean
    privateShow: boolean
  }
>
export default _default