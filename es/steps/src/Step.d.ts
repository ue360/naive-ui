import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const stepProps: {
  readonly status: PropType<'wait' | 'error' | 'finish' | 'process'>
  readonly title: StringConstructor
  readonly description: StringConstructor
  readonly internalIndex: {
    readonly type: NumberConstructor
    readonly default: 0
  }
}
export declare type StepProps = ExtractPublicPropTypes<typeof stepProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly status: PropType<'wait' | 'error' | 'finish' | 'process'>
    readonly title: StringConstructor
    readonly description: StringConstructor
    readonly internalIndex: {
      readonly type: NumberConstructor
      readonly default: 0
    }
  },
  {
    stepsSlots: Readonly<{
      [name: string]: import('vue').Slot | undefined
    }>
    mergedClsPrefix: import('vue').Ref<string>
    vertical: import('vue').ComputedRef<boolean>
    mergedStatus: import('vue').ComputedRef<
      'wait' | 'error' | 'finish' | 'process'
    >
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--description-text-color': string
      '--header-text-color': string
      '--indicator-border-color': string
      '--indicator-color': string
      '--indicator-icon-size': string
      '--indicator-index-font-size': string
      '--indicator-size': string
      '--indicator-text-color': string
      '--splitor-color': string
      '--step-header-font-size': string
      '--step-header-font-weight': string
    }>
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
      readonly status?: unknown
      readonly title?: unknown
      readonly description?: unknown
      readonly internalIndex?: unknown
    } & {
      internalIndex: number
    } & {
      description?: string | undefined
      title?: string | undefined
      status?: 'wait' | 'error' | 'finish' | 'process' | undefined
    }
  >,
  {
    internalIndex: number
  }
>
export default _default
