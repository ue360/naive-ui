'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useScroll = void 0
const seemly_1 = require('seemly')
const vue_1 = require('vue')
const _utils_1 = require('../../_utils')
const utils_1 = require('./utils')
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useScroll(
  props,
  { mainTableInstRef, mergedCurrentPageRef, bodyWidthRef, scrollPartRef }
) {
  let scrollLeft = 0
  const leftActiveFixedColKeyRef = (0, vue_1.ref)(null)
  const rightActiveFixedColKeyRef = (0, vue_1.ref)(null)
  const styleScrollXRef = (0, vue_1.computed)(() => {
    return (0, _utils_1.formatLength)(props.scrollX)
  })
  const leftFixedColumnsRef = (0, vue_1.computed)(() => {
    return props.columns.filter((column) => column.fixed === 'left')
  })
  const rightFixedColumnsRef = (0, vue_1.computed)(() => {
    return props.columns.filter((column) => column.fixed === 'right')
  })
  const fixedColumnLeftMapRef = (0, vue_1.computed)(() => {
    const columns = {}
    let left = 0
    function traverse(cols) {
      cols.forEach((col) => {
        const positionInfo = { start: left, end: 0 }
        columns[(0, utils_1.getColKey)(col)] = positionInfo
        if ('children' in col) {
          traverse(col.children)
          positionInfo.end = left
        } else {
          left += (0, utils_1.getColWidth)(col) || 0
          positionInfo.end = left
        }
      })
    }
    traverse(leftFixedColumnsRef.value)
    return columns
  })
  const fixedColumnRightMapRef = (0, vue_1.computed)(() => {
    const columns = {}
    let right = 0
    function traverse(cols) {
      cols.forEach((col) => {
        const positionInfo = { start: right, end: 0 }
        columns[(0, utils_1.getColKey)(col)] = positionInfo
        if ('children' in col) {
          traverse(col.children)
          positionInfo.end = right
        } else {
          right += (0, utils_1.getColWidth)(col) || 0
          positionInfo.end = right
        }
      })
    }
    traverse(rightFixedColumnsRef.value.reverse())
    return columns
  })
  function deriveActiveLeftFixedColumn() {
    var _a, _b
    // target is header element
    const { value: leftFixedColumns } = leftFixedColumnsRef
    let leftWidth = 0
    const { value: fixedColumnLeftMap } = fixedColumnLeftMapRef
    let leftActiveFixedColKey = null
    for (let i = 0; i < leftFixedColumns.length; ++i) {
      const key = (0, utils_1.getColKey)(leftFixedColumns[i])
      if (
        scrollLeft >
        (((_a = fixedColumnLeftMap[key]) === null || _a === void 0
          ? void 0
          : _a.start) || 0) -
          leftWidth
      ) {
        leftActiveFixedColKey = key
        leftWidth =
          ((_b = fixedColumnLeftMap[key]) === null || _b === void 0
            ? void 0
            : _b.end) || 0
      } else {
        break
      }
    }
    leftActiveFixedColKeyRef.value = leftActiveFixedColKey
  }
  function deriveActiveRightFixedColumn() {
    var _a, _b
    // target is header element
    const { value: rightFixedColumns } = rightFixedColumnsRef
    const scrollWidth = Number(props.scrollX)
    const { value: tableWidth } = bodyWidthRef
    if (tableWidth === null) return
    let rightWidth = 0
    let rightActiveFixedColKey = null
    const { value: fixedColumnRightMap } = fixedColumnRightMapRef
    for (let i = 0; i < rightFixedColumns.length; ++i) {
      const key = (0, utils_1.getColKey)(rightFixedColumns[i])
      if (
        Math.round(
          scrollLeft +
            (((_a = fixedColumnRightMap[key]) === null || _a === void 0
              ? void 0
              : _a.start) || 0) +
            tableWidth -
            rightWidth
        ) < scrollWidth
      ) {
        rightActiveFixedColKey = key
        rightWidth =
          ((_b = fixedColumnRightMap[key]) === null || _b === void 0
            ? void 0
            : _b.end) || 0
      } else {
        break
      }
    }
    rightActiveFixedColKeyRef.value = rightActiveFixedColKey
  }
  function getScrollElements() {
    const header = mainTableInstRef.value
      ? mainTableInstRef.value.getHeaderElement()
      : null
    const body = mainTableInstRef.value
      ? mainTableInstRef.value.getBodyElement()
      : null
    return {
      header,
      body
    }
  }
  function scrollMainTableBodyToTop() {
    const { body } = getScrollElements()
    if (body) {
      body.scrollTop = 0
    }
  }
  function handleTableHeaderScroll() {
    if (scrollPartRef.value === 'head') {
      ;(0, seemly_1.beforeNextFrameOnce)(syncScrollState)
    }
  }
  function handleTableBodyScroll() {
    if (scrollPartRef.value === 'body') {
      ;(0, seemly_1.beforeNextFrameOnce)(syncScrollState)
    }
  }
  function syncScrollState() {
    // We can't simply use props.scrollX to determine whether the table has
    // need to be sync since user may set column width for each column.
    // Just let it be, the scroll listener won't be triggered for a basic table.
    const { header, body } = getScrollElements()
    if (!body) return
    const { value: tableWidth } = bodyWidthRef
    if (tableWidth === null) return
    const { value: scrollPart } = scrollPartRef
    if (props.maxHeight || props.flexHeight) {
      if (!header) return
      // we need to deal with overscroll
      if (scrollPart === 'head') {
        scrollLeft = header.scrollLeft
        body.scrollLeft = scrollLeft
      } else {
        scrollLeft = body.scrollLeft
        header.scrollLeft = scrollLeft
      }
    } else {
      scrollLeft = body.scrollLeft
    }
    deriveActiveLeftFixedColumn()
    deriveActiveRightFixedColumn()
  }
  function setHeaderScrollLeft(left) {
    const { header } = getScrollElements()
    if (!header) return
    header.scrollLeft = left
    syncScrollState()
  }
  ;(0, vue_1.watch)(mergedCurrentPageRef, () => {
    scrollMainTableBodyToTop()
  })
  return {
    styleScrollXRef,
    fixedColumnLeftMapRef,
    fixedColumnRightMapRef,
    leftFixedColumnsRef,
    rightFixedColumnsRef,
    leftActiveFixedColKeyRef,
    rightActiveFixedColKeyRef,
    syncScrollState,
    handleTableBodyScroll,
    handleTableHeaderScroll,
    setHeaderScrollLeft
  }
}
exports.useScroll = useScroll
