import _ from "lodash"

//TODO возможно стоить ограничиться полем toId => нужно упростить логику

export const computeLayout = (graph) => {
  const { edges, nodes } = graph
  const from = _.map(edges, _.property("fromId")) //получаем массив со всеми значениями fromId
  const to = _.map(edges, _.property("toId")) //аналогично с toId

  const both = Array.from(new Set(from.filter((e) => to.includes(e))))       //получаем 3 массива, в которых 
  const outgoing = Array.from(new Set(from.filter((e) => !to.includes(e))))  //будут храниться айди нод 
  const incoming = Array.from(new Set(to.filter((e) => !from.includes(e))))  //каждый массив для отдельного столбца
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
          if (edge.fromId == node.id) {         //возвращаем объект с новыми свойствами (тип связи и направление)
            return edge.toId
          } else {
            return ""
          }
        })
        .filter((id) => (id ? id : null)),
    })),
  }
  return newGraph
}
