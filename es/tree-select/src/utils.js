export function treeOption2SelectOption(tmNode, labelField) {
  const { rawNode } = tmNode
  return Object.assign(Object.assign({}, rawNode), {
    label: rawNode[labelField],
    value: tmNode.key
  })
}
export function treeOption2SelectOptionWithPath(
  tmNode,
  path,
  separator,
  labelField
) {
  const { rawNode } = tmNode
  return Object.assign(Object.assign({}, rawNode), {
    value: tmNode.key,
    label: path.map((v) => v.rawNode[labelField]).join(separator)
  })
}
export function filterTree(tree, filter, pattern, keyField) {
  const visitedTailKeys = new Set()
  const visitedNonTailKeys = new Set()
  const highlightKeySet = new Set()
  const expandedKeys = []
  const filteredTree = []
  const path = []
  function visit(t) {
    t.forEach((n) => {
      path.push(n)
      if (filter(pattern, n)) {
        visitedTailKeys.add(n[keyField])
        highlightKeySet.add(n[keyField])
        for (let i = path.length - 2; i >= 0; --i) {
          const key = path[i][keyField]
          if (!visitedNonTailKeys.has(key)) {
            visitedNonTailKeys.add(key)
            if (visitedTailKeys.has(key)) {
              visitedTailKeys.delete(key)
            }
          } else {
            break
          }
        }
      }
      if (n.children) {
        visit(n.children)
      }
      path.pop()
    })
  }
  visit(tree)
  function build(t, sibs) {
    t.forEach((n) => {
      const key = n[keyField]
      const isVisitedTail = visitedTailKeys.has(key)
      const isVisitedNonTail = visitedNonTailKeys.has(key)
      if (!isVisitedTail && !isVisitedNonTail) return
      const { children } = n
      if (children) {
        if (isVisitedTail) {
          // If it is visited path tail, use origin node
          sibs.push(n)
        } else {
          // It it is not visited path tail, use cloned node
          expandedKeys.push(key)
          const clonedNode = Object.assign(Object.assign({}, n), {
            children: []
          })
          sibs.push(clonedNode)
          build(children, clonedNode.children)
        }
      } else {
        sibs.push(n)
      }
    })
  }
  build(tree, filteredTree)
  return {
    filteredTree,
    highlightKeySet,
    expandedKeys
  }
}