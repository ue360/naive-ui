import {
  h,
  Transition,
  defineComponent,
  ref,
  computed,
  watchEffect,
  provide,
  inject,
  withDirectives,
  vShow,
  mergeProps
} from 'vue'
import { NScrollbar } from '../../_internal'
import { popoverBodyInjectionKey } from '../../popover/src/interface'
import { modalBodyInjectionKey } from '../../modal/src/interface'
import { drawerBodyInjectionKey, drawerInjectionKey } from './interface'
export default defineComponent({
  name: 'NDrawerContent',
  inheritAttrs: false,
  props: {
    show: {
      type: Boolean,
      default: undefined
    },
    displayDirective: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      required: true
    },
    contentStyle: [Object, String],
    nativeScrollbar: {
      type: Boolean,
      required: true
    },
    scrollbarProps: Object
  },
  setup(props) {
    const displayedRef = ref(props.show)
    const bodyRef = ref(null) // used for detached content
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const NDrawer = inject(drawerInjectionKey)
    watchEffect(() => {
      if (props.show) displayedRef.value = true
    })
    function handleAfterLeave() {
      displayedRef.value = false
    }
    provide(drawerBodyInjectionKey, bodyRef)
    provide(popoverBodyInjectionKey, null)
    provide(modalBodyInjectionKey, null)
    return {
      bodyRef,
      mergedClsPrefix: NDrawer.mergedClsPrefixRef,
      isMounted: NDrawer.isMountedRef,
      mergedTheme: NDrawer.mergedThemeRef,
      displayed: displayedRef,
      transitionName: computed(() => {
        return {
          right: 'slide-in-from-right-transition',
          left: 'slide-in-from-left-transition',
          top: 'slide-in-from-top-transition',
          bottom: 'slide-in-from-bottom-transition'
        }[props.placement]
      }),
      handleAfterLeave
    }
  },
  render() {
    const { $slots, mergedClsPrefix } = this
    return this.displayDirective === 'show' || this.displayed || this.show
      ? withDirectives(
          h(
            'div',
            null,
            h(
              Transition,
              {
                name: this.transitionName,
                appear: this.isMounted,
                onAfterLeave: this.handleAfterLeave
              },
              {
                default: () =>
                  withDirectives(
                    h(
                      'div',
                      mergeProps(this.$attrs, {
                        ref: 'bodyRef',
                        class: [
                          `${mergedClsPrefix}-drawer`,
                          `${mergedClsPrefix}-drawer--${this.placement}-placement`,
                          this.nativeScrollbar &&
                            `${mergedClsPrefix}-drawer--native-scrollbar`
                        ]
                      }),
                      [
                        this.nativeScrollbar
                          ? h(
                              'div',
                              {
                                class: `${mergedClsPrefix}-drawer-content-wrapper`,
                                style: this.contentStyle
                              },
                              $slots
                            )
                          : h(
                              NScrollbar,
                              Object.assign({}, this.scrollbarProps, {
                                contentStyle: this.contentStyle,
                                contentClass: `${mergedClsPrefix}-drawer-content-wrapper`,
                                theme: this.mergedTheme.peers.Scrollbar,
                                themeOverrides:
                                  this.mergedTheme.peerOverrides.Scrollbar
                              }),
                              $slots
                            )
                      ]
                    ),
                    [[vShow, this.show]]
                  )
              }
            )
          ),
          [
            [
              vShow,
              this.displayDirective === 'if' || this.displayed || this.show
            ]
          ]
        )
      : null
  }
})