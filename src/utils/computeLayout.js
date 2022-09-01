import _ from "lodash"

export const computeLayout = (graph) => {
  const { edges, nodes } = graph
  const from = _.map(edges, _.property("fromId"))
  const to = _.map(edges, _.property("toId"))
  const both = Array.from(new Set(from.filter((e) => to.includes(e))))
  const outgoing = Array.from(new Set(from.filter((e) => !to.includes(e))))
  const incoming = Array.from(new Set(to.filter((e) => !from.includes(e))))
  const newGraph = {
    nodes: nodes.map((node, idx) => ({
      ...node,
      connection: both.includes(idx)
        ? "both"
        : outgoing.includes(idx)
        ? "outgoing"
        : incoming.includes(idx)
        ? "incoming"
        : "none",
      toId: edges
        .map((edge) => {
          if (edge.fromId == node.id) {
            console.log(edge.toId)
            return edge.toId
          } else {
            return ""
          }
        })
        .filter((id) => (id ? id : null)),
    })),
  }
  console.log(newGraph)
  return newGraph
}
