import { h } from 'vue'
export default h(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 36 36' },
  h('ellipse', { fill: '#292F33', cx: '18', cy: '26', rx: '18', ry: '10' }),
  h('ellipse', { fill: '#66757F', cx: '18', cy: '24', rx: '18', ry: '10' }),
  h('path', {
    fill: '#E1E8ED',
    d: 'M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z'
  }),
  h('path', {
    fill: '#77B255',
    d: 'M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z'
  }),
  h('ellipse', { fill: '#A6D388', cx: '18', cy: '13', rx: '15', ry: '7' }),
  h('path', {
    d: 'M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z',
    fill: '#5C913B'
  })
)
