import { PropType, CSSProperties, InjectionKey, Ref } from 'vue'
import { Key, TreeNode } from 'treemate'
import { FollowerPlacement } from 'vueuc'
import { MaybeArray, ExtractPublicPropTypes } from '../../_utils'
import {
  DropdownMixedOption,
  OnUpdateValue,
  OnUpdateValueImpl,
  RenderLabel,
  RenderIcon,
  RenderLabelImpl,
  RenderIconImpl
} from './interface'
export interface DropdownInjection {
  renderLabelRef: Ref<RenderLabelImpl | undefined>
  renderIconRef: Ref<RenderIconImpl | undefined>
  hoverKeyRef: Ref<Key | null>
  keyboardKeyRef: Ref<Key | null>
  lastToggledSubmenuKeyRef: Ref<Key | null>
  pendingKeyPathRef: Ref<Key[]>
  activeKeyPathRef: Ref<Key[]>
  animatedRef: Ref<boolean>
  mergedShowRef: Ref<boolean>
  labelFieldRef: Ref<string>
  childrenFieldRef: Ref<string>
  doSelect: OnUpdateValueImpl
  doUpdateShow: (value: boolean) => void
}
export declare const dropdownInjectionKey: InjectionKey<DropdownInjection>
declare const dropdownProps: {
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Dropdown',
      {
        optionHeightSmall: string
        optionHeightMedium: string
        optionHeightLarge: string
        optionHeightHuge: string
        borderRadius: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        optionTextColor: string
        optionTextColorHover: string
        optionTextColorActive: string
        optionTextColorChildActive: string
        color: string
        dividerColor: string
        suffixColor: string
        prefixColor: string
        optionColorHover: string
        optionColorActive: string
        groupHeaderTextColor: string
        optionTextColorInverted: string
        optionTextColorHoverInverted: string
        optionTextColorActiveInverted: string
        optionTextColorChildActiveInverted: string
        colorInverted: string
        dividerColorInverted: string
        suffixColorInverted: string
        prefixColorInverted: string
        optionColorHoverInverted: string
        optionColorActiveInverted: string
        groupHeaderTextColorInverted: string
        optionOpacityDisabled: string
        padding: string
        optionIconSizeSmall: string
        optionIconSizeMedium: string
        optionIconSizeLarge: string
        optionIconSizeHuge: string
        optionSuffixWidthSmall: string
        optionSuffixWidthMedium: string
        optionSuffixWidthLarge: string
        optionSuffixWidthHuge: string
        optionIconSuffixWidthSmall: string
        optionIconSuffixWidthMedium: string
        optionIconSuffixWidthLarge: string
        optionIconSuffixWidthHuge: string
        optionPrefixWidthSmall: string
        optionPrefixWidthMedium: string
        optionPrefixWidthLarge: string
        optionPrefixWidthHuge: string
        optionIconPrefixWidthSmall: string
        optionIconPrefixWidthMedium: string
        optionIconPrefixWidthLarge: string
        optionIconPrefixWidthHuge: string
      },
      {
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
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Dropdown',
        {
          optionHeightSmall: string
          optionHeightMedium: string
          optionHeightLarge: string
          optionHeightHuge: string
          borderRadius: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          optionTextColor: string
          optionTextColorHover: string
          optionTextColorActive: string
          optionTextColorChildActive: string
          color: string
          dividerColor: string
          suffixColor: string
          prefixColor: string
          optionColorHover: string
          optionColorActive: string
          groupHeaderTextColor: string
          optionTextColorInverted: string
          optionTextColorHoverInverted: string
          optionTextColorActiveInverted: string
          optionTextColorChildActiveInverted: string
          colorInverted: string
          dividerColorInverted: string
          suffixColorInverted: string
          prefixColorInverted: string
          optionColorHoverInverted: string
          optionColorActiveInverted: string
          groupHeaderTextColorInverted: string
          optionOpacityDisabled: string
          padding: string
          optionIconSizeSmall: string
          optionIconSizeMedium: string
          optionIconSizeLarge: string
          optionIconSizeHuge: string
          optionSuffixWidthSmall: string
          optionSuffixWidthMedium: string
          optionSuffixWidthLarge: string
          optionSuffixWidthHuge: string
          optionIconSuffixWidthSmall: string
          optionIconSuffixWidthMedium: string
          optionIconSuffixWidthLarge: string
          optionIconSuffixWidthHuge: string
          optionPrefixWidthSmall: string
          optionPrefixWidthMedium: string
          optionPrefixWidthLarge: string
          optionPrefixWidthHuge: string
          optionIconPrefixWidthSmall: string
          optionIconPrefixWidthMedium: string
          optionIconPrefixWidthLarge: string
          optionIconPrefixWidthHuge: string
        },
        {
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
        }
      >
    >
  >
  readonly builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Dropdown',
        {
          optionHeightSmall: string
          optionHeightMedium: string
          optionHeightLarge: string
          optionHeightHuge: string
          borderRadius: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          optionTextColor: string
          optionTextColorHover: string
          optionTextColorActive: string
          optionTextColorChildActive: string
          color: string
          dividerColor: string
          suffixColor: string
          prefixColor: string
          optionColorHover: string
          optionColorActive: string
          groupHeaderTextColor: string
          optionTextColorInverted: string
          optionTextColorHoverInverted: string
          optionTextColorActiveInverted: string
          optionTextColorChildActiveInverted: string
          colorInverted: string
          dividerColorInverted: string
          suffixColorInverted: string
          prefixColorInverted: string
          optionColorHoverInverted: string
          optionColorActiveInverted: string
          groupHeaderTextColorInverted: string
          optionOpacityDisabled: string
          padding: string
          optionIconSizeSmall: string
          optionIconSizeMedium: string
          optionIconSizeLarge: string
          optionIconSizeHuge: string
          optionSuffixWidthSmall: string
          optionSuffixWidthMedium: string
          optionSuffixWidthLarge: string
          optionSuffixWidthHuge: string
          optionIconSuffixWidthSmall: string
          optionIconSuffixWidthMedium: string
          optionIconSuffixWidthLarge: string
          optionIconSuffixWidthHuge: string
          optionPrefixWidthSmall: string
          optionPrefixWidthMedium: string
          optionPrefixWidthLarge: string
          optionPrefixWidthHuge: string
          optionIconPrefixWidthSmall: string
          optionIconPrefixWidthMedium: string
          optionIconPrefixWidthLarge: string
          optionIconPrefixWidthHuge: string
        },
        {
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
        }
      >
    >
  >
  readonly animated: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly keyboard: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly size: {
    readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>
    readonly default: 'medium'
  }
  readonly inverted: BooleanConstructor
  readonly placement: {
    readonly type: PropType<FollowerPlacement>
    readonly default: 'bottom'
  }
  readonly onSelect: PropType<MaybeArray<OnUpdateValue>>
  readonly options: {
    readonly type: PropType<DropdownMixedOption[]>
    readonly default: () => never[]
  }
  readonly showArrow: BooleanConstructor
  readonly renderLabel: PropType<RenderLabel>
  readonly renderIcon: PropType<RenderIcon>
  readonly labelField: {
    readonly type: StringConstructor
    readonly default: 'label'
  }
  readonly keyField: {
    readonly type: StringConstructor
    readonly default: 'key'
  }
  readonly childrenField: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly value: PropType<Key | null>
  readonly show: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  readonly defaultShow: BooleanConstructor
  readonly trigger: {
    type: PropType<import('../../popover').PopoverTrigger>
    default: string
  }
  readonly delay: {
    type: NumberConstructor
    default: number
  }
  readonly duration: {
    type: NumberConstructor
    default: number
  }
  readonly raw: BooleanConstructor
  readonly x: NumberConstructor
  readonly y: NumberConstructor
  readonly disabled: BooleanConstructor
  readonly getDisabled: PropType<() => boolean>
  readonly displayDirective: {
    type: PropType<'show' | 'if'>
    default: string
  }
  readonly arrowStyle: PropType<string | CSSProperties>
  readonly flip: {
    type: BooleanConstructor
    default: boolean
  }
  readonly width: {
    type: PropType<number | 'trigger'>
    default: undefined
  }
  readonly overlap: BooleanConstructor
  readonly internalExtraClass: {
    type: PropType<string[]>
    default: () => never[]
  }
  readonly onClickoutside: PropType<(e: MouseEvent) => void>
  readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
  readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
  readonly zIndex: NumberConstructor
  readonly to: {
    type: PropType<string | boolean | HTMLElement>
    default: undefined
  }
  readonly internalSyncTargetWithParent: BooleanConstructor
  readonly internalInheritedEventHandlers: {
    type: PropType<import('../../popover/src/Popover').TriggerEventHandlers[]>
    default: () => never[]
  }
  readonly onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>
  readonly onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>
  readonly arrow: {
    type: PropType<boolean | undefined>
    default: undefined
  }
  readonly minWidth: NumberConstructor
  readonly maxWidth: NumberConstructor
}
export declare type DropdownProps = ExtractPublicPropTypes<typeof dropdownProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Dropdown',
        {
          optionHeightSmall: string
          optionHeightMedium: string
          optionHeightLarge: string
          optionHeightHuge: string
          borderRadius: string
          fontSizeSmall: string
          fontSizeMedium: string
          fontSizeLarge: string
          fontSizeHuge: string
          optionTextColor: string
          optionTextColorHover: string
          optionTextColorActive: string
          optionTextColorChildActive: string
          color: string
          dividerColor: string
          suffixColor: string
          prefixColor: string
          optionColorHover: string
          optionColorActive: string
          groupHeaderTextColor: string
          optionTextColorInverted: string
          optionTextColorHoverInverted: string
          optionTextColorActiveInverted: string
          optionTextColorChildActiveInverted: string
          colorInverted: string
          dividerColorInverted: string
          suffixColorInverted: string
          prefixColorInverted: string
          optionColorHoverInverted: string
          optionColorActiveInverted: string
          groupHeaderTextColorInverted: string
          optionOpacityDisabled: string
          padding: string
          optionIconSizeSmall: string
          optionIconSizeMedium: string
          optionIconSizeLarge: string
          optionIconSizeHuge: string
          optionSuffixWidthSmall: string
          optionSuffixWidthMedium: string
          optionSuffixWidthLarge: string
          optionSuffixWidthHuge: string
          optionIconSuffixWidthSmall: string
          optionIconSuffixWidthMedium: string
          optionIconSuffixWidthLarge: string
          optionIconSuffixWidthHuge: string
          optionPrefixWidthSmall: string
          optionPrefixWidthMedium: string
          optionPrefixWidthLarge: string
          optionPrefixWidthHuge: string
          optionIconPrefixWidthSmall: string
          optionIconPrefixWidthMedium: string
          optionIconPrefixWidthLarge: string
          optionIconPrefixWidthHuge: string
        },
        {
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
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Dropdown',
          {
            optionHeightSmall: string
            optionHeightMedium: string
            optionHeightLarge: string
            optionHeightHuge: string
            borderRadius: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            optionTextColor: string
            optionTextColorHover: string
            optionTextColorActive: string
            optionTextColorChildActive: string
            color: string
            dividerColor: string
            suffixColor: string
            prefixColor: string
            optionColorHover: string
            optionColorActive: string
            groupHeaderTextColor: string
            optionTextColorInverted: string
            optionTextColorHoverInverted: string
            optionTextColorActiveInverted: string
            optionTextColorChildActiveInverted: string
            colorInverted: string
            dividerColorInverted: string
            suffixColorInverted: string
            prefixColorInverted: string
            optionColorHoverInverted: string
            optionColorActiveInverted: string
            groupHeaderTextColorInverted: string
            optionOpacityDisabled: string
            padding: string
            optionIconSizeSmall: string
            optionIconSizeMedium: string
            optionIconSizeLarge: string
            optionIconSizeHuge: string
            optionSuffixWidthSmall: string
            optionSuffixWidthMedium: string
            optionSuffixWidthLarge: string
            optionSuffixWidthHuge: string
            optionIconSuffixWidthSmall: string
            optionIconSuffixWidthMedium: string
            optionIconSuffixWidthLarge: string
            optionIconSuffixWidthHuge: string
            optionPrefixWidthSmall: string
            optionPrefixWidthMedium: string
            optionPrefixWidthLarge: string
            optionPrefixWidthHuge: string
            optionIconPrefixWidthSmall: string
            optionIconPrefixWidthMedium: string
            optionIconPrefixWidthLarge: string
            optionIconPrefixWidthHuge: string
          },
          {
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
          }
        >
      >
    >
    readonly builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Dropdown',
          {
            optionHeightSmall: string
            optionHeightMedium: string
            optionHeightLarge: string
            optionHeightHuge: string
            borderRadius: string
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            fontSizeHuge: string
            optionTextColor: string
            optionTextColorHover: string
            optionTextColorActive: string
            optionTextColorChildActive: string
            color: string
            dividerColor: string
            suffixColor: string
            prefixColor: string
            optionColorHover: string
            optionColorActive: string
            groupHeaderTextColor: string
            optionTextColorInverted: string
            optionTextColorHoverInverted: string
            optionTextColorActiveInverted: string
            optionTextColorChildActiveInverted: string
            colorInverted: string
            dividerColorInverted: string
            suffixColorInverted: string
            prefixColorInverted: string
            optionColorHoverInverted: string
            optionColorActiveInverted: string
            groupHeaderTextColorInverted: string
            optionOpacityDisabled: string
            padding: string
            optionIconSizeSmall: string
            optionIconSizeMedium: string
            optionIconSizeLarge: string
            optionIconSizeHuge: string
            optionSuffixWidthSmall: string
            optionSuffixWidthMedium: string
            optionSuffixWidthLarge: string
            optionSuffixWidthHuge: string
            optionIconSuffixWidthSmall: string
            optionIconSuffixWidthMedium: string
            optionIconSuffixWidthLarge: string
            optionIconSuffixWidthHuge: string
            optionPrefixWidthSmall: string
            optionPrefixWidthMedium: string
            optionPrefixWidthLarge: string
            optionPrefixWidthHuge: string
            optionIconPrefixWidthSmall: string
            optionIconPrefixWidthMedium: string
            optionIconPrefixWidthLarge: string
            optionIconPrefixWidthHuge: string
          },
          {
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
          }
        >
      >
    >
    readonly animated: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly keyboard: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly size: {
      readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>
      readonly default: 'medium'
    }
    readonly inverted: BooleanConstructor
    readonly placement: {
      readonly type: PropType<FollowerPlacement>
      readonly default: 'bottom'
    }
    readonly onSelect: PropType<MaybeArray<OnUpdateValue>>
    readonly options: {
      readonly type: PropType<DropdownMixedOption[]>
      readonly default: () => never[]
    }
    readonly showArrow: BooleanConstructor
    readonly renderLabel: PropType<RenderLabel>
    readonly renderIcon: PropType<RenderIcon>
    readonly labelField: {
      readonly type: StringConstructor
      readonly default: 'label'
    }
    readonly keyField: {
      readonly type: StringConstructor
      readonly default: 'key'
    }
    readonly childrenField: {
      readonly type: StringConstructor
      readonly default: 'children'
    }
    readonly value: PropType<Key | null>
    readonly show: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    readonly defaultShow: BooleanConstructor
    readonly trigger: {
      type: PropType<import('../../popover').PopoverTrigger>
      default: string
    }
    readonly delay: {
      type: NumberConstructor
      default: number
    }
    readonly duration: {
      type: NumberConstructor
      default: number
    }
    readonly raw: BooleanConstructor
    readonly x: NumberConstructor
    readonly y: NumberConstructor
    readonly disabled: BooleanConstructor
    readonly getDisabled: PropType<() => boolean>
    readonly displayDirective: {
      type: PropType<'show' | 'if'>
      default: string
    }
    readonly arrowStyle: PropType<string | CSSProperties>
    readonly flip: {
      type: BooleanConstructor
      default: boolean
    }
    readonly width: {
      type: PropType<number | 'trigger'>
      default: undefined
    }
    readonly overlap: BooleanConstructor
    readonly internalExtraClass: {
      type: PropType<string[]>
      default: () => never[]
    }
    readonly onClickoutside: PropType<(e: MouseEvent) => void>
    readonly 'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>
    readonly onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>
    readonly zIndex: NumberConstructor
    readonly to: {
      type: PropType<string | boolean | HTMLElement>
      default: undefined
    }
    readonly internalSyncTargetWithParent: BooleanConstructor
    readonly internalInheritedEventHandlers: {
      type: PropType<import('../../popover/src/Popover').TriggerEventHandlers[]>
      default: () => never[]
    }
    readonly onShow: PropType<MaybeArray<(value: boolean) => void> | undefined>
    readonly onHide: PropType<MaybeArray<(value: boolean) => void> | undefined>
    readonly arrow: {
      type: PropType<boolean | undefined>
      default: undefined
    }
    readonly minWidth: NumberConstructor
    readonly maxWidth: NumberConstructor
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
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
        optionHeightSmall: string
        optionHeightMedium: string
        optionHeightLarge: string
        optionHeightHuge: string
        borderRadius: string
        fontSizeSmall: string
        fontSizeMedium: string
        fontSizeLarge: string
        fontSizeHuge: string
        optionTextColor: string
        optionTextColorHover: string
        optionTextColorActive: string
        optionTextColorChildActive: string
        color: string
        dividerColor: string
        suffixColor: string
        prefixColor: string
        optionColorHover: string
        optionColorActive: string
        groupHeaderTextColor: string
        optionTextColorInverted: string
        optionTextColorHoverInverted: string
        optionTextColorActiveInverted: string
        optionTextColorChildActiveInverted: string
        colorInverted: string
        dividerColorInverted: string
        suffixColorInverted: string
        prefixColorInverted: string
        optionColorHoverInverted: string
        optionColorActiveInverted: string
        groupHeaderTextColorInverted: string
        optionOpacityDisabled: string
        padding: string
        optionIconSizeSmall: string
        optionIconSizeMedium: string
        optionIconSizeLarge: string
        optionIconSizeHuge: string
        optionSuffixWidthSmall: string
        optionSuffixWidthMedium: string
        optionSuffixWidthLarge: string
        optionSuffixWidthHuge: string
        optionIconSuffixWidthSmall: string
        optionIconSuffixWidthMedium: string
        optionIconSuffixWidthLarge: string
        optionIconSuffixWidthHuge: string
        optionPrefixWidthSmall: string
        optionPrefixWidthMedium: string
        optionPrefixWidthLarge: string
        optionPrefixWidthHuge: string
        optionIconPrefixWidthSmall: string
        optionIconPrefixWidthMedium: string
        optionIconPrefixWidthLarge: string
        optionIconPrefixWidthHuge: string
      }
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
      }
    }>
    tmNodes: import('vue').ComputedRef<
      TreeNode<
        | import('../..').MenuOption
        | import('../../menu/src/interface').MenuRenderOption,
        import('../..').MenuGroupOption,
        import('../../menu/src/interface').MenuIgnoredOption
      >[]
    >
    mergedShow: import('vue').ComputedRef<boolean>
    doUpdateShow: (value: boolean) => void
    cssVars: import('vue').ComputedRef<any>
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
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
      readonly animated?: unknown
      readonly keyboard?: unknown
      readonly size?: unknown
      readonly inverted?: unknown
      readonly placement?: unknown
      readonly onSelect?: unknown
      readonly options?: unknown
      readonly showArrow?: unknown
      readonly renderLabel?: unknown
      readonly renderIcon?: unknown
      readonly labelField?: unknown
      readonly keyField?: unknown
      readonly childrenField?: unknown
      readonly value?: unknown
      readonly show?: unknown
      readonly defaultShow?: unknown
      readonly trigger?: unknown
      readonly delay?: unknown
      readonly duration?: unknown
      readonly raw?: unknown
      readonly x?: unknown
      readonly y?: unknown
      readonly disabled?: unknown
      readonly getDisabled?: unknown
      readonly displayDirective?: unknown
      readonly arrowStyle?: unknown
      readonly flip?: unknown
      readonly width?: unknown
      readonly overlap?: unknown
      readonly internalExtraClass?: unknown
      readonly onClickoutside?: unknown
      readonly 'onUpdate:show'?: unknown
      readonly onUpdateShow?: unknown
      readonly zIndex?: unknown
      readonly to?: unknown
      readonly internalSyncTargetWithParent?: unknown
      readonly internalInheritedEventHandlers?: unknown
      readonly onShow?: unknown
      readonly onHide?: unknown
      readonly arrow?: unknown
      readonly minWidth?: unknown
      readonly maxWidth?: unknown
    } & {
      size: 'small' | 'medium' | 'large' | 'huge'
      flip: boolean
      disabled: boolean
      duration: number
      raw: boolean
      placement: FollowerPlacement
      overlap: boolean
      keyField: string
      trigger: import('../../popover').PopoverTrigger
      showArrow: boolean
      delay: number
      displayDirective: 'show' | 'if'
      animated: boolean
      defaultShow: boolean
      internalExtraClass: string[]
      internalSyncTargetWithParent: boolean
      internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[]
      options: DropdownMixedOption[]
      labelField: string
      keyboard: boolean
      inverted: boolean
      childrenField: string
    } & {
      value?: Key | null | undefined
      show?: boolean | undefined
      x?: number | undefined
      y?: number | undefined
      maxWidth?: number | undefined
      minWidth?: number | undefined
      width?: number | 'trigger' | undefined
      zIndex?: number | undefined
      onSelect?: MaybeArray<OnUpdateValue> | undefined
      to?: string | boolean | HTMLElement | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Dropdown',
            {
              optionHeightSmall: string
              optionHeightMedium: string
              optionHeightLarge: string
              optionHeightHuge: string
              borderRadius: string
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              fontSizeHuge: string
              optionTextColor: string
              optionTextColorHover: string
              optionTextColorActive: string
              optionTextColorChildActive: string
              color: string
              dividerColor: string
              suffixColor: string
              prefixColor: string
              optionColorHover: string
              optionColorActive: string
              groupHeaderTextColor: string
              optionTextColorInverted: string
              optionTextColorHoverInverted: string
              optionTextColorActiveInverted: string
              optionTextColorChildActiveInverted: string
              colorInverted: string
              dividerColorInverted: string
              suffixColorInverted: string
              prefixColorInverted: string
              optionColorHoverInverted: string
              optionColorActiveInverted: string
              groupHeaderTextColorInverted: string
              optionOpacityDisabled: string
              padding: string
              optionIconSizeSmall: string
              optionIconSizeMedium: string
              optionIconSizeLarge: string
              optionIconSizeHuge: string
              optionSuffixWidthSmall: string
              optionSuffixWidthMedium: string
              optionSuffixWidthLarge: string
              optionSuffixWidthHuge: string
              optionIconSuffixWidthSmall: string
              optionIconSuffixWidthMedium: string
              optionIconSuffixWidthLarge: string
              optionIconSuffixWidthHuge: string
              optionPrefixWidthSmall: string
              optionPrefixWidthMedium: string
              optionPrefixWidthLarge: string
              optionPrefixWidthHuge: string
              optionIconPrefixWidthSmall: string
              optionIconPrefixWidthMedium: string
              optionIconPrefixWidthLarge: string
              optionIconPrefixWidthHuge: string
            },
            {
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
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Dropdown',
              {
                optionHeightSmall: string
                optionHeightMedium: string
                optionHeightLarge: string
                optionHeightHuge: string
                borderRadius: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                optionTextColor: string
                optionTextColorHover: string
                optionTextColorActive: string
                optionTextColorChildActive: string
                color: string
                dividerColor: string
                suffixColor: string
                prefixColor: string
                optionColorHover: string
                optionColorActive: string
                groupHeaderTextColor: string
                optionTextColorInverted: string
                optionTextColorHoverInverted: string
                optionTextColorActiveInverted: string
                optionTextColorChildActiveInverted: string
                colorInverted: string
                dividerColorInverted: string
                suffixColorInverted: string
                prefixColorInverted: string
                optionColorHoverInverted: string
                optionColorActiveInverted: string
                groupHeaderTextColorInverted: string
                optionOpacityDisabled: string
                padding: string
                optionIconSizeSmall: string
                optionIconSizeMedium: string
                optionIconSizeLarge: string
                optionIconSizeHuge: string
                optionSuffixWidthSmall: string
                optionSuffixWidthMedium: string
                optionSuffixWidthLarge: string
                optionSuffixWidthHuge: string
                optionIconSuffixWidthSmall: string
                optionIconSuffixWidthMedium: string
                optionIconSuffixWidthLarge: string
                optionIconSuffixWidthHuge: string
                optionPrefixWidthSmall: string
                optionPrefixWidthMedium: string
                optionPrefixWidthLarge: string
                optionPrefixWidthHuge: string
                optionIconPrefixWidthSmall: string
                optionIconPrefixWidthMedium: string
                optionIconPrefixWidthLarge: string
                optionIconPrefixWidthHuge: string
              },
              {
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
              }
            >
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Dropdown',
              {
                optionHeightSmall: string
                optionHeightMedium: string
                optionHeightLarge: string
                optionHeightHuge: string
                borderRadius: string
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                fontSizeHuge: string
                optionTextColor: string
                optionTextColorHover: string
                optionTextColorActive: string
                optionTextColorChildActive: string
                color: string
                dividerColor: string
                suffixColor: string
                prefixColor: string
                optionColorHover: string
                optionColorActive: string
                groupHeaderTextColor: string
                optionTextColorInverted: string
                optionTextColorHoverInverted: string
                optionTextColorActiveInverted: string
                optionTextColorChildActiveInverted: string
                colorInverted: string
                dividerColorInverted: string
                suffixColorInverted: string
                prefixColorInverted: string
                optionColorHoverInverted: string
                optionColorActiveInverted: string
                groupHeaderTextColorInverted: string
                optionOpacityDisabled: string
                padding: string
                optionIconSizeSmall: string
                optionIconSizeMedium: string
                optionIconSizeLarge: string
                optionIconSizeHuge: string
                optionSuffixWidthSmall: string
                optionSuffixWidthMedium: string
                optionSuffixWidthLarge: string
                optionSuffixWidthHuge: string
                optionIconSuffixWidthSmall: string
                optionIconSuffixWidthMedium: string
                optionIconSuffixWidthLarge: string
                optionIconSuffixWidthHuge: string
                optionPrefixWidthSmall: string
                optionPrefixWidthMedium: string
                optionPrefixWidthLarge: string
                optionPrefixWidthHuge: string
                optionIconPrefixWidthSmall: string
                optionIconPrefixWidthMedium: string
                optionIconPrefixWidthLarge: string
                optionIconPrefixWidthHuge: string
              },
              {
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
              }
            >
          >
        | undefined
      renderIcon?: RenderIcon | undefined
      renderLabel?: RenderLabel | undefined
      arrowStyle?: string | CSSProperties | undefined
      onClickoutside?: ((e: MouseEvent) => void) | undefined
      getDisabled?: (() => boolean) | undefined
      'onUpdate:show'?: MaybeArray<(value: boolean) => void> | undefined
      onUpdateShow?: MaybeArray<(value: boolean) => void> | undefined
      onShow?: MaybeArray<(value: boolean) => void> | undefined
      onHide?: MaybeArray<(value: boolean) => void> | undefined
      arrow?: boolean | undefined
    }
  >,
  {
    size: 'small' | 'medium' | 'large' | 'huge'
    show: boolean | undefined
    flip: boolean
    width: number | 'trigger'
    disabled: boolean
    duration: number
    to: string | boolean | HTMLElement
    raw: boolean
    placement: FollowerPlacement
    overlap: boolean
    keyField: string
    trigger: import('../../popover').PopoverTrigger
    showArrow: boolean
    delay: number
    displayDirective: 'show' | 'if'
    animated: boolean
    defaultShow: boolean
    internalExtraClass: string[]
    internalSyncTargetWithParent: boolean
    internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[]
    arrow: boolean | undefined
    options: DropdownMixedOption[]
    labelField: string
    keyboard: boolean
    inverted: boolean
    childrenField: string
  }
>
export default _default