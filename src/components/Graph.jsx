import { stylePicker } from "../utils/stylePicker"

const Graph = ({ graph }) => {
  const graphs = graph.nodes?.map((node) => {
    return (
      <div
        className="graph"
        key={node.id}
        style={{ gridColumnStart: `${stylePicker(node.connection)}` }}
      >
        {node.name}:{node.id}:{node.connection}
      </div>
    )
  })
  return <ul>{graphs}</ul>
}

export default Graph
