'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.collapseInjectionKey = void 0
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const collapseProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    defaultExpandedNames: {
      type: [Array, String],
      default: null
    },
    expandedNames: [Array, String],
    arrowPlacement: {
      type: String,
      default: 'left'
    },
    accordion: {
      type: Boolean,
      default: false
    },
    displayDirective: {
      type: String,
      default: 'if'
    },
    onItemHeaderClick: [Function, Array],
    'onUpdate:expandedNames': [Function, Array],
    onUpdateExpandedNames: [Function, Array],
    // deprecated
    onExpandedNamesChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'collapse',
            '`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead.'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
exports.collapseInjectionKey = Symbol('collapse')
exports.default = (0, vue_1.defineComponent)({
  name: 'Collapse',
  props: collapseProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const uncontrolledExpandedNamesRef = (0, vue_1.ref)(
      props.defaultExpandedNames
    )
    const controlledExpandedNamesRef = (0, vue_1.computed)(
      () => props.expandedNames
    )
    const mergedExpandedNamesRef = (0, vooks_1.useMergedState)(
      controlledExpandedNamesRef,
      uncontrolledExpandedNamesRef
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'Collapse',
      'Collapse',
      index_cssr_1.default,
      styles_1.collapseLight,
      props,
      mergedClsPrefixRef
    )
    function doUpdateExpandedNames(names) {
      const {
        'onUpdate:expandedNames': _onUpdateExpandedNames,
        onUpdateExpandedNames,
        onExpandedNamesChange
      } = props
      if (onUpdateExpandedNames) {
        ;(0, _utils_1.call)(onUpdateExpandedNames, names)
      }
      if (_onUpdateExpandedNames) {
        ;(0, _utils_1.call)(_onUpdateExpandedNames, names)
      }
      if (onExpandedNamesChange) {
        ;(0, _utils_1.call)(onExpandedNamesChange, names)
      }
      uncontrolledExpandedNamesRef.value = names
    }
    function doItemHeaderClick(info) {
      const { onItemHeaderClick } = props
      if (onItemHeaderClick) {
        ;(0, _utils_1.call)(onItemHeaderClick, info)
      }
    }
    function toggleItem(collapse, name, event) {
      const { accordion } = props
      const { value: expandedNames } = mergedExpandedNamesRef
      if (accordion) {
        if (collapse) {
          doUpdateExpandedNames([name])
          doItemHeaderClick({ name, expanded: true, event })
        } else {
          doUpdateExpandedNames([])
          doItemHeaderClick({ name, expanded: false, event })
        }
      } else {
        if (!Array.isArray(expandedNames)) {
          doUpdateExpandedNames([name])
          doItemHeaderClick({ name, expanded: true, event })
        } else {
          const activeNames = expandedNames.slice()
          const index = activeNames.findIndex(
            (activeName) => name === activeName
          )
          if (~index) {
            activeNames.splice(index, 1)
            doUpdateExpandedNames(activeNames)
            doItemHeaderClick({ name, expanded: false, event })
          } else {
            activeNames.push(name)
            doUpdateExpandedNames(activeNames)
            doItemHeaderClick({ name, expanded: true, event })
          }
        }
      }
    }
    ;(0, vue_1.provide)(exports.collapseInjectionKey, {
      props,
      mergedClsPrefixRef,
      expandedNamesRef: mergedExpandedNamesRef,
      slots,
      toggleItem
    })
    return {
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: (0, vue_1.computed)(() => {
        const {
          common: { cubicBezierEaseInOut },
          self: {
            titleFontWeight,
            dividerColor,
            titleTextColor,
            textColor,
            arrowColor,
            fontSize,
            titleFontSize
          }
        } = themeRef.value
        return {
          '--font-size': fontSize,
          '--bezier': cubicBezierEaseInOut,
          '--text-color': textColor,
          '--divider-color': dividerColor,
          '--title-font-size': titleFontSize,
          '--title-text-color': titleTextColor,
          '--title-font-weight': titleFontWeight,
          '--arrow-color': arrowColor
        }
      })
    }
  },
  render() {
    return (0, vue_1.h)(
      'div',
      { class: `${this.mergedClsPrefix}-collapse`, style: this.cssVars },
      this.$slots
    )
  }
})