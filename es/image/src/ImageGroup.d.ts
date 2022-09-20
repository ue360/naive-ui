import { InjectionKey, Ref } from 'vue'
import type { ImagePreviewInst } from './ImagePreview'
import { ExtractPublicPropTypes } from '../../_utils'
export declare const imageGroupInjectionKey: InjectionKey<
  ImagePreviewInst & {
    groupId: string
    mergedClsPrefixRef: Ref<string>
  }
>
declare const imageGroupProps: {
  showToolbar: {
    type: BooleanConstructor
    default: boolean
  }
}
export declare type ImageGroupProps = ExtractPublicPropTypes<
  typeof imageGroupProps
>
declare const _default: import('vue').DefineComponent<
  {
    showToolbar: {
      type: BooleanConstructor
      default: boolean
    }
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    previewInstRef: Ref<{
      setThumbnailEl: (e: HTMLImageElement | null) => void
      setPreviewSrc: (src?: string | undefined) => void
      toggleShow: () => void
    } | null>
    next: () => void
    prev: () => void
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
    } & {
      showToolbar: boolean
    } & {}
  >,
  {
    showToolbar: boolean
  }
>
export default _default