export const computeLayout = (graph) => {
  const { edges, nodes } = graph

  const from = edges.map((item) => item.fromId)
  const to = edges.map((item) => item.toId)

  const both = Array.from(new Set(from.filter((e) => to.includes(e)))) // массив который содержит id нод, которые имеют оба вида связей
  const outgoing = Array.from(new Set(from.filter((e) => !to.includes(e)))) // массив который содержит id нод, которые имеют только исходящие связи
  const incoming = Array.from(new Set(to.filter((e) => !from.includes(e)))) //массив который содержит id нод, которые имеют только входящие связи

  const getNodeTypeByNodeId = (idx) => {
    return both.includes(idx)
      ? "both"
      : outgoing.includes(idx)
      ? "outgoing"
      : incoming.includes(idx)
      ? "incoming"
      : "none"
  }

  return {
    nodes: nodes.map((node, idx) => ({
      ...node,
      connection: getNodeTypeByNodeId(idx),
      toId: edges
        .map((edge) => (edge.fromId == node.id ? edge.toId : ""))
        .filter((id) => (id ? id : null)),
    })),
  }
}
