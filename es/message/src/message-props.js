export const messageProps = {
  icon: Function,
  type: {
    type: String,
    default: 'info'
  },
  content: [String, Number, Function],
  closable: Boolean,
  keepAliveOnHover: Boolean,
  onClose: Function,
  onMouseenter: Function,
  onMouseleave: Function
}