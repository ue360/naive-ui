import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'Switcher',
  render() {
    return h(
      'svg',
      {
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 512 512',
        'enable-background': 'new 0 0 512 512'
      },
      h('g', null, h('polygon', { points: '192,128 320,256 192,384' }))
    )
  }
})