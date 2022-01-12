'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.dataTableProps = void 0
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const _mixins_1 = require('../../_mixins')
const _internal_1 = require('../../_internal')
const empty_1 = require('../../empty')
const pagination_1 = require('../../pagination')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const MainTable_1 = __importDefault(require('./MainTable'))
const use_check_1 = require('./use-check')
const use_table_data_1 = require('./use-table-data')
const use_scroll_1 = require('./use-scroll')
const interface_1 = require('./interface')
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
const use_group_header_1 = require('./use-group-header')
const use_expand_1 = require('./use-expand')
exports.dataTableProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    pagination: {
      type: [Object, Boolean],
      default: false
    },
    minHeight: [Number, String],
    maxHeight: [Number, String],
    // Use any type as row data to make prop data acceptable
    columns: {
      type: Array,
      default: () => []
    },
    rowClassName: [String, Function],
    rowProps: Function,
    rowKey: Function,
    summary: [Function],
    data: {
      type: Array,
      default: () => []
    },
    loading: Boolean,
    bordered: {
      type: Boolean,
      default: undefined
    },
    bottomBordered: {
      type: Boolean,
      default: undefined
    },
    striped: Boolean,
    scrollX: [Number, String],
    defaultCheckedRowKeys: {
      type: Array,
      default: () => []
    },
    checkedRowKeys: Array,
    singleLine: {
      type: Boolean,
      default: true
    },
    singleColumn: Boolean,
    size: {
      type: String,
      default: 'medium'
    },
    remote: Boolean,
    defaultExpandedRowKeys: {
      type: Array,
      default: []
    },
    expandedRowKeys: Array,
    virtualScroll: Boolean,
    tableLayout: {
      type: String,
      default: 'auto'
    },
    cascade: {
      type: Boolean,
      default: true
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    indent: {
      type: Number,
      default: 16
    },
    flexHeight: Boolean,
    'onUpdate:page': [Function, Array],
    onUpdatePage: [Function, Array],
    'onUpdate:pageSize': [Function, Array],
    onUpdatePageSize: [Function, Array],
    'onUpdate:sorter': [Function, Array],
    onUpdateSorter: [Function, Array],
    'onUpdate:filters': [Function, Array],
    onUpdateFilters: [Function, Array],
    'onUpdate:checkedRowKeys': [Function, Array],
    onUpdateCheckedRowKeys: [Function, Array],
    'onUpdate:expandedRowKeys': [Function, Array],
    onUpdateExpandedRowKeys: [Function, Array],
    // deprecated
    onPageChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'data-table',
            '`on-page-change` is deprecated, please use `on-update:page` instead.'
          )
        }
        return true
      },
      default: undefined
    },
    onPageSizeChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'data-table',
            '`on-page-size-change` is deprecated, please use `on-update:page-size` instead.'
          )
        }
        return true
      },
      default: undefined
    },
    onSorterChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'data-table',
            '`on-sorter-change` is deprecated, please use `on-update:sorter` instead.'
          )
        }
        return true
      },
      default: undefined
    },
    onFiltersChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'data-table',
            '`on-filters-change` is deprecated, please use `on-update:filters` instead.'
          )
        }
        return true
      },
      default: undefined
    },
    onCheckedRowKeysChange: {
      type: [Function, Array],
      validator: () => {
        if (process.env.NODE_ENV !== 'production') {
          ;(0, _utils_1.warn)(
            'data-table',
            '`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.'
          )
        }
        return true
      },
      default: undefined
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'DataTable',
  alias: ['AdvancedTable'],
  props: exports.dataTableProps,
  setup(props) {
    const { mergedBorderedRef, mergedClsPrefixRef } = (0, _mixins_1.useConfig)(
      props
    )
    const mergedBottomBorderedRef = (0, vue_1.computed)(() => {
      const { bottomBordered } = props
      // do not add bottom bordered class if bordered is true
      // since border is displayed on wrapper
      if (mergedBorderedRef.value) return false
      if (bottomBordered !== undefined) return bottomBordered
      return true
    })
    const themeRef = (0, _mixins_1.useTheme)(
      'DataTable',
      'DataTable',
      index_cssr_1.default,
      styles_1.dataTableLight,
      props,
      mergedClsPrefixRef
    )
    const bodyWidthRef = (0, vue_1.ref)(null)
    const scrollPartRef = (0, vue_1.ref)('body')
    const mainTableInstRef = (0, vue_1.ref)(null)
    const { rowsRef, colsRef, dataRelatedColsRef, hasEllipsisRef } = (0,
    use_group_header_1.useGroupHeader)(props)
    const {
      treeMateRef,
      mergedCurrentPageRef,
      paginatedDataRef,
      rawPaginatedDataRef,
      selectionColumnRef,
      hoverKeyRef,
      mergedPaginationRef,
      mergedFilterStateRef,
      mergedSortStateRef,
      firstContentfulColIndexRef,
      doUpdateFilters,
      deriveNextSorter,
      filter,
      filters,
      clearFilter,
      clearFilters,
      clearSorter,
      page,
      sort
    } = (0, use_table_data_1.useTableData)(props, { dataRelatedColsRef })
    const {
      doCheckAll,
      doUncheckAll,
      doCheck,
      doUncheck,
      headerCheckboxDisabledRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedCheckedRowKeySetRef,
      mergedInderminateRowKeySetRef
    } = (0, use_check_1.useCheck)(props, {
      selectionColumnRef,
      treeMateRef,
      paginatedDataRef
    })
    const {
      mergedExpandedRowKeysRef,
      renderExpandRef,
      doUpdateExpandedRowKeys
    } = (0, use_expand_1.useExpand)(props)
    const {
      handleTableBodyScroll,
      handleTableHeaderScroll,
      syncScrollState,
      setHeaderScrollLeft,
      leftActiveFixedColKeyRef,
      rightActiveFixedColKeyRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef
    } = (0, use_scroll_1.useScroll)(props, {
      scrollPartRef,
      bodyWidthRef,
      mainTableInstRef,
      mergedCurrentPageRef
    })
    const { localeRef } = (0, _mixins_1.useLocale)('DataTable')
    const mergedTableLayoutRef = (0, vue_1.computed)(() => {
      // Layout
      // virtual |descrete header | ellpisis => fixed
      //    = virtual | maxHeight | ellpisis => fixed
      if (
        props.virtualScroll ||
        props.flexHeight ||
        props.maxHeight !== undefined ||
        hasEllipsisRef.value
      ) {
        return 'fixed'
      }
      return props.tableLayout
    })
    ;(0, vue_1.provide)(interface_1.dataTableInjectionKey, {
      indentRef: (0, vue_1.toRef)(props, 'indent'),
      firstContentfulColIndexRef,
      bodyWidthRef,
      componentId: (0, seemly_1.createId)(),
      hoverKeyRef,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      scrollXRef: (0, vue_1.computed)(() => props.scrollX),
      rowsRef,
      colsRef,
      paginatedDataRef,
      leftActiveFixedColKeyRef,
      rightActiveFixedColKeyRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedSortStateRef,
      mergedFilterStateRef,
      loadingRef: (0, vue_1.toRef)(props, 'loading'),
      rowClassNameRef: (0, vue_1.toRef)(props, 'rowClassName'),
      mergedCheckedRowKeySetRef,
      mergedExpandedRowKeysRef,
      mergedInderminateRowKeySetRef,
      localeRef,
      scrollPartRef,
      rowKeyRef: (0, vue_1.toRef)(props, 'rowKey'),
      renderExpandRef,
      summaryRef: (0, vue_1.toRef)(props, 'summary'),
      virtualScrollRef: (0, vue_1.toRef)(props, 'virtualScroll'),
      rowPropsRef: (0, vue_1.toRef)(props, 'rowProps'),
      stripedRef: (0, vue_1.toRef)(props, 'striped'),
      checkOptionsRef: (0, vue_1.computed)(() => {
        const { value: selectionColumn } = selectionColumnRef
        return selectionColumn === null || selectionColumn === void 0
          ? void 0
          : selectionColumn.options
      }),
      rawPaginatedDataRef,
      hasChildrenRef: (0, vue_1.computed)(() => {
        return treeMateRef.value.maxLevel > 0
      }),
      filterMenuCssVarsRef: (0, vue_1.computed)(() => {
        const {
          self: { actionDividerColor, actionPadding, actionButtonMargin }
        } = themeRef.value
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {
          '--action-padding': actionPadding,
          '--action-button-margin': actionButtonMargin,
          '--action-divider-color': actionDividerColor
        }
      }),
      mergedTableLayoutRef,
      maxHeightRef: (0, vue_1.toRef)(props, 'maxHeight'),
      minHeightRef: (0, vue_1.toRef)(props, 'minHeight'),
      flexHeightRef: (0, vue_1.toRef)(props, 'flexHeight'),
      headerCheckboxDisabledRef,
      syncScrollState,
      doUpdateFilters,
      deriveNextSorter,
      doCheck,
      doUncheck,
      doCheckAll,
      doUncheckAll,
      doUpdateExpandedRowKeys,
      handleTableHeaderScroll,
      handleTableBodyScroll,
      setHeaderScrollLeft
    })
    const exposedMethods = {
      filter,
      filters,
      clearFilters,
      clearSorter,
      page,
      sort,
      clearFilter
    }
    return Object.assign(
      Object.assign(
        {
          mainTableInstRef,
          mergedClsPrefix: mergedClsPrefixRef,
          mergedTheme: themeRef,
          paginatedData: paginatedDataRef,
          mergedBordered: mergedBorderedRef,
          mergedBottomBordered: mergedBottomBorderedRef,
          mergedPagination: mergedPaginationRef
        },
        exposedMethods
      ),
      {
        cssVars: (0, vue_1.computed)(() => {
          const { size } = props
          const {
            common: { cubicBezierEaseInOut },
            self: {
              borderColor,
              tdColorHover,
              thColor,
              thColorHover,
              tdColor,
              tdTextColor,
              thTextColor,
              thFontWeight,
              thButtonColorHover,
              thIconColor,
              thIconColorActive,
              filterSize,
              borderRadius,
              lineHeight,
              tdColorModal,
              thColorModal,
              borderColorModal,
              thColorHoverModal,
              tdColorHoverModal,
              borderColorPopover,
              thColorPopover,
              tdColorPopover,
              tdColorHoverPopover,
              thColorHoverPopover,
              paginationMargin,
              emptyPadding,
              boxShadowAfter,
              boxShadowBefore,
              sorterSize,
              loadingColor,
              loadingSize,
              opacityLoading,
              tdColorStriped,
              tdColorStripedModal,
              tdColorStripedPopover,
              [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
              [(0, _utils_1.createKey)('thPadding', size)]: thPadding,
              [(0, _utils_1.createKey)('tdPadding', size)]: tdPadding
            }
          } = themeRef.value
          return {
            '--font-size': fontSize,
            '--th-padding': thPadding,
            '--td-padding': tdPadding,
            '--bezier': cubicBezierEaseInOut,
            '--border-radius': borderRadius,
            '--line-height': lineHeight,
            '--border-color': borderColor,
            '--border-color-modal': borderColorModal,
            '--border-color-popover': borderColorPopover,
            '--th-color': thColor,
            '--th-color-hover': thColorHover,
            '--th-color-modal': thColorModal,
            '--th-color-hover-modal': thColorHoverModal,
            '--th-color-popover': thColorPopover,
            '--th-color-hover-popover': thColorHoverPopover,
            '--td-color': tdColor,
            '--td-color-hover': tdColorHover,
            '--td-color-modal': tdColorModal,
            '--td-color-hover-modal': tdColorHoverModal,
            '--td-color-popover': tdColorPopover,
            '--td-color-hover-popover': tdColorHoverPopover,
            '--th-text-color': thTextColor,
            '--td-text-color': tdTextColor,
            '--th-font-weight': thFontWeight,
            '--th-button-color-hover': thButtonColorHover,
            '--th-icon-color': thIconColor,
            '--th-icon-color-active': thIconColorActive,
            '--filter-size': filterSize,
            '--pagination-margin': paginationMargin,
            '--empty-padding': emptyPadding,
            '--box-shadow-before': boxShadowBefore,
            '--box-shadow-after': boxShadowAfter,
            '--sorter-size': sorterSize,
            '--loading-size': loadingSize,
            '--loading-color': loadingColor,
            '--opacity-loading': opacityLoading,
            '--td-color-striped': tdColorStriped,
            '--td-color-striped-modal': tdColorStripedModal,
            '--td-color-striped-popover': tdColorStripedPopover
          }
        })
      }
    )
  },
  render() {
    const { mergedClsPrefix } = this
    return (0, vue_1.h)(
      'div',
      {
        class: [
          `${mergedClsPrefix}-data-table`,
          {
            [`${mergedClsPrefix}-data-table--bordered`]: this.mergedBordered,
            [`${mergedClsPrefix}-data-table--bottom-bordered`]:
              this.mergedBottomBordered,
            [`${mergedClsPrefix}-data-table--single-line`]: this.singleLine,
            [`${mergedClsPrefix}-data-table--single-column`]: this.singleColumn,
            [`${mergedClsPrefix}-data-table--loading`]: this.loading,
            [`${mergedClsPrefix}-data-table--flex-height`]: this.flexHeight
          }
        ],
        style: this.cssVars
      },
      (0, vue_1.h)(
        'div',
        { class: `${mergedClsPrefix}-data-table-wrapper` },
        (0, vue_1.h)(
          MainTable_1.default,
          { ref: 'mainTableInstRef' },
          {
            default: () =>
              this.paginatedData.length === 0
                ? (0, vue_1.h)(
                    'div',
                    {
                      class: [
                        `${mergedClsPrefix}-data-table-empty`,
                        this.loading &&
                          `${mergedClsPrefix}-data-table-empty--hide`
                      ]
                    },
                    (0, vue_1.renderSlot)(
                      this.$slots,
                      'empty',
                      undefined,
                      () => [
                        (0, vue_1.h)(empty_1.NEmpty, {
                          theme: this.mergedTheme.peers.Empty,
                          themeOverrides: this.mergedTheme.peerOverrides.Empty
                        })
                      ]
                    )
                  )
                : null
          }
        )
      ),
      this.pagination
        ? (0, vue_1.h)(
            'div',
            { class: `${mergedClsPrefix}-data-table__pagination` },
            (0, vue_1.h)(
              pagination_1.NPagination,
              Object.assign(
                {
                  theme: this.mergedTheme.peers.Pagination,
                  themeOverrides: this.mergedTheme.peerOverrides.Pagination,
                  disabled: this.loading
                },
                this.mergedPagination
              )
            )
          )
        : null,
      (0, vue_1.h)(
        vue_1.Transition,
        { name: 'fade-in-scale-up-transition' },
        {
          default: () => {
            return this.loading
              ? (0, vue_1.h)(_internal_1.NBaseLoading, {
                  clsPrefix: mergedClsPrefix,
                  strokeWidth: 20
                })
              : null
          }
        }
      )
    )
  }
})
