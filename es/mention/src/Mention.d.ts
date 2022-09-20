import { PropType } from 'vue'
import { TreeNode } from 'treemate'
import { RenderLabel } from '../../_internal/select-menu/src/interface'
import type { Size as InputSize } from '../../input/src/interface'
import type {
  SelectBaseOption,
  SelectGroupOption,
  SelectIgnoredOption
} from '../../select/src/interface'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import type { MentionOption } from './interface'
declare const mentionProps: {
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly autosize: PropType<
    | boolean
    | {
        maxRows?: number | undefined
        minRows?: number | undefined
      }
  >
  readonly options: {
    readonly type: PropType<MentionOption[]>
    readonly default: readonly []
  }
  readonly type: {
    readonly type: PropType<'textarea' | 'text'>
    readonly default: 'text'
  }
  readonly separator: {
    readonly type: StringConstructor
    readonly validator: (separator: string) => boolean
    readonly default: ' '
  }
  readonly bordered: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly disabled: BooleanConstructor
  readonly value: PropType<string | null>
  readonly defaultValue: {
    readonly type: StringConstructor
    readonly default: ''
  }
  readonly loading: BooleanConstructor
  readonly prefix: {
    readonly type: PropType<string | string[]>
    readonly default: '@'
  }
  readonly placeholder: {
    readonly type: StringConstructor
    readonly default: ''
  }
  readonly size: PropType<InputSize>
  readonly 'onUpdate:value': PropType<MaybeArray<(value: string) => void>>
  readonly renderLabel: PropType<RenderLabel>
  readonly onUpdateValue: PropType<MaybeArray<(value: string) => void>>
  readonly onSearch: PropType<(pattern: string, prefix: string) => void>
  readonly onSelect: PropType<(option: MentionOption, prefix: string) => void>
  readonly onFocus: PropType<(e: FocusEvent) => void>
  readonly onBlur: PropType<(e: FocusEvent) => void>
  readonly internalDebug: BooleanConstructor
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Mention',
      {
        menuBoxShadow: string
      },
      {
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
        Input: import('../../_mixins').Theme<
          'Input',
          {
            countTextColor: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            lineHeightTextarea: string
            borderRadius: string
            iconSize: string
            groupLabelColor: string
            groupLabelTextColor: string
            textColor: string
            textColorDisabled: string
            textDecorationColor: string
            caretColor: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorFocus: string
            groupLabelBorder: string
            border: string
            borderHover: string
            borderDisabled: string
            borderFocus: string
            boxShadowFocus: string
            loadingColor: string
            loadingColorWarning: string
            borderWarning: string
            borderHoverWarning: string
            colorFocusWarning: string
            borderFocusWarning: string
            boxShadowFocusWarning: string
            caretColorWarning: string
            loadingColorError: string
            borderError: string
            borderHoverError: string
            colorFocusError: string
            borderFocusError: string
            boxShadowFocusError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            iconColor: string
            iconColorDisabled: string
            iconColorHover: string
            iconColorPressed: string
            suffixTextColor: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            clearSize: string
          },
          any
        >
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Mention',
        {
          menuBoxShadow: string
        },
        {
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
          Input: import('../../_mixins').Theme<
            'Input',
            {
              countTextColor: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              lineHeightTextarea: string
              borderRadius: string
              iconSize: string
              groupLabelColor: string
              groupLabelTextColor: string
              textColor: string
              textColorDisabled: string
              textDecorationColor: string
              caretColor: string
              placeholderColor: string
              placeholderColorDisabled: string
              color: string
              colorDisabled: string
              colorFocus: string
              groupLabelBorder: string
              border: string
              borderHover: string
              borderDisabled: string
              borderFocus: string
              boxShadowFocus: string
              loadingColor: string
              loadingColorWarning: string
              borderWarning: string
              borderHoverWarning: string
              colorFocusWarning: string
              borderFocusWarning: string
              boxShadowFocusWarning: string
              caretColorWarning: string
              loadingColorError: string
              borderError: string
              borderHoverError: string
              colorFocusError: string
              borderFocusError: string
              boxShadowFocusError: string
              caretColorError: string
              clearColor: string
              clearColorHover: string
              clearColorPressed: string
              iconColor: string
              iconColorDisabled: string
              iconColorHover: string
              iconColorPressed: string
              suffixTextColor: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              clearSize: string
            },
            any
          >
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Mention',
        {
          menuBoxShadow: string
        },
        {
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
          Input: import('../../_mixins').Theme<
            'Input',
            {
              countTextColor: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              lineHeightTextarea: string
              borderRadius: string
              iconSize: string
              groupLabelColor: string
              groupLabelTextColor: string
              textColor: string
              textColorDisabled: string
              textDecorationColor: string
              caretColor: string
              placeholderColor: string
              placeholderColorDisabled: string
              color: string
              colorDisabled: string
              colorFocus: string
              groupLabelBorder: string
              border: string
              borderHover: string
              borderDisabled: string
              borderFocus: string
              boxShadowFocus: string
              loadingColor: string
              loadingColorWarning: string
              borderWarning: string
              borderHoverWarning: string
              colorFocusWarning: string
              borderFocusWarning: string
              boxShadowFocusWarning: string
              caretColorWarning: string
              loadingColorError: string
              borderError: string
              borderHoverError: string
              colorFocusError: string
              borderFocusError: string
              boxShadowFocusError: string
              caretColorError: string
              clearColor: string
              clearColorHover: string
              clearColorPressed: string
              iconColor: string
              iconColorDisabled: string
              iconColorHover: string
              iconColorPressed: string
              suffixTextColor: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              clearSize: string
            },
            any
          >
        }
      >
    >
  >
}
export declare type MentionProps = ExtractPublicPropTypes<typeof mentionProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    readonly autosize: PropType<
      | boolean
      | {
          maxRows?: number | undefined
          minRows?: number | undefined
        }
    >
    readonly options: {
      readonly type: PropType<MentionOption[]>
      readonly default: readonly []
    }
    readonly type: {
      readonly type: PropType<'textarea' | 'text'>
      readonly default: 'text'
    }
    readonly separator: {
      readonly type: StringConstructor
      readonly validator: (separator: string) => boolean
      readonly default: ' '
    }
    readonly bordered: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly disabled: BooleanConstructor
    readonly value: PropType<string | null>
    readonly defaultValue: {
      readonly type: StringConstructor
      readonly default: ''
    }
    readonly loading: BooleanConstructor
    readonly prefix: {
      readonly type: PropType<string | string[]>
      readonly default: '@'
    }
    readonly placeholder: {
      readonly type: StringConstructor
      readonly default: ''
    }
    readonly size: PropType<InputSize>
    readonly 'onUpdate:value': PropType<MaybeArray<(value: string) => void>>
    readonly renderLabel: PropType<RenderLabel>
    readonly onUpdateValue: PropType<MaybeArray<(value: string) => void>>
    readonly onSearch: PropType<(pattern: string, prefix: string) => void>
    readonly onSelect: PropType<(option: MentionOption, prefix: string) => void>
    readonly onFocus: PropType<(e: FocusEvent) => void>
    readonly onBlur: PropType<(e: FocusEvent) => void>
    readonly internalDebug: BooleanConstructor
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Mention',
        {
          menuBoxShadow: string
        },
        {
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
          Input: import('../../_mixins').Theme<
            'Input',
            {
              countTextColor: string
              heightTiny: string
              heightSmall: string
              heightMedium: string
              heightLarge: string
              fontSizeTiny: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              lineHeight: string
              lineHeightTextarea: string
              borderRadius: string
              iconSize: string
              groupLabelColor: string
              groupLabelTextColor: string
              textColor: string
              textColorDisabled: string
              textDecorationColor: string
              caretColor: string
              placeholderColor: string
              placeholderColorDisabled: string
              color: string
              colorDisabled: string
              colorFocus: string
              groupLabelBorder: string
              border: string
              borderHover: string
              borderDisabled: string
              borderFocus: string
              boxShadowFocus: string
              loadingColor: string
              loadingColorWarning: string
              borderWarning: string
              borderHoverWarning: string
              colorFocusWarning: string
              borderFocusWarning: string
              boxShadowFocusWarning: string
              caretColorWarning: string
              loadingColorError: string
              borderError: string
              borderHoverError: string
              colorFocusError: string
              borderFocusError: string
              boxShadowFocusError: string
              caretColorError: string
              clearColor: string
              clearColorHover: string
              clearColorPressed: string
              iconColor: string
              iconColorDisabled: string
              iconColorHover: string
              iconColorPressed: string
              suffixTextColor: string
              paddingTiny: string
              paddingSmall: string
              paddingMedium: string
              paddingLarge: string
              clearSize: string
            },
            any
          >
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Mention',
          {
            menuBoxShadow: string
          },
          {
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
            Input: import('../../_mixins').Theme<
              'Input',
              {
                countTextColor: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                lineHeightTextarea: string
                borderRadius: string
                iconSize: string
                groupLabelColor: string
                groupLabelTextColor: string
                textColor: string
                textColorDisabled: string
                textDecorationColor: string
                caretColor: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorFocus: string
                groupLabelBorder: string
                border: string
                borderHover: string
                borderDisabled: string
                borderFocus: string
                boxShadowFocus: string
                loadingColor: string
                loadingColorWarning: string
                borderWarning: string
                borderHoverWarning: string
                colorFocusWarning: string
                borderFocusWarning: string
                boxShadowFocusWarning: string
                caretColorWarning: string
                loadingColorError: string
                borderError: string
                borderHoverError: string
                colorFocusError: string
                borderFocusError: string
                boxShadowFocusError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                iconColor: string
                iconColorDisabled: string
                iconColorHover: string
                iconColorPressed: string
                suffixTextColor: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                clearSize: string
              },
              any
            >
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Mention',
          {
            menuBoxShadow: string
          },
          {
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
            Input: import('../../_mixins').Theme<
              'Input',
              {
                countTextColor: string
                heightTiny: string
                heightSmall: string
                heightMedium: string
                heightLarge: string
                fontSizeTiny: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                lineHeight: string
                lineHeightTextarea: string
                borderRadius: string
                iconSize: string
                groupLabelColor: string
                groupLabelTextColor: string
                textColor: string
                textColorDisabled: string
                textDecorationColor: string
                caretColor: string
                placeholderColor: string
                placeholderColorDisabled: string
                color: string
                colorDisabled: string
                colorFocus: string
                groupLabelBorder: string
                border: string
                borderHover: string
                borderDisabled: string
                borderFocus: string
                boxShadowFocus: string
                loadingColor: string
                loadingColorWarning: string
                borderWarning: string
                borderHoverWarning: string
                colorFocusWarning: string
                borderFocusWarning: string
                boxShadowFocusWarning: string
                caretColorWarning: string
                loadingColorError: string
                borderError: string
                borderHoverError: string
                colorFocusError: string
                borderFocusError: string
                boxShadowFocusError: string
                caretColorError: string
                clearColor: string
                clearColorHover: string
                clearColorPressed: string
                iconColor: string
                iconColorDisabled: string
                iconColorHover: string
                iconColorPressed: string
                suffixTextColor: string
                paddingTiny: string
                paddingSmall: string
                paddingMedium: string
                paddingLarge: string
                clearSize: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
    namespace: import('vue').ComputedRef<string | undefined>
    mergedClsPrefix: import('vue').ComputedRef<string>
    mergedBordered: import('vue').ComputedRef<boolean>
    mergedSize: import('vue').ComputedRef<'small' | 'medium' | 'large' | 'tiny'>
    mergedTheme: import('vue').ComputedRef<{
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
      self: {
        menuBoxShadow: string
      }
      peers: {
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
        Input: import('../../_mixins').Theme<
          'Input',
          {
            countTextColor: string
            heightTiny: string
            heightSmall: string
            heightMedium: string
            heightLarge: string
            fontSizeTiny: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            lineHeight: string
            lineHeightTextarea: string
            borderRadius: string
            iconSize: string
            groupLabelColor: string
            groupLabelTextColor: string
            textColor: string
            textColorDisabled: string
            textDecorationColor: string
            caretColor: string
            placeholderColor: string
            placeholderColorDisabled: string
            color: string
            colorDisabled: string
            colorFocus: string
            groupLabelBorder: string
            border: string
            borderHover: string
            borderDisabled: string
            borderFocus: string
            boxShadowFocus: string
            loadingColor: string
            loadingColorWarning: string
            borderWarning: string
            borderHoverWarning: string
            colorFocusWarning: string
            borderFocusWarning: string
            boxShadowFocusWarning: string
            caretColorWarning: string
            loadingColorError: string
            borderError: string
            borderHoverError: string
            colorFocusError: string
            borderFocusError: string
            boxShadowFocusError: string
            caretColorError: string
            clearColor: string
            clearColorHover: string
            clearColorPressed: string
            iconColor: string
            iconColorDisabled: string
            iconColorHover: string
            iconColorPressed: string
            suffixTextColor: string
            paddingTiny: string
            paddingSmall: string
            paddingMedium: string
            paddingLarge: string
            clearSize: string
          },
          any
        >
      }
      peerOverrides: {
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
        Input?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
      }
    }>
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
    selectMenuInstRef: import('vue').Ref<{
      selfRef: HTMLElement | null
      getPendingTmNode: () => TreeNode<
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >,
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >,
        SelectBaseOption<
          string | number,
          | string
          | ((
              option: SelectBaseOption<string | number, string | any>,
              selected: boolean
            ) => import('vue').VNodeChild)
        >
      > | null
      prev: () => void
      next: () => void
    } | null>
    inputInstRef: import('vue').Ref<{
      wrapperElRef: HTMLElement | null
      textareaElRef: HTMLTextAreaElement | null
      inputElRef: HTMLInputElement | null
      isCompositing: boolean
      blur: () => void
      focus: () => void
      select: () => void
      activate: () => void
      deactivate: () => void
    } | null>
    cursorRef: import('vue').Ref<HTMLElement | null>
    followerRef: import('vue').Ref<{
      syncPosition: () => void
    } | null>
    showMenu: import('vue').Ref<boolean>
    adjustedTo: import('vue').ComputedRef<string | HTMLElement>
    isMounted: Readonly<import('vue').Ref<boolean>>
    mergedValue: import('vue').ComputedRef<string | null>
    handleInputFocus: (e: FocusEvent) => void
    handleInputBlur: (e: FocusEvent) => void
    handleInputUpdateValue: (value: string) => void
    handleInputKeyDown: (e: KeyboardEvent) => void
    handleSelect: (tmNode: TreeNode<SelectBaseOption>) => void
    handleInputMouseDown: () => void
    focus: () => void
    blur: () => void
    cssVars: import('vue').ComputedRef<{
      '--menu-box-shadow': string
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
      readonly to?: unknown
      readonly autosize?: unknown
      readonly options?: unknown
      readonly type?: unknown
      readonly separator?: unknown
      readonly bordered?: unknown
      readonly disabled?: unknown
      readonly value?: unknown
      readonly defaultValue?: unknown
      readonly loading?: unknown
      readonly prefix?: unknown
      readonly placeholder?: unknown
      readonly size?: unknown
      readonly 'onUpdate:value'?: unknown
      readonly renderLabel?: unknown
      readonly onUpdateValue?: unknown
      readonly onSearch?: unknown
      readonly onSelect?: unknown
      readonly onFocus?: unknown
      readonly onBlur?: unknown
      readonly internalDebug?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      type: 'textarea' | 'text'
      prefix: string | string[]
      separator: string
      disabled: boolean
      placeholder: string
      loading: boolean
      options: MentionOption[]
      defaultValue: string
      internalDebug: boolean
    } & {
      value?: string | null | undefined
      size?: InputSize | undefined
      onFocus?: ((e: FocusEvent) => void) | undefined
      onBlur?: ((e: FocusEvent) => void) | undefined
      onSelect?: ((option: MentionOption, prefix: string) => void) | undefined
      autosize?:
        | boolean
        | {
            maxRows?: number | undefined
            minRows?: number | undefined
          }
        | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Mention',
            {
              menuBoxShadow: string
            },
            {
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
              Input: import('../../_mixins').Theme<
                'Input',
                {
                  countTextColor: string
                  heightTiny: string
                  heightSmall: string
                  heightMedium: string
                  heightLarge: string
                  fontSizeTiny: string
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  lineHeight: string
                  lineHeightTextarea: string
                  borderRadius: string
                  iconSize: string
                  groupLabelColor: string
                  groupLabelTextColor: string
                  textColor: string
                  textColorDisabled: string
                  textDecorationColor: string
                  caretColor: string
                  placeholderColor: string
                  placeholderColorDisabled: string
                  color: string
                  colorDisabled: string
                  colorFocus: string
                  groupLabelBorder: string
                  border: string
                  borderHover: string
                  borderDisabled: string
                  borderFocus: string
                  boxShadowFocus: string
                  loadingColor: string
                  loadingColorWarning: string
                  borderWarning: string
                  borderHoverWarning: string
                  colorFocusWarning: string
                  borderFocusWarning: string
                  boxShadowFocusWarning: string
                  caretColorWarning: string
                  loadingColorError: string
                  borderError: string
                  borderHoverError: string
                  colorFocusError: string
                  borderFocusError: string
                  boxShadowFocusError: string
                  caretColorError: string
                  clearColor: string
                  clearColorHover: string
                  clearColorPressed: string
                  iconColor: string
                  iconColorDisabled: string
                  iconColorHover: string
                  iconColorPressed: string
                  suffixTextColor: string
                  paddingTiny: string
                  paddingSmall: string
                  paddingMedium: string
                  paddingLarge: string
                  clearSize: string
                },
                any
              >
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Mention',
              {
                menuBoxShadow: string
              },
              {
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
                Input: import('../../_mixins').Theme<
                  'Input',
                  {
                    countTextColor: string
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    lineHeight: string
                    lineHeightTextarea: string
                    borderRadius: string
                    iconSize: string
                    groupLabelColor: string
                    groupLabelTextColor: string
                    textColor: string
                    textColorDisabled: string
                    textDecorationColor: string
                    caretColor: string
                    placeholderColor: string
                    placeholderColorDisabled: string
                    color: string
                    colorDisabled: string
                    colorFocus: string
                    groupLabelBorder: string
                    border: string
                    borderHover: string
                    borderDisabled: string
                    borderFocus: string
                    boxShadowFocus: string
                    loadingColor: string
                    loadingColorWarning: string
                    borderWarning: string
                    borderHoverWarning: string
                    colorFocusWarning: string
                    borderFocusWarning: string
                    boxShadowFocusWarning: string
                    caretColorWarning: string
                    loadingColorError: string
                    borderError: string
                    borderHoverError: string
                    colorFocusError: string
                    borderFocusError: string
                    boxShadowFocusError: string
                    caretColorError: string
                    clearColor: string
                    clearColorHover: string
                    clearColorPressed: string
                    iconColor: string
                    iconColorDisabled: string
                    iconColorHover: string
                    iconColorPressed: string
                    suffixTextColor: string
                    paddingTiny: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    clearSize: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Mention',
              {
                menuBoxShadow: string
              },
              {
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
                Input: import('../../_mixins').Theme<
                  'Input',
                  {
                    countTextColor: string
                    heightTiny: string
                    heightSmall: string
                    heightMedium: string
                    heightLarge: string
                    fontSizeTiny: string
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    lineHeight: string
                    lineHeightTextarea: string
                    borderRadius: string
                    iconSize: string
                    groupLabelColor: string
                    groupLabelTextColor: string
                    textColor: string
                    textColorDisabled: string
                    textDecorationColor: string
                    caretColor: string
                    placeholderColor: string
                    placeholderColorDisabled: string
                    color: string
                    colorDisabled: string
                    colorFocus: string
                    groupLabelBorder: string
                    border: string
                    borderHover: string
                    borderDisabled: string
                    borderFocus: string
                    boxShadowFocus: string
                    loadingColor: string
                    loadingColorWarning: string
                    borderWarning: string
                    borderHoverWarning: string
                    colorFocusWarning: string
                    borderFocusWarning: string
                    boxShadowFocusWarning: string
                    caretColorWarning: string
                    loadingColorError: string
                    borderError: string
                    borderHoverError: string
                    colorFocusError: string
                    borderFocusError: string
                    boxShadowFocusError: string
                    caretColorError: string
                    clearColor: string
                    clearColorHover: string
                    clearColorPressed: string
                    iconColor: string
                    iconColorDisabled: string
                    iconColorHover: string
                    iconColorPressed: string
                    suffixTextColor: string
                    paddingTiny: string
                    paddingSmall: string
                    paddingMedium: string
                    paddingLarge: string
                    clearSize: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      bordered?: boolean | undefined
      renderLabel?: RenderLabel | undefined
      'onUpdate:value'?: MaybeArray<(value: string) => void> | undefined
      onUpdateValue?: MaybeArray<(value: string) => void> | undefined
      onSearch?: ((pattern: string, prefix: string) => void) | undefined
    }
  >,
  {
    type: 'textarea' | 'text'
    prefix: string | string[]
    separator: string
    disabled: boolean
    placeholder: string
    to: string | boolean | HTMLElement
    loading: boolean
    bordered: boolean | undefined
    options: MentionOption[]
    defaultValue: string
    internalDebug: boolean
  }
>
export default _default