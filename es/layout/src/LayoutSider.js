import { h, defineComponent, computed, ref, toRef, inject, provide } from 'vue'
import { useMergedState } from 'vooks'
import { useConfig, useTheme } from '../../_mixins'
import { formatLength, call, warn } from '../../_utils'
import { NScrollbar } from '../../_internal'
import { layoutLight } from '../styles'
import style from './styles/layout-sider.cssr'
import ToggleButton from './ToggleButton'
import ToggleBar from './ToggleBar'
import { layoutSiderInjectionKey, positionProp } from './interface'
import { layoutInjectionKey } from './Layout'
const layoutSiderProps = {
  position: positionProp,
  bordered: Boolean,
  collapsedWidth: {
    type: Number,
    default: 48
  },
  width: {
    type: [Number, String],
    default: 272
  },
  contentStyle: {
    type: [String, Object],
    default: ''
  },
  collapseMode: {
    type: String,
    default: 'transform'
  },
  collapsed: {
    type: Boolean,
    default: undefined
  },
  defaultCollapsed: Boolean,
  showCollapsedContent: {
    type: Boolean,
    default: true
  },
  showTrigger: {
    type: [Boolean, String],
    default: false
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  scrollbarProps: Object,
  triggerStyle: [String, Object],
  collapsedTriggerStyle: [String, Object],
  'onUpdate:collapsed': [Function, Array],
  onUpdateCollapsed: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  // deprecated
  onExpand: [Function, Array],
  onCollapse: [Function, Array],
  onScroll: Function
}
export default defineComponent({
  name: 'LayoutSider',
  props: Object.assign(Object.assign({}, useTheme.props), layoutSiderProps),
  setup(props) {
    const layoutProps = inject(layoutInjectionKey)
    if (process.env.NODE_ENV !== 'production') {
      if (!layoutProps) {
        warn(
          'layout-sider',
          'Layout sider is not allowed to be put outside layout.'
        )
      } else {
        if (!layoutProps.hasSider) {
          warn(
            'layout-sider',
            "You are putting `n-layout-sider` in a `n-layout` but haven't set `has-sider` on the `n-layout`."
          )
        }
      }
    }
    const scrollableElRef = ref(null)
    const scrollbarInstRef = ref(null)
    const styleMaxWidthRef = computed(() => {
      return formatLength(
        mergedCollapsedRef.value ? props.collapsedWidth : props.width
      )
    })
    const scrollContainerStyleRef = computed(() => {
      if (props.collapseMode !== 'transform') return {}
      return {
        minWidth: formatLength(props.width)
      }
    })
    const siderPlacementRef = computed(() => {
      return layoutProps ? layoutProps.siderPlacement : 'left'
    })
    const uncontrolledCollapsedRef = ref(props.defaultCollapsed)
    const mergedCollapsedRef = useMergedState(
      toRef(props, 'collapsed'),
      uncontrolledCollapsedRef
    )
    function scrollTo(options, y) {
      if (props.nativeScrollbar) {
        const { value: scrollableEl } = scrollableElRef
        if (scrollableEl) {
          if (y === undefined) {
            scrollableEl.scrollTo(options)
          } else {
            scrollableEl.scrollTo(options, y)
          }
        }
      } else {
        const { value: scrollbarInst } = scrollbarInstRef
        if (scrollbarInst) {
          scrollbarInst.scrollTo(options, y)
        }
      }
    }
    function handleTriggerClick() {
      const {
        'onUpdate:collapsed': _onUpdateCollapsed,
        onUpdateCollapsed,
        // deprecated
        onExpand,
        onCollapse
      } = props
      const { value: collapsed } = mergedCollapsedRef
      if (onUpdateCollapsed) {
        call(onUpdateCollapsed, !collapsed)
      }
      if (_onUpdateCollapsed) {
        call(_onUpdateCollapsed, !collapsed)
      }
      uncontrolledCollapsedRef.value = !collapsed
      if (collapsed) {
        if (onExpand) call(onExpand)
      } else {
        if (onCollapse) call(onCollapse)
      }
    }
    provide(layoutSiderInjectionKey, {
      collapsedRef: mergedCollapsedRef,
      collapseModeRef: toRef(props, 'collapseMode')
    })
    const { mergedClsPrefixRef } = useConfig(props)
    const themeRef = useTheme(
      'Layout',
      'LayoutSider',
      style,
      layoutLight,
      props,
      mergedClsPrefixRef
    )
    function handleTransitionend(e) {
      var _a, _b
      if (e.propertyName === 'max-width') {
        if (mergedCollapsedRef.value) {
          ;(_a = props.onAfterLeave) === null || _a === void 0
            ? void 0
            : _a.call(props)
        } else {
          ;(_b = props.onAfterEnter) === null || _b === void 0
            ? void 0
            : _b.call(props)
        }
      }
    }
    const exposedMethods = {
      scrollTo
    }
    return Object.assign(
      {
        scrollableElRef,
        scrollbarInstRef,
        mergedClsPrefix: mergedClsPrefixRef,
        mergedTheme: themeRef,
        styleMaxWidth: styleMaxWidthRef,
        mergedCollapsed: mergedCollapsedRef,
        scrollContainerStyle: scrollContainerStyleRef,
        siderPlacement: siderPlacementRef,
        handleTransitionend,
        handleTriggerClick,
        cssVars: computed(() => {
          const {
            common: { cubicBezierEaseInOut },
            self
          } = themeRef.value
          const {
            siderToggleButtonColor,
            siderToggleButtonBorder,
            siderToggleBarColor,
            siderToggleBarColorHover
          } = self
          const vars = {
            '--bezier': cubicBezierEaseInOut,
            '--toggle-button-color': siderToggleButtonColor,
            '--toggle-button-border': siderToggleButtonBorder,
            '--toggle-bar-color': siderToggleBarColor,
            '--toggle-bar-color-hover': siderToggleBarColorHover
          }
          if (props.inverted) {
            vars['--color'] = self.siderColorInverted
            vars['--text-color'] = self.textColorInverted
            vars['--border-color'] = self.siderBorderColorInverted
            vars['--toggle-button-icon-color'] =
              self.siderToggleButtonIconColorInverted
            vars.__invertScrollbar = self.__invertScrollbar
          } else {
            vars['--color'] = self.siderColor
            vars['--text-color'] = self.textColor
            vars['--border-color'] = self.siderBorderColor
            vars['--toggle-button-icon-color'] = self.siderToggleButtonIconColor
          }
          return vars
        })
      },
      exposedMethods
    )
  },
  render() {
    const { mergedClsPrefix, mergedCollapsed, showTrigger } = this
    return h(
      'aside',
      {
        class: [
          `${mergedClsPrefix}-layout-sider`,
          `${mergedClsPrefix}-layout-sider--${this.position}-positioned`,
          `${mergedClsPrefix}-layout-sider--${this.siderPlacement}-placement`,
          this.bordered && `${mergedClsPrefix}-layout-sider--bordered`,
          mergedCollapsed && `${mergedClsPrefix}-layout-sider--collapsed`,
          (!mergedCollapsed || this.showCollapsedContent) &&
            `${mergedClsPrefix}-layout-sider--show-content`
        ],
        onTransitionend: this.handleTransitionend,
        style: [
          this.cssVars,
          {
            maxWidth: this.styleMaxWidth,
            width: formatLength(this.width)
          }
        ]
      },
      !this.nativeScrollbar
        ? h(
            NScrollbar,
            Object.assign({}, this.scrollbarProps, {
              onScroll: this.onScroll,
              ref: 'scrollbarInstRef',
              style: this.scrollContainerStyle,
              contentStyle: this.contentStyle,
              theme: this.mergedTheme.peers.Scrollbar,
              themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
              // here is a hack, since in light theme the scrollbar color is dark,
              // we need to invert it in light color...
              builtinThemeOverrides:
                this.inverted && this.cssVars.__invertScrollbar === 'true'
                  ? {
                      colorHover: 'rgba(255, 255, 255, .4)',
                      color: 'rgba(255, 255, 255, .3)'
                    }
                  : undefined
            }),
            this.$slots
          )
        : h(
            'div',
            {
              class: `${mergedClsPrefix}-layout-sider-scroll-container`,
              onScroll: this.onScroll,
              style: [
                this.scrollContainerStyle,
                this.contentStyle,
                {
                  overflow: 'auto'
                }
              ],
              ref: 'scrollableElRef'
            },
            this.$slots
          ),
      showTrigger
        ? showTrigger === 'bar'
          ? h(ToggleBar, {
              clsPrefix: mergedClsPrefix,
              style: mergedCollapsed
                ? this.collapsedTriggerStyle
                : this.triggerStyle,
              onClick: this.handleTriggerClick
            })
          : h(ToggleButton, {
              clsPrefix: mergedClsPrefix,
              style: mergedCollapsed
                ? this.collapsedTriggerStyle
                : this.triggerStyle,
              onClick: this.handleTriggerClick
            })
        : null
    )
  }
})