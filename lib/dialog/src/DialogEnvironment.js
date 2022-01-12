'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          }
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.exposedDialogEnvProps = void 0
// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
const vue_1 = require('vue')
const Modal_1 = __importDefault(require('../../modal/src/Modal'))
const _utils_1 = require('../../_utils')
const Dialog_1 = __importStar(require('./Dialog'))
exports.exposedDialogEnvProps = Object.assign(
  Object.assign({}, Dialog_1.dialogProps),
  {
    internalStyle: [String, Object],
    maskClosable: {
      type: Boolean,
      default: true
    },
    onPositiveClick: Function,
    onNegativeClick: Function,
    onClose: Function,
    onMaskClick: Function
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'DialogEnvironment',
  props: Object.assign(Object.assign({}, exports.exposedDialogEnvProps), {
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object],
    // private
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const showRef = (0, vue_1.ref)(true)
    function handleAfterLeave() {
      props.onInternalAfterLeave(props.internalKey)
    }
    function handlePositiveClick(e) {
      const { onPositiveClick } = props
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleNegativeClick(e) {
      const { onNegativeClick } = props
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleCloseClick() {
      const { onClose } = props
      if (onClose) {
        void Promise.resolve(onClose()).then((result) => {
          if (result === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    function handleMaskClick(e) {
      const { onMaskClick, maskClosable } = props
      if (onMaskClick) {
        onMaskClick(e)
        maskClosable && hide()
      }
    }
    function hide() {
      showRef.value = false
    }
    function handleUpdateShow(value) {
      showRef.value = value
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick
    }
  },
  render() {
    const {
      handlePositiveClick,
      handleUpdateShow,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleMaskClick,
      to,
      maskClosable,
      show
    } = this
    return (0, vue_1.h)(
      Modal_1.default,
      {
        show: show,
        onUpdateShow: handleUpdateShow,
        onMaskClick: handleMaskClick,
        appear: true,
        dialog: true,
        to: to,
        maskClosable: maskClosable,
        onAfterLeave: handleAfterLeave
      },
      {
        default: () =>
          (0, vue_1.h)(
            Dialog_1.default,
            Object.assign(
              {},
              (0, _utils_1.keep)(this.$props, Dialog_1.dialogPropKeys),
              {
                style: this.internalStyle,
                onClose: handleCloseClick,
                onNegativeClick: handleNegativeClick,
                onPositiveClick: handlePositiveClick
              }
            )
          )
      }
    )
  }
})
