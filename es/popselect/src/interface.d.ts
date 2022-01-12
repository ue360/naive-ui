import { Ref, InjectionKey } from 'vue'
import type { MergedTheme } from '../../_mixins'
import type { PopselectTheme } from '../styles'
export declare type PopselectSize = 'small' | 'medium' | 'large' | 'huge'
export interface PopselectInjection {
  mergedThemeRef: Ref<MergedTheme<PopselectTheme>>
  setShow: (value: boolean) => void
  syncPosition: () => void
}
export declare const popselectInjectionKey: InjectionKey<PopselectInjection>
