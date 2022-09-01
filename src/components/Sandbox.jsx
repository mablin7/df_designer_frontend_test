import { ArcherContainer, ArcherElement } from "react-archer"
const relations = [
  {
    targetId: "element3",
    targetAnchor: "left",
    sourceAnchor: "right",
  },
]
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
}
const boxStyle = { padding: "10px", border: "1px solid black" }

const Sandbox = () => {
  return (
    <div style={{ height: "500px", margin: "50px" }}>
      <ArcherContainer strokeColor="red" strokeWidth="5">
        <div style={rowStyle}>
          <ArcherElement id="element2" relations={relations}>
            <div style={boxStyle}>Element 2</div>
          </ArcherElement>
          <ArcherElement id="element3">
            <div style={boxStyle}>Element 3</div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  )
}

export default Sandbox
