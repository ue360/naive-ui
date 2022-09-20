import { PropType, InjectionKey } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
import type { Size } from './interface'
export interface ButtonGroupInjection {
  size?: Size | undefined
}
export declare const buttonGroupInjectionKey: InjectionKey<ButtonGroupInjection>
declare const buttonGroupProps: {
  readonly size: {
    readonly type: PropType<Size | undefined>
    readonly default: undefined
  }
  readonly vertical: BooleanConstructor
}
export declare type ButtonGroupProps = ExtractPublicPropTypes<
  typeof buttonGroupProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly size: {
      readonly type: PropType<Size | undefined>
      readonly default: undefined
    }
    readonly vertical: BooleanConstructor
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
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
      readonly size?: unknown
      readonly vertical?: unknown
    } & {
      vertical: boolean
    } & {
      size?: Size | undefined
    }
  >,
  {
    size: Size | undefined
    vertical: boolean
  }
>
export default _default