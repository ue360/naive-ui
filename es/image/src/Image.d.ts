import { PropType, ImgHTMLAttributes } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
export interface ImageInst {
  click: () => void
}
declare const imageProps: {
  alt: StringConstructor
  height: PropType<string | number>
  imgProps: PropType<ImgHTMLAttributes>
  objectFit: {
    type: PropType<'fill' | 'none' | 'contain' | 'cover' | 'scale-down'>
    default: string
  }
  previewSrc: StringConstructor
  fallbackSrc: StringConstructor
  width: PropType<string | number>
  src: StringConstructor
  showToolbar: {
    type: BooleanConstructor
    default: boolean
  }
  previewDisabled: BooleanConstructor
  loadDescription: StringConstructor
  onError: PropType<(e: Event) => void>
  onLoad: PropType<(e: Event) => void>
}
export declare type ImageProps = ExtractPublicPropTypes<typeof imageProps>
declare const _default: import('vue').DefineComponent<
  {
    alt: StringConstructor
    height: PropType<string | number>
    imgProps: PropType<ImgHTMLAttributes>
    objectFit: {
      type: PropType<'fill' | 'none' | 'contain' | 'cover' | 'scale-down'>
      default: string
    }
    previewSrc: StringConstructor
    fallbackSrc: StringConstructor
    width: PropType<string | number>
    src: StringConstructor
    showToolbar: {
      type: BooleanConstructor
      default: boolean
    }
    previewDisabled: BooleanConstructor
    loadDescription: StringConstructor
    onError: PropType<(e: Event) => void>
    onLoad: PropType<(e: Event) => void>
  },
  {
    click: () => void
    mergedClsPrefix:
      | import('vue').Ref<string>
      | import('vue').ComputedRef<string>
    groupId: string | undefined
    previewInstRef: import('vue').Ref<{
      setThumbnailEl: (e: HTMLImageElement | null) => void
      setPreviewSrc: (src?: string | undefined) => void
      toggleShow: () => void
    } | null>
    imageRef: import('vue').Ref<HTMLImageElement | null>
    imgProps: import('vue').Ref<ImgHTMLAttributes | undefined>
    showError: import('vue').Ref<boolean>
    mergedOnError: (e: Event) => void
    mergedOnLoad: (e: Event) => void
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
      alt?: unknown
      height?: unknown
      imgProps?: unknown
      objectFit?: unknown
      previewSrc?: unknown
      fallbackSrc?: unknown
      width?: unknown
      src?: unknown
      showToolbar?: unknown
      previewDisabled?: unknown
      loadDescription?: unknown
      onError?: unknown
      onLoad?: unknown
    } & {
      objectFit: 'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
      showToolbar: boolean
      previewDisabled: boolean
    } & {
      onError?: ((e: Event) => void) | undefined
      height?: string | number | undefined
      width?: string | number | undefined
      onLoad?: ((e: Event) => void) | undefined
      alt?: string | undefined
      src?: string | undefined
      fallbackSrc?: string | undefined
      previewSrc?: string | undefined
      imgProps?: ImgHTMLAttributes | undefined
      loadDescription?: string | undefined
    }
  >,
  {
    objectFit: 'fill' | 'none' | 'contain' | 'cover' | 'scale-down'
    showToolbar: boolean
    previewDisabled: boolean
  }
>
export default _default
