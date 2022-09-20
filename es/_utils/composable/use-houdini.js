import { onBeforeMount } from 'vue'
let houdiniRegistered = false
export function useHoudini() {
  onBeforeMount(() => {
    var _a
    if (!houdiniRegistered) {
      houdiniRegistered = true
      if (
        (_a = window === null || window === void 0 ? void 0 : window.CSS) ===
          null || _a === void 0
          ? void 0
          : _a.registerProperty
      ) {
        CSS.registerProperty({
          name: '--color-start',
          syntax: '<color>',
          inherits: false,
          initialValue: '#0000'
        })
        CSS.registerProperty({
          name: '--color-end',
          syntax: '<color>',
          inherits: false,
          initialValue: '#0000'
        })
      }
    }
  })
}