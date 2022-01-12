/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  h,
  computed,
  defineComponent,
  inject,
  toRef,
  watch,
  nextTick
} from 'vue'
import { createTreeMate } from 'treemate'
import { tmOptions } from '../../select/src/utils'
import { useConfig } from '../../_mixins'
import { NInternalSelectMenu } from '../../_internal'
import { call, keysOf, warn } from '../../_utils'
import { popselectInjectionKey } from './interface'
export const panelProps = {
  multiple: Boolean,
  value: {
    type: [String, Number, Array],
    default: null
  },
  cancelable: Boolean,
  width: [Number, String],
  options: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: 'medium'
  },
  scrollable: Boolean,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  onMouseenter: Function,
  onMouseleave: Function,
  renderLabel: Function,
  // deprecated
  onChange: {
    type: [Function, Array],
    validator: () => {
      warn(
        'popselect',
        '`on-change` is deprecated, please use `on-update:value` instead.'
      )
      return true
    },
    default: undefined
  }
}
export const panelPropKeys = keysOf(panelProps)
export default defineComponent({
  name: 'PopselectPanel',
  props: panelProps,
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NPopselect = inject(popselectInjectionKey)
    const { mergedClsPrefixRef } = useConfig(props)
    const treeMateRef = computed(() => {
      return createTreeMate(props.options, tmOptions)
    })
    function doUpdateValue(value, option) {
      const {
        onUpdateValue,
        'onUpdate:value': _onUpdateValue,
        onChange
      } = props
      if (onUpdateValue) call(onUpdateValue, value, option)
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option)
      }
      if (onChange) call(onChange, value, option)
    }
    function handleToggle(tmNode) {
      toggle(tmNode.key)
    }
    function toggle(value) {
      const {
        value: { getNode }
      } = treeMateRef
      if (props.multiple) {
        if (Array.isArray(props.value)) {
          const newValue = []
          const newOptions = []
          let shouldAddValue = true
          props.value.forEach((v) => {
            if (v === value) {
              shouldAddValue = false
              return
            }
            const tmNode = getNode(v)
            if (tmNode) {
              newValue.push(tmNode.key)
              newOptions.push(tmNode.rawNode)
            }
          })
          if (shouldAddValue) {
            newValue.push(value)
            newOptions.push(getNode(value).rawNode)
          }
          doUpdateValue(newValue, newOptions)
        } else {
          const tmNode = getNode(value)
          if (tmNode) {
            doUpdateValue([value], [tmNode.rawNode])
          }
        }
      } else {
        if (props.value === value && props.cancelable) {
          doUpdateValue(null, null)
        } else {
          const tmNode = getNode(value)
          if (tmNode) {
            doUpdateValue(value, tmNode.rawNode)
          }
          NPopselect.setShow(false)
        }
      }
      void nextTick(() => {
        NPopselect.syncPosition()
      })
    }
    watch(toRef(props, 'options'), () => {
      void nextTick(() => {
        NPopselect.syncPosition()
      })
    })
    return {
      mergedTheme: NPopselect.mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      treeMate: treeMateRef,
      handleToggle
    }
  },
  render() {
    return h(NInternalSelectMenu, {
      clsPrefix: this.mergedClsPrefix,
      theme: this.mergedTheme.peers.InternalSelectMenu,
      themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
      multiple: this.multiple,
      treeMate: this.treeMate,
      size: this.size,
      value: this.value,
      width: this.width,
      virtualScroll: false,
      scrollable: this.scrollable,
      renderLabel: this.renderLabel,
      onToggle: this.handleToggle,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseenter
    })
  }
})
