import {
  h,
  Transition,
  ref,
  inject,
  toRef,
  defineComponent,
  computed,
  watch,
  nextTick,
  withDirectives
} from 'vue'
import { clickoutside } from 'vdirs'
import { createTreeMate } from 'treemate'
import { NInternalSelectMenu } from '../../_internal'
import { createSelectOptions } from './utils'
import { cascaderInjectionKey } from './interface'
import { tmOptions } from '../../select/src/utils'
export default defineComponent({
  name: 'NCascaderSelectMenu',
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    show: Boolean,
    pattern: {
      type: String,
      default: ''
    },
    multiple: Boolean,
    tmNodes: {
      type: Array,
      default: () => []
    },
    filter: Function,
    labelField: {
      type: String,
      required: true
    },
    separator: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {
      isMountedRef,
      mergedValueRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      mergedCheckStrategyRef,
      syncSelectMenuPosition,
      closeMenu,
      handleSelectMenuClickOutside,
      doUncheck: cascaderDoUncheck,
      doCheck: cascaderDoCheck
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(cascaderInjectionKey)
    const menuInstRef = ref(null)
    const selectOptionsRef = computed(() => {
      return createSelectOptions(
        props.tmNodes,
        mergedCheckStrategyRef.value === 'child',
        props.labelField,
        props.separator
      )
    })
    const mergedFilterRef = computed(() => {
      const { filter } = props
      if (filter) return filter
      const { labelField } = props
      return (pattern, _, path) =>
        path.some(
          (option) => option[labelField] && ~option[labelField].indexOf(pattern)
        )
    })
    const filteredSelectOptionsRef = computed(() => {
      const { pattern } = props
      const { value: mergedFilter } = mergedFilterRef
      return (
        pattern
          ? selectOptionsRef.value.filter((option) => {
              return mergedFilter(pattern, option.rawNode, option.path)
            })
          : selectOptionsRef.value
      ).map((option) => ({
        value: option.value,
        label: option.label
      }))
    })
    const selectTreeMateRef = computed(() => {
      return createTreeMate(filteredSelectOptionsRef.value, tmOptions)
    })
    watch(toRef(props, 'value'), () => {
      void nextTick(() => {
        syncSelectMenuPosition()
      })
    })
    watch(filteredSelectOptionsRef, () => {
      void nextTick(() => {
        syncSelectMenuPosition()
      })
    })
    function handleToggle(tmNode) {
      doCheck(tmNode)
    }
    // We don't care what type the tmNode is, we only care about its key
    function doCheck(tmNode) {
      if (props.multiple) {
        const { value: mergedValue } = mergedValueRef
        if (Array.isArray(mergedValue)) {
          if (!mergedValue.includes(tmNode.key)) {
            cascaderDoCheck(tmNode.key)
          } else {
            cascaderDoUncheck(tmNode.key)
          }
        } else if (mergedValue === null) {
          cascaderDoCheck(tmNode.key)
        }
      } else {
        cascaderDoCheck(tmNode.key)
        // currently the select menu is set to focusable
        // however just leave it here
        closeMenu(true)
      }
    }
    function prev() {
      var _a
      ;(_a = menuInstRef.value) === null || _a === void 0 ? void 0 : _a.prev()
    }
    function next() {
      var _a
      ;(_a = menuInstRef.value) === null || _a === void 0 ? void 0 : _a.next()
    }
    function enter() {
      var _a
      if (menuInstRef) {
        const pendingOptionTmNode =
          (_a = menuInstRef.value) === null || _a === void 0
            ? void 0
            : _a.getPendingTmNode()
        if (pendingOptionTmNode) {
          doCheck(pendingOptionTmNode)
        }
        return true
      }
      return false
    }
    function handleClickOutside(e) {
      handleSelectMenuClickOutside(e)
    }
    const exposedRef = {
      prev,
      next,
      enter
    }
    return Object.assign(
      {
        isMounted: isMountedRef,
        mergedTheme: mergedThemeRef,
        mergedClsPrefix: mergedClsPrefixRef,
        menuInstRef,
        selectTreeMate: selectTreeMateRef,
        handleToggle,
        handleClickOutside
      },
      exposedRef
    )
  },
  render() {
    const { mergedClsPrefix, isMounted, mergedTheme } = this
    return h(
      Transition,
      { name: 'fade-in-scale-up-transition', appear: isMounted },
      {
        default: () =>
          this.show
            ? withDirectives(
                h(NInternalSelectMenu, {
                  ref: 'menuInstRef',
                  clsPrefix: mergedClsPrefix,
                  class: `${mergedClsPrefix}-cascader-menu`,
                  autoPending: true,
                  themeOverrides: mergedTheme.peerOverrides.InternalSelectMenu,
                  theme: mergedTheme.peers.InternalSelectMenu,
                  treeMate: this.selectTreeMate,
                  multiple: this.multiple,
                  value: this.value,
                  onToggle: this.handleToggle
                }),
                [[clickoutside, this.handleClickOutside]]
              )
            : null
      }
    )
  }
})