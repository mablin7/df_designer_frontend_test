import { ArcherElement } from "react-archer"
import { stylePicker } from "../utils/stylePicker"
import { relationsMaker } from "../utils/relationsMaker"

const GraphNode = ({ node }) => {
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
}

export default GraphNode
