'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getPathLabel =
  exports.createSelectOptions =
  exports.traverseWithCallback =
  exports.getRawNodePath =
    void 0
function getRawNodePath(tmNodes) {
  if (!tmNodes) return null
  return tmNodes.map((tmNode) => tmNode.rawNode)
}
exports.getRawNodePath = getRawNodePath
function traverseWithCallback(options, beforeCallback, afterCallback) {
  if (Array.isArray(options)) {
    for (const option of options) {
      if (beforeCallback) beforeCallback(option)
      if (option.children) {
        traverseWithCallback(option.children, beforeCallback, afterCallback)
      }
      if (afterCallback) afterCallback(option)
    }
  }
}
exports.traverseWithCallback = traverseWithCallback
function createSelectOptions(
  tmNodes,
  checkStrategyIsChild,
  labelField,
  separator
) {
  const selectOptions = []
  const path = []
  traverseWithCallback(
    tmNodes,
    (tmNode) => {
      if (tmNode.isLeaf || !checkStrategyIsChild) {
        if (tmNode.disabled) return
        const { rawNode } = tmNode
        path.push(rawNode)
        selectOptions.push({
          label: path
            .map((rawNodeInPath) => rawNodeInPath[labelField])
            .join(separator),
          value: tmNode.key,
          rawNode: tmNode.rawNode,
          path: Array.from(path)
        })
      }
    },
    () => {
      path.pop()
    }
  )
  return selectOptions
}
exports.createSelectOptions = createSelectOptions
function getPathLabel(node, separator, labelField) {
  const path = []
  while (node) {
    path.push(node.rawNode[labelField])
    node = node.parent
  }
  return path.reverse().join(separator)
}
exports.getPathLabel = getPathLabel