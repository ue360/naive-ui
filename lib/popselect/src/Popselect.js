'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          }
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const Popover_1 = require('../../popover/src/Popover')
const popover_1 = require('../../popover')
const PopselectPanel_1 = __importStar(require('./PopselectPanel'))
const _utils_1 = require('../../_utils')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const interface_1 = require('./interface')
const popselectProps = Object.assign(
  Object.assign(
    Object.assign(
      Object.assign({}, _mixins_1.useTheme.props),
      Popover_1.popoverBaseProps
    ),
    {
      placement: Object.assign(
        Object.assign({}, Popover_1.popoverBaseProps.placement),
        { default: 'bottom' }
      ),
      trigger: {
        type: String,
        default: 'hover'
      },
      showArrow: Boolean
    }
  ),
  PopselectPanel_1.panelProps
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Popselect',
  props: popselectProps,
  __popover__: true,
  setup(props) {
    const themeRef = (0, _mixins_1.useTheme)(
      'Popselect',
      'Popselect',
      undefined,
      styles_1.popselectLight,
      props
    )
    const popoverInstRef = (0, vue_1.ref)(null)
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
    ;(0, vue_1.provide)(interface_1.popselectInjectionKey, {
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
        return (0, vue_1.h)(
          PopselectPanel_1.default,
          Object.assign(
            {},
            (0, vue_1.mergeProps)($attrs, {
              class: className,
              style
            }),
            (0, _utils_1.keep)(this.$props, PopselectPanel_1.panelPropKeys),
            {
              ref: (0, _utils_1.createRefSetter)(ref),
              onMouseenter: onMouseenter,
              onMouseleave: onMouseleave
            }
          )
        )
      }
    }
    return (0, vue_1.h)(
      popover_1.NPopover,
      Object.assign(
        {},
        (0, _utils_1.omit)(this.$props, PopselectPanel_1.panelPropKeys),
        popoverProps
      ),
      {
        trigger: this.$slots.default,
        _: 1
      }
    )
  }
})