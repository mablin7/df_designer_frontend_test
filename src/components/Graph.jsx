import { stylePicker } from "../utils/stylePicker"
import { ArcherContainer, ArcherElement } from "react-archer"
import { relationsMaker } from "../utils/relationsMaker"

const Graph = ({ graph }) => {
  const graphs = graph.nodes
    ? graph.nodes.map((node) => {
        return (
          <ArcherElement
            key={`🙈${Math.random()}🙈`}
            id={node.id}
            relations={relationsMaker(node.toId)}
          >
            <div
              className="graph"
              key={node.id}
              style={{ gridColumnStart: `${stylePicker(node.connection)}` }}
              id={node.id}
            >
              {node.name}({node.id})
            </div>
          </ArcherElement>
        )
      })
    : ""
  return (
    <ArcherContainer strokeColor="blue" strokeWidth="5">
      <ul>{graphs}</ul>
    </ArcherContainer>
  )
}

export default Graph
