import { PropType, InjectionKey, ComputedRef } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
import { Hljs } from '../../_mixins'
import type {
  GlobalTheme,
  GlobalThemeOverrides,
  GlobalComponentConfig,
  GlobalIconConfig
} from './interface'
import type {
  ConfigProviderInjection,
  RtlProp,
  Breakpoints
} from './internal-interface'
import { NDateLocale } from '../../locales'
export declare const configProviderInjectionKey: InjectionKey<ConfigProviderInjection>
export declare const configProviderProps: {
  readonly abstract: BooleanConstructor
  readonly bordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly clsPrefix: StringConstructor
  readonly locale: PropType<{
    name: string
    global: {
      undo: string
      redo: string
      confirm: string
    }
    Popconfirm: {
      positiveText: string
      negativeText: string
    }
    Cascader: {
      placeholder: string
      loading: string
      loadingRequiredMessage: (label: string) => string
    }
    Time: {
      dateFormat: string
      dateTimeFormat: string
    }
    DatePicker: {
      yearFormat: string
      monthFormat: string
      dayFormat: string
      yearTypeFormat: string
      monthTypeFormat: string
      dateFormat: string
      dateTimeFormat: string
      clear: string
      now: string
      confirm: string
      selectTime: string
      selectDate: string
      datePlaceholder: string
      datetimePlaceholder: string
      monthPlaceholder: string
      yearPlaceholder: string
      startDatePlaceholder: string
      endDatePlaceholder: string
      startDatetimePlaceholder: string
      endDatetimePlaceholder: string
      monthBeforeYear: boolean
      firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6
      today: string
    }
    DataTable: {
      checkTableAll: string
      uncheckTableAll: string
      confirm: string
      clear: string
    }
    Transfer: {
      sourceTitle: string
      targetTitle: string
    }
    Empty: {
      description: string
    }
    Select: {
      placeholder: string
    }
    TimePicker: {
      placeholder: string
      positiveText: string
      negativeText: string
      now: string
    }
    Pagination: {
      goto: string
      selectionSuffix: string
    }
    DynamicTags: {
      add: string
    }
    Log: {
      loading: string
    }
    Input: {
      placeholder: string
    }
    InputNumber: {
      placeholder: string
    }
    DynamicInput: {
      create: string
    }
    ThemeEditor: {
      title: string
      clearAllVars: string
      clearSearch: string
      filterCompName: string
      filterVarName: string
      import: string
      export: string
      restore: string
    }
  } | null>
  readonly dateLocale: PropType<NDateLocale | null>
  readonly namespace: StringConstructor
  readonly rtl: PropType<RtlProp>
  readonly tag: {
    readonly type: StringConstructor
    readonly default: 'div'
  }
  readonly hljs: PropType<Hljs>
  readonly theme: PropType<GlobalTheme | null>
  readonly themeOverrides: PropType<GlobalThemeOverrides | null>
  readonly componentOptions: PropType<GlobalComponentConfig>
  readonly icons: PropType<GlobalIconConfig>
  readonly breakpoints: PropType<Breakpoints>
  readonly as: {
    readonly type: PropType<string | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
}
export declare type ConfigProviderProps = ExtractPublicPropTypes<
  typeof configProviderProps
>
declare const _default: import('vue').DefineComponent<
  {
    readonly abstract: BooleanConstructor
    readonly bordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly clsPrefix: StringConstructor
    readonly locale: PropType<{
      name: string
      global: {
        undo: string
        redo: string
        confirm: string
      }
      Popconfirm: {
        positiveText: string
        negativeText: string
      }
      Cascader: {
        placeholder: string
        loading: string
        loadingRequiredMessage: (label: string) => string
      }
      Time: {
        dateFormat: string
        dateTimeFormat: string
      }
      DatePicker: {
        yearFormat: string
        monthFormat: string
        dayFormat: string
        yearTypeFormat: string
        monthTypeFormat: string
        dateFormat: string
        dateTimeFormat: string
        clear: string
        now: string
        confirm: string
        selectTime: string
        selectDate: string
        datePlaceholder: string
        datetimePlaceholder: string
        monthPlaceholder: string
        yearPlaceholder: string
        startDatePlaceholder: string
        endDatePlaceholder: string
        startDatetimePlaceholder: string
        endDatetimePlaceholder: string
        monthBeforeYear: boolean
        firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6
        today: string
      }
      DataTable: {
        checkTableAll: string
        uncheckTableAll: string
        confirm: string
        clear: string
      }
      Transfer: {
        sourceTitle: string
        targetTitle: string
      }
      Empty: {
        description: string
      }
      Select: {
        placeholder: string
      }
      TimePicker: {
        placeholder: string
        positiveText: string
        negativeText: string
        now: string
      }
      Pagination: {
        goto: string
        selectionSuffix: string
      }
      DynamicTags: {
        add: string
      }
      Log: {
        loading: string
      }
      Input: {
        placeholder: string
      }
      InputNumber: {
        placeholder: string
      }
      DynamicInput: {
        create: string
      }
      ThemeEditor: {
        title: string
        clearAllVars: string
        clearSearch: string
        filterCompName: string
        filterVarName: string
        import: string
        export: string
        restore: string
      }
    } | null>
    readonly dateLocale: PropType<NDateLocale | null>
    readonly namespace: StringConstructor
    readonly rtl: PropType<RtlProp>
    readonly tag: {
      readonly type: StringConstructor
      readonly default: 'div'
    }
    readonly hljs: PropType<Hljs>
    readonly theme: PropType<GlobalTheme | null>
    readonly themeOverrides: PropType<GlobalThemeOverrides | null>
    readonly componentOptions: PropType<GlobalComponentConfig>
    readonly icons: PropType<GlobalIconConfig>
    readonly breakpoints: PropType<Breakpoints>
    readonly as: {
      readonly type: PropType<string | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
  },
  {
    mergedClsPrefix: ComputedRef<string | undefined>
    mergedBordered: ComputedRef<boolean | undefined>
    mergedNamespace: ComputedRef<string | undefined>
    mergedTheme: ComputedRef<GlobalTheme | undefined>
    mergedThemeOverrides: ComputedRef<GlobalThemeOverrides | undefined>
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
      readonly abstract?: unknown
      readonly bordered?: unknown
      readonly clsPrefix?: unknown
      readonly locale?: unknown
      readonly dateLocale?: unknown
      readonly namespace?: unknown
      readonly rtl?: unknown
      readonly tag?: unknown
      readonly hljs?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly componentOptions?: unknown
      readonly icons?: unknown
      readonly breakpoints?: unknown
      readonly as?: unknown
    } & {
      abstract: boolean
      tag: string
    } & {
      namespace?: string | undefined
      rtl?: RtlProp | undefined
      as?: string | undefined
      theme?: GlobalTheme | null | undefined
      themeOverrides?: GlobalThemeOverrides | null | undefined
      clsPrefix?: string | undefined
      bordered?: boolean | undefined
      locale?:
        | {
            name: string
            global: {
              undo: string
              redo: string
              confirm: string
            }
            Popconfirm: {
              positiveText: string
              negativeText: string
            }
            Cascader: {
              placeholder: string
              loading: string
              loadingRequiredMessage: (label: string) => string
            }
            Time: {
              dateFormat: string
              dateTimeFormat: string
            }
            DatePicker: {
              yearFormat: string
              monthFormat: string
              dayFormat: string
              yearTypeFormat: string
              monthTypeFormat: string
              dateFormat: string
              dateTimeFormat: string
              clear: string
              now: string
              confirm: string
              selectTime: string
              selectDate: string
              datePlaceholder: string
              datetimePlaceholder: string
              monthPlaceholder: string
              yearPlaceholder: string
              startDatePlaceholder: string
              endDatePlaceholder: string
              startDatetimePlaceholder: string
              endDatetimePlaceholder: string
              monthBeforeYear: boolean
              firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6
              today: string
            }
            DataTable: {
              checkTableAll: string
              uncheckTableAll: string
              confirm: string
              clear: string
            }
            Transfer: {
              sourceTitle: string
              targetTitle: string
            }
            Empty: {
              description: string
            }
            Select: {
              placeholder: string
            }
            TimePicker: {
              placeholder: string
              positiveText: string
              negativeText: string
              now: string
            }
            Pagination: {
              goto: string
              selectionSuffix: string
            }
            DynamicTags: {
              add: string
            }
            Log: {
              loading: string
            }
            Input: {
              placeholder: string
            }
            InputNumber: {
              placeholder: string
            }
            DynamicInput: {
              create: string
            }
            ThemeEditor: {
              title: string
              clearAllVars: string
              clearSearch: string
              filterCompName: string
              filterVarName: string
              import: string
              export: string
              restore: string
            }
          }
        | null
        | undefined
      dateLocale?: NDateLocale | null | undefined
      hljs?: Hljs | undefined
      componentOptions?: GlobalComponentConfig | undefined
      icons?: GlobalIconConfig | undefined
      breakpoints?: Breakpoints
    }
  >,
  {
    abstract: boolean
    tag: string
    as: string | undefined
    bordered: boolean | undefined
  }
>
export default _default
