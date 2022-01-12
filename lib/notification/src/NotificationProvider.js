'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.notificationApiInjectionKey = exports.notificationProviderInjectionKey =
  void 0
/* eslint-disable @typescript-eslint/no-dynamic-delete */
const vue_1 = require('vue')
const seemly_1 = require('seemly')
const _mixins_1 = require('../../_mixins')
const _utils_1 = require('../../_utils')
const styles_1 = require('../styles')
const NotificationContainer_1 = __importDefault(
  require('./NotificationContainer')
)
const NotificationEnvironment_1 = __importDefault(
  require('./NotificationEnvironment')
)
const index_cssr_1 = __importDefault(require('./styles/index.cssr'))
exports.notificationProviderInjectionKey = Symbol('notificationProvider')
exports.notificationApiInjectionKey = Symbol('notificationApi')
const notificationProviderProps = Object.assign(
  Object.assign({}, _mixins_1.useTheme.props),
  {
    to: [String, Object],
    scrollable: {
      type: Boolean,
      default: true
    },
    max: Number,
    placement: {
      type: String,
      default: 'top-right'
    }
  }
)
exports.default = (0, vue_1.defineComponent)({
  name: 'NotificationProvider',
  props: notificationProviderProps,
  setup(props) {
    const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props)
    const notificationListRef = (0, vue_1.ref)([])
    const notificationRefs = {}
    const leavingKeySet = new Set()
    function create(options) {
      const key = (0, seemly_1.createId)()
      const destroy = () => {
        leavingKeySet.add(key)
        // If you push n + 1 message when max is n, notificationRefs[key] maybe not be set
        if (notificationRefs[key]) {
          notificationRefs[key].hide()
        }
      }
      const notificationReactive = (0, vue_1.reactive)(
        Object.assign(Object.assign({}, options), {
          key,
          destroy,
          hide: destroy,
          deactivate: destroy
        })
      )
      const { max } = props
      if (max && notificationListRef.value.length - leavingKeySet.size >= max) {
        let someoneMountedRemoved = false
        let index = 0
        for (const notification of notificationListRef.value) {
          if (!leavingKeySet.has(notification.key)) {
            if (notificationRefs[notification.key]) {
              notification.destroy()
              someoneMountedRemoved = true
            }
            break
          }
          index++
        }
        if (!someoneMountedRemoved) {
          notificationListRef.value.splice(index, 1)
        }
      }
      notificationListRef.value.push(notificationReactive)
      return notificationReactive
    }
    const apis = ['info', 'success', 'warning', 'error'].map((type) => {
      return (options) =>
        create(Object.assign(Object.assign({}, options), { type }))
    })
    function handleAfterLeave(key) {
      leavingKeySet.delete(key)
      notificationListRef.value.splice(
        notificationListRef.value.findIndex(
          (notification) => notification.key === key
        ),
        1
      )
    }
    const themeRef = (0, _mixins_1.useTheme)(
      'Notification',
      'Notification',
      index_cssr_1.default,
      styles_1.notificationLight,
      props,
      mergedClsPrefixRef
    )
    const api = {
      create,
      info: apis[0],
      success: apis[1],
      warning: apis[2],
      error: apis[3],
      open,
      destroyAll
    }
    ;(0, vue_1.provide)(exports.notificationApiInjectionKey, api)
    ;(0, vue_1.provide)(exports.notificationProviderInjectionKey, {
      mergedClsPrefixRef,
      mergedThemeRef: themeRef
    })
    // deprecated
    function open(options) {
      return create(options)
    }
    function destroyAll() {
      Object.values(notificationListRef.value).forEach((notification) => {
        notification.hide()
      })
    }
    return Object.assign(
      {
        mergedClsPrefix: mergedClsPrefixRef,
        notificationList: notificationListRef,
        notificationRefs,
        handleAfterLeave
      },
      api
    )
  },
  render() {
    var _a
    return (0, vue_1.h)(
      vue_1.Fragment,
      null,
      (0, vue_1.renderSlot)(this.$slots, 'default'),
      this.notificationList.length
        ? (0, vue_1.h)(
            vue_1.Teleport,
            { to: (_a = this.to) !== null && _a !== void 0 ? _a : 'body' },
            (0, vue_1.h)(
              NotificationContainer_1.default,
              { scrollable: this.scrollable, placement: this.placement },
              {
                default: () => {
                  return this.notificationList.map((notification) => {
                    return (0, vue_1.h)(
                      NotificationEnvironment_1.default,
                      Object.assign(
                        {
                          ref: (inst) => {
                            const refKey = notification.key
                            if (inst === null) {
                              delete this.notificationRefs[refKey]
                            } else this.notificationRefs[refKey] = inst
                          }
                        },
                        (0, _utils_1.omit)(notification, [
                          'destroy',
                          'hide',
                          'deactivate'
                        ]),
                        {
                          internalKey: notification.key,
                          onInternalAfterLeave: this.handleAfterLeave
                        }
                      )
                    )
                  })
                }
              }
            )
          )
        : null
    )
  }
})
