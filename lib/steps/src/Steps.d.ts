import { PropType, InjectionKey, ExtractPropTypes, Ref, Slots } from 'vue'
import type { MergedTheme } from '../../_mixins'
import { ExtractPublicPropTypes } from '../../_utils'
import type { StepsTheme } from '../styles'
declare const stepsProps: {
  current: NumberConstructor
  status: {
    type: PropType<'wait' | 'error' | 'finish' | 'process'>
    default: string
  }
  size: {
    type: PropType<'small' | 'medium'>
    default: string
  }
  vertical: BooleanConstructor
  theme: PropType<
    import('../../_mixins').Theme<
      'Steps',
      {
        stepHeaderFontWeight: string
        indicatorTextColorProcess: string
        indicatorTextColorWait: string
        indicatorTextColorFinish: string
        indicatorTextColorError: string
        indicatorBorderColorProcess: string
        indicatorBorderColorWait: string
        indicatorBorderColorFinish: string
        indicatorBorderColorError: string
        indicatorColorProcess: string
        indicatorColorWait: string
        indicatorColorFinish: string
        indicatorColorError: string
        splitorColorProcess: string
        splitorColorWait: string
        splitorColorFinish: string
        splitorColorError: string
        headerTextColorProcess: string
        headerTextColorWait: string
        headerTextColorFinish: string
        headerTextColorError: string
        descriptionTextColorProcess: string
        descriptionTextColorWait: string
        descriptionTextColorFinish: string
        descriptionTextColorError: string
        stepHeaderFontSizeSmall: string
        stepHeaderFontSizeMedium: string
        indicatorIndexFontSizeSmall: string
        indicatorIndexFontSizeMedium: string
        indicatorSizeSmall: string
        indicatorSizeMedium: string
        indicatorIconSizeSmall: string
        indicatorIconSizeMedium: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Steps',
        {
          stepHeaderFontWeight: string
          indicatorTextColorProcess: string
          indicatorTextColorWait: string
          indicatorTextColorFinish: string
          indicatorTextColorError: string
          indicatorBorderColorProcess: string
          indicatorBorderColorWait: string
          indicatorBorderColorFinish: string
          indicatorBorderColorError: string
          indicatorColorProcess: string
          indicatorColorWait: string
          indicatorColorFinish: string
          indicatorColorError: string
          splitorColorProcess: string
          splitorColorWait: string
          splitorColorFinish: string
          splitorColorError: string
          headerTextColorProcess: string
          headerTextColorWait: string
          headerTextColorFinish: string
          headerTextColorError: string
          descriptionTextColorProcess: string
          descriptionTextColorWait: string
          descriptionTextColorFinish: string
          descriptionTextColorError: string
          stepHeaderFontSizeSmall: string
          stepHeaderFontSizeMedium: string
          indicatorIndexFontSizeSmall: string
          indicatorIndexFontSizeMedium: string
          indicatorSizeSmall: string
          indicatorSizeMedium: string
          indicatorIconSizeSmall: string
          indicatorIconSizeMedium: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Steps',
        {
          stepHeaderFontWeight: string
          indicatorTextColorProcess: string
          indicatorTextColorWait: string
          indicatorTextColorFinish: string
          indicatorTextColorError: string
          indicatorBorderColorProcess: string
          indicatorBorderColorWait: string
          indicatorBorderColorFinish: string
          indicatorBorderColorError: string
          indicatorColorProcess: string
          indicatorColorWait: string
          indicatorColorFinish: string
          indicatorColorError: string
          splitorColorProcess: string
          splitorColorWait: string
          splitorColorFinish: string
          splitorColorError: string
          headerTextColorProcess: string
          headerTextColorWait: string
          headerTextColorFinish: string
          headerTextColorError: string
          descriptionTextColorProcess: string
          descriptionTextColorWait: string
          descriptionTextColorFinish: string
          descriptionTextColorError: string
          stepHeaderFontSizeSmall: string
          stepHeaderFontSizeMedium: string
          indicatorIndexFontSizeSmall: string
          indicatorIndexFontSizeMedium: string
          indicatorSizeSmall: string
          indicatorSizeMedium: string
          indicatorIconSizeSmall: string
          indicatorIconSizeMedium: string
        },
        any
      >
    >
  >
}
export interface StepsInjection {
  props: ExtractPropTypes<typeof stepsProps>
  mergedClsPrefixRef: Ref<string>
  mergedThemeRef: Ref<MergedTheme<StepsTheme>>
  stepsSlots: Slots
}
export declare type StepsProps = ExtractPublicPropTypes<typeof stepsProps>
export declare const stepsInjectionKey: InjectionKey<StepsInjection>
declare const _default: import('vue').DefineComponent<
  {
    current: NumberConstructor
    status: {
      type: PropType<'wait' | 'error' | 'finish' | 'process'>
      default: string
    }
    size: {
      type: PropType<'small' | 'medium'>
      default: string
    }
    vertical: BooleanConstructor
    theme: PropType<
      import('../../_mixins').Theme<
        'Steps',
        {
          stepHeaderFontWeight: string
          indicatorTextColorProcess: string
          indicatorTextColorWait: string
          indicatorTextColorFinish: string
          indicatorTextColorError: string
          indicatorBorderColorProcess: string
          indicatorBorderColorWait: string
          indicatorBorderColorFinish: string
          indicatorBorderColorError: string
          indicatorColorProcess: string
          indicatorColorWait: string
          indicatorColorFinish: string
          indicatorColorError: string
          splitorColorProcess: string
          splitorColorWait: string
          splitorColorFinish: string
          splitorColorError: string
          headerTextColorProcess: string
          headerTextColorWait: string
          headerTextColorFinish: string
          headerTextColorError: string
          descriptionTextColorProcess: string
          descriptionTextColorWait: string
          descriptionTextColorFinish: string
          descriptionTextColorError: string
          stepHeaderFontSizeSmall: string
          stepHeaderFontSizeMedium: string
          indicatorIndexFontSizeSmall: string
          indicatorIndexFontSizeMedium: string
          indicatorSizeSmall: string
          indicatorSizeMedium: string
          indicatorIconSizeSmall: string
          indicatorIconSizeMedium: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Steps',
          {
            stepHeaderFontWeight: string
            indicatorTextColorProcess: string
            indicatorTextColorWait: string
            indicatorTextColorFinish: string
            indicatorTextColorError: string
            indicatorBorderColorProcess: string
            indicatorBorderColorWait: string
            indicatorBorderColorFinish: string
            indicatorBorderColorError: string
            indicatorColorProcess: string
            indicatorColorWait: string
            indicatorColorFinish: string
            indicatorColorError: string
            splitorColorProcess: string
            splitorColorWait: string
            splitorColorFinish: string
            splitorColorError: string
            headerTextColorProcess: string
            headerTextColorWait: string
            headerTextColorFinish: string
            headerTextColorError: string
            descriptionTextColorProcess: string
            descriptionTextColorWait: string
            descriptionTextColorFinish: string
            descriptionTextColorError: string
            stepHeaderFontSizeSmall: string
            stepHeaderFontSizeMedium: string
            indicatorIndexFontSizeSmall: string
            indicatorIndexFontSizeMedium: string
            indicatorSizeSmall: string
            indicatorSizeMedium: string
            indicatorIconSizeSmall: string
            indicatorIconSizeMedium: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Steps',
          {
            stepHeaderFontWeight: string
            indicatorTextColorProcess: string
            indicatorTextColorWait: string
            indicatorTextColorFinish: string
            indicatorTextColorError: string
            indicatorBorderColorProcess: string
            indicatorBorderColorWait: string
            indicatorBorderColorFinish: string
            indicatorBorderColorError: string
            indicatorColorProcess: string
            indicatorColorWait: string
            indicatorColorFinish: string
            indicatorColorError: string
            splitorColorProcess: string
            splitorColorWait: string
            splitorColorFinish: string
            splitorColorError: string
            headerTextColorProcess: string
            headerTextColorWait: string
            headerTextColorFinish: string
            headerTextColorError: string
            descriptionTextColorProcess: string
            descriptionTextColorWait: string
            descriptionTextColorFinish: string
            descriptionTextColorError: string
            stepHeaderFontSizeSmall: string
            stepHeaderFontSizeMedium: string
            indicatorIndexFontSizeSmall: string
            indicatorIndexFontSizeMedium: string
            indicatorSizeSmall: string
            indicatorSizeMedium: string
            indicatorIconSizeSmall: string
            indicatorIconSizeMedium: string
          },
          any
        >
      >
    >
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
      current?: unknown
      status?: unknown
      size?: unknown
      vertical?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      size: 'small' | 'medium'
      vertical: boolean
      status: 'wait' | 'error' | 'finish' | 'process'
    } & {
      theme?:
        | import('../../_mixins').Theme<
            'Steps',
            {
              stepHeaderFontWeight: string
              indicatorTextColorProcess: string
              indicatorTextColorWait: string
              indicatorTextColorFinish: string
              indicatorTextColorError: string
              indicatorBorderColorProcess: string
              indicatorBorderColorWait: string
              indicatorBorderColorFinish: string
              indicatorBorderColorError: string
              indicatorColorProcess: string
              indicatorColorWait: string
              indicatorColorFinish: string
              indicatorColorError: string
              splitorColorProcess: string
              splitorColorWait: string
              splitorColorFinish: string
              splitorColorError: string
              headerTextColorProcess: string
              headerTextColorWait: string
              headerTextColorFinish: string
              headerTextColorError: string
              descriptionTextColorProcess: string
              descriptionTextColorWait: string
              descriptionTextColorFinish: string
              descriptionTextColorError: string
              stepHeaderFontSizeSmall: string
              stepHeaderFontSizeMedium: string
              indicatorIndexFontSizeSmall: string
              indicatorIndexFontSizeMedium: string
              indicatorSizeSmall: string
              indicatorSizeMedium: string
              indicatorIconSizeSmall: string
              indicatorIconSizeMedium: string
            },
            any
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Steps',
              {
                stepHeaderFontWeight: string
                indicatorTextColorProcess: string
                indicatorTextColorWait: string
                indicatorTextColorFinish: string
                indicatorTextColorError: string
                indicatorBorderColorProcess: string
                indicatorBorderColorWait: string
                indicatorBorderColorFinish: string
                indicatorBorderColorError: string
                indicatorColorProcess: string
                indicatorColorWait: string
                indicatorColorFinish: string
                indicatorColorError: string
                splitorColorProcess: string
                splitorColorWait: string
                splitorColorFinish: string
                splitorColorError: string
                headerTextColorProcess: string
                headerTextColorWait: string
                headerTextColorFinish: string
                headerTextColorError: string
                descriptionTextColorProcess: string
                descriptionTextColorWait: string
                descriptionTextColorFinish: string
                descriptionTextColorError: string
                stepHeaderFontSizeSmall: string
                stepHeaderFontSizeMedium: string
                indicatorIndexFontSizeSmall: string
                indicatorIndexFontSizeMedium: string
                indicatorSizeSmall: string
                indicatorSizeMedium: string
                indicatorIconSizeSmall: string
                indicatorIconSizeMedium: string
              },
              any
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Steps',
              {
                stepHeaderFontWeight: string
                indicatorTextColorProcess: string
                indicatorTextColorWait: string
                indicatorTextColorFinish: string
                indicatorTextColorError: string
                indicatorBorderColorProcess: string
                indicatorBorderColorWait: string
                indicatorBorderColorFinish: string
                indicatorBorderColorError: string
                indicatorColorProcess: string
                indicatorColorWait: string
                indicatorColorFinish: string
                indicatorColorError: string
                splitorColorProcess: string
                splitorColorWait: string
                splitorColorFinish: string
                splitorColorError: string
                headerTextColorProcess: string
                headerTextColorWait: string
                headerTextColorFinish: string
                headerTextColorError: string
                descriptionTextColorProcess: string
                descriptionTextColorWait: string
                descriptionTextColorFinish: string
                descriptionTextColorError: string
                stepHeaderFontSizeSmall: string
                stepHeaderFontSizeMedium: string
                indicatorIndexFontSizeSmall: string
                indicatorIndexFontSizeMedium: string
                indicatorSizeSmall: string
                indicatorSizeMedium: string
                indicatorIconSizeSmall: string
                indicatorIconSizeMedium: string
              },
              any
            >
          >
        | undefined
      current?: number | undefined
    }
  >,
  {
    size: 'small' | 'medium'
    vertical: boolean
    status: 'wait' | 'error' | 'finish' | 'process'
  }
>
export default _default
