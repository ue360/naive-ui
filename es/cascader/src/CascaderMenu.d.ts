import { PropType } from 'vue'
import { FollowerPlacement } from 'vueuc'
import { CascaderSubmenuInstance, MenuModel, Value } from './interface'
declare const _default: import('vue').DefineComponent<
  {
    value: PropType<Value | null>
    placement: {
      type: PropType<FollowerPlacement>
      default: string
    }
    show: BooleanConstructor
    menuModel: {
      type: PropType<MenuModel>
      required: true
    }
    loading: BooleanConstructor
    onFocus: {
      type: PropType<(e: FocusEvent) => void>
      required: true
    }
    onBlur: {
      type: PropType<(e: FocusEvent) => void>
      required: true
    }
    onKeyup: {
      type: PropType<(e: KeyboardEvent) => void>
      required: true
    }
    onMousedown: {
      type: PropType<(e: MouseEvent) => void>
      required: true
    }
    onTabout: {
      type: PropType<() => void>
      required: true
    }
  },
  {
    scroll: (depth: number, index: number, elSize: number) => void
    showErrorMessage: (label: string) => void
    isMounted: import('vue').Ref<boolean>
    mergedClsPrefix: import('vue').Ref<string>
    selfElRef: import('vue').Ref<HTMLElement | null>
    submenuInstRefs: CascaderSubmenuInstance[]
    maskInstRef: import('vue').Ref<{
      showOnce: (message: string, duration?: number | undefined) => void
    } | null>
    handleFocusin: (e: FocusEvent) => void
    handleFocusout: (e: FocusEvent) => void
    handleClickOutside: (e: MouseEvent) => void
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
      value?: unknown
      placement?: unknown
      show?: unknown
      menuModel?: unknown
      loading?: unknown
      onFocus?: unknown
      onBlur?: unknown
      onKeyup?: unknown
      onMousedown?: unknown
      onTabout?: unknown
    } & {
      show: boolean
      onFocus: (e: FocusEvent) => void
      onBlur: (e: FocusEvent) => void
      onKeyup: (e: KeyboardEvent) => void
      onMousedown: (e: MouseEvent) => void
      loading: boolean
      placement: FollowerPlacement
      menuModel: MenuModel
      onTabout: () => void
    } & {
      value?: Value | null | undefined
    }
  >,
  {
    show: boolean
    loading: boolean
    placement: FollowerPlacement
  }
>
export default _default