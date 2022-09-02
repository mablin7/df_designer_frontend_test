import React from "react"
import { ArcherContainer } from "react-archer"
import GraphNode from "./GraphNode"
import { forwardRef } from "react"

const GraphList = forwardRef(({ graph }, ref) => {
  const graphNodes = graph.nodes
    ? graph.nodes.map((node) => {
        return <GraphNode ref={ref} key={node.id} node={node} />
      })
    : ""
  return (
    <ArcherContainer strokeColor="blue" strokeWidth="5">
      <ul>{graphNodes}</ul>
    </ArcherContainer>
  )
})

export default GraphList
