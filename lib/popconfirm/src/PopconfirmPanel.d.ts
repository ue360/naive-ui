import { PropType } from 'vue'
export declare const panelProps: {
  readonly positiveText: StringConstructor
  readonly negativeText: StringConstructor
  readonly showIcon: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly onPositiveClick: {
    readonly type: PropType<(e: MouseEvent) => void>
    readonly required: true
  }
  readonly onNegativeClick: {
    readonly type: PropType<(e: MouseEvent) => void>
    readonly required: true
  }
}
export declare const panelPropKeys: (
  | 'positiveText'
  | 'negativeText'
  | 'showIcon'
  | 'onPositiveClick'
  | 'onNegativeClick'
)[]
declare const _default: import('vue').DefineComponent<
  {
    readonly positiveText: StringConstructor
    readonly negativeText: StringConstructor
    readonly showIcon: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly onPositiveClick: {
      readonly type: PropType<(e: MouseEvent) => void>
      readonly required: true
    }
    readonly onNegativeClick: {
      readonly type: PropType<(e: MouseEvent) => void>
      readonly required: true
    }
  },
  {
    mergedClsPrefix: import('vue').Ref<string>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--font-size': string
      '--icon-size': string
      '--icon-color': string
    }>
    localizedPositiveText: import('vue').ComputedRef<string>
    localizedNegativeText: import('vue').ComputedRef<string>
    handlePositiveClick(e: MouseEvent): void
    handleNegativeClick(e: MouseEvent): void
    localeRef: import('vue').Ref<{
      positiveText: string
      negativeText: string
    }>
    dateLocaleRef: import('vue').Ref<
      import('../../locales/date/enUS').NDateLocale
    >
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
      readonly positiveText?: unknown
      readonly negativeText?: unknown
      readonly showIcon?: unknown
      readonly onPositiveClick?: unknown
      readonly onNegativeClick?: unknown
    } & {
      showIcon: boolean
      onPositiveClick: (e: MouseEvent) => void
      onNegativeClick: (e: MouseEvent) => void
    } & {
      positiveText?: string | undefined
      negativeText?: string | undefined
    }
  >,
  {
    showIcon: boolean
  }
>
export default _default