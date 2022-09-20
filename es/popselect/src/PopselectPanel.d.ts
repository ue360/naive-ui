import { PropType } from 'vue'
import { TreeNode } from 'treemate'
import { RenderLabel } from '../../_internal/select-menu/src/interface'
import {
  OnUpdateValue,
  Value,
  SelectMixedOption,
  SelectBaseOption,
  SelectGroupOption,
  SelectIgnoredOption
} from '../../select/src/interface'
import type { MaybeArray } from '../../_utils'
import type { PopselectSize } from './interface'
export declare const panelProps: {
  readonly multiple: BooleanConstructor
  readonly value: {
    readonly type: PropType<Value | null>
    readonly default: null
  }
  readonly cancelable: BooleanConstructor
  readonly width: PropType<string | number>
  readonly options: {
    readonly type: PropType<SelectMixedOption[]>
    readonly default: () => never[]
  }
  readonly size: {
    readonly type: PropType<PopselectSize>
    readonly default: 'medium'
  }
  readonly scrollable: BooleanConstructor
  readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
  readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
  readonly onMouseenter: PropType<(e: MouseEvent) => void>
  readonly onMouseleave: PropType<(e: MouseEvent) => void>
  readonly renderLabel: PropType<RenderLabel>
  readonly onChange: {
    readonly type: PropType<MaybeArray<OnUpdateValue> | undefined>
    readonly validator: () => boolean
    readonly default: undefined
  }
}
export declare const panelPropKeys: (
  | 'value'
  | 'size'
  | 'width'
  | 'multiple'
  | 'onChange'
  | 'onMouseenter'
  | 'onMouseleave'
  | 'scrollable'
  | 'renderLabel'
  | 'options'
  | 'onUpdate:value'
  | 'onUpdateValue'
  | 'cancelable'
)[]
declare const _default: import('vue').DefineComponent<
  {
    readonly multiple: BooleanConstructor
    readonly value: {
      readonly type: PropType<Value | null>
      readonly default: null
    }
    readonly cancelable: BooleanConstructor
    readonly width: PropType<string | number>
    readonly options: {
      readonly type: PropType<SelectMixedOption[]>
      readonly default: () => never[]
    }
    readonly size: {
      readonly type: PropType<PopselectSize>
      readonly default: 'medium'
    }
    readonly scrollable: BooleanConstructor
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>
    readonly onMouseenter: PropType<(e: MouseEvent) => void>
    readonly onMouseleave: PropType<(e: MouseEvent) => void>
    readonly renderLabel: PropType<RenderLabel>
    readonly onChange: {
      readonly type: PropType<MaybeArray<OnUpdateValue> | undefined>
      readonly validator: () => boolean
      readonly default: undefined
    }
  },
  {
    mergedTheme: import('vue').Ref<{
      common: {
        baseColor: string
        primaryColor: string
        primaryColorHover: string
        primaryColorPressed: string
        primaryColorSuppl: string
        infoColor: string
        infoColorHover: string
        infoColorPressed: string
        infoColorSuppl: string
        successColor: string
        successColorHover: string
        successColorPressed: string
        successColorSuppl: string
        warningColor: string
        warningColorHover: string
        warningColorPressed: string
        warningColorSuppl: string
        errorColor: string
        errorColorHover: string
        errorColorPressed: string
        errorColorSuppl: string
        textColorBase: string
        textColor1: string
        textColor2: string
        textColor3: string
        textColorDisabled: string
        placeholderColor: string
        placeholderColorDisabled: string
        iconColor: string
        iconColorHover: string
        iconColorPressed: string
        iconColorDisabled: string
        opacity1: string
        opacity2: string
        opacity3: string
        opacity4: string
        opacity5: string
        dividerColor: string
        borderColor: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorDisabled: string
        clearColor: string
        clearColorHover: string
        clearColorPressed: string
        scrollbarColor: string
        scrollbarColorHover: string
        scrollbarWidth: string
        scrollbarHeight: string
        scrollbarBorderRadius: string
        progressRailColor: string
        railColor: string
        popoverColor: string
        tableColor: string
        cardColor: string
        modalColor: string
        bodyColor: string
        tagColor: string
        avatarColor: string
        invertedColor: string
        inputColor: string
        codeColor: string
        tabColor: string
        actionColor: string
        tableHeaderColor: string
        hoverColor: string
        tableColorHover: string
        tableColorStriped: string
        pressedColor: string
        opacityDisabled: string
        inputColorDisabled: string
        buttonColor2: string
        buttonColor2Hover: string
        buttonColor2Pressed: string
        boxShadow1: string
        boxShadow2: string
        boxShadow3: string
        fontFamily: string
        fontFamilyMono: string
        fontWeight: string
        fontWeightStrong: string
        cubicBezierEaseInOut: string
        cubicBezierEaseOut: string
        cubicBezierEaseIn: string
        borderRadius: string
        borderRadiusSmall: string
        fontSize: string
        fontSizeTiny: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        lineHeight: string
        heightTiny: string
        heightSmall: string
        heightMedium: string
        heightLarge: string
        heightHuge: string
        transformDebounceScale: string
        name: 'common'
      }
      self: unknown
      peers: {
        Popover: import('../../_mixins').Theme<
          'Popover',
          {
            fontSize: string
            borderRadius: string
            color: string
            dividerColor: string
            textColor: string
            boxShadow: string
            space: string
            spaceArrow: string
            arrowOffset: string
            arrowOffsetVertical: string
            arrowHeight: string
            padding: string
          },
          any
        >
        InternalSelectMenu: import('../../_mixins').Theme<
          'InternalSelectMenu',
          {
            optionFontSizeSmall: string
            optionFontSizeMedium: string
            optionFontSizeLarge: string
            optionFontSizeHuge: string
            optionHeightSmall: string
            optionHeightMedium: string
            optionHeightLarge: string
            optionHeightHuge: string
            borderRadius: string
            color: string
            groupHeaderTextColor: string
            actionDividerColor: string
            optionTextColor: string
            optionTextColorPressed: string
            optionTextColorDisabled: string
            optionTextColorActive: string
            optionOpacityDisabled: string
            optionCheckColor: string
            optionColorPending: string
            optionColorActive: string
            actionTextColor: string
            loadingColor: string
            height: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            paddingHuge: string
            optionPaddingSmall: string
            optionPaddingMedium: string
            optionPaddingLarge: string
            optionPaddingHuge: string
            loadingSize: string
          },
          {
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
            Empty: import('../../_mixins').Theme<
              'Empty',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                textColor: string
                iconColor: string
                extraTextColor: string
                iconSizeSmall: string
                iconSizeMedium: string
                iconSizeLarge: string
                iconSizeHuge: string
              },
              any
            >
          }
        >
      }
      peerOverrides: {
        Popover?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        InternalSelectMenu?:
          | {
              peers?:
                | {
                    Scrollbar?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                              color: string
                              colorHover: string
                            },
                            any
                          >
                        >
                      | undefined
                    Empty?:
                      | import('../../_mixins/use-theme').ExtractThemeOverrides<
                          import('../../_mixins').Theme<
                            'Empty',
                            {
                              fontSizeSmall: string
                              fontSizeMedium: string
                              fontSizeLarge: string
                              fontSizeHuge: string
                              textColor: string
                              iconColor: string
                              extraTextColor: string
                              iconSizeSmall: string
                              iconSizeMedium: string
                              iconSizeLarge: string
                              iconSizeHuge: string
                            },
                            any
                          >
                        >
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    }>
    mergedClsPrefix: import('vue').ComputedRef<string>
    treeMate: import('vue').ComputedRef<
      import('treemate').TreeMate<
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >,
        SelectGroupOption,
        SelectIgnoredOption
      >
    >
    handleToggle: (tmNode: TreeNode<SelectBaseOption>) => void
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
      readonly multiple?: unknown
      readonly value?: unknown
      readonly cancelable?: unknown
      readonly width?: unknown
      readonly options?: unknown
      readonly size?: unknown
      readonly scrollable?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly onUpdateValue?: unknown
      readonly onMouseenter?: unknown
      readonly onMouseleave?: unknown
      readonly renderLabel?: unknown
      readonly onChange?: unknown
    } & {
      value: Value | null
      size: PopselectSize
      multiple: boolean
      scrollable: boolean
      options: SelectMixedOption[]
      cancelable: boolean
    } & {
      width?: string | number | undefined
      onChange?: MaybeArray<OnUpdateValue> | undefined
      onMouseenter?: ((e: MouseEvent) => void) | undefined
      onMouseleave?: ((e: MouseEvent) => void) | undefined
      renderLabel?: RenderLabel | undefined
      'onUpdate:value'?: MaybeArray<OnUpdateValue> | undefined
      onUpdateValue?: MaybeArray<OnUpdateValue> | undefined
    }
  >,
  {
    value: Value | null
    size: PopselectSize
    multiple: boolean
    onChange: MaybeArray<OnUpdateValue> | undefined
    scrollable: boolean
    options: SelectMixedOption[]
    cancelable: boolean
  }
>
export default _default