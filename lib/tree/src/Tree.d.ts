import { PropType } from 'vue'
import { TreeMate, TreeMateOptions, CheckStrategy } from 'treemate'
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils'
import {
  TreeDragInfo,
  TreeDropInfo,
  TreeOptions,
  Key,
  TreeOption,
  AllowDrop
} from './interface'
import { defaultAllowDrop } from './dnd'
export declare function createTreeMateOptions<T>(
  keyField: string,
  childrenField: string
): TreeMateOptions<T, T, T>
declare type OnUpdateKeys = (
  value: Key[],
  option: Array<TreeOption | null>
) => void
declare type OnLoad = (node: TreeOption) => Promise<void>
export declare const treeSharedProps: {
  readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>
  readonly defaultExpandAll: BooleanConstructor
  readonly expandedKeys: PropType<Key[]>
  readonly keyField: {
    readonly type: StringConstructor
    readonly default: 'key'
  }
  readonly labelField: {
    readonly type: StringConstructor
    readonly default: 'label'
  }
  readonly childrenField: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly defaultExpandedKeys: {
    readonly type: PropType<Key[]>
    readonly default: () => never[]
  }
  readonly indeterminateKeys: PropType<Key[]>
  readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>
  readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>
}
declare const treeProps: {
  readonly internalScrollable: BooleanConstructor
  readonly internalScrollablePadding: StringConstructor
  readonly internalDataTreeMate: PropType<
    TreeMate<TreeOption, TreeOption, TreeOption>
  >
  readonly internalDisplayTreeMate: PropType<
    TreeMate<TreeOption, TreeOption, TreeOption>
  >
  readonly internalHighlightKeySet: PropType<Set<Key>>
  readonly internalUnifySelectCheck: BooleanConstructor
  readonly internalHideFilteredNode: BooleanConstructor
  readonly internalCheckboxFocusable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly internalFocusable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly checkStrategy: {
    readonly type: PropType<CheckStrategy>
    readonly default: 'all'
  }
  readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>
  readonly defaultExpandAll: BooleanConstructor
  readonly expandedKeys: PropType<Key[]>
  readonly keyField: {
    readonly type: StringConstructor
    readonly default: 'key'
  }
  readonly labelField: {
    readonly type: StringConstructor
    readonly default: 'label'
  }
  readonly childrenField: {
    readonly type: StringConstructor
    readonly default: 'children'
  }
  readonly defaultExpandedKeys: {
    readonly type: PropType<Key[]>
    readonly default: () => never[]
  }
  readonly indeterminateKeys: PropType<Key[]>
  readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>
  readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>
  readonly data: {
    readonly type: PropType<TreeOptions>
    readonly default: () => never[]
  }
  readonly expandOnDragenter: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly cancelable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly checkable: BooleanConstructor
  readonly draggable: BooleanConstructor
  readonly blockNode: BooleanConstructor
  readonly blockLine: BooleanConstructor
  readonly disabled: BooleanConstructor
  readonly checkedKeys: PropType<Key[]>
  readonly defaultCheckedKeys: {
    readonly type: PropType<Key[]>
    readonly default: () => never[]
  }
  readonly selectedKeys: PropType<Key[]>
  readonly defaultSelectedKeys: {
    readonly type: PropType<Key[]>
    readonly default: () => never[]
  }
  readonly remote: BooleanConstructor
  readonly leafOnly: BooleanConstructor
  readonly multiple: BooleanConstructor
  readonly pattern: {
    readonly type: StringConstructor
    readonly default: ''
  }
  readonly onLoad: PropType<OnLoad>
  readonly cascade: BooleanConstructor
  readonly selectable: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly indent: {
    readonly type: NumberConstructor
    readonly default: 16
  }
  readonly allowDrop: {
    readonly type: PropType<AllowDrop>
    readonly default: typeof defaultAllowDrop
  }
  readonly animated: {
    readonly type: BooleanConstructor
    readonly default: true
  }
  readonly virtualScroll: BooleanConstructor
  readonly watchProps: PropType<
    ('defaultExpandedKeys' | 'defaultCheckedKeys' | 'defaultSelectedKeys')[]
  >
  readonly renderLabel: PropType<
    ({
      option,
      checked,
      selected
    }: import('./interface').TreeRenderProps) => import('vue').VNodeChild
  >
  readonly renderPrefix: PropType<
    ({
      option,
      checked,
      selected
    }: import('./interface').TreeRenderProps) => import('vue').VNodeChild
  >
  readonly renderSuffix: PropType<
    ({
      option,
      checked,
      selected
    }: import('./interface').TreeRenderProps) => import('vue').VNodeChild
  >
  readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>
  readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>
  readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>
  readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>
  readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>
  readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>
  readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly 'onUpdate:checkedKeys': PropType<MaybeArray<OnUpdateKeys>>
  readonly onUpdateSelectedKeys: PropType<MaybeArray<OnUpdateKeys>>
  readonly 'onUpdate:selectedKeys': PropType<MaybeArray<OnUpdateKeys>>
  readonly theme: PropType<
    import('../../_mixins').Theme<
      'Tree',
      {
        fontSize: string
        nodeBorderRadius: string
        nodeColorHover: string
        nodeColorPressed: string
        nodeColorActive: string
        arrowColor: string
        nodeTextColor: string
        nodeTextColorDisabled: string
        loadingColor: string
        dropMarkColor: string
      },
      {
        Checkbox: import('../../_mixins').Theme<
          'Checkbox',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderRadius: string
            color: string
            colorChecked: string
            colorDisabled: string
            colorDisabledChecked: string
            colorTableHeader: string
            colorTableHeaderModal: string
            colorTableHeaderPopover: string
            checkMarkColor: string
            checkMarkColorDisabled: string
            checkMarkColorDisabledChecked: string
            border: string
            borderDisabled: string
            borderDisabledChecked: string
            borderChecked: string
            borderFocus: string
            boxShadowFocus: string
            textColor: string
            textColorDisabled: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            labelPadding: string
          },
          any
        >
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
    >
  >
  readonly themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Tree',
        {
          fontSize: string
          nodeBorderRadius: string
          nodeColorHover: string
          nodeColorPressed: string
          nodeColorActive: string
          arrowColor: string
          nodeTextColor: string
          nodeTextColorDisabled: string
          loadingColor: string
          dropMarkColor: string
        },
        {
          Checkbox: import('../../_mixins').Theme<
            'Checkbox',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              borderRadius: string
              color: string
              colorChecked: string
              colorDisabled: string
              colorDisabledChecked: string
              colorTableHeader: string
              colorTableHeaderModal: string
              colorTableHeaderPopover: string
              checkMarkColor: string
              checkMarkColorDisabled: string
              checkMarkColorDisabledChecked: string
              border: string
              borderDisabled: string
              borderDisabledChecked: string
              borderChecked: string
              borderFocus: string
              boxShadowFocus: string
              textColor: string
              textColorDisabled: string
              sizeSmall: string
              sizeMedium: string
              sizeLarge: string
              labelPadding: string
            },
            any
          >
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
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
        'Tree',
        {
          fontSize: string
          nodeBorderRadius: string
          nodeColorHover: string
          nodeColorPressed: string
          nodeColorActive: string
          arrowColor: string
          nodeTextColor: string
          nodeTextColorDisabled: string
          loadingColor: string
          dropMarkColor: string
        },
        {
          Checkbox: import('../../_mixins').Theme<
            'Checkbox',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              borderRadius: string
              color: string
              colorChecked: string
              colorDisabled: string
              colorDisabledChecked: string
              colorTableHeader: string
              colorTableHeaderModal: string
              colorTableHeaderPopover: string
              checkMarkColor: string
              checkMarkColorDisabled: string
              checkMarkColorDisabledChecked: string
              border: string
              borderDisabled: string
              borderDisabledChecked: string
              borderChecked: string
              borderFocus: string
              boxShadowFocus: string
              textColor: string
              textColorDisabled: string
              sizeSmall: string
              sizeMedium: string
              sizeLarge: string
              labelPadding: string
            },
            any
          >
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
  >
}
export declare type TreeProps = ExtractPublicPropTypes<typeof treeProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly internalScrollable: BooleanConstructor
    readonly internalScrollablePadding: StringConstructor
    readonly internalDataTreeMate: PropType<
      TreeMate<TreeOption, TreeOption, TreeOption>
    >
    readonly internalDisplayTreeMate: PropType<
      TreeMate<TreeOption, TreeOption, TreeOption>
    >
    readonly internalHighlightKeySet: PropType<Set<Key>>
    readonly internalUnifySelectCheck: BooleanConstructor
    readonly internalHideFilteredNode: BooleanConstructor
    readonly internalCheckboxFocusable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly internalFocusable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly checkStrategy: {
      readonly type: PropType<CheckStrategy>
      readonly default: 'all'
    }
    readonly filter: PropType<(pattern: string, node: TreeOption) => boolean>
    readonly defaultExpandAll: BooleanConstructor
    readonly expandedKeys: PropType<Key[]>
    readonly keyField: {
      readonly type: StringConstructor
      readonly default: 'key'
    }
    readonly labelField: {
      readonly type: StringConstructor
      readonly default: 'label'
    }
    readonly childrenField: {
      readonly type: StringConstructor
      readonly default: 'children'
    }
    readonly defaultExpandedKeys: {
      readonly type: PropType<Key[]>
      readonly default: () => never[]
    }
    readonly indeterminateKeys: PropType<Key[]>
    readonly onUpdateIndeterminateKeys: PropType<MaybeArray<OnUpdateKeys>>
    readonly 'onUpdate:indeterminateKeys': PropType<MaybeArray<OnUpdateKeys>>
    readonly onUpdateExpandedKeys: PropType<MaybeArray<OnUpdateKeys>>
    readonly 'onUpdate:expandedKeys': PropType<MaybeArray<OnUpdateKeys>>
    readonly data: {
      readonly type: PropType<TreeOptions>
      readonly default: () => never[]
    }
    readonly expandOnDragenter: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly cancelable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly checkable: BooleanConstructor
    readonly draggable: BooleanConstructor
    readonly blockNode: BooleanConstructor
    readonly blockLine: BooleanConstructor
    readonly disabled: BooleanConstructor
    readonly checkedKeys: PropType<Key[]>
    readonly defaultCheckedKeys: {
      readonly type: PropType<Key[]>
      readonly default: () => never[]
    }
    readonly selectedKeys: PropType<Key[]>
    readonly defaultSelectedKeys: {
      readonly type: PropType<Key[]>
      readonly default: () => never[]
    }
    readonly remote: BooleanConstructor
    readonly leafOnly: BooleanConstructor
    readonly multiple: BooleanConstructor
    readonly pattern: {
      readonly type: StringConstructor
      readonly default: ''
    }
    readonly onLoad: PropType<OnLoad>
    readonly cascade: BooleanConstructor
    readonly selectable: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly indent: {
      readonly type: NumberConstructor
      readonly default: 16
    }
    readonly allowDrop: {
      readonly type: PropType<AllowDrop>
      readonly default: typeof defaultAllowDrop
    }
    readonly animated: {
      readonly type: BooleanConstructor
      readonly default: true
    }
    readonly virtualScroll: BooleanConstructor
    readonly watchProps: PropType<
      ('defaultExpandedKeys' | 'defaultCheckedKeys' | 'defaultSelectedKeys')[]
    >
    readonly renderLabel: PropType<
      ({
        option,
        checked,
        selected
      }: import('./interface').TreeRenderProps) => import('vue').VNodeChild
    >
    readonly renderPrefix: PropType<
      ({
        option,
        checked,
        selected
      }: import('./interface').TreeRenderProps) => import('vue').VNodeChild
    >
    readonly renderSuffix: PropType<
      ({
        option,
        checked,
        selected
      }: import('./interface').TreeRenderProps) => import('vue').VNodeChild
    >
    readonly onDragenter: PropType<MaybeArray<(e: TreeDragInfo) => void>>
    readonly onDragleave: PropType<MaybeArray<(e: TreeDragInfo) => void>>
    readonly onDragend: PropType<MaybeArray<(e: TreeDragInfo) => void>>
    readonly onDragstart: PropType<MaybeArray<(e: TreeDragInfo) => void>>
    readonly onDragover: PropType<MaybeArray<(e: TreeDragInfo) => void>>
    readonly onDrop: PropType<MaybeArray<(e: TreeDropInfo) => void>>
    readonly onUpdateCheckedKeys: PropType<MaybeArray<OnUpdateKeys>>
    readonly 'onUpdate:checkedKeys': PropType<MaybeArray<OnUpdateKeys>>
    readonly onUpdateSelectedKeys: PropType<MaybeArray<OnUpdateKeys>>
    readonly 'onUpdate:selectedKeys': PropType<MaybeArray<OnUpdateKeys>>
    readonly theme: PropType<
      import('../../_mixins').Theme<
        'Tree',
        {
          fontSize: string
          nodeBorderRadius: string
          nodeColorHover: string
          nodeColorPressed: string
          nodeColorActive: string
          arrowColor: string
          nodeTextColor: string
          nodeTextColorDisabled: string
          loadingColor: string
          dropMarkColor: string
        },
        {
          Checkbox: import('../../_mixins').Theme<
            'Checkbox',
            {
              fontSizeSmall: string
              fontSizeMedium: string
              fontSizeLarge: string
              borderRadius: string
              color: string
              colorChecked: string
              colorDisabled: string
              colorDisabledChecked: string
              colorTableHeader: string
              colorTableHeaderModal: string
              colorTableHeaderPopover: string
              checkMarkColor: string
              checkMarkColorDisabled: string
              checkMarkColorDisabledChecked: string
              border: string
              borderDisabled: string
              borderDisabledChecked: string
              borderChecked: string
              borderFocus: string
              boxShadowFocus: string
              textColor: string
              textColorDisabled: string
              sizeSmall: string
              sizeMedium: string
              sizeLarge: string
              labelPadding: string
            },
            any
          >
          Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
              color: string
              colorHover: string
            },
            any
          >
        }
      >
    >
    readonly themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Tree',
          {
            fontSize: string
            nodeBorderRadius: string
            nodeColorHover: string
            nodeColorPressed: string
            nodeColorActive: string
            arrowColor: string
            nodeTextColor: string
            nodeTextColorDisabled: string
            loadingColor: string
            dropMarkColor: string
          },
          {
            Checkbox: import('../../_mixins').Theme<
              'Checkbox',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                borderRadius: string
                color: string
                colorChecked: string
                colorDisabled: string
                colorDisabledChecked: string
                colorTableHeader: string
                colorTableHeaderModal: string
                colorTableHeaderPopover: string
                checkMarkColor: string
                checkMarkColorDisabled: string
                checkMarkColorDisabledChecked: string
                border: string
                borderDisabled: string
                borderDisabledChecked: string
                borderChecked: string
                borderFocus: string
                boxShadowFocus: string
                textColor: string
                textColorDisabled: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
                labelPadding: string
              },
              any
            >
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
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
          'Tree',
          {
            fontSize: string
            nodeBorderRadius: string
            nodeColorHover: string
            nodeColorPressed: string
            nodeColorActive: string
            arrowColor: string
            nodeTextColor: string
            nodeTextColorDisabled: string
            loadingColor: string
            dropMarkColor: string
          },
          {
            Checkbox: import('../../_mixins').Theme<
              'Checkbox',
              {
                fontSizeSmall: string
                fontSizeMedium: string
                fontSizeLarge: string
                borderRadius: string
                color: string
                colorChecked: string
                colorDisabled: string
                colorDisabledChecked: string
                colorTableHeader: string
                colorTableHeaderModal: string
                colorTableHeaderPopover: string
                checkMarkColor: string
                checkMarkColorDisabled: string
                checkMarkColorDisabledChecked: string
                border: string
                borderDisabled: string
                borderDisabledChecked: string
                borderChecked: string
                borderFocus: string
                boxShadowFocus: string
                textColor: string
                textColorDisabled: string
                sizeSmall: string
                sizeMedium: string
                sizeLarge: string
                labelPadding: string
              },
              any
            >
            Scrollbar: import('../../_mixins').Theme<
              'Scrollbar',
              {
                color: string
                colorHover: string
              },
              any
            >
          }
        >
      >
    >
  },
  {
    handleKeyup: (e: KeyboardEvent) => void
    handleKeydown: (e: KeyboardEvent) => void
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
        fontSize: string
        nodeBorderRadius: string
        nodeColorHover: string
        nodeColorPressed: string
        nodeColorActive: string
        arrowColor: string
        nodeTextColor: string
        nodeTextColorDisabled: string
        loadingColor: string
        dropMarkColor: string
      }
      peers: {
        Checkbox: import('../../_mixins').Theme<
          'Checkbox',
          {
            fontSizeSmall: string
            fontSizeMedium: string
            fontSizeLarge: string
            borderRadius: string
            color: string
            colorChecked: string
            colorDisabled: string
            colorDisabledChecked: string
            colorTableHeader: string
            colorTableHeaderModal: string
            colorTableHeaderPopover: string
            checkMarkColor: string
            checkMarkColorDisabled: string
            checkMarkColorDisabledChecked: string
            border: string
            borderDisabled: string
            borderDisabledChecked: string
            borderChecked: string
            borderFocus: string
            boxShadowFocus: string
            textColor: string
            textColorDisabled: string
            sizeSmall: string
            sizeMedium: string
            sizeLarge: string
            labelPadding: string
          },
          any
        >
        Scrollbar: import('../../_mixins').Theme<
          'Scrollbar',
          {
            color: string
            colorHover: string
          },
          any
        >
      }
      peerOverrides: {
        Checkbox?:
          | {
              peers?:
                | {
                    [x: string]: any
                  }
                | undefined
            }
          | undefined
        Scrollbar?:
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
    fNodes: import('vue').ComputedRef<
      (
        | {
            key: import('treemate').Key
            rawNode: {
              [x: string]: unknown
              key?: Key | undefined
              label?: string | undefined
              checkboxDisabled?: boolean | undefined
              disabled?: boolean | undefined
              isLeaf?: boolean | undefined
              children?: any[] | undefined
              prefix?: (() => import('vue').VNodeChild) | undefined
              suffix?: (() => import('vue').VNodeChild) | undefined
            }
            level: number
            index: number
            isFirstChild: boolean
            isLastChild: boolean
            parent: {
              key: import('treemate').Key
              rawNode: {
                [x: string]: unknown
                key?: Key | undefined
                label?: string | undefined
                checkboxDisabled?: boolean | undefined
                disabled?: boolean | undefined
                isLeaf?: boolean | undefined
                children?: any[] | undefined
                prefix?: (() => import('vue').VNodeChild) | undefined
                suffix?: (() => import('vue').VNodeChild) | undefined
              }
              level: number
              index: number
              isFirstChild: boolean
              isLastChild: boolean
              parent: any | null
              isLeaf: boolean
              isGroup: boolean
              ignored: boolean
              shallowLoaded: boolean
              disabled: boolean
              siblings: any[]
              children?: any[] | undefined
              getPrev: (
                options?:
                  | import('treemate/lib/interface').GetPrevNextOptions
                  | undefined
              ) =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getNext: (
                options?:
                  | import('treemate/lib/interface').GetPrevNextOptions
                  | undefined
              ) =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getParent: () =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getChild: () =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              contains: (
                treeNode:
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                  | undefined
              ) => boolean
            } | null
            isLeaf: boolean
            isGroup: boolean
            ignored: boolean
            shallowLoaded: boolean
            disabled: boolean
            siblings: {
              key: import('treemate').Key
              rawNode: {
                [x: string]: unknown
                key?: Key | undefined
                label?: string | undefined
                checkboxDisabled?: boolean | undefined
                disabled?: boolean | undefined
                isLeaf?: boolean | undefined
                children?: any[] | undefined
                prefix?: (() => import('vue').VNodeChild) | undefined
                suffix?: (() => import('vue').VNodeChild) | undefined
              }
              level: number
              index: number
              isFirstChild: boolean
              isLastChild: boolean
              parent: any | null
              isLeaf: boolean
              isGroup: boolean
              ignored: boolean
              shallowLoaded: boolean
              disabled: boolean
              siblings: any[]
              children?: any[] | undefined
              getPrev: (
                options?:
                  | import('treemate/lib/interface').GetPrevNextOptions
                  | undefined
              ) =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getNext: (
                options?:
                  | import('treemate/lib/interface').GetPrevNextOptions
                  | undefined
              ) =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getParent: () =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getChild: () =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              contains: (
                treeNode:
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                  | undefined
              ) => boolean
            }[]
            children?:
              | {
                  key: import('treemate').Key
                  rawNode: {
                    [x: string]: unknown
                    key?: Key | undefined
                    label?: string | undefined
                    checkboxDisabled?: boolean | undefined
                    disabled?: boolean | undefined
                    isLeaf?: boolean | undefined
                    children?: any[] | undefined
                    prefix?: (() => import('vue').VNodeChild) | undefined
                    suffix?: (() => import('vue').VNodeChild) | undefined
                  }
                  level: number
                  index: number
                  isFirstChild: boolean
                  isLastChild: boolean
                  parent: any | null
                  isLeaf: boolean
                  isGroup: boolean
                  ignored: boolean
                  shallowLoaded: boolean
                  disabled: boolean
                  siblings: any[]
                  children?: any[] | undefined
                  getPrev: (
                    options?:
                      | import('treemate/lib/interface').GetPrevNextOptions
                      | undefined
                  ) =>
                    | import('treemate').TreeNode<
                        TreeOption,
                        TreeOption,
                        TreeOption
                      >
                    | null
                  getNext: (
                    options?:
                      | import('treemate/lib/interface').GetPrevNextOptions
                      | undefined
                  ) =>
                    | import('treemate').TreeNode<
                        TreeOption,
                        TreeOption,
                        TreeOption
                      >
                    | null
                  getParent: () =>
                    | import('treemate').TreeNode<
                        TreeOption,
                        TreeOption,
                        TreeOption
                      >
                    | null
                  getChild: () =>
                    | import('treemate').TreeNode<
                        TreeOption,
                        TreeOption,
                        TreeOption
                      >
                    | null
                  contains: (
                    treeNode:
                      | import('treemate').TreeNode<
                          TreeOption,
                          TreeOption,
                          TreeOption
                        >
                      | null
                      | undefined
                  ) => boolean
                }[]
              | undefined
            getPrev: (
              options?:
                | import('treemate/lib/interface').GetPrevNextOptions
                | undefined
            ) =>
              | import('treemate').TreeNode<TreeOption, TreeOption, TreeOption>
              | null
            getNext: (
              options?:
                | import('treemate/lib/interface').GetPrevNextOptions
                | undefined
            ) =>
              | import('treemate').TreeNode<TreeOption, TreeOption, TreeOption>
              | null
            getParent: () =>
              | import('treemate').TreeNode<TreeOption, TreeOption, TreeOption>
              | null
            getChild: () =>
              | import('treemate').TreeNode<TreeOption, TreeOption, TreeOption>
              | null
            contains: (
              treeNode:
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
                | undefined
            ) => boolean
          }
        | {
            __motion: true
            height: number | undefined
            mode: 'collapse' | 'expand'
            nodes: {
              key: import('treemate').Key
              rawNode: {
                [x: string]: unknown
                key?: Key | undefined
                label?: string | undefined
                checkboxDisabled?: boolean | undefined
                disabled?: boolean | undefined
                isLeaf?: boolean | undefined
                children?: any[] | undefined
                prefix?: (() => import('vue').VNodeChild) | undefined
                suffix?: (() => import('vue').VNodeChild) | undefined
              }
              level: number
              index: number
              isFirstChild: boolean
              isLastChild: boolean
              parent: {
                key: import('treemate').Key
                rawNode: {
                  [x: string]: unknown
                  key?: Key | undefined
                  label?: string | undefined
                  checkboxDisabled?: boolean | undefined
                  disabled?: boolean | undefined
                  isLeaf?: boolean | undefined
                  children?: any[] | undefined
                  prefix?: (() => import('vue').VNodeChild) | undefined
                  suffix?: (() => import('vue').VNodeChild) | undefined
                }
                level: number
                index: number
                isFirstChild: boolean
                isLastChild: boolean
                parent: any | null
                isLeaf: boolean
                isGroup: boolean
                ignored: boolean
                shallowLoaded: boolean
                disabled: boolean
                siblings: any[]
                children?: any[] | undefined
                getPrev: (
                  options?:
                    | import('treemate/lib/interface').GetPrevNextOptions
                    | undefined
                ) =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                getNext: (
                  options?:
                    | import('treemate/lib/interface').GetPrevNextOptions
                    | undefined
                ) =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                getParent: () =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                getChild: () =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                contains: (
                  treeNode:
                    | import('treemate').TreeNode<
                        TreeOption,
                        TreeOption,
                        TreeOption
                      >
                    | null
                    | undefined
                ) => boolean
              } | null
              isLeaf: boolean
              isGroup: boolean
              ignored: boolean
              shallowLoaded: boolean
              disabled: boolean
              siblings: {
                key: import('treemate').Key
                rawNode: {
                  [x: string]: unknown
                  key?: Key | undefined
                  label?: string | undefined
                  checkboxDisabled?: boolean | undefined
                  disabled?: boolean | undefined
                  isLeaf?: boolean | undefined
                  children?: any[] | undefined
                  prefix?: (() => import('vue').VNodeChild) | undefined
                  suffix?: (() => import('vue').VNodeChild) | undefined
                }
                level: number
                index: number
                isFirstChild: boolean
                isLastChild: boolean
                parent: any | null
                isLeaf: boolean
                isGroup: boolean
                ignored: boolean
                shallowLoaded: boolean
                disabled: boolean
                siblings: any[]
                children?: any[] | undefined
                getPrev: (
                  options?:
                    | import('treemate/lib/interface').GetPrevNextOptions
                    | undefined
                ) =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                getNext: (
                  options?:
                    | import('treemate/lib/interface').GetPrevNextOptions
                    | undefined
                ) =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                getParent: () =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                getChild: () =>
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                contains: (
                  treeNode:
                    | import('treemate').TreeNode<
                        TreeOption,
                        TreeOption,
                        TreeOption
                      >
                    | null
                    | undefined
                ) => boolean
              }[]
              children?:
                | {
                    key: import('treemate').Key
                    rawNode: {
                      [x: string]: unknown
                      key?: Key | undefined
                      label?: string | undefined
                      checkboxDisabled?: boolean | undefined
                      disabled?: boolean | undefined
                      isLeaf?: boolean | undefined
                      children?: any[] | undefined
                      prefix?: (() => import('vue').VNodeChild) | undefined
                      suffix?: (() => import('vue').VNodeChild) | undefined
                    }
                    level: number
                    index: number
                    isFirstChild: boolean
                    isLastChild: boolean
                    parent: any | null
                    isLeaf: boolean
                    isGroup: boolean
                    ignored: boolean
                    shallowLoaded: boolean
                    disabled: boolean
                    siblings: any[]
                    children?: any[] | undefined
                    getPrev: (
                      options?:
                        | import('treemate/lib/interface').GetPrevNextOptions
                        | undefined
                    ) =>
                      | import('treemate').TreeNode<
                          TreeOption,
                          TreeOption,
                          TreeOption
                        >
                      | null
                    getNext: (
                      options?:
                        | import('treemate/lib/interface').GetPrevNextOptions
                        | undefined
                    ) =>
                      | import('treemate').TreeNode<
                          TreeOption,
                          TreeOption,
                          TreeOption
                        >
                      | null
                    getParent: () =>
                      | import('treemate').TreeNode<
                          TreeOption,
                          TreeOption,
                          TreeOption
                        >
                      | null
                    getChild: () =>
                      | import('treemate').TreeNode<
                          TreeOption,
                          TreeOption,
                          TreeOption
                        >
                      | null
                    contains: (
                      treeNode:
                        | import('treemate').TreeNode<
                            TreeOption,
                            TreeOption,
                            TreeOption
                          >
                        | null
                        | undefined
                    ) => boolean
                  }[]
                | undefined
              getPrev: (
                options?:
                  | import('treemate/lib/interface').GetPrevNextOptions
                  | undefined
              ) =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getNext: (
                options?:
                  | import('treemate/lib/interface').GetPrevNextOptions
                  | undefined
              ) =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getParent: () =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              getChild: () =>
                | import('treemate').TreeNode<
                    TreeOption,
                    TreeOption,
                    TreeOption
                  >
                | null
              contains: (
                treeNode:
                  | import('treemate').TreeNode<
                      TreeOption,
                      TreeOption,
                      TreeOption
                    >
                  | null
                  | undefined
              ) => boolean
            }[]
          }
      )[]
    >
    aip: import('vue').Ref<boolean>
    selfElRef: import('vue').Ref<HTMLDivElement | null>
    virtualListInstRef: import('vue').Ref<{
      listElRef: HTMLElement
      itemsElRef: HTMLElement | null
      scrollTo: import('vueuc/lib/virtual-list/src/VirtualList').ScrollTo
    } | null>
    scrollbarInstRef: import('vue').Ref<{
      scrollTo: import('../../_internal/scrollbar/src/ScrollBar').ScrollTo
      sync: () => void
      containerRef: HTMLElement | null
      contentRef: HTMLElement | null
      containerScrollTop: number
    } | null>
    handleFocusout: (e: FocusEvent) => void
    handleDragLeaveTree: (e: DragEvent) => void
    handleScroll: () => void
    getScrollContainer: () => HTMLElement | null | undefined
    getScrollContent: () => HTMLElement | null | undefined
    handleAfterEnter: () => void
    handleResize: () => void
    cssVars: import('vue').ComputedRef<{
      '--arrow-color': string
      '--loading-color': string
      '--bezier': string
      '--font-size': string
      '--node-border-radius': string
      '--node-color-active': string
      '--node-color-hover': string
      '--node-color-pressed': string
      '--node-text-color': string
      '--node-text-color-disabled': string
      '--drop-mark-color': string
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
      readonly internalScrollable?: unknown
      readonly internalScrollablePadding?: unknown
      readonly internalDataTreeMate?: unknown
      readonly internalDisplayTreeMate?: unknown
      readonly internalHighlightKeySet?: unknown
      readonly internalUnifySelectCheck?: unknown
      readonly internalHideFilteredNode?: unknown
      readonly internalCheckboxFocusable?: unknown
      readonly internalFocusable?: unknown
      readonly checkStrategy?: unknown
      readonly filter?: unknown
      readonly defaultExpandAll?: unknown
      readonly expandedKeys?: unknown
      readonly keyField?: unknown
      readonly labelField?: unknown
      readonly childrenField?: unknown
      readonly defaultExpandedKeys?: unknown
      readonly indeterminateKeys?: unknown
      readonly onUpdateIndeterminateKeys?: unknown
      readonly 'onUpdate:indeterminateKeys'?: unknown
      readonly onUpdateExpandedKeys?: unknown
      readonly 'onUpdate:expandedKeys'?: unknown
      readonly data?: unknown
      readonly expandOnDragenter?: unknown
      readonly cancelable?: unknown
      readonly checkable?: unknown
      readonly draggable?: unknown
      readonly blockNode?: unknown
      readonly blockLine?: unknown
      readonly disabled?: unknown
      readonly checkedKeys?: unknown
      readonly defaultCheckedKeys?: unknown
      readonly selectedKeys?: unknown
      readonly defaultSelectedKeys?: unknown
      readonly remote?: unknown
      readonly leafOnly?: unknown
      readonly multiple?: unknown
      readonly pattern?: unknown
      readonly onLoad?: unknown
      readonly cascade?: unknown
      readonly selectable?: unknown
      readonly indent?: unknown
      readonly allowDrop?: unknown
      readonly animated?: unknown
      readonly virtualScroll?: unknown
      readonly watchProps?: unknown
      readonly renderLabel?: unknown
      readonly renderPrefix?: unknown
      readonly renderSuffix?: unknown
      readonly onDragenter?: unknown
      readonly onDragleave?: unknown
      readonly onDragend?: unknown
      readonly onDragstart?: unknown
      readonly onDragover?: unknown
      readonly onDrop?: unknown
      readonly onUpdateCheckedKeys?: unknown
      readonly 'onUpdate:checkedKeys'?: unknown
      readonly onUpdateSelectedKeys?: unknown
      readonly 'onUpdate:selectedKeys'?: unknown
      readonly theme?: unknown
      readonly themeOverrides?: unknown
      readonly builtinThemeOverrides?: unknown
    } & {
      pattern: string
      data: TreeOptions
      multiple: boolean
      disabled: boolean
      draggable: boolean
      keyField: string
      virtualScroll: boolean
      checkable: boolean
      animated: boolean
      remote: boolean
      cascade: boolean
      indent: number
      labelField: string
      childrenField: string
      internalScrollable: boolean
      checkStrategy: CheckStrategy
      leafOnly: boolean
      defaultExpandedKeys: Key[]
      defaultExpandAll: boolean
      cancelable: boolean
      blockLine: boolean
      selectable: boolean
      defaultCheckedKeys: Key[]
      defaultSelectedKeys: Key[]
      internalUnifySelectCheck: boolean
      internalHideFilteredNode: boolean
      internalCheckboxFocusable: boolean
      internalFocusable: boolean
      expandOnDragenter: boolean
      blockNode: boolean
      allowDrop: AllowDrop
    } & {
      filter?: ((pattern: string, node: TreeOption) => boolean) | undefined
      onDragend?: MaybeArray<(e: TreeDragInfo) => void> | undefined
      onDragenter?: MaybeArray<(e: TreeDragInfo) => void> | undefined
      onDragleave?: MaybeArray<(e: TreeDragInfo) => void> | undefined
      onDragover?: MaybeArray<(e: TreeDragInfo) => void> | undefined
      onDragstart?: MaybeArray<(e: TreeDragInfo) => void> | undefined
      onDrop?: MaybeArray<(e: TreeDropInfo) => void> | undefined
      onLoad?: OnLoad | undefined
      theme?:
        | import('../../_mixins').Theme<
            'Tree',
            {
              fontSize: string
              nodeBorderRadius: string
              nodeColorHover: string
              nodeColorPressed: string
              nodeColorActive: string
              arrowColor: string
              nodeTextColor: string
              nodeTextColorDisabled: string
              loadingColor: string
              dropMarkColor: string
            },
            {
              Checkbox: import('../../_mixins').Theme<
                'Checkbox',
                {
                  fontSizeSmall: string
                  fontSizeMedium: string
                  fontSizeLarge: string
                  borderRadius: string
                  color: string
                  colorChecked: string
                  colorDisabled: string
                  colorDisabledChecked: string
                  colorTableHeader: string
                  colorTableHeaderModal: string
                  colorTableHeaderPopover: string
                  checkMarkColor: string
                  checkMarkColorDisabled: string
                  checkMarkColorDisabledChecked: string
                  border: string
                  borderDisabled: string
                  borderDisabledChecked: string
                  borderChecked: string
                  borderFocus: string
                  boxShadowFocus: string
                  textColor: string
                  textColorDisabled: string
                  sizeSmall: string
                  sizeMedium: string
                  sizeLarge: string
                  labelPadding: string
                },
                any
              >
              Scrollbar: import('../../_mixins').Theme<
                'Scrollbar',
                {
                  color: string
                  colorHover: string
                },
                any
              >
            }
          >
        | undefined
      themeOverrides?:
        | import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
              'Tree',
              {
                fontSize: string
                nodeBorderRadius: string
                nodeColorHover: string
                nodeColorPressed: string
                nodeColorActive: string
                arrowColor: string
                nodeTextColor: string
                nodeTextColorDisabled: string
                loadingColor: string
                dropMarkColor: string
              },
              {
                Checkbox: import('../../_mixins').Theme<
                  'Checkbox',
                  {
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    borderRadius: string
                    color: string
                    colorChecked: string
                    colorDisabled: string
                    colorDisabledChecked: string
                    colorTableHeader: string
                    colorTableHeaderModal: string
                    colorTableHeaderPopover: string
                    checkMarkColor: string
                    checkMarkColorDisabled: string
                    checkMarkColorDisabledChecked: string
                    border: string
                    borderDisabled: string
                    borderDisabledChecked: string
                    borderChecked: string
                    borderFocus: string
                    boxShadowFocus: string
                    textColor: string
                    textColorDisabled: string
                    sizeSmall: string
                    sizeMedium: string
                    sizeLarge: string
                    labelPadding: string
                  },
                  any
                >
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
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
              'Tree',
              {
                fontSize: string
                nodeBorderRadius: string
                nodeColorHover: string
                nodeColorPressed: string
                nodeColorActive: string
                arrowColor: string
                nodeTextColor: string
                nodeTextColorDisabled: string
                loadingColor: string
                dropMarkColor: string
              },
              {
                Checkbox: import('../../_mixins').Theme<
                  'Checkbox',
                  {
                    fontSizeSmall: string
                    fontSizeMedium: string
                    fontSizeLarge: string
                    borderRadius: string
                    color: string
                    colorChecked: string
                    colorDisabled: string
                    colorDisabledChecked: string
                    colorTableHeader: string
                    colorTableHeaderModal: string
                    colorTableHeaderPopover: string
                    checkMarkColor: string
                    checkMarkColorDisabled: string
                    checkMarkColorDisabledChecked: string
                    border: string
                    borderDisabled: string
                    borderDisabledChecked: string
                    borderChecked: string
                    borderFocus: string
                    boxShadowFocus: string
                    textColor: string
                    textColorDisabled: string
                    sizeSmall: string
                    sizeMedium: string
                    sizeLarge: string
                    labelPadding: string
                  },
                  any
                >
                Scrollbar: import('../../_mixins').Theme<
                  'Scrollbar',
                  {
                    color: string
                    colorHover: string
                  },
                  any
                >
              }
            >
          >
        | undefined
      renderLabel?:
        | (({
            option,
            checked,
            selected
          }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
        | undefined
      checkedKeys?: Key[] | undefined
      expandedKeys?: Key[] | undefined
      watchProps?:
        | (
            | 'defaultExpandedKeys'
            | 'defaultCheckedKeys'
            | 'defaultSelectedKeys'
          )[]
        | undefined
      'onUpdate:expandedKeys'?: MaybeArray<OnUpdateKeys> | undefined
      onUpdateExpandedKeys?: MaybeArray<OnUpdateKeys> | undefined
      renderPrefix?:
        | (({
            option,
            checked,
            selected
          }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
        | undefined
      renderSuffix?:
        | (({
            option,
            checked,
            selected
          }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
        | undefined
      internalScrollablePadding?: string | undefined
      internalDataTreeMate?:
        | TreeMate<TreeOption, TreeOption, TreeOption>
        | undefined
      internalDisplayTreeMate?:
        | TreeMate<TreeOption, TreeOption, TreeOption>
        | undefined
      internalHighlightKeySet?: Set<Key> | undefined
      indeterminateKeys?: Key[] | undefined
      onUpdateIndeterminateKeys?: MaybeArray<OnUpdateKeys> | undefined
      'onUpdate:indeterminateKeys'?: MaybeArray<OnUpdateKeys> | undefined
      selectedKeys?: Key[] | undefined
      onUpdateCheckedKeys?: MaybeArray<OnUpdateKeys> | undefined
      'onUpdate:checkedKeys'?: MaybeArray<OnUpdateKeys> | undefined
      onUpdateSelectedKeys?: MaybeArray<OnUpdateKeys> | undefined
      'onUpdate:selectedKeys'?: MaybeArray<OnUpdateKeys> | undefined
    }
  >,
  {
    pattern: string
    data: TreeOptions
    multiple: boolean
    disabled: boolean
    draggable: boolean
    keyField: string
    virtualScroll: boolean
    checkable: boolean
    animated: boolean
    remote: boolean
    cascade: boolean
    indent: number
    labelField: string
    childrenField: string
    internalScrollable: boolean
    checkStrategy: CheckStrategy
    leafOnly: boolean
    defaultExpandedKeys: Key[]
    defaultExpandAll: boolean
    cancelable: boolean
    blockLine: boolean
    selectable: boolean
    defaultCheckedKeys: Key[]
    defaultSelectedKeys: Key[]
    internalUnifySelectCheck: boolean
    internalHideFilteredNode: boolean
    internalCheckboxFocusable: boolean
    internalFocusable: boolean
    expandOnDragenter: boolean
    blockNode: boolean
    allowDrop: AllowDrop
  }
>
export default _default
