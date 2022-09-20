import {
  Fragment,
  h,
  ref,
  Teleport,
  defineComponent,
  provide,
  nextTick,
  renderSlot
} from 'vue'
import { useIsMounted } from 'vooks'
import { useConfig, useTheme } from '../../_mixins'
import NLoadingBar from './LoadingBar'
const loadingBarProps = Object.assign(Object.assign({}, useTheme.props), {
  to: {
    type: [String, Object],
    default: undefined
  },
  loadingBarStyle: {
    type: Object
  }
})
export const loadingBarProviderInjectionKey = Symbol('loadingBar')
export const loadingBarApiInjectionKey = Symbol('loadingBarApi')
export default defineComponent({
  name: 'LoadingBarProvider',
  props: loadingBarProps,
  setup(props) {
    const isMountedRef = useIsMounted()
    const loadingBarRef = ref(null)
    const methods = {
      start() {
        var _a
        if (isMountedRef.value) {
          ;(_a = loadingBarRef.value) === null || _a === void 0
            ? void 0
            : _a.start()
        } else {
          void nextTick(() => {
            var _a
            ;(_a = loadingBarRef.value) === null || _a === void 0
              ? void 0
              : _a.start()
          })
        }
      },
      error() {
        var _a
        if (isMountedRef.value) {
          ;(_a = loadingBarRef.value) === null || _a === void 0
            ? void 0
            : _a.error()
        } else {
          void nextTick(() => {
            var _a
            ;(_a = loadingBarRef.value) === null || _a === void 0
              ? void 0
              : _a.error()
          })
        }
      },
      finish() {
        var _a
        if (isMountedRef.value) {
          ;(_a = loadingBarRef.value) === null || _a === void 0
            ? void 0
            : _a.finish()
        } else {
          void nextTick(() => {
            var _a
            ;(_a = loadingBarRef.value) === null || _a === void 0
              ? void 0
              : _a.finish()
          })
        }
      }
    }
    const { mergedClsPrefixRef } = useConfig(props)
    provide(loadingBarApiInjectionKey, methods)
    provide(loadingBarProviderInjectionKey, {
      props,
      mergedClsPrefixRef
    })
    return Object.assign(methods, {
      loadingBarRef
    })
  },
  render() {
    var _a
    return h(
      Fragment,
      null,
      h(
        Teleport,
        { to: (_a = this.to) !== null && _a !== void 0 ? _a : 'body' },
        h(NLoadingBar, { ref: 'loadingBarRef' })
      ),
      renderSlot(this.$slots, 'default')
    )
  }
})