'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
exports.default = (0, vue_1.defineComponent)({
  name: 'NTreeSwitcher',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    expanded: Boolean,
    hide: Boolean,
    loading: Boolean,
    onClick: Function
  },
  render() {
    const { clsPrefix } = this
    return (0, vue_1.h)(
      'span',
      {
        'data-switcher': true,
        class: [
          `${clsPrefix}-tree-node-switcher`,
          {
            [`${clsPrefix}-tree-node-switcher--expanded`]: this.expanded,
            [`${clsPrefix}-tree-node-switcher--hide`]: this.hide
          }
        ],
        onClick: this.onClick
      },
      (0, vue_1.h)(
        'div',
        { class: `${clsPrefix}-tree-node-switcher__icon` },
        (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
          default: () =>
            !this.loading
              ? (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: clsPrefix, key: 'switcher' },
                  { default: () => (0, vue_1.h)(icons_1.SwitcherIcon, null) }
                )
              : (0, vue_1.h)(_internal_1.NBaseLoading, {
                  clsPrefix: clsPrefix,
                  key: 'loading',
                  radius: 85,
                  strokeWidth: 20
                })
        })
      )
    )
  }
})