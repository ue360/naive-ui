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
Object.defineProperty(exports, '__esModule', { value: true })
exports.notificationEnvOptions = void 0
const vue_1 = require('vue')
const _utils_1 = require('../../_utils')
const Notification_1 = __importStar(require('./Notification'))
exports.notificationEnvOptions = Object.assign(
  Object.assign({}, Notification_1.notificationProps),
  {
    duration: Number,
    onClose: Function,
    onLeave: Function,
    onAfterEnter: Function,
    onAfterLeave: Function,
    /** @deprecated */
    onHide: Function,
    /** @deprecated */
    onAfterShow: Function,
    /** @deprecated */
    onAfterHide: Function
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'NotificationEnvironment',
  props: Object.assign(Object.assign({}, exports.notificationEnvOptions), {
    // private
    internalKey: {
      type: String,
      required: true
    },
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const showRef = (0, vue_1.ref)(true)
    let timerId = null
    function hide() {
      showRef.value = false
      if (timerId) {
        window.clearTimeout(timerId)
      }
    }
    function handleBeforeEnter(el) {
      void (0, vue_1.nextTick)(() => {
        el.style.height = `${el.offsetHeight}px`
        el.style.maxHeight = '0'
        el.style.transition = 'none'
        void el.offsetHeight
        el.style.transition = ''
        el.style.maxHeight = el.style.height
      })
    }
    function handleAfterEnter(el) {
      el.style.height = ''
      el.style.maxHeight = ''
      const { onAfterEnter, onAfterShow } = props
      if (onAfterEnter) onAfterEnter()
      // deprecated
      if (onAfterShow) onAfterShow()
    }
    function handleBeforeLeave(el) {
      el.style.maxHeight = `${el.offsetHeight}px`
      el.style.height = `${el.offsetHeight}px`
      void el.offsetHeight
    }
    function handleLeave(el) {
      const { onHide } = props
      if (onHide) onHide()
      el.style.maxHeight = '0'
      void el.offsetHeight
    }
    function handleAfterLeave() {
      const { onAfterLeave, onInternalAfterLeave, onAfterHide, internalKey } =
        props
      if (onAfterLeave) onAfterLeave()
      onInternalAfterLeave(internalKey)
      // deprecated
      if (onAfterHide) onAfterHide()
    }
    function handleClose() {
      const { onClose } = props
      if (onClose) {
        void Promise.resolve(onClose()).then((feedback) => {
          if (feedback === false) return
          hide()
        })
      } else {
        hide()
      }
    }
    ;(0, vue_1.onMounted)(() => {
      if (props.duration) {
        timerId = window.setTimeout(hide, props.duration)
      }
    })
    return {
      show: showRef,
      hide,
      handleClose,
      handleAfterLeave,
      handleLeave,
      handleBeforeLeave,
      handleAfterEnter,
      handleBeforeEnter
    }
  },
  render() {
    return (0, vue_1.h)(
      vue_1.Transition,
      {
        name: 'notification-transition',
        appear: true,
        // convert to any since Element is not compitable with HTMLElement
        onBeforeEnter: this.handleBeforeEnter,
        onAfterEnter: this.handleAfterEnter,
        onBeforeLeave: this.handleBeforeLeave,
        onLeave: this.handleLeave,
        onAfterLeave: this.handleAfterLeave
      },
      {
        default: () => {
          return this.show
            ? (0, vue_1.h)(
                Notification_1.default,
                Object.assign(
                  {},
                  (0, _utils_1.keep)(
                    this.$props,
                    Notification_1.notificationPropKeys
                  ),
                  { onClose: this.handleClose }
                )
              )
            : null
        }
      }
    )
  }
})
