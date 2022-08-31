import { stylePicker } from "../utils/stylePicker"
import { ArcherContainer, ArcherElement } from "react-archer"

const Graph = ({ graph }) => {
  console.log(Object.values(graph))
  const graphs = graph.nodes
    ? graph.nodes.map((node) => {
        return (
          <div
            className="graph"
            key={node.id}
            style={{ gridColumnStart: `${stylePicker(node.connection)}` }}
            id={node.id}
          >
            {node.name}({node.id})
          </div>
        )
      })
    : ""
  return <ul>{graphs}</ul>
}

export default Graph
