import { InjectionKey, PropType, Ref } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
export interface RowInjection {
  gutterRef: Ref<string | number | [number, number]>
  verticalGutterRef: Ref<number>
  horizontalGutterRef: Ref<number>
  mergedClsPrefixRef: Ref<string>
}
export declare const rowInjectionKey: InjectionKey<RowInjection>
export declare const rowProps: {
  readonly gutter: {
    readonly type: PropType<string | number | [number, number]>
    readonly default: 0
  }
  readonly alignItems: StringConstructor
  readonly justifyContent: StringConstructor
}
export declare const rowPropKeys: ('alignItems' | 'justifyContent' | 'gutter')[]
export declare type RowProps = ExtractPublicPropTypes<typeof rowProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly gutter: {
      readonly type: PropType<string | number | [number, number]>
      readonly default: 0
    }
    readonly alignItems: StringConstructor
    readonly justifyContent: StringConstructor
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    styleMargin: import('vue').ComputedRef<string>
    styleWidth: import('vue').ComputedRef<string>
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
      readonly gutter?: unknown
      readonly alignItems?: unknown
      readonly justifyContent?: unknown
    } & {
      gutter: string | number | [number, number]
    } & {
      alignItems?: string | undefined
      justifyContent?: string | undefined
    }
  >,
  {
    gutter: string | number | [number, number]
  }
>
export default _default