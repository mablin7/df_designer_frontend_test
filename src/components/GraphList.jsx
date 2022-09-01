import { ArcherContainer } from "react-archer"
import GraphNode from "./GraphNode"

const GraphList = ({ graph }) => {
  const graphNodes = graph.nodes
    ? graph.nodes.map((node) => {
        return <GraphNode key={node.id} node={node} />
      })
    : ""
  return (
    <ArcherContainer strokeColor="blue" strokeWidth="5">
      <ul>{graphNodes}</ul>
    </ArcherContainer>
  )
}

export default GraphList
