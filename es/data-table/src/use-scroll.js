import { beforeNextFrameOnce } from 'seemly'
import { computed, watch, ref } from 'vue'
import { formatLength } from '../../_utils'
import { getColWidth, getColKey } from './utils'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useScroll(
  props,
  { mainTableInstRef, mergedCurrentPageRef, bodyWidthRef, scrollPartRef }
) {
  let scrollLeft = 0
  const leftActiveFixedColKeyRef = ref(null)
  const rightActiveFixedColKeyRef = ref(null)
  const styleScrollXRef = computed(() => {
    return formatLength(props.scrollX)
  })
  const leftFixedColumnsRef = computed(() => {
    return props.columns.filter((column) => column.fixed === 'left')
  })
  const rightFixedColumnsRef = computed(() => {
    return props.columns.filter((column) => column.fixed === 'right')
  })
  const fixedColumnLeftMapRef = computed(() => {
    const columns = {}
    let left = 0
    function traverse(cols) {
      cols.forEach((col) => {
        const positionInfo = { start: left, end: 0 }
        columns[getColKey(col)] = positionInfo
        if ('children' in col) {
          traverse(col.children)
          positionInfo.end = left
        } else {
          left += getColWidth(col) || 0
          positionInfo.end = left
        }
      })
    }
    traverse(leftFixedColumnsRef.value)
    return columns
  })
  const fixedColumnRightMapRef = computed(() => {
    const columns = {}
    let right = 0
    function traverse(cols) {
      cols.forEach((col) => {
        const positionInfo = { start: right, end: 0 }
        columns[getColKey(col)] = positionInfo
        if ('children' in col) {
          traverse(col.children)
          positionInfo.end = right
        } else {
          right += getColWidth(col) || 0
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
      const key = getColKey(leftFixedColumns[i])
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
      const key = getColKey(rightFixedColumns[i])
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
      beforeNextFrameOnce(syncScrollState)
    }
  }
  function handleTableBodyScroll() {
    if (scrollPartRef.value === 'body') {
      beforeNextFrameOnce(syncScrollState)
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
  watch(mergedCurrentPageRef, () => {
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
