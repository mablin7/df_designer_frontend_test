import { forwardRef } from "react"
import { useDrag } from "../hooks/useDrag"
import { stylePicker } from "../utils/stylePicker"
const Node = forwardRef(({ node }, ref) => {
  //   useDrag(ref)
  console.log(ref)
  return (
    <div
      ref={ref}
      className="graph"
      key={node.id}
      style={{ gridColumnStart: `${stylePicker(node.connection)}` }}
      id={node.id}
    >
      {node.name}({node.id})
    </div>
  )
})

export default Node
