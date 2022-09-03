import React from "react"
import { ArcherContainer } from "react-archer"
import GraphNode from "./GraphNode"
import { forwardRef } from "react"

const GraphLayout = forwardRef(({ graph }, ref) => {
  const graphNodes = graph.nodes
    ? graph.nodes.map((node) => {
        return <GraphNode ref={ref} key={node.id} node={node} />
      })
    : []

  return (
    <ArcherContainer strokeColor="#0e6efd" strokeWidth="5">
      <ul>{graphNodes}</ul>
    </ArcherContainer>
  )
})

export default GraphLayout
