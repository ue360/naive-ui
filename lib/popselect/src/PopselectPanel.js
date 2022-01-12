'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.panelPropKeys = exports.panelProps = void 0
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const vue_1 = require('vue')
const treemate_1 = require('treemate')
const utils_1 = require('../../select/src/utils')
const _mixins_1 = require('../../_mixins')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const interface_1 = require('./interface')
exports.panelProps = {
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
      ;(0, _utils_1.warn)(
        'popselect',
        '`on-change` is deprecated, please use `on-update:value` instead.'
      )
      return true
    },
    default: undefined
  }
}
exports.panelPropKeys = (0, _utils_1.keysOf)(exports.panelProps)
exports.default = (0, vue_1.defineComponent)({
  name: 'PopselectPanel',
  props: exports.panelProps,
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NPopselect = (0, vue_1.inject)(interface_1.popselectInjectionKey)
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const treeMateRef = (0, vue_1.computed)(() => {
      return (0, treemate_1.createTreeMate)(props.options, utils_1.tmOptions)
    })
    function doUpdateValue(value, option) {
      const {
        onUpdateValue,
        'onUpdate:value': _onUpdateValue,
        onChange
      } = props
      if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value, option)
      if (_onUpdateValue) {
        ;(0, _utils_1.call)(_onUpdateValue, value, option)
      }
      if (onChange) (0, _utils_1.call)(onChange, value, option)
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
      void (0, vue_1.nextTick)(() => {
        NPopselect.syncPosition()
      })
    }
    ;(0, vue_1.watch)((0, vue_1.toRef)(props, 'options'), () => {
      void (0, vue_1.nextTick)(() => {
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
    return (0, vue_1.h)(_internal_1.NInternalSelectMenu, {
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
