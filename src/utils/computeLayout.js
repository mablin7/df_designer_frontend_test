export const computeLayout = (graph) => {
  const { edges, nodes } = graph
  const from = edges.map((item) => item.fromId)
  const to = edges.map((item) => item.toId)
  const both = Array.from(new Set(from.filter((e) => to.includes(e)))).sort() // массив который содержит id нод, которые имеют оба вида связей
  const outgoing = Array.from(
    new Set(from.filter((e) => !to.includes(e)))
  ).sort() // массив который содержит id нод, которые имеют только исходящие связи
  const incoming = Array.from(
    new Set(to.filter((e) => !from.includes(e)))
  ).sort() //массив который содержит id нод, которые имеют только входящие связи

  const getNodeTypeByNodeId = (idx) => {
    return both.includes(idx)
      ? "both"
      : outgoing.includes(idx)
      ? "outgoing"
      : incoming.includes(idx)
      ? "incoming"
      : "none"
  }

  const edgesBetweenColumns = (column, edges) => {
    return edges
      .map((edge) => {
        if (column.includes(edge.fromId)) {
          return edge
        }
      })
      .filter((edge) => edge)
  }

  const edgesWithGridCoords = (edges, column1, column2) => {
    console.log(column1, column2)
    const gridCoords = edges.map((edge) => {
      for (let i = 0; i < column1.length; i++) {
        if (edge.fromId === column1[i]) {
          return [column1.indexOf(column1[i])]
        }
      }
    })
    const endCoord = edges.map((edge) => {
      for (let i = 0; i < column2.length; i++) {
        if (edge.toId === column2[i]) {
          return [column2.indexOf(column2[i])]
        }
      }
    })

    for (let i = 0; i < gridCoords.length; i++) {
      gridCoords[i].push(...endCoord[i])
    }
    console.log(gridCoords)
    return gridCoords
  }
  const crossCounter = (array) => {
    let counter = 0
    let arr = array.slice()
    while (arr.length) {
      const [from, to] = arr[0]
      for (let i = 1; i < arr.length; i++) {
        let [f, t] = arr[i]
        if (from < f && to > t) {
          counter++
        }
      }
      arr.shift()
    }
    console.log(counter)
    return counter
  }

  const permutator = (arr) => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutator([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
            item,
            ...val
          ])
        ),
      []
    )
  }
  const untangleColumn = (column, column2) => {
    const edgesFromOneColumn = edgesBetweenColumns(column, edges)
    const edgesLayouts = []
    const layouts = permutator(column)
    layouts.forEach((layout) => {
      edgesLayouts.push(
        edgesWithGridCoords(edgesFromOneColumn, layout, column2).sort()
      )
    })
    const score = []
    edgesLayouts.forEach((e) => {
      score.push(crossCounter(e))
    })
    console.log(score)
    const bestScore = Math.min(...score)
    console.log(bestScore)
    const finalScore = score.indexOf(bestScore) === 0 ? 1 : 1
    console.log(finalScore)
    const finalLayout = layouts[finalScore]
    return finalLayout
  }

  return {
    nodes: nodes.map((node, idx) => ({
      ...node,
      connection: getNodeTypeByNodeId(idx),
      toId: edges
        .map((edge) => (edge.fromId == node.id ? edge.toId : ""))
        .filter((id) => id)
    })),
    // untangled1: untangleColumn(outgoing, both),
    untangled2: untangleColumn(both, incoming)
  }
}
