import { PropType } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
declare const timelineItemProps: {
  time: PropType<string | number>
  title: StringConstructor
  content: StringConstructor
  color: StringConstructor
  type: {
    type: PropType<'default' | 'error' | 'info' | 'success' | 'warning'>
    default: string
  }
}
export declare type TimelineItemProps = ExtractPublicPropTypes<
  typeof timelineItemProps
>
declare const _default: import('vue').DefineComponent<
  {
    time: PropType<string | number>
    title: StringConstructor
    content: StringConstructor
    color: StringConstructor
    type: {
      type: PropType<'default' | 'error' | 'info' | 'success' | 'warning'>
      default: string
    }
  },
  {
    mergedClsPrefix: import('vue').Ref<string>
    cssVars: import('vue').ComputedRef<{
      '--bezier': string
      '--circle-border': string
      '--icon-color': string
      '--content-font-size': string
      '--content-text-color': string
      '--line-color': string
      '--meta-text-color': string
      '--title-font-size': string
      '--title-font-weight': string
      '--title-margin': string | number
      '--title-text-color': string
      '--icon-size': string
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
      time?: unknown
      title?: unknown
      content?: unknown
      color?: unknown
      type?: unknown
    } & {
      type: 'default' | 'error' | 'info' | 'success' | 'warning'
    } & {
      content?: string | undefined
      color?: string | undefined
      time?: string | number | undefined
      title?: string | undefined
    }
  >,
  {
    type: 'default' | 'error' | 'info' | 'success' | 'warning'
  }
>
export default _default
