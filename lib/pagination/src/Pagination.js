'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const vue_1 = require('vue')
const vooks_1 = require('vooks')
const select_1 = require('../../select')
const input_1 = require('../../input')
const _internal_1 = require('../../_internal')
const icons_1 = require('../../_internal/icons')
const _mixins_1 = require('../../_mixins')
const styles_1 = require('../styles')
const utils_1 = require('./utils')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const _utils_1 = require('../../_utils')
const paginationProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    page: Number,
    defaultPage: {
      type: Number,
      default: 1
    },
    itemCount: Number,
    pageCount: Number,
    defaultPageCount: {
      type: Number,
      default: 1
    },
    showSizePicker: Boolean,
    pageSize: Number,
    defaultPageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10]
      }
    },
    showQuickJumper: Boolean,
    disabled: Boolean,
    pageSlot: {
      type: Number,
      default: 9
    },
    prev: Function,
    next: Function,
    prefix: Function,
    suffix: Function,
    'onUpdate:page': [Function, Array],
    onUpdatePage: [Function, Array],
    'onUpdate:pageSize': [Function, Array],
    onUpdatePageSize: [Function, Array],
    /** @deprecated */
    onPageSizeChange: [Function, Array],
    /** @deprecated */
    onChange: [Function, Array]
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'Pagination',
  props: paginationProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      ;(0, vue_1.watchEffect)(() => {
        if (props.pageCount !== undefined && props.itemCount !== undefined) {
          ;(0, _utils_1.warn)(
            'pagination',
            "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."
          )
        }
      })
    }
    const { NConfigProvider, mergedClsPrefixRef } = (0, _mixins_1.useConfig)(
      props
    )
    const themeRef = (0, _mixins_1.useTheme)(
      'Pagination',
      'Pagination',
      index_cssr_1.default,
      styles_1.paginationLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef } = (0, _mixins_1.useLocale)('Pagination')
    const selfRef = (0, vue_1.ref)(null)
    const jumperRef = (0, vue_1.ref)(null)
    const jumperValueRef = (0, vue_1.ref)('')
    const uncontrolledPageRef = (0, vue_1.ref)(props.defaultPage)
    const uncontrolledPageSizeRef = (0, vue_1.ref)(props.defaultPageSize)
    const mergedPageRef = (0, vooks_1.useMergedState)(
      (0, vue_1.toRef)(props, 'page'),
      uncontrolledPageRef
    )
    const mergedPageSizeRef = (0, vooks_1.useMergedState)(
      (0, vue_1.toRef)(props, 'pageSize'),
      uncontrolledPageSizeRef
    )
    const mergedPageCountRef = (0, vue_1.computed)(() => {
      // item count has high priority, for it can affect prefix slot rendering
      const { itemCount } = props
      if (itemCount !== undefined) {
        return Math.max(1, Math.ceil(itemCount / mergedPageSizeRef.value))
      }
      const { pageCount } = props
      if (pageCount !== undefined) return pageCount
      return 1
    })
    const showFastForwardRef = (0, vue_1.ref)(false)
    const showFastBackwardRef = (0, vue_1.ref)(false)
    const pageSizeOptionsRef = (0, vue_1.computed)(() => {
      const suffix = localeRef.value.selectionSuffix
      return props.pageSizes.map((size) => {
        if (typeof size === 'number') {
          return {
            label: `${size} / ${suffix}`,
            value: size
          }
        } else {
          return size
        }
      })
    })
    const inputSizeRef = (0, vue_1.computed)(() => {
      var _a, _b
      return (
        ((_b =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedComponentPropsRef.value) === null ||
          _a === void 0
            ? void 0
            : _a.Pagination) === null || _b === void 0
          ? void 0
          : _b.inputSize) || 'small'
      )
    })
    const selectSizeRef = (0, vue_1.computed)(() => {
      var _a, _b
      return (
        ((_b =
          (_a =
            NConfigProvider === null || NConfigProvider === void 0
              ? void 0
              : NConfigProvider.mergedComponentPropsRef.value) === null ||
          _a === void 0
            ? void 0
            : _a.Pagination) === null || _b === void 0
          ? void 0
          : _b.selectSize) || 'small'
      )
    })
    const startIndexRef = (0, vue_1.computed)(() => {
      return (mergedPageRef.value - 1) * mergedPageSizeRef.value
    })
    const endIndexRef = (0, vue_1.computed)(() => {
      const endIndex = mergedPageRef.value * mergedPageSizeRef.value - 1
      const { itemCount } = props
      if (itemCount !== undefined) {
        return endIndex > itemCount ? itemCount : endIndex
      }
      return endIndex
    })
    const disableTransitionOneTick = () => {
      void (0, vue_1.nextTick)(() => {
        var _a
        const { value: selfEl } = selfRef
        if (!selfEl) return
        selfEl.classList.add('transition-disabled')
        void ((_a = selfRef.value) === null || _a === void 0
          ? void 0
          : _a.offsetWidth)
        selfEl.classList.remove('transition-disabled')
      })
    }
    function doUpdatePage(page) {
      if (page === mergedPageRef.value) return
      const { 'onUpdate:page': _onUpdatePage, onUpdatePage, onChange } = props
      if (_onUpdatePage) (0, _utils_1.call)(_onUpdatePage, page)
      if (onUpdatePage) (0, _utils_1.call)(onUpdatePage, page)
      // deprecated
      if (onChange) (0, _utils_1.call)(onChange, page)
      uncontrolledPageRef.value = page
    }
    function doUpdatePageSize(pageSize) {
      if (pageSize === mergedPageSizeRef.value) return
      const {
        'onUpdate:pageSize': _onUpdatePageSize,
        onUpdatePageSize,
        onPageSizeChange
      } = props
      if (_onUpdatePageSize) (0, _utils_1.call)(_onUpdatePageSize, pageSize)
      if (onUpdatePageSize) (0, _utils_1.call)(onUpdatePageSize, pageSize)
      // deprecated
      if (onPageSizeChange) (0, _utils_1.call)(onPageSizeChange, pageSize)
      uncontrolledPageSizeRef.value = pageSize
      // update new page when overflows.
      // we may have different update strategy, but i've no time to impl it
      if (mergedPageCountRef.value < mergedPageRef.value) {
        doUpdatePage(mergedPageCountRef.value)
      }
    }
    function forward() {
      if (props.disabled) return
      const page = Math.min(mergedPageRef.value + 1, mergedPageCountRef.value)
      doUpdatePage(page)
    }
    function backward() {
      if (props.disabled) return
      const page = Math.max(mergedPageRef.value - 1, 1)
      doUpdatePage(page)
    }
    function fastForward() {
      if (props.disabled) return
      const page = Math.min(
        mergedPageRef.value + (props.pageSlot - 4),
        mergedPageCountRef.value
      )
      doUpdatePage(page)
    }
    function fastBackward() {
      if (props.disabled) return
      const page = Math.max(mergedPageRef.value - (props.pageSlot - 4), 1)
      doUpdatePage(page)
    }
    function handleSizePickerChange(value) {
      doUpdatePageSize(value)
    }
    function handleQuickJumperKeyUp(e) {
      var _a
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        const page = parseInt(jumperValueRef.value)
        if (
          !Number.isNaN(page) &&
          page >= 1 &&
          page <= mergedPageCountRef.value
        ) {
          doUpdatePage(page)
          jumperValueRef.value = ''
          ;(_a = jumperRef.value) === null || _a === void 0 ? void 0 : _a.blur()
        }
      }
    }
    function handlePageItemClick(pageItem) {
      if (props.disabled) return
      switch (pageItem.type) {
        case 'page':
          doUpdatePage(pageItem.label)
          break
        case 'fastBackward':
          fastBackward()
          break
        case 'fastForward':
          fastForward()
          break
      }
    }
    function handlePageItemMouseEnter(pageItem) {
      if (props.disabled) return
      switch (pageItem.type) {
        case 'fastBackward':
          showFastBackwardRef.value = true
          break
        case 'fastForward':
          showFastForwardRef.value = true
          break
        default:
          return
      }
      disableTransitionOneTick()
    }
    function handlePageItemMouseLeave(pageItem) {
      if (props.disabled) return
      switch (pageItem.type) {
        case 'fastBackward':
          showFastBackwardRef.value = false
          break
        case 'fastForward':
          showFastForwardRef.value = false
          break
        default:
          return
      }
      disableTransitionOneTick()
    }
    function handleJumperInput(value) {
      jumperValueRef.value = value
    }
    ;(0, vue_1.watchEffect)(() => {
      void mergedPageRef.value
      void mergedPageSizeRef.value
      disableTransitionOneTick()
    })
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      selfRef,
      jumperRef,
      mergedPage: mergedPageRef,
      showFastBackward: showFastBackwardRef,
      showFastForward: showFastForwardRef,
      pageItems: (0, vue_1.computed)(() =>
        (0, utils_1.pageItems)(
          mergedPageRef.value,
          mergedPageCountRef.value,
          props.pageSlot
        )
      ),
      jumperValue: jumperValueRef,
      pageSizeOptions: pageSizeOptionsRef,
      mergedPageSize: mergedPageSizeRef,
      inputSize: inputSizeRef,
      selectSize: selectSizeRef,
      mergedTheme: themeRef,
      mergedPageCount: mergedPageCountRef,
      startIndex: startIndexRef,
      endIndex: endIndexRef,
      handleJumperInput,
      handleBackwardClick: backward,
      handleForwardClick: forward,
      handlePageItemClick,
      handleSizePickerChange,
      handleQuickJumperKeyUp,
      handlePageItemMouseEnter,
      handlePageItemMouseLeave,
      cssVars: (0, vue_1.computed)(() => {
        const {
          self: {
            itemSize,
            itemPadding,
            itemMargin,
            inputWidth,
            selectWidth,
            inputMargin,
            selectMargin,
            buttonBorder,
            buttonBorderHover,
            buttonBorderPressed,
            buttonIconColor,
            buttonIconColorHover,
            buttonIconColorPressed,
            buttonIconSize,
            itemTextColor,
            itemTextColorHover,
            itemTextColorPressed,
            itemTextColorActive,
            itemTextColorDisabled,
            itemColor,
            itemColorHover,
            itemColorPressed,
            itemColorActive,
            itemColorActiveHover,
            itemColorDisabled,
            itemBorder,
            itemBorderHover,
            itemBorderPressed,
            itemBorderActive,
            itemBorderDisabled,
            itemBorderRadius,
            itemFontSize,
            jumperFontSize,
            jumperTextColor,
            jumperTextColorDisabled,
            prefixMargin,
            suffixMargin,
            buttonColor,
            buttonColorHover,
            buttonColorPressed
          },
          common: { cubicBezierEaseInOut }
        } = themeRef.value
        return {
          '--prefix-margin': prefixMargin,
          '--suffix-margin': suffixMargin,
          '--item-font-size': itemFontSize,
          '--select-width': selectWidth,
          '--select-margin': selectMargin,
          '--input-width': inputWidth,
          '--input-margin': inputMargin,
          '--item-size': itemSize,
          '--item-text-color': itemTextColor,
          '--item-text-color-disabled': itemTextColorDisabled,
          '--item-text-color-hover': itemTextColorHover,
          '--item-text-color-active': itemTextColorActive,
          '--item-text-color-pressed': itemTextColorPressed,
          '--item-color': itemColor,
          '--item-color-hover': itemColorHover,
          '--item-color-disabled': itemColorDisabled,
          '--item-color-active': itemColorActive,
          '--item-color-active-hover': itemColorActiveHover,
          '--item-color-pressed': itemColorPressed,
          '--item-border': itemBorder,
          '--item-border-hover': itemBorderHover,
          '--item-border-disabled': itemBorderDisabled,
          '--item-border-active': itemBorderActive,
          '--item-border-pressed': itemBorderPressed,
          '--item-padding': itemPadding,
          '--item-border-radius': itemBorderRadius,
          '--bezier': cubicBezierEaseInOut,
          '--jumper-font-size': jumperFontSize,
          '--jumper-text-color': jumperTextColor,
          '--jumper-text-color-disabled': jumperTextColorDisabled,
          '--item-margin': itemMargin,
          '--button-icon-size': buttonIconSize,
          '--button-icon-color': buttonIconColor,
          '--button-icon-color-hover': buttonIconColorHover,
          '--button-icon-color-pressed': buttonIconColorPressed,
          '--button-color-hover': buttonColorHover,
          '--button-color': buttonColor,
          '--button-color-pressed': buttonColorPressed,
          '--button-border': buttonBorder,
          '--button-border-hover': buttonBorderHover,
          '--button-border-pressed': buttonBorderPressed
        }
      })
    }
  },
  render() {
    // it's ok to expand all prop here since no slots' deps
    const {
      $slots,
      mergedClsPrefix,
      disabled,
      cssVars,
      mergedPage,
      mergedPageCount,
      pageItems,
      showFastBackward,
      showFastForward,
      showSizePicker,
      showQuickJumper,
      mergedTheme,
      locale,
      inputSize,
      selectSize,
      mergedPageSize,
      pageSizeOptions,
      jumperValue,
      prev,
      next,
      prefix,
      suffix,
      handleJumperInput,
      handleSizePickerChange,
      handleBackwardClick,
      handlePageItemClick,
      handlePageItemMouseEnter,
      handlePageItemMouseLeave,
      handleForwardClick,
      handleQuickJumperKeyUp
    } = this
    const renderPrev = prev || $slots.prev
    const renderNext = next || $slots.next
    return (0, vue_1.h)(
      'div',
      {
        ref: 'selfRef',
        class: [
          `${mergedClsPrefix}-pagination`,
          disabled && `${mergedClsPrefix}-pagination--disabled`
        ],
        style: cssVars
      },
      prefix || $slots.prefix
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-pagination-prefix` },
            ($slots.prefix ? $slots.prefix : prefix)({
              page: mergedPage,
              pageSize: mergedPageSize,
              pageCount: mergedPageCount,
              startIndex: this.startIndex,
              endIndex: this.endIndex,
              itemCount: this.itemCount
            })
          )
        : null,
      (0, vue_1.h)(
        'div',
        {
          class: [
            `${mergedClsPrefix}-pagination-item`,
            !renderPrev && `${mergedClsPrefix}-pagination-item--button`,
            (mergedPage <= 1 || mergedPage > mergedPageCount || disabled) &&
              `${mergedClsPrefix}-pagination-item--disabled`
          ],
          onClick: handleBackwardClick
        },
        renderPrev
          ? renderPrev({
              page: mergedPage,
              pageSize: mergedPageSize,
              pageCount: mergedPageCount,
              startIndex: this.startIndex,
              endIndex: this.endIndex,
              itemCount: this.itemCount
            })
          : (0, vue_1.h)(
              _internal_1.NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => (0, vue_1.h)(icons_1.BackwardIcon, null) }
            )
      ),
      pageItems.map((pageItem, index) => {
        return (0, vue_1.h)(
          'div',
          {
            key: index,
            class: [
              `${mergedClsPrefix}-pagination-item`,
              {
                [`${mergedClsPrefix}-pagination-item--active`]: pageItem.active,
                [`${mergedClsPrefix}-pagination-item--disabled`]: disabled
              }
            ],
            onClick: () => handlePageItemClick(pageItem),
            onMouseenter: () => handlePageItemMouseEnter(pageItem),
            onMouseleave: () => handlePageItemMouseLeave(pageItem)
          },
          pageItem.type === 'page' ? pageItem.label : null,
          pageItem.type === 'fastBackward'
            ? showFastBackward
              ? (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  {
                    default: () => (0, vue_1.h)(icons_1.FastBackwardIcon, null)
                  }
                )
              : (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => (0, vue_1.h)(icons_1.MoreIcon, null) }
                )
            : null,
          pageItem.type === 'fastForward'
            ? showFastForward
              ? (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => (0, vue_1.h)(icons_1.FastForwardIcon, null) }
                )
              : (0, vue_1.h)(
                  _internal_1.NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => (0, vue_1.h)(icons_1.MoreIcon, null) }
                )
            : null
        )
      }),
      (0, vue_1.h)(
        'div',
        {
          class: [
            `${mergedClsPrefix}-pagination-item`,
            !renderNext && `${mergedClsPrefix}-pagination-item--button`,
            {
              [`${mergedClsPrefix}-pagination-item--disabled`]:
                mergedPage < 1 || mergedPage >= mergedPageCount || disabled
            }
          ],
          onClick: handleForwardClick
        },
        renderNext
          ? renderNext({
              page: mergedPage,
              pageSize: mergedPageSize,
              pageCount: mergedPageCount,
              itemCount: this.itemCount,
              startIndex: this.startIndex,
              endIndex: this.endIndex
            })
          : (0, vue_1.h)(
              _internal_1.NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => (0, vue_1.h)(icons_1.ForwardIcon, null) }
            )
      ),
      showSizePicker
        ? (0, vue_1.h)(select_1.NSelect, {
            size: selectSize,
            placeholder: '',
            options: pageSizeOptions,
            value: mergedPageSize,
            disabled: disabled,
            theme: mergedTheme.peers.Select,
            themeOverrides: mergedTheme.peerOverrides.Select,
            onUpdateValue: handleSizePickerChange
          })
        : null,
      showQuickJumper
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-pagination-quick-jumper` },
            locale.goto,
            (0, vue_1.h)(input_1.NInput, {
              ref: 'jumperRef',
              value: jumperValue,
              onUpdateValue: handleJumperInput,
              size: inputSize,
              placeholder: '',
              disabled: disabled,
              theme: mergedTheme.peers.Input,
              themeOverrides: mergedTheme.peerOverrides.Input,
              onKeyup: handleQuickJumperKeyUp
            })
          )
        : null,
      suffix || $slots.suffix
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-pagination-suffix` },
            ($slots.suffix ? $slots.suffix : suffix)({
              page: mergedPage,
              pageSize: mergedPageSize,
              pageCount: mergedPageCount,
              startIndex: this.startIndex,
              endIndex: this.endIndex,
              itemCount: this.itemCount
            })
          )
        : null
    )
  }
})
