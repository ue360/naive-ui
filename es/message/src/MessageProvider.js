import {
  Fragment,
  ref,
  h,
  reactive,
  Teleport,
  defineComponent,
  provide,
  renderSlot
} from 'vue'
import { createId } from 'seemly'
import { omit } from '../../_utils'
import { useConfig, useTheme } from '../../_mixins'
import MessageEnvironment from './MessageEnvironment'
export const messageApiInjectionKey = Symbol('messageApi')
const messageProviderProps = Object.assign(Object.assign({}, useTheme.props), {
  to: [String, Object],
  duration: {
    type: Number,
    default: 3000
  },
  keepAliveOnHover: Boolean,
  max: Number,
  placement: {
    type: String,
    default: 'top'
  },
  closable: Boolean,
  containerStyle: [String, Object]
})
export const messageProviderInjectionKey = Symbol('messageProvider')
export default defineComponent({
  name: 'MessageProvider',
  props: messageProviderProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const messageListRef = ref([])
    const messageRefs = ref({})
    const api = {
      info(content, options) {
        return create(
          content,
          Object.assign(Object.assign({}, options), { type: 'info' })
        )
      },
      success(content, options) {
        return create(
          content,
          Object.assign(Object.assign({}, options), { type: 'success' })
        )
      },
      warning(content, options) {
        return create(
          content,
          Object.assign(Object.assign({}, options), { type: 'warning' })
        )
      },
      error(content, options) {
        return create(
          content,
          Object.assign(Object.assign({}, options), { type: 'error' })
        )
      },
      loading(content, options) {
        return create(
          content,
          Object.assign(Object.assign({}, options), { type: 'loading' })
        )
      },
      destroyAll
    }
    provide(messageProviderInjectionKey, {
      props,
      mergedClsPrefixRef
    })
    provide(messageApiInjectionKey, api)
    function create(content, options = {}) {
      const key = createId()
      const messageReactive = reactive(
        Object.assign(Object.assign({}, options), {
          content,
          key,
          destroy: () => {
            messageRefs.value[key].hide()
          }
        })
      )
      const { max } = props
      if (max && messageListRef.value.length >= max) {
        messageListRef.value.shift()
      }
      messageListRef.value.push(messageReactive)
      return messageReactive
    }
    function handleAfterLeave(key) {
      messageListRef.value.splice(
        messageListRef.value.findIndex((message) => message.key === key),
        1
      )
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete messageRefs.value[key]
    }
    function destroyAll() {
      Object.values(messageRefs.value).forEach((messageInstRef) => {
        messageInstRef.hide()
      })
    }
    return Object.assign(
      {
        mergedClsPrefix: mergedClsPrefixRef,
        messageRefs,
        messageList: messageListRef,
        handleAfterLeave
      },
      api
    )
  },
  render() {
    var _a
    return h(
      Fragment,
      null,
      renderSlot(this.$slots, 'default'),
      this.messageList.length
        ? h(
            Teleport,
            { to: (_a = this.to) !== null && _a !== void 0 ? _a : 'body' },
            h(
              'div',
              {
                class: [
                  `${this.mergedClsPrefix}-message-container`,
                  `${this.mergedClsPrefix}-message-container--${this.placement}`
                ],
                key: 'message-container',
                style: this.containerStyle
              },
              this.messageList.map((message) => {
                return h(
                  MessageEnvironment,
                  Object.assign(
                    {
                      ref: (inst) => {
                        if (inst) {
                          this.messageRefs[message.key] = inst
                        }
                      },
                      internalKey: message.key,
                      onInternalAfterLeave: this.handleAfterLeave
                    },
                    omit(message, ['destroy'], undefined),
                    {
                      duration:
                        message.duration === undefined
                          ? this.duration
                          : message.duration,
                      keepAliveOnHover:
                        message.keepAliveOnHover === undefined
                          ? this.keepAliveOnHover
                          : message.keepAliveOnHover,
                      closable:
                        message.closable === undefined
                          ? this.closable
                          : message.closable
                    }
                  )
                )
              })
            )
          )
        : null
    )
  }
})
