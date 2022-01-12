import { Ref, ComponentPublicInstance, InjectionKey } from 'vue'
import type { MergedTheme } from '../../_mixins'
import type { ModalTheme } from '../styles'
export declare type ModalBodyInjection = Ref<
  HTMLElement | ComponentPublicInstance | null
> | null
export declare const modalBodyInjectionKey: InjectionKey<ModalBodyInjection>
export interface ModalInjection {
  getMousePosition: () => {
    x: number
    y: number
  } | null
  mergedClsPrefixRef: Ref<string>
  mergedThemeRef: Ref<MergedTheme<ModalTheme>>
  isMountedRef: Ref<boolean>
  appearRef: Ref<boolean | undefined>
  transformOriginRef: Ref<'mouse' | 'center'>
}
export declare const modalInjectionKey: InjectionKey<ModalInjection>
