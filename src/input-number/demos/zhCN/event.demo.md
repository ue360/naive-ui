# 事件

```html
<n-input-number
  v-model:value="value"
  @update:value="handleChange"
  @focus="handleFocus"
  @blur="handleBlur"
/>
```

```js
export default {
  inject: ['message'],
  data () {
    return {
      value: 0
    }
  },
  methods: {
    handleChange (v) {
      this.message.info(`update:value(${v})`)
    },
    handleBlur () {
      this.message.info('blur')
    },
    handleFocus () {
      this.message.info('focus')
    }
  }
}
```