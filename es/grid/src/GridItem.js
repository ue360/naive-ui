import { h, defineComponent, inject, renderSlot, getCurrentInstance } from 'vue'
import { pxfy } from 'seemly'
import { gridInjectionKey } from './Grid'
import { keysOf } from '../../_utils'
export const defaultSpan = 1
export const gridItemProps = {
  span: {
    type: [Number, String],
    default: defaultSpan
  },
  offset: {
    type: [Number, String],
    default: 0
  },
  suffix: Boolean,
  // private props
  privateOffset: Number,
  privateSpan: Number,
  privateColStart: Number,
  privateShow: {
    type: Boolean,
    default: true
  }
}
export const gridItemPropKeys = keysOf(gridItemProps)
export default defineComponent({
  __GRID_ITEM__: true,
  name: 'GridItem',
  alias: ['Gi'],
  props: gridItemProps,
  setup() {
    const {
      xGapRef,
      itemStyleRef,
      overflowRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(gridInjectionKey)
    const self = getCurrentInstance()
    return {
      overflow: overflowRef,
      itemStyle: itemStyleRef,
      deriveStyle: () => {
        // Here is quite a hack, I hope there is a better way to solve it
        const {
          privateSpan = defaultSpan,
          privateShow = true,
          privateColStart = undefined,
          privateOffset = 0
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        } = self.vnode.props
        const { value: xGap } = xGapRef
        const mergedXGap = pxfy(xGap || 0)
        return {
          display: !privateShow ? 'none' : '',
          gridColumn: `${
            privateColStart !== null && privateColStart !== void 0
              ? privateColStart
              : `span ${privateSpan}`
          } / span ${privateSpan}`,
          marginLeft: privateOffset
            ? `calc((100% - (${privateSpan} - 1) * ${mergedXGap}) / ${privateSpan} * ${privateOffset} + ${mergedXGap} * ${privateOffset})`
            : ''
        }
      }
    }
  },
  render() {
    return h(
      'div',
      { style: [this.itemStyle, this.deriveStyle()] },
      renderSlot(this.$slots, 'default', { overflow: this.overflow })
    )
  }
})