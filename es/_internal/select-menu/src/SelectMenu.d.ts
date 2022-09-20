import { PropType } from 'vue'
import { TreeNode } from 'treemate'
import type {
  SelectBaseOption,
  SelectGroupOption,
  SelectIgnoredOption,
  Value,
  SelectTreeMate
} from '../../../select/src/interface'
import type { RenderLabel, Size, RenderOption } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    clsPrefix: {
      type: StringConstructor
      required: true
    }
    scrollable: {
      type: BooleanConstructor
      default: boolean
    }
    treeMate: {
      type: PropType<SelectTreeMate>
      required: true
    }
    multiple: BooleanConstructor
    size: {
      type: PropType<Size>
      default: string
    }
    value: {
      type: PropType<Value | null>
      default: null
    }
    width: (StringConstructor | NumberConstructor)[]
    autoPending: BooleanConstructor
    virtualScroll: {
      type: BooleanConstructor
      default: boolean
    }
    show: {
      type: BooleanConstructor
      default: boolean
    }
    loading: BooleanConstructor
    focusable: BooleanConstructor
    renderLabel: PropType<RenderLabel>
    renderOption: PropType<RenderOption>
    onMousedown: PropType<(e: MouseEvent) => void>
    onScroll: PropType<(e: Event) => void>
    onFocus: PropType<(e: FocusEvent) => void>
    onBlur: PropType<(e: FocusEvent) => void>
    onKeyup: PropType<(e: KeyboardEvent) => void>
    onKeydown: PropType<(e: KeyboardEvent) => void>
    onTabOut: PropType<() => void>
    onMouseenter: PropType<(e: MouseEvent) => void>
    onMouseleave: PropType<(e: MouseEvent) => void>
    onToggle: PropType<(tmNode: TreeNode<SelectBaseOption>) => void>
    theme: PropType<
      import('../../../_mixins').Theme<
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
          Scrollbar: import('../../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
          Empty: import('../../../_mixins').Theme<
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
    >
    themeOverrides: PropType<
      import('../../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../../_mixins').Theme<
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
            Scrollbar: import('../../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
            Empty: import('../../../_mixins').Theme<
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
      >
    >
    builtinThemeOverrides: PropType<
      import('../../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../../_mixins').Theme<
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
            Scrollbar: import('../../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
            Empty: import('../../../_mixins').Theme<
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
      >
    >
  },
  {
    selfRef: import('vue').Ref<HTMLElement | null>
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
      }
      peers: {
        Scrollbar: import('../../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
        Empty: import('../../../_mixins').Theme<
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
      peerOverrides: {
        Scrollbar?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Empty?:
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
    virtualListRef: import('vue').Ref<{
      listElRef: HTMLElement
      itemsElRef: HTMLElement | null
      scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo
    } | null>
    scrollbarRef: import('vue').Ref<{
      scrollTo: import('../../scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
    style: import('vue').ComputedRef<
      (
        | {
            '--height': string
            '--action-divider-color': string
            '--action-text-color': string
            '--bezier': string
            '--border-radius': string
            '--color': string
            '--option-font-size': string
            '--group-header-text-color': string
            '--option-check-color': string
            '--option-color-pending': string
            '--option-color-active': string
            '--option-height': string
            '--option-opacity-disabled': string
            '--option-text-color': string
            '--option-text-color-active': string
            '--option-text-color-disabled': string
            '--option-text-color-pressed': string
            '--option-padding': string
            '--option-padding-left': string
            '--loading-color': string
            '--loading-size': string
          }
        | {
            width: string | undefined
          }
      )[]
    >
    itemSize: import('vue').ComputedRef<number>
    padding: import('vue').ComputedRef<import('seemly').Margin>
    flattenedNodes: import('vue').ComputedRef<
      TreeNode<
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
      >[]
    >
    empty: import('vue').ComputedRef<boolean>
    virtualListContainer(): HTMLElement
    virtualListContent(): HTMLElement
    doScroll: (e: Event) => void
    handleFocusin: (e: FocusEvent) => void
    handleFocusout: (e: FocusEvent) => void
    handleKeyUp: (e: KeyboardEvent) => void
    handleKeyDown: (e: KeyboardEvent) => void
    handleMouseDown: (e: MouseEvent) => void
    handleVirtualListResize: () => void
    handleVirtualListScroll: (e: Event) => void
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
      clsPrefix?: unknown
      scrollable?: unknown
      treeMate?: unknown
      multiple?: unknown
      size?: unknown
      value?: unknown
      width?: unknown
      autoPending?: unknown
      virtualScroll?: unknown
      show?: unknown
      loading?: unknown
      focusable?: unknown
      renderLabel?: unknown
      renderOption?: unknown
      onMousedown?: unknown
      onScroll?: unknown
      onFocus?: unknown
      onBlur?: unknown
      onKeyup?: unknown
      onKeydown?: unknown
      onTabOut?: unknown
      onMouseenter?: unknown
      onMouseleave?: unknown
      onToggle?: unknown
      theme?: unknown
      themeOverrides?: unknown
      builtinThemeOverrides?: unknown
    } & {
      value: Value | null
      size: Size
      show: boolean
      multiple: boolean
      focusable: boolean
      loading: boolean
      clsPrefix: string
      scrollable: boolean
      treeMate: SelectTreeMate
      autoPending: boolean
      virtualScroll: boolean
    } & {
      width?: string | number | undefined
      onFocus?: ((e: FocusEvent) => void) | undefined
      onBlur?: ((e: FocusEvent) => void) | undefined
      onKeydown?: ((e: KeyboardEvent) => void) | undefined
      onKeyup?: ((e: KeyboardEvent) => void) | undefined
      onMousedown?: ((e: MouseEvent) => void) | undefined
      onMouseenter?: ((e: MouseEvent) => void) | undefined
      onMouseleave?: ((e: MouseEvent) => void) | undefined
      onScroll?: ((e: Event) => void) | undefined
      theme?:
        | import('../../../_mixins').Theme<
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
              Scrollbar: import('../../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
              Empty: import('../../../_mixins').Theme<
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
        | undefined
      themeOverrides?:
        | import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
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
                Scrollbar: import('../../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
                Empty: import('../../../_mixins').Theme<
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
          >
        | undefined
      builtinThemeOverrides?:
        | import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
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
                Scrollbar: import('../../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
                Empty: import('../../../_mixins').Theme<
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
          >
        | undefined
      renderLabel?: RenderLabel | undefined
      renderOption?: RenderOption | undefined
      onTabOut?: (() => void) | undefined
      onToggle?: ((tmNode: TreeNode<SelectBaseOption>) => void) | undefined
    }
  >,
  {
    value: Value | null
    size: Size
    show: boolean
    multiple: boolean
    focusable: boolean
    loading: boolean
    scrollable: boolean
    autoPending: boolean
    virtualScroll: boolean
  }
>
export default _default