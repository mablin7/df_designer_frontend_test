import { ArcherElement } from "react-archer"
import { relationsMaker } from "../utils/relationsMaker"
import { forwardRef } from "react"

import Node from "./Node"
const GraphNode = forwardRef(({ node }, ref) => {
  return (
    <ArcherElement
      key={`🙈${Math.random()}🙈`}
      id={node.id}
      relations={relationsMaker(node.toId)}
    >
      <Node ref={ref} node={node}></Node>
    </ArcherElement>
  )
})

export default GraphNode
