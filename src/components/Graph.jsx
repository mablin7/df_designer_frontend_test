const Graph = ({ graph }) => {
  const graphs = graph.nodes?.map((node) => {
    return (
      <div className="graph" key={node.id}>
        {node.name}:{node.id}
      </div>
    )
  })
  return <ul>{graphs}</ul>
}

export default Graph
