import type { ExtractPublicPropTypes } from '../../_utils'
import useRadio from './use-radio'
export declare type RadioButtonProps = ExtractPublicPropTypes<
  typeof useRadio.props
>
declare const _default: import('vue').DefineComponent<
  {
    readonly name: StringConstructor
    readonly value: {
      readonly type: import('vue').PropType<string | number>
      readonly default: 'on'
    }
    readonly checked: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly defaultChecked: BooleanConstructor
    readonly disabled: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly size: import('vue').PropType<'small' | 'medium' | 'large'>
    readonly onUpdateChecked: import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    readonly 'onUpdate:checked': import('vue').PropType<
      import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >
    readonly checkedValue: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
  },
  import('./use-radio').UseRadio,
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
      readonly name?: unknown
      readonly value?: unknown
      readonly checked?: unknown
      readonly defaultChecked?: unknown
      readonly disabled?: unknown
      readonly size?: unknown
      readonly onUpdateChecked?: unknown
      readonly 'onUpdate:checked'?: unknown
      readonly checkedValue?: unknown
    } & {
      value: string | number
      defaultChecked: boolean
    } & {
      name?: string | undefined
      size?: 'small' | 'medium' | 'large' | undefined
      disabled?: boolean | undefined
      checked?: boolean | undefined
      'onUpdate:checked'?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      onUpdateChecked?:
        | import('../../_utils').MaybeArray<(value: boolean) => void>
        | undefined
      checkedValue?: boolean | undefined
    }
  >,
  {
    value: string | number
    disabled: boolean | undefined
    checked: boolean | undefined
    defaultChecked: boolean
    checkedValue: boolean | undefined
  }
>
export default _default
