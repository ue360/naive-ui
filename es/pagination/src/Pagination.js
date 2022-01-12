/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  h,
  nextTick,
  computed,
  ref,
  toRef,
  defineComponent,
  watchEffect
} from 'vue'
import { useMergedState } from 'vooks'
import { NSelect } from '../../select'
import { NInput } from '../../input'
import { NBaseIcon } from '../../_internal'
import {
  FastForwardIcon,
  FastBackwardIcon,
  BackwardIcon,
  ForwardIcon,
  MoreIcon
} from '../../_internal/icons'
import { useConfig, useLocale, useTheme } from '../../_mixins'
import { paginationLight } from '../styles'
import { pageItems } from './utils'
import style from './styles/index.cssr'
import { call, warn } from '../../_utils'
const paginationProps = Object.assign(Object.assign({}, useTheme.props), {
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
})
export default defineComponent({
  name: 'Pagination',
  props: paginationProps,
  setup(props) {
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(() => {
        if (props.pageCount !== undefined && props.itemCount !== undefined) {
          warn(
            'pagination',
            "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."
          )
        }
      })
    }
    const { NConfigProvider, mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Pagination',
      'Pagination',
      style,
      paginationLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef } = useLocale('Pagination')
    const selfRef = ref(null)
    const jumperRef = ref(null)
    const jumperValueRef = ref('')
    const uncontrolledPageRef = ref(props.defaultPage)
    const uncontrolledPageSizeRef = ref(props.defaultPageSize)
    const mergedPageRef = useMergedState(
      toRef(props, 'page'),
      uncontrolledPageRef
    )
    const mergedPageSizeRef = useMergedState(
      toRef(props, 'pageSize'),
      uncontrolledPageSizeRef
    )
    const mergedPageCountRef = computed(() => {
      // item count has high priority, for it can affect prefix slot rendering
      const { itemCount } = props
      if (itemCount !== undefined) {
        return Math.max(1, Math.ceil(itemCount / mergedPageSizeRef.value))
      }
      const { pageCount } = props
      if (pageCount !== undefined) return pageCount
      return 1
    })
    const showFastForwardRef = ref(false)
    const showFastBackwardRef = ref(false)
    const pageSizeOptionsRef = computed(() => {
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
    const inputSizeRef = computed(() => {
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
    const selectSizeRef = computed(() => {
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
    const startIndexRef = computed(() => {
      return (mergedPageRef.value - 1) * mergedPageSizeRef.value
    })
    const endIndexRef = computed(() => {
      const endIndex = mergedPageRef.value * mergedPageSizeRef.value - 1
      const { itemCount } = props
      if (itemCount !== undefined) {
        return endIndex > itemCount ? itemCount : endIndex
      }
      return endIndex
    })
    const disableTransitionOneTick = () => {
      void nextTick(() => {
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
      if (_onUpdatePage) call(_onUpdatePage, page)
      if (onUpdatePage) call(onUpdatePage, page)
      // deprecated
      if (onChange) call(onChange, page)
      uncontrolledPageRef.value = page
    }
    function doUpdatePageSize(pageSize) {
      if (pageSize === mergedPageSizeRef.value) return
      const {
        'onUpdate:pageSize': _onUpdatePageSize,
        onUpdatePageSize,
        onPageSizeChange
      } = props
      if (_onUpdatePageSize) call(_onUpdatePageSize, pageSize)
      if (onUpdatePageSize) call(onUpdatePageSize, pageSize)
      // deprecated
      if (onPageSizeChange) call(onPageSizeChange, pageSize)
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
    watchEffect(() => {
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
      pageItems: computed(() =>
        pageItems(mergedPageRef.value, mergedPageCountRef.value, props.pageSlot)
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
      cssVars: computed(() => {
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
    return h(
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
        ? h(
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
      h(
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
          : h(
              NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => h(BackwardIcon, null) }
            )
      ),
      pageItems.map((pageItem, index) => {
        return h(
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
              ? h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => h(FastBackwardIcon, null) }
                )
              : h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => h(MoreIcon, null) }
                )
            : null,
          pageItem.type === 'fastForward'
            ? showFastForward
              ? h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => h(FastForwardIcon, null) }
                )
              : h(
                  NBaseIcon,
                  { clsPrefix: mergedClsPrefix },
                  { default: () => h(MoreIcon, null) }
                )
            : null
        )
      }),
      h(
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
          : h(
              NBaseIcon,
              { clsPrefix: mergedClsPrefix },
              { default: () => h(ForwardIcon, null) }
            )
      ),
      showSizePicker
        ? h(NSelect, {
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
        ? h(
            'div',
            { class: `${mergedClsPrefix}-pagination-quick-jumper` },
            locale.goto,
            h(NInput, {
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
        ? h(
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
