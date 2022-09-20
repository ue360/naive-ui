// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
import { h, defineComponent, ref } from 'vue'
import NModal from '../../modal/src/Modal'
import { keep } from '../../_utils'
import NDialog, { dialogProps, dialogPropKeys } from './Dialog'
export const exposedDialogEnvProps = Object.assign(
  Object.assign({}, dialogProps),
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
export default defineComponent({
  name: 'DialogEnvironment',
  props: Object.assign(Object.assign({}, exposedDialogEnvProps), {
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
    const showRef = ref(true)
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
    return h(
      NModal,
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
          h(
            NDialog,
            Object.assign({}, keep(this.$props, dialogPropKeys), {
              style: this.internalStyle,
              onClose: handleCloseClick,
              onNegativeClick: handleNegativeClick,
              onPositiveClick: handlePositiveClick
            })
          )
      }
    )
  }
})