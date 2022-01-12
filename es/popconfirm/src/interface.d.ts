import { InjectionKey, Ref } from 'vue'
import type { MergedTheme } from '../../_mixins'
import type { PopconfirmTheme } from '../styles'
export interface PopconfirmInjection {
  mergedThemeRef: Ref<MergedTheme<PopconfirmTheme>>
  mergedClsPrefixRef: Ref<string>
}
export declare const popconfirmInjectionKey: InjectionKey<PopconfirmInjection>
