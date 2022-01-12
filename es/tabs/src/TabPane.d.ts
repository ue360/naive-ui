import { PropType, VNodeChild, VNode } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
export declare const tabPaneProps: {
  /** @deprecated */
  readonly label: {
    readonly type: PropType<
      | string
      | number
      | VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => VNodeChild)
    >
    readonly default: undefined
    readonly validator: () => boolean
  }
  readonly tab: PropType<
    | string
    | number
    | VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >
    | (() => VNodeChild)
  >
  readonly name: {
    readonly type: PropType<string | number>
    readonly required: true
  }
  readonly disabled: BooleanConstructor
  readonly displayDirective: {
    readonly type: PropType<'show' | 'if' | 'show:lazy'>
    readonly default: 'if'
  }
  readonly closable: {
    readonly type: PropType<boolean | undefined>
    readonly default: undefined
  }
}
export declare type TabPaneProps = ExtractPublicPropTypes<typeof tabPaneProps>
declare const _default: import('vue').DefineComponent<
  {
    /** @deprecated */
    readonly label: {
      readonly type: PropType<
        | string
        | number
        | VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => VNodeChild)
      >
      readonly default: undefined
      readonly validator: () => boolean
    }
    readonly tab: PropType<
      | string
      | number
      | VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => VNodeChild)
    >
    readonly name: {
      readonly type: PropType<string | number>
      readonly required: true
    }
    readonly disabled: BooleanConstructor
    readonly displayDirective: {
      readonly type: PropType<'show' | 'if' | 'show:lazy'>
      readonly default: 'if'
    }
    readonly closable: {
      readonly type: PropType<boolean | undefined>
      readonly default: undefined
    }
  },
  {
    style: import('vue').Ref<string | import('vue').CSSProperties | undefined>
    class: import('vue').Ref<string | undefined>
    mergedClsPrefix: import('vue').Ref<string>
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
      readonly label?: unknown
      readonly tab?: unknown
      readonly name?: unknown
      readonly disabled?: unknown
      readonly displayDirective?: unknown
      readonly closable?: unknown
    } & {
      name: string | number
      disabled: boolean
      displayDirective: 'show' | 'if' | 'show:lazy'
    } & {
      label?:
        | string
        | number
        | VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => VNodeChild)
        | undefined
      tab?:
        | string
        | number
        | VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => VNodeChild)
        | undefined
      closable?: boolean | undefined
    }
  >,
  {
    label:
      | string
      | number
      | VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => VNodeChild)
    disabled: boolean
    closable: boolean | undefined
    displayDirective: 'show' | 'if' | 'show:lazy'
  }
>
export default _default
