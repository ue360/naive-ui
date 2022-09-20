'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const vooks_1 = require('vooks')
const icons_1 = require('../../_internal/icons')
const _internal_1 = require('../../_internal')
const _utils_1 = require('../../_utils')
const Collapse_1 = require('./Collapse')
const CollapseItemContent_1 = __importDefault(require('./CollapseItemContent'))
const collapseItemProps = {
  title: String,
  name: [String, Number],
  displayDirective: String
}
exports.default = (0, vue_1.defineComponent)({
  name: 'CollapseItem',
  props: collapseItemProps,
  setup(props) {
    const randomName = (0, seemly_1.createId)()
    const mergedNameRef = (0, vooks_1.useMemo)(() => {
      var _a
      return (_a = props.name) !== null && _a !== void 0 ? _a : randomName
    })
    const NCollapse = (0, vue_1.inject)(Collapse_1.collapseInjectionKey)
    if (!NCollapse) {
      ;(0, _utils_1.throwError)(
        'collapse-item',
        '`n-collapse-item` must be placed inside `n-collapse`.'
      )
    }
    const {
      expandedNamesRef,
      props: collapseProps,
      mergedClsPrefixRef,
      slots: collapseSlots
    } = NCollapse
    const collapsedRef = (0, vue_1.computed)(() => {
      const { value: expandedNames } = expandedNamesRef
      if (Array.isArray(expandedNames)) {
        const { value: name } = mergedNameRef
        return !~expandedNames.findIndex(
          (expandedName) => expandedName === name
        )
      } else if (expandedNames) {
        const { value: name } = mergedNameRef
        return name !== expandedNames
      }
      return true
    })
    return {
      collapseSlots,
      randomName,
      mergedClsPrefix: mergedClsPrefixRef,
      collapsed: collapsedRef,
      mergedDisplayDirective: (0, vue_1.computed)(() => {
        const { displayDirective } = props
        if (displayDirective) {
          return displayDirective
        } else {
          return collapseProps.displayDirective
        }
      }),
      arrowPlacement: (0, vue_1.computed)(() => {
        return collapseProps.arrowPlacement
      }),
      handleClick(e) {
        if (NCollapse) {
          NCollapse.toggleItem(collapsedRef.value, mergedNameRef.value, e)
        }
      }
    }
  },
  render() {
    const {
      collapseSlots,
      $slots,
      arrowPlacement,
      collapsed,
      title,
      mergedDisplayDirective,
      mergedClsPrefix
    } = this
    const headerNode = (0, vue_1.renderSlot)(
      $slots,
      'header',
      undefined,
      () => [title]
    )
    const headerExtraSlot =
      $slots['header-extra'] || collapseSlots['header-extra']
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-collapse-item`,
          `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`,
          !collapsed && `${mergedClsPrefix}-collapse-item--active`
        ]
      },
      (0, vue_1.h)(
        'div',
        {
          class: [
            `${mergedClsPrefix}-collapse-item__header`,
            !collapsed && `${mergedClsPrefix}-collapse-item__header--active`
          ]
        },
        (0, vue_1.h)(
          'div',
          {
            class: `${mergedClsPrefix}-collapse-item__header-main`,
            onClick: this.handleClick
          },
          arrowPlacement === 'right' && headerNode,
          (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-collapse-item-arrow` },
            (0, vue_1.renderSlot)(
              $slots.arrow
                ? $slots
                : collapseSlots.arrow
                ? collapseSlots
                : $slots,
              'arrow',
              { collapsed: collapsed },
              () => {
                var _a
                return [
                  (0, vue_1.h)(
                    _internal_1.NBaseIcon,
                    { clsPrefix: mergedClsPrefix },
                    {
                      default:
                        (_a = collapseSlots.expandIcon) !== null &&
                        _a !== void 0
                          ? _a
                          : () => (0, vue_1.h)(icons_1.ChevronRightIcon, null)
                    }
                  )
                ]
              }
            )
          ),
          arrowPlacement === 'left' && headerNode
        ),
        headerExtraSlot &&
          (0, vue_1.h)(
            'div',
            {
              class: `${mergedClsPrefix}-collapse-item__header-extra`,
              onClick: this.handleClick
            },
            { default: headerExtraSlot }
          )
      ),
      (0, vue_1.h)(
        CollapseItemContent_1.default,
        {
          clsPrefix: mergedClsPrefix,
          displayDirective: mergedDisplayDirective,
          show: !collapsed
        },
        $slots
      )
    )
  }
})