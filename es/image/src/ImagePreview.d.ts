import { PropType } from 'vue'
export interface ImagePreviewInst {
  setThumbnailEl: (e: HTMLImageElement | null) => void
  setPreviewSrc: (src?: string) => void
  toggleShow: () => void
}
declare const _default: import('vue').DefineComponent<
  {
    showToolbar: BooleanConstructor
    onNext: PropType<() => void>
    onPrev: PropType<() => void>
    clsPrefix: {
      type: StringConstructor
      required: true
    }
  },
  {
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--icon-color': string
    }>
    setThumbnailEl: (e: HTMLImageElement | null) => void
    setPreviewSrc: (src?: string | undefined) => void
    toggleShow: () => void
    previewRef: import('vue').Ref<HTMLImageElement | null>
    previewWrapperRef: import('vue').Ref<HTMLDivElement | null>
    previewSrc: import('vue').Ref<string | undefined>
    show: import('vue').Ref<boolean>
    appear: Readonly<import('vue').Ref<boolean>>
    displayed: import('vue').Ref<boolean>
    handlePreviewMousedown: (e: MouseEvent) => void
    handlePreviewDblclick: () => void
    syncTransformOrigin: () => void
    handleAfterLeave: () => void
    handleDragStart: (e: Event) => void
    zoomIn: () => void
    zoomOut: () => void
    rotateCounterclockwise: () => void
    rotateClockwise: () => void
    handleSwitchPrev: () => void
    handleSwitchNext: () => void
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
      showToolbar?: unknown
      onNext?: unknown
      onPrev?: unknown
      clsPrefix?: unknown
    } & {
      clsPrefix: string
      showToolbar: boolean
    } & {
      onNext?: (() => void) | undefined
      onPrev?: (() => void) | undefined
    }
  >,
  {
    showToolbar: boolean
  }
>
export default _default
