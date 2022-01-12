import { h, ref, provide, defineComponent, mergeProps } from 'vue'
import { popoverBaseProps } from '../../popover/src/Popover'
import { NPopover } from '../../popover'
import NPopselectPanel, { panelPropKeys, panelProps } from './PopselectPanel'
import { omit, keep, createRefSetter } from '../../_utils'
import { useTheme } from '../../_mixins'
import { popselectLight } from '../styles'
import { popselectInjectionKey } from './interface'
const popselectProps = Object.assign(
  Object.assign(
    Object.assign(Object.assign({}, useTheme.props), popoverBaseProps),
    {
      placement: Object.assign(Object.assign({}, popoverBaseProps.placement), {
        default: 'bottom'
      }),
      trigger: {
        type: String,
        default: 'hover'
      },
      showArrow: Boolean
    }
  ),
  panelProps
)
export default defineComponent({
  name: 'Popselect',
  props: popselectProps,
  __popover__: true,
  setup(props) {
    const themeRef = useTheme(
      'Popselect',
      'Popselect',
      undefined,
      popselectLight,
      props
    )
    const popoverInstRef = ref(null)
    function syncPosition() {
      var _a
      ;(_a = popoverInstRef.value) === null || _a === void 0
        ? void 0
        : _a.syncPosition()
    }
    function setShow(value) {
      var _a
      ;(_a = popoverInstRef.value) === null || _a === void 0
        ? void 0
        : _a.setShow(value)
    }
    provide(popselectInjectionKey, {
      mergedThemeRef: themeRef,
      syncPosition,
      setShow
    })
    return {
      popoverInstRef,
      mergedTheme: themeRef
    }
  },
  render() {
    const { mergedTheme, $attrs } = this
    const popoverProps = {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: {
        padding: '0'
      },
      ref: 'popoverInstRef',
      internalRenderBody: (
        className,
        ref,
        style,
        onMouseenter,
        onMouseleave
      ) => {
        return h(
          NPopselectPanel,
          Object.assign(
            {},
            mergeProps($attrs, {
              class: className,
              style
            }),
            keep(this.$props, panelPropKeys),
            {
              ref: createRefSetter(ref),
              onMouseenter: onMouseenter,
              onMouseleave: onMouseleave
            }
          )
        )
      }
    }
    return h(
      NPopover,
      Object.assign({}, omit(this.$props, panelPropKeys), popoverProps),
      {
        trigger: this.$slots.default,
        _: 1
      }
    )
  }
})
