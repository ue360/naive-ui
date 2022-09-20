'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const clear_1 = __importDefault(require('../../clear'))
const loading_1 = __importDefault(require('../../loading'))
const icon_1 = __importDefault(require('../../icon'))
const icons_1 = require('../../icons')
exports.default = (0, vue_1.defineComponent)({
  name: 'InternalSelectionSuffix',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: undefined
    },
    showClear: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClear: Function
  },
  setup(props) {
    return () => {
      const { clsPrefix } = props
      return (0, vue_1.h)(
        loading_1.default,
        {
          clsPrefix: clsPrefix,
          class: `${clsPrefix}-base-suffix`,
          strokeWidth: 24,
          scale: 0.85,
          show: props.loading
        },
        {
          default: () =>
            props.showArrow
              ? (0, vue_1.h)(
                  clear_1.default,
                  {
                    clsPrefix: clsPrefix,
                    show: props.showClear,
                    onClear: props.onClear
                  },
                  {
                    default: () =>
                      (0, vue_1.h)(
                        icon_1.default,
                        {
                          clsPrefix: clsPrefix,
                          class: `${clsPrefix}-base-suffix__arrow`
                        },
                        {
                          default: () =>
                            (0, vue_1.h)(icons_1.ChevronDownIcon, null)
                        }
                      )
                  }
                )
              : null
        }
      )
    }
  }
})